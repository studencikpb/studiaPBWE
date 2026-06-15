const OWNER = 'studencikpb';
const REPO = 'studiaPBWE';
const BRANCHES = ['main', 'gh-pages'];
const ALLOWED_ORIGINS = [
  'https://studiawepb.pl',
  'http://studiawepb.pl',
  'https://www.studiawepb.pl',
  'https://studencikpb.github.io',
  'http://localhost:8771',
  'null'
];

function corsHeaders(origin) {
  const allowOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : 'https://studiawepb.pl';
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'Access-Control-Max-Age': '86400'
  };
}

function json(data, status = 200, origin = '') {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...corsHeaders(origin)
    }
  });
}

function slugify(value) {
  const map = { ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ż: 'z', ź: 'z' };
  return String(value).toLowerCase()
    .replace(/[ąćęłńóśżź]/g, (char) => map[char] || char)
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'plik';
}

function encodePath(path) {
  return path.split('/').map(encodeURIComponent).join('/');
}

function toBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }
  return btoa(binary);
}

function encodeJson(data) {
  return toBase64(new TextEncoder().encode(JSON.stringify(data, null, 2) + '\n').buffer);
}

function decodeJson(content) {
  const clean = content.replace(/\n/g, '');
  const bytes = Uint8Array.from(atob(clean), (char) => char.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

async function github(path, env, options = {}) {
  const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}${path}`, {
    ...options,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      'User-Agent': 'studiawepb-cloudflare-worker',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    const text = await response.text();
    const error = new Error(`GitHub ${response.status}: ${text.slice(0, 300)}`);
    error.status = response.status;
    throw error;
  }

  return response.json();
}

async function getContent(path, branch, env) {
  try {
    return await github(`/contents/${encodePath(path)}?ref=${encodeURIComponent(branch)}`, env);
  } catch (error) {
    if (error.status === 404) return null;
    throw error;
  }
}

async function putContent(path, branch, env, content, message, sha) {
  return github(`/contents/${encodePath(path)}`, env, {
    method: 'PUT',
    body: JSON.stringify({ message, content, branch, sha })
  });
}

async function loadSiteData(branch, env) {
  const file = await getContent('site-data.json', branch, env);
  if (!file) return { data: { materials: {}, gallery: [] }, sha: null };
  return { data: decodeJson(file.content), sha: file.sha };
}

async function updateBranch(branch, env, payload) {
  const existingUpload = await getContent(payload.filePath, branch, env);
  await putContent(payload.filePath, branch, env, payload.fileBase64, payload.message, existingUpload?.sha);

  const { data, sha } = await loadSiteData(branch, env);
  data.materials = data.materials && typeof data.materials === 'object' ? data.materials : {};
  data.gallery = Array.isArray(data.gallery) ? data.gallery : [];

  if (payload.mode === 'gallery') {
    data.gallery.push({
      title: payload.title,
      description: payload.description || 'Zdjęcie dodane przez panel materiałów.',
      href: payload.filePath
    });
  } else {
    if (!Array.isArray(data.materials[payload.subject])) data.materials[payload.subject] = [];
    data.materials[payload.subject].push([
      payload.title,
      payload.description || 'Materiał dodany przez panel.',
      payload.filePath
    ]);
  }

  await putContent('site-data.json', branch, env, encodeJson(data), payload.message, sha);
}

async function handleVisits(request, env, origin) {
  const key = 'homepage';
  const current = Number(await env.visits.get(key) || '0');

  if (request.method === 'POST') {
    const next = current + 1;
    await env.visits.put(key, String(next));
    return json({ count: next }, 200, origin);
  }

  return json({ count: current }, 200, origin);
}

async function handleUpload(request, env, origin) {
  if (!env.GITHUB_TOKEN || !env.ADMIN_PASSWORD) {
    return json({ error: 'Brak sekretów GITHUB_TOKEN albo ADMIN_PASSWORD w Cloudflare Worker.' }, 500, origin);
  }

  const contentType = request.headers.get('Content-Type') || '';
  if (!contentType.includes('multipart/form-data')) {
    return json({ error: 'Wyślij formularz multipart/form-data z plikiem.' }, 400, origin);
  }

  let form;
  try {
    form = await request.formData();
  } catch (error) {
    return json({ error: 'Nie udało się odczytać formularza.' }, 400, origin);
  }

  const password = String(form.get('password') || '');
  if (password !== env.ADMIN_PASSWORD) {
    return json({ error: 'Błędne hasło admina.' }, 401, origin);
  }

  const file = form.get('file');
  const mode = String(form.get('mode') || 'material');
  const subject = String(form.get('subject') || '');
  const title = String(form.get('title') || '').trim();
  const description = String(form.get('description') || '').trim();

  if (!file || typeof file.arrayBuffer !== 'function' || !title) {
    return json({ error: 'Brakuje pliku albo tytułu.' }, 400, origin);
  }

  if (mode !== 'gallery' && !subject) {
    return json({ error: 'Wybierz przedmiot dla materiału.' }, 400, origin);
  }

  const safeName = `${Date.now()}-${slugify(file.name || title)}`;
  const filePath = mode === 'gallery'
    ? `assets/gallery/uploads/${safeName}`
    : `materials/${subject}/uploads/${safeName}`;
  const fileBase64 = toBase64(await file.arrayBuffer());
  const payload = {
    mode,
    subject,
    title,
    description,
    filePath,
    fileBase64,
    message: mode === 'gallery' ? `Dodaj zdjęcie: ${title}` : `Dodaj materiał: ${title}`
  };

  for (const branch of BRANCHES) {
    await updateBranch(branch, env, payload);
  }

  return json({ ok: true, filePath, title }, 200, origin);
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    try {
      if (url.pathname === '/api/visits') return handleVisits(request, env, origin);
      if (url.pathname === '/api/upload' && request.method === 'POST') return handleUpload(request, env, origin);
      return json({ error: 'Nie znaleziono endpointu.' }, 404, origin);
    } catch (error) {
      return json({ error: error.message || 'Błąd backendu.' }, 500, origin);
    }
  }
};

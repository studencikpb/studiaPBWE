# Backend Cloudflare dla studiawepb.pl

Ten backend robi dwie rzeczy:

- globalny licznik wejść, który nie resetuje się po wrzuceniu zmian,
- bezpieczny upload materiałów i zdjęć bez wpisywania tokena GitHuba w publicznej stronie.

## 1. Co trzeba założyć

1. Konto Cloudflare.
2. Worker o nazwie `studiawepb-api`.
3. KV namespace np. `STUDIAWEPB_VISITS` z bindingiem `visits`.
4. Sekrety Workera:
   - `GITHUB_TOKEN` - token GitHuba z uprawnieniem do repo `studencikpb/studiaPBWE`, minimum `Contents: Read and write`.
   - `ADMIN_PASSWORD` - hasło, którym logujesz upload z `admin-upload.html`.

## 2. Pliki w repo

- `cloudflare-worker.js` - kod backendu.
- `wrangler.toml` - konfiguracja Cloudflare Workera.
- `admin-upload.html` - panel wrzucania plików.
- `site-data.json` - lista dynamicznie dodanych materiałów i zdjęć.

## 3. Co trzeba uzupełnić

W `wrangler.toml` podmień tylko wtedy, gdy deployujesz przez Wrangler CLI:

```toml
id = "UZUPELNIJ_PRAWDZIWE_ID_KV_NAMESPACE"
```

na prawdziwe ID KV namespace z Cloudflare. W panelu Cloudflare ważniejsza jest nazwa bindingu: `visits`.

W `index.html` podmień:

```js
const PBWE_API_URL = 'https://studiawepb-api.calabraaa.workers.dev';
```

na prawdziwy adres Workera.

Ten sam adres wpisujesz potem w panelu `admin-upload.html` w polu `Adres API`.

## 4. Publikacja

Po uzupełnieniu KV i sekretów Worker może działać pod adresem:

```text
https://studiawepb-api.calabraaa.workers.dev
```

albo pod własną subdomeną, np.

```text
https://api.studiawepb.pl
```

Lepsza opcja docelowa to `https://api.studiawepb.pl`, wtedy w `index.html` ustaw:

```js
const PBWE_API_URL = 'https://api.studiawepb.pl';
```

## 5. Jak używać uploadu

1. Otwórz `https://studiawepb.pl/admin-upload.html`.
2. Wpisz adres API Workera.
3. Wpisz `ADMIN_PASSWORD`.
4. Wybierz materiał do przedmiotu albo zdjęcie do galerii.
5. Wyślij plik.

Worker sam zapisze plik na gałęzi `main` i `gh-pages`, a strona doczyta go z `site-data.json`.

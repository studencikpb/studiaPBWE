const SUBJECTS = {
  niezawodnosc: {
    title: 'Niezawodność i diagnostyka',
    teacher: 'M. Garbaruk',
    form: 'wykład zdalny, zaliczenie WE-306',
    time: 'Piątek, 16.00-17.35 - zjazdy 1,3,5,7,9',
    accent: '#005baa',
    accent2: '#28a9e0',
    bgA: '#07192f',
    bgB: '#123f6c',
    summary: 'Materiały do liczenia niezawodności struktur, dekompozycji układów i przekształcania schematów na wzory końcowe.',
    materials: [
      ['Układ z blokami A-B-C', 'Przykład liczenia struktury z gałęzią górną i dolną.', 'reliability_q_logic.html'],
      ['Dekompozycja mostka', 'Metoda R oraz Q, zwarcie i rozwarcie elementów.', 'bridge_decomposition_guide.html'],
      ['Dekompozycja tylko przez R', 'Pełne liczenie krok po kroku bez symbolu Q.', 'bridge_decomposition_R_only.html']
    ]
  },
  technika_swiatlowodowa: {
    title: 'Technika światłowodowa i fotonika 2',
    teacher: 'T. Ragiń',
    form: 'wykład zdalny oraz laboratorium, WE-216, CBD-13',
    time: 'Piątek, 16.00-17.35 oraz sobota, 9.50-13.15',
    accent: '#008b8b',
    accent2: '#6ee7f9',
    bgA: '#052f3a',
    bgB: '#0f766e',
    summary: 'Miejsce na notatki, opracowania i laboratoria z techniki światłowodowej oraz fotoniki.',
    materials: []
  },
  kompatybilnosc: {
    title: 'Kompatybilność elektromagnetyczna',
    teacher: 'R. Markowska',
    form: 'wykład zdalny oraz laboratorium, IET-1/30, WE-346',
    time: 'Piątek, 17.40-19.15 oraz sobota, 9.50-13.15',
    accent: '#7c3aed',
    accent2: '#c4b5fd',
    bgA: '#24123f',
    bgB: '#5b21b6',
    summary: 'Miejsce na materiały z EMC: zakłócenia, ekranowanie, pomiary i laboratoria.',
    materials: []
  },
  budownictwo: {
    title: 'Budownictwo telekomunikacyjne',
    teacher: 'R. Markowska',
    form: 'wykład zdalny oraz projekt, WE-101',
    time: 'Piątek, 19.20-20.55 oraz sobota, 8.00-9.35',
    accent: '#b45309',
    accent2: '#fbbf24',
    bgA: '#3a2108',
    bgB: '#92400e',
    summary: 'Miejsce na materiały projektowe i wykładowe z infrastruktury telekomunikacyjnej.',
    materials: []
  },
  sieci_swiatlowodowe: {
    title: 'Projektowanie światłowodowych sieci telekomunikacyjnych',
    teacher: 'U. Błaszczak',
    form: 'projekt, WE-217',
    time: 'Sobota, 8.00-9.35 - zjazdy 2,4,7,9,10',
    accent: '#16a34a',
    accent2: '#86efac',
    bgA: '#052e16',
    bgB: '#166534',
    summary: 'Miejsce na projekty, obliczenia i materiały do sieci światłowodowych.',
    materials: []
  },
  narzedzia: {
    title: 'Narzędzia komputerowego wspomagania projektowania sieci telekomunikacyjnych',
    teacher: 'M. Sadowski',
    form: 'wykład + pracownia, WE-101',
    time: 'Sobota, 14.20-16.45',
    accent: '#dc2626',
    accent2: '#fca5a5',
    bgA: '#3b0a0a',
    bgB: '#991b1b',
    summary: 'Miejsce na materiały z narzędzi, projektowania i dokumentacji sieci telekomunikacyjnych.',
    materials: []
  },
  bezpieczenstwo: {
    title: 'Bezpieczeństwo systemów informacyjnych',
    teacher: 'A. Zankiewicz',
    form: 'wykład, WE-306',
    time: 'Sobota, 16.50-18.25',
    accent: '#334155',
    accent2: '#94a3b8',
    bgA: '#020617',
    bgB: '#334155',
    summary: 'Miejsce na materiały z bezpieczeństwa informacji, zagrożeń, polityk i zabezpieczeń.',
    materials: []
  },
  zarzadzanie: {
    title: 'Zarządzanie sieciami i usługami w systemach komunikacji elektronicznej',
    teacher: 'A. Zankiewicz',
    form: 'wykład, WE-306',
    time: 'Sobota, 18.30-20.05',
    accent: '#0891b2',
    accent2: '#67e8f9',
    bgA: '#083344',
    bgB: '#155e75',
    summary: 'Miejsce na materiały z zarządzania usługami, sieciami i systemami komunikacji elektronicznej.',
    materials: []
  },
  teleinformacyjne: {
    title: 'Projektowanie sieci teleinformacyjnych',
    teacher: 'G. Gilewska',
    form: 'projekt, WE-105',
    time: 'Niedziela, 8.00-9.35',
    accent: '#be185d',
    accent2: '#f9a8d4',
    bgA: '#3b0a24',
    bgB: '#9d174d',
    summary: 'Miejsce na projekty i materiały z projektowania sieci teleinformacyjnych.',
    materials: []
  },
  uklady_cyfrowe: {
    title: 'Programowalne układy cyfrowe 2',
    teacher: 'W. Wojtkowski',
    form: 'laboratorium, WE-244',
    time: 'Niedziela, 9.50-13.15',
    accent: '#4f46e5',
    accent2: '#a5b4fc',
    bgA: '#111052',
    bgB: '#3730a3',
    summary: 'Miejsce na laboratoria, kody, notatki i projekty z programowalnych układów cyfrowych.',
    materials: []
  }
};

function pageTemplate(subject) {
  const materials = subject.materials.length
    ? subject.materials.map(([title, description, href]) => `
        <article class="material">
          <h3>${title}</h3>
          <p>${description}</p>
          <a href="${href}">Otwórz materiał</a>
        </article>
      `).join('')
    : `
        <article class="material">
          <h3>Materiały w przygotowaniu</h3>
          <p>To miejsce jest gotowe na kolejne pliki HTML, PDF, notatki albo opracowania.</p>
          <span class="placeholder">Dodaj następny materiał</span>
        </article>
      `;

  return `
    <div class="progress" aria-hidden="true"><span id="progressBar"></span></div>
    <main class="shell">
      <nav class="topbar">
        <img src="assets/logo-we-pb.svg" alt="Wydział Elektryczny Politechniki Białostockiej">
        <a class="home-link" href="index.html">Strona główna</a>
      </nav>

      <section class="hero">
        <div class="hero-card float-in">
          <p class="eyebrow">Przedmiot · materiały</p>
          <h1>${subject.title}</h1>
          <p class="lead">${subject.summary}</p>
          <div class="actions">
            <a class="button" href="#materialy">Materiały</a>
            <a class="button secondary" href="assets/tz2_2.pdf">Plan PDF</a>
          </div>
        </div>

        <aside class="info-card float-in">
          <h2>Informacje z planu</h2>
          <p>${subject.title}</p>
          <div class="mini-metrics">
            <div class="mini-metric"><strong>Prowadzący</strong><span>${subject.teacher}</span></div>
            <div class="mini-metric"><strong>Forma</strong><span>${subject.form}</span></div>
            <div class="mini-metric"><strong>Termin</strong><span>${subject.time}</span></div>
          </div>
        </aside>
      </section>

      <section id="materialy" class="section reveal">
        <div class="section-head">
          <div>
            <h2>Materiały</h2>
            <p>Tu znajdują się podpięte opracowania do tego przedmiotu. Kolejne pliki można dopisywać jako następne kafle.</p>
          </div>
        </div>
        <div class="materials-grid">${materials}</div>
      </section>

      <section class="section reveal">
        <div class="section-head">
          <div>
            <h2>Szczegóły zajęć</h2>
            <p>Podstawowe informacje przepisane z planu zajęć.</p>
          </div>
        </div>
        <div class="details-grid">
          <article class="detail"><h3>Prowadzący</h3><p>${subject.teacher}</p></article>
          <article class="detail"><h3>Forma i sala</h3><p>${subject.form}</p></article>
          <article class="detail"><h3>Termin</h3><p>${subject.time}</p></article>
        </div>
      </section>
    </main>
  `;
}

const key = document.body.dataset.subject;
const subject = SUBJECTS[key] || SUBJECTS.niezawodnosc;
document.documentElement.style.setProperty('--accent', subject.accent);
document.documentElement.style.setProperty('--accent-2', subject.accent2);
document.documentElement.style.setProperty('--bg-a', subject.bgA);
document.documentElement.style.setProperty('--bg-b', subject.bgB);
document.title = `${subject.title} - materiały PB WE`;
document.body.innerHTML = pageTemplate(subject);

const progressBar = document.getElementById('progressBar');
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .material, .detail').forEach((element, index) => {
  element.classList.add('reveal');
  element.style.transitionDelay = `${Math.min(index * 45, 260)}ms`;
  observer.observe(element);
});

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

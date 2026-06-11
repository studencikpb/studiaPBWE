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

const UPLOADED_MATERIALS = {
  bezpieczenstwo: [
    ['BSI 01 Wstep', 'Materiał PDF z folderu przedmiotu.', 'materials/bezpieczenstwo/BSI_01_Wstep.pdf'],
    ['BSI 02 Kryptografia', 'Materiał PDF z folderu przedmiotu.', 'materials/bezpieczenstwo/BSI_02_Kryptografia.pdf'],
    ['BSI 03 Podpisy cyfrowe', 'Materiał PDF z folderu przedmiotu.', 'materials/bezpieczenstwo/BSI_03_Podpisy_cyfrowe.pdf'],
    ['BSI 05 Wi-Fi', 'Materiał PDF z folderu przedmiotu.', 'materials/bezpieczenstwo/BSI_05_Wi-Fi.pdf'],
    ['BSI 06 Uwierzytelnianie sieciowe', 'Materiał PDF z folderu przedmiotu.', 'materials/bezpieczenstwo/BSI_06_Uwierzytelnianie _sieciowe.pdf'],
    ['BSI 07 Buffer overflow', 'Materiał PDF z folderu przedmiotu.', 'materials/bezpieczenstwo/BSI_07_Buffer_overflow.pdf'],
    ['BSI 08 Web app sec', 'Materiał PDF z folderu przedmiotu.', 'materials/bezpieczenstwo/BSI_08_Web_app_sec.pdf']
  ],
  budownictwo: [
    ['W-1a Prawa i obowiązki', 'Materiał PDF z folderu przedmiotu.', 'materials/budownictwo/W-1a_Prawa i obowiązki.pdf'],
    ['W-1b Zasady BHP', 'Materiał PDF z folderu przedmiotu.', 'materials/budownictwo/W-1b_Zasady BHP.pdf'],
    ['W-2,3 Uwarunkowania środowiskowe Kolizje', 'Materiał PDF z folderu przedmiotu.', 'materials/budownictwo/W-2,3_Uwarunkowania środowiskowe_Kolizje.pdf'],
    ['W-4 Systemy uziomowe i LPS', 'Materiał PDF z folderu przedmiotu.', 'materials/budownictwo/W-4_Systemy uziomowe i LPS.pdf'],
    ['W-5 Wyrównywanie potencjałów', 'Materiał PDF z folderu przedmiotu.', 'materials/budownictwo/W-5_Wyrównywanie potencjałów.pdf'],
    ['W-6 Zasilanie', 'Materiał PDF z folderu przedmiotu.', 'materials/budownictwo/W-6_Zasilanie.pdf'],
    ['W-7 Sieci kablowe', 'Materiał PDF z folderu przedmiotu.', 'materials/budownictwo/W-7_Sieci kablowe.pdf'],
    ['W-7a Anteny i urządzenia na dachach', 'Materiał PDF z folderu przedmiotu.', 'materials/budownictwo/W-7a_Anteny i urządzenia na dachach.pdf'],
    ['W-7b Stacje bazowe na dachach', 'Materiał PDF z folderu przedmiotu.', 'materials/budownictwo/W-7b_Stacje bazowe na dachach.pdf'],
    ['W-7c Obiekty wolnostojące', 'Materiał PDF z folderu przedmiotu.', 'materials/budownictwo/W-7c_Obiekty wolnostojące.pdf'],
    ['W-8 Budowa obiektów telekomunikacyjnych', 'Materiał PDF z folderu przedmiotu.', 'materials/budownictwo/W-8_Budowa obiektów telekomunikacyjnych.pdf'],
    ['W-9 Budynek inteligentny', 'Materiał PDF z folderu przedmiotu.', 'materials/budownictwo/W-9_Budynek inteligentny.pdf'],
    ['W-9a Telematyka transportu', 'Materiał PDF z folderu przedmiotu.', 'materials/budownictwo/W-9a_Telematyka transportu.pdf']
  ],
  kompatybilnosc: [
    ['07 - generatory udarowe część I', 'Materiał PDF z folderu przedmiotu.', 'materials/kompatybilnosc/07 - generatory udarowe część I.pdf'],
    ['08 - generatory udarowe część II', 'Materiał PDF z folderu przedmiotu.', 'materials/kompatybilnosc/08 - generatory udarowe część II.pdf'],
    ['09 - badanie tłumienia różnego rodzaju ekranów', 'Materiał PDF z folderu przedmiotu.', 'materials/kompatybilnosc/09 - badanie tłumienia różnego rodzaju ekranów.pdf'],
    ['11 - wyładowanie elektrostatyczne', 'Materiał PDF z folderu przedmiotu.', 'materials/kompatybilnosc/11 - wyładowanie elektrostatyczne.pdf'],
    ['12 - pomiar promieniowanych i przewodzonych zaburzeń elektromagnetycznych', 'Materiał PDF z folderu przedmiotu.', 'materials/kompatybilnosc/12 - pomiar promieniowanych i przewodzonych zaburzeń elektromagnetycznych.pdf'],
    ['13 - zjawiska falowe w liniach długich', 'Materiał PDF z folderu przedmiotu.', 'materials/kompatybilnosc/13 - zjawiska falowe w liniach długich.pdf'],
    ['15 - kompatybilność elektromagnetyczna odbiorników telewizyjnych', 'Materiał PDF z folderu przedmiotu.', 'materials/kompatybilnosc/15 - kompatybilność elektromagnetyczna odbiorników telewizyjnych.pdf']
  ],
  niezawodnosc: [
    ['NIESTACJ NiD 2026 cz1', 'Materiał PDF z folderu przedmiotu.', 'materials/niezawodnoscd/NIESTACJ_NiD_2026_cz1.pdf'],
    ['NIESTACJ NiD 2026 cz2', 'Materiał PDF z folderu przedmiotu.', 'materials/niezawodnoscd/NIESTACJ_NiD_2026_cz2.pdf'],
    ['NIESTACJ NiD 2026 cz3', 'Materiał PDF z folderu przedmiotu.', 'materials/niezawodnoscd/NIESTACJ_NiD_2026_cz3.pdf']
  ],
  narzedzia: [
    ['Odpowiedzi zaliczenie NWK', 'Strona HTML z odpowiedziami do zaliczenia z narzędzi komputerowego wspomagania projektowania sieci telekomunikacyjnych.', 'materials/nkwpst/odpowiedzi_zaliczenie_nwk.html'],
    ['ArCADia-SIECI TELEKOMUNIKACYJNE Przyklad 1', 'Plik APF z folderu przedmiotu.', 'materials/nkwpst/ArCADia-SIECI TELEKOMUNIKACYJNE Przyklad 1.apf'],
    ['Narzedzia CAD PS TZ 2022', 'Materiał PDF z folderu przedmiotu.', 'materials/nkwpst/Narzedzia CAD_PS TZ 2022.pdf'],
    ['Łapy - miasto', 'Plik BAK z folderu przedmiotu.', 'materials/nkwpst/projekty do arcadii/Łapy - miasto.bak'],
    ['PW Płonka Kościelna', 'Plik DWG z folderu przedmiotu.', 'materials/nkwpst/projekty do arcadii/PW Płonka Kościelna.dwg']
  ],
  sieci_swiatlowodowe: [
    ['obliczanie strat i budżetu mocy', 'Plik PPTX z folderu przedmiotu.', 'materials/projektowaniesystele/obliczanie strat i budżetu mocy.pptx'],
    ['plik roboczy', 'Plik DOCX z folderu przedmiotu.', 'materials/projektowaniesystele/plik roboczy.docx'],
    ['Projektowanie SSŚ', 'Plik PPTX z folderu przedmiotu.', 'materials/projektowaniesystele/Projektowanie SSŚ.pptx'],
    ['warunki techniczne', 'Plik PPTX z folderu przedmiotu.', 'materials/projektowaniesystele/warunki techniczne.pptx']
  ],
  technika_swiatlowodowa: [
    ['IMG 0295', 'Zdjęcie lub materiał wizualny z folderu przedmiotu.', 'materials/technika swiatlowodowa/IMG_0295.jpeg'],
    ['IMG 0296', 'Zdjęcie lub materiał wizualny z folderu przedmiotu.', 'materials/technika swiatlowodowa/IMG_0296.jpeg'],
    ['KOLEJNOŚĆ', 'Materiał PDF z folderu przedmiotu.', 'materials/technika swiatlowodowa/KOLEJNOŚĆ.pdf'],
    ['odpowiedzi test', 'Plik DOCX z folderu przedmiotu.', 'materials/technika swiatlowodowa/odpowiedzi test.docx'],
    ['odpowiedzi', 'Plik DOCX z folderu przedmiotu.', 'materials/technika swiatlowodowa/odpowiedzi.docx'],
    ['TZ2E200036 TŚiF2 1 tor światłowodowy', 'Materiał PDF z folderu przedmiotu.', 'materials/technika swiatlowodowa/TZ2E200036_TŚiF2_1_tor_światłowodowy.pdf'],
    ['TZ2E200036 TŚiF2 2 tłumienie', 'Materiał PDF z folderu przedmiotu.', 'materials/technika swiatlowodowa/TZ2E200036_TŚiF2_2_tłumienie.pdf'],
    ['TZ2E200036 TŚiF2 3 polaryzacja', 'Materiał PDF z folderu przedmiotu.', 'materials/technika swiatlowodowa/TZ2E200036_TŚiF2_3_polaryzacja.pdf'],
    ['TZ2E200036 TŚiF2 4 laser', 'Materiał PDF z folderu przedmiotu.', 'materials/technika swiatlowodowa/TZ2E200036_TŚiF2_4_laser.pdf'],
    ['TZ2E200036 TŚiF2 5 luminescencja', 'Materiał PDF z folderu przedmiotu.', 'materials/technika swiatlowodowa/TZ2E200036_TŚiF2_5_luminescencja.pdf'],
    ['TZ2E200036 TŚiF2 6 pompa', 'Materiał PDF z folderu przedmiotu.', 'materials/technika swiatlowodowa/TZ2E200036_TŚiF2_6_pompa.pdf'],
    ['TZ2E200036 TŚiF2 7 wsp abs', 'Materiał PDF z folderu przedmiotu.', 'materials/technika swiatlowodowa/TZ2E200036_TŚiF2_7_wsp_abs.pdf']
  ],
  teleinformacyjne: [
    ['02-Zalozenia', 'Plik PPT z folderu przedmiotu.', 'materials/projektowaniesieciteleinfo/02-Zalozenia.ppt'],
    ['Dokumentacja', 'Materiał PDF z folderu przedmiotu.', 'materials/projektowaniesieciteleinfo/Dokumentacja.pdf'],
    ['punkt 9 numeracja i tabele', 'Plik DOCX z folderu przedmiotu.', 'materials/projektowaniesieciteleinfo/punkt_9_numeracja_i_tabele.docx'],
    ['Tematy-2026', 'Plik DOC z folderu przedmiotu.', 'materials/projektowaniesieciteleinfo/Tematy-2026.doc'],
    ['Terminy-2026', 'Plik DOCX z folderu przedmiotu.', 'materials/projektowaniesieciteleinfo/Terminy-2026.docx']
  ],
  zarzadzanie: [
    ['ZSiUwSKE - zagadnienia na zaliczenie', 'Materiał PDF z folderu przedmiotu.', 'materials/zsiuwske/ZSiUwSKE - zagadnienia na zaliczenie.pdf'],
    ['ZSiUwSKE 01 Wstep', 'Materiał PDF z folderu przedmiotu.', 'materials/zsiuwske/ZSiUwSKE_01_Wstep.pdf'],
    ['ZSiUwSKE 02 SNMP RMON', 'Materiał PDF z folderu przedmiotu.', 'materials/zsiuwske/ZSiUwSKE_02_SNMP_RMON.pdf'],
    ['ZSiUwSKE 03 QoS', 'Materiał PDF z folderu przedmiotu.', 'materials/zsiuwske/ZSiUwSKE_03_QoS.pdf'],
    ['ZSiUwSKE 04 Wi-Fi Mgmt', 'Materiał PDF z folderu przedmiotu.', 'materials/zsiuwske/ZSiUwSKE_04_Wi-Fi_Mgmt.pdf'],
    ['ZSiUwSKE 05 Wirtualizacja', 'Materiał PDF z folderu przedmiotu.', 'materials/zsiuwske/ZSiUwSKE_05_Wirtualizacja.pdf']
  ]
};

Object.entries(UPLOADED_MATERIALS).forEach(([key, files]) => {
  if (SUBJECTS[key]) SUBJECTS[key].materials = [...SUBJECTS[key].materials, ...files];
});

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

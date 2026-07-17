(function () {
  const STORAGE_KEY = 'pbwe_logged_in';
  const scriptUrl = document.currentScript && document.currentScript.src;
  const siteRoot = scriptUrl ? new URL('.', scriptUrl) : new URL('.', window.location.href);
  const loginUrl = new URL('login.html', siteRoot);
  const homeUrl = new URL('index.html', siteRoot);
  const path = window.location.pathname.split('/').pop() || 'index.html';

  if (path === 'login.html') {
    return;
  }

  const isLoggedIn = localStorage.getItem(STORAGE_KEY) === 'yes' || sessionStorage.getItem(STORAGE_KEY) === 'yes';

  if (!isLoggedIn) {
    const next = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    loginUrl.searchParams.set('next', next);
    window.location.replace(loginUrl.href);
    return;
  }

  function addNavigationButtons() {
    if (document.querySelector('.pbwe-logout')) {
      return;
    }

    const style = document.createElement('style');
    style.textContent = `
      .pbwe-home,
      .pbwe-logout {
        position: fixed;
        top: max(14px, env(safe-area-inset-top));
        z-index: 99999;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-height: 42px;
        padding: 10px 15px;
        border: 1px solid rgba(255, 255, 255, 0.34);
        border-radius: 8px;
        background: rgba(7, 26, 51, 0.88);
        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
        color: #fff;
        font: 700 14px/1 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        letter-spacing: 0;
        cursor: pointer;
        -webkit-backdrop-filter: blur(12px);
        backdrop-filter: blur(12px);
        text-decoration: none;
      }
      .pbwe-home { left: max(14px, env(safe-area-inset-left)); }
      .pbwe-logout { right: max(14px, env(safe-area-inset-right)); }
      .pbwe-home:hover,
      .pbwe-logout:hover { background: rgba(21, 75, 132, 0.96); }
      .pbwe-home:focus-visible,
      .pbwe-logout:focus-visible { outline: 3px solid #7fe9f4; outline-offset: 3px; }
      .pbwe-home svg,
      .pbwe-logout svg { width: 18px; height: 18px; flex: 0 0 auto; }
      @media (max-width: 620px) {
        .pbwe-home,
        .pbwe-logout {
          top: auto;
          bottom: max(12px, env(safe-area-inset-bottom));
          min-height: 40px;
          padding: 9px 11px;
          font-size: 13px;
        }
      }
    `;

    const home = document.createElement('a');
    home.className = 'pbwe-home';
    home.href = homeUrl.href;
    home.setAttribute('aria-label', 'Przejdź na stronę główną');
    home.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 11.5 12 4l9 7.5"></path><path d="M5.5 10v10h13V10"></path><path d="M9.5 20v-6h5v6"></path>
      </svg>
      <span>Główna</span>
    `;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'pbwe-logout';
    button.setAttribute('aria-label', 'Wyloguj ze strony');
    button.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M10 17l5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
      </svg>
      <span>Wyloguj</span>
    `;
    button.addEventListener('click', function () {
      localStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(STORAGE_KEY);
      window.location.replace(loginUrl.href);
    });

    document.head.appendChild(style);
    document.body.appendChild(home);
    document.body.appendChild(button);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addNavigationButtons, { once: true });
  } else {
    addNavigationButtons();
  }
})();

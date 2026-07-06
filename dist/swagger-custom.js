(function () {
  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function clearDocsSession() {
    document.cookie = 'vayrix_docs_token=; path=/; max-age=0; SameSite=Lax';

    if (window.ui) {
      window.ui.authActions.logout(['JWT']);
    }

    Object.keys(localStorage).forEach(function (key) {
      if (key.toLowerCase().includes('swagger')) {
        localStorage.removeItem(key);
      }
    });
  }

  function handleLogout() {
    const token = getCookie('vayrix_docs_token');
    clearDocsSession();

    if (token) {
      fetch('/api/v1/auth/logout', {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + token },
      }).catch(function () {});
    }

    window.location.href = '/';
  }

  function authorizeSwagger() {
    const token = getCookie('vayrix_docs_token');
    if (!token || !window.ui) return;

    window.ui.authActions.authorize({
      JWT: {
        name: 'JWT',
        schema: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
        value: token,
      },
    });
  }

  function injectLogoutButton() {
    if (document.getElementById('vayrix-logout-btn')) return;

    const btn = document.createElement('button');
    btn.id = 'vayrix-logout-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Se déconnecter');
    btn.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Déconnexion';
    btn.addEventListener('click', handleLogout);
    document.body.appendChild(btn);
  }

  document.addEventListener('DOMContentLoaded', injectLogoutButton);

  const interval = setInterval(function () {
    if (window.ui) {
      clearInterval(interval);
      authorizeSwagger();
      injectLogoutButton();
    }
  }, 200);
})();

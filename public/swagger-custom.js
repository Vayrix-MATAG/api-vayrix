/* Pré-autorise Swagger avec le JWT stocké après connexion OTP */
(function () {
  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
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

  const interval = setInterval(function () {
    if (window.ui) {
      clearInterval(interval);
      authorizeSwagger();
    }
  }, 200);
})();

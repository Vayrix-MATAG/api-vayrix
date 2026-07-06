(function () {
  const API_PREFIX = '/api/v1';
  const emailInput = document.getElementById('email');
  const otpRow = document.getElementById('otp-row');
  const otpInput = document.getElementById('otp');
  const sendBtn = document.getElementById('send-btn');
  const verifyBtn = document.getElementById('verify-btn');
  const backBtn = document.getElementById('back-btn');
  const alertBox = document.getElementById('alert');

  let currentEmail = '';

  function showAlert(message, type) {
    alertBox.textContent = message;
    alertBox.className = 'alert ' + type;
  }

  function clearAlert() {
    alertBox.className = 'alert';
    alertBox.textContent = '';
  }

  function setLoading(btn, loading, label) {
    btn.disabled = loading;
    btn.innerHTML = loading ? '<span class="spinner"></span>Chargement…' : label;
  }

  async function apiPost(path, body) {
    const res = await fetch(API_PREFIX + path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const json = await res.json();
    if (!res.ok) {
      const msg = Array.isArray(json.message) ? json.message.join(', ') : json.message;
      throw new Error(msg || 'Erreur serveur');
    }
    return json;
  }

  function setAuthCookie(token) {
    const maxAge = 7 * 24 * 60 * 60;
    document.cookie = 'vayrix_docs_token=' + encodeURIComponent(token) + '; path=/; max-age=' + maxAge + '; SameSite=Lax';
  }

  sendBtn.addEventListener('click', async function () {
    clearAlert();
    const email = emailInput.value.trim();
    if (!email) {
      showAlert('Veuillez saisir votre adresse email.', 'error');
      return;
    }

    setLoading(sendBtn, true, 'Envoyer le code');
    try {
      await apiPost('/auth/send-email-otp', { email });
      currentEmail = email;
      emailInput.disabled = true;
      otpRow.classList.add('visible');
      verifyBtn.style.display = 'block';
      backBtn.classList.add('visible');
      sendBtn.style.display = 'none';
      showAlert('Un code à 6 chiffres a été envoyé à votre adresse email.', 'success');
      otpInput.focus();
    } catch (err) {
      showAlert(err.message || 'Impossible d\'envoyer le code.', 'error');
    } finally {
      setLoading(sendBtn, false, 'Envoyer le code');
    }
  });

  verifyBtn.addEventListener('click', async function () {
    clearAlert();
    const otp = otpInput.value.trim();
    if (!otp || otp.length !== 6) {
      showAlert('Saisissez le code à 6 chiffres reçu par email.', 'error');
      return;
    }

    setLoading(verifyBtn, true, 'Se connecter');
    try {
      const response = await apiPost('/auth/verify-email-otp', {
        email: currentEmail,
        otp,
      });
      const token = response.data?.accessToken;
      if (!token) {
        throw new Error('Token d\'accès manquant dans la réponse.');
      }
      setAuthCookie(token);
      window.location.href = '/docs';
    } catch (err) {
      showAlert(err.message || 'Code invalide ou expiré.', 'error');
    } finally {
      setLoading(verifyBtn, false, 'Accéder à la documentation');
    }
  });

  backBtn.addEventListener('click', function () {
    clearAlert();
    currentEmail = '';
    emailInput.disabled = false;
    emailInput.value = '';
    otpInput.value = '';
    otpRow.classList.remove('visible');
    verifyBtn.style.display = 'none';
    backBtn.classList.remove('visible');
    sendBtn.style.display = 'block';
    emailInput.focus();
  });

  emailInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && sendBtn.style.display !== 'none') sendBtn.click();
  });

  otpInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') verifyBtn.click();
  });
})();

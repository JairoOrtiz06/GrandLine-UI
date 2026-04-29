document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-copy-code]');
  if (!button) return;

  const container = button.closest('.card');
  const code = container.querySelector('code');

  if (!code) {
    console.log('No encontró <code>');
    return;
  }

  navigator.clipboard.writeText(code.innerText.trim())
    .then(() => {
      const originalText = button.innerHTML;

      button.innerHTML = '✔ Copiado';
      button.disabled = true;

      setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
      }, 1500);
    })
    .catch(err => {
      console.error('Error al copiar:', err);
    });
});
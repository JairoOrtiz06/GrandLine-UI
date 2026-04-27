document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-copy-code]');

  if (!button) return;

  const codeBox = button.closest('.docs-code');
  const code = codeBox ? codeBox.querySelector('code') : null;

  if (!code) return;

  navigator.clipboard.writeText(code.innerText.trim()).then(() => {
    const originalText = button.innerHTML;

    button.innerHTML = '&#10003; Copiado';
    button.disabled = true;

    setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
    }, 1500);
  });
});

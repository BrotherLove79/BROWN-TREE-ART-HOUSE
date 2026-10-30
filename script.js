const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const yearEl = document.getElementById('year');
const amountOptions = document.querySelectorAll('.amount-option');
const formHandlers = document.querySelectorAll('form[data-form]');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

amountOptions.forEach((button) => {
  button.addEventListener('click', () => {
    amountOptions.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
  });
});

formHandlers.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const status = form.querySelector('.form-status');
    const nameInput = form.querySelector('input[name="name"]');
    const name = nameInput ? nameInput.value.trim() : 'There';

    if (status) {
      status.textContent = form.dataset.form === 'volunteer'
        ? `Thank you, ${name}! Your volunteer interest has been received.`
        : `Thanks, ${name}! Your message has been sent to Brown Tree Art House.`;
    }

    form.reset();
  });
});

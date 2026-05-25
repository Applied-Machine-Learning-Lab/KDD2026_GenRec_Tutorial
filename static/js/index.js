document.addEventListener('DOMContentLoaded', () => {
  const burgers = Array.from(document.querySelectorAll('.navbar-burger'));

  burgers.forEach((burger) => {
    burger.addEventListener('click', () => {
      const targetId = burger.dataset.target;
      const target = targetId ? document.getElementById(targetId) : null;

      burger.classList.toggle('is-active');
      burger.setAttribute('aria-expanded', String(burger.classList.contains('is-active')));

      if (target) {
        target.classList.toggle('is-active');
      }
    });
  });
});

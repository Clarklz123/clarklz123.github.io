const navbar = document.querySelector('.navbar');
const backToTopButton = document.createElement('button');

backToTopButton.className = 'back-to-top';
backToTopButton.type = 'button';
backToTopButton.setAttribute('aria-label', 'Back to top');
backToTopButton.textContent = '↑';
document.body.appendChild(backToTopButton);

const onScroll = () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 8);
  }

  backToTopButton.classList.toggle('show', window.scrollY > window.innerHeight);
};

onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

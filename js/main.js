const navbar = document.querySelector('.navbar');

if (navbar) {
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 8);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

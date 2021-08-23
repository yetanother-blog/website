const hamburgerMenu = document.querySelector('.header__hamburger');
let isHamburgerMenuExpanded = false;

hamburgerMenu.addEventListener('click', () => {
  isHamburgerMenuExpanded = !isHamburgerMenuExpanded;
  hamburgerMenu.setAttribute("aria-expanded", isHamburgerMenuExpanded);
  document.body.style.overflow = isHamburgerMenuExpanded ? 'hidden' : ''
});

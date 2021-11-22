export default function showMobileMenu() {
  const body = document.querySelector('.body');
  const navBtn = document.querySelector('.nav__btn');
  const navBtnBurger = document.querySelector('.nav__btn-burger');
  const menu = document.querySelector('.menu');

  let navOpen = false;

  navBtn.addEventListener('click', () => {
    if(!navOpen) {
      openNavigation();
    } else {
      closeNavigation();
    }
  });

  function openNavigation() {
    navBtn.classList.add('nav__btn--open');
    navBtnBurger.classList.add('nav__btn-burger--open');
    menu.classList.add('menu--open');
    body.classList.add('body--scrolloff');

    navOpen = true;
  };

  function closeNavigation() {
    navBtn.classList.remove('nav__btn--open');
    navBtnBurger.classList.remove('nav__btn-burger--open');
    menu.classList.remove('menu--open');
    body.classList.remove('body--scrolloff');

    navOpen = false;
  };
}

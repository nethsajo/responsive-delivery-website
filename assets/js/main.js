const menuContainer = document.querySelector('#menu-container');
const menuIcon = document.querySelector('#menu-icon');
const icon = document.querySelector('#icon');
const navItem = document.querySelectorAll('#nav__item');

window.addEventListener('DOMContentLoaded', () => {
  menuIcon.addEventListener('click', () => {
    if (icon.classList.contains('bx-menu-alt-right')) {
      icon.classList.remove('bx-menu-alt-right');
      icon.classList.add('bx-x');
      menuContainer.classList.add('active');
    } else {
      icon.classList.add('bx-menu-alt-right');
      icon.classList.remove('bx-x');
      menuContainer.classList.remove('active');
    }
  });

  const linkPressed = () => {
    menuContainer.classList.remove('active');
    icon.classList.add('bx-menu-alt-right');
    icon.classList.remove('bx-x');
  };

  navItem.forEach((item) => item.addEventListener('click', linkPressed));
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 992) {
    if (menuContainer.className.includes('active')) {
      menuContainer.classList.remove('active');
      icon.classList.add('bx-menu-alt-right');
      icon.classList.remove('bx-x');
    }
  }

  if (window.innerWidth <= 320) {
    icon.classList.remove('bx-md');
    icon.classList.add('bx-sm');
  } else {
    icon.classList.add('bx-md');
    icon.classList.remove('bx-sm');
  }
});

window.addEventListener('scroll', () => {
  const scrollTop = document.querySelector('#scrollTop');
  if (this.scrollY >= 560) {
    scrollTop.classList.add('show-scrollTop');
  } else {
    scrollTop.classList.remove('show-scrollTop');
  }
});

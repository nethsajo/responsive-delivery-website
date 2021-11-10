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

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 320) {
      icon.classList.add('bx-sm');
      icon.classList.remove('bx-md');
    } else {
      icon.classList.add('bx-md');
      icon.classList.remove('bx-sm');
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 992) {
    if (menuContainer.className.includes('active')) {
      menuContainer.classList.remove('active');
      icon.classList.add('bx-menu-alt-right');
      icon.classList.remove('bx-x');
    }
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

//ScrollReveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '20px',
  duration: 1500,
  delay: 300,
});

sr.reveal('.hero__text-container', { origin: 'left' });
sr.reveal('.hero__image-container', { origin: 'right', interval: 200 });
sr.reveal('.services__item', { origin: 'bottom', delay: 0 });
sr.reveal('.about__mv-container .text-container', { origin: 'top' });
sr.reveal('.about__mv-container .image-container', { origin: 'bottom' });
sr.reveal('.contact__content .btn-email', { origin: 'bottom' });

window.addEventListener('load', () => {
  setTimeout(() => {
    preload.style.display = 'none';
  }, 500);
});

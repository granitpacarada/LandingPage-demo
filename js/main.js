'use strict';

// CONTACT US MODAL

const contactModal = document.querySelector('.modal__wrapper');
const contactBtn = document.querySelector('.nav__btn');
const closeBtn = document.querySelector('.modal__close');
const contactModalOverlay = document.querySelector('.overlay');

const openContactModal = () => {
    contactModal.classList.remove('hidden');
    contactModalOverlay.classList.remove('hidden');
};

const closeContactModal = () => {
    contactModal.classList.add('hidden');
    contactModalOverlay.classList.add('hidden');
};

contactBtn.addEventListener('click', openContactModal);
closeBtn.addEventListener('click', closeContactModal);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !contactModal.classList.contains('hidden')) {
        closeContactModal();
    }
});

contactModalOverlay.addEventListener('click', closeContactModal);

// RESPONSIVE NAVBAR

const hamburger = document.querySelector('.nav__hamburger');
const navMenu = document.querySelector('.nav__menu');
const navOverlay = document.querySelector('.nav__overlay');
const closeNavBar = document.querySelector('.nav__menu--close');

hamburger.addEventListener('click', () => {
    navMenu.classList.remove('hidden');
    navOverlay.style.display = 'block';
});

closeNavBar.addEventListener('click', closeMenu);
navOverlay.addEventListener('click', closeMenu);

function closeMenu() {
    if (window.innerWidth <= 990) {
        navMenu.classList.add('hidden');
        navOverlay.style.display = 'none';
    }
}

const checkResponsiveness = function () {
    if (window.innerWidth >= 991) {
        navMenu.classList.remove('hidden');
    } else {
        navMenu.classList.add('hidden');
    }
};

// CONTACT FORM MODAL

const contactResponsiveBtn = document.querySelector('.contact-responsive');
const navContainer = document.querySelector('.nav__container');

contactResponsiveBtn.addEventListener('click', () => {
    closeMenu();
    openContactModal();

    if (window.innerWidth < 991) {
        navContainer.style.display = 'none';
    }
});

closeBtn.addEventListener('click', () => {
    navContainer.style.display = 'block';
    navOverlay.style.display = 'none';
});

checkResponsiveness();
window.addEventListener('resize', checkResponsiveness);


// SCROLL TO SECTION (Get Started Btn)

const scrollToSectionBtn = document.querySelector('.get__started');
const nextSectionScroll = document.querySelector('.services');

scrollToSectionBtn.addEventListener('click', () => {
    nextSectionScroll.scrollIntoView({ behavior: 'smooth' });
});

// SCROLL TO TOP BTN

const scrollToTopBtn = document.querySelector('.scroll__to__top--btn');


// NAVBAR COLOR TRANSITION

const navSectionSticky = document.querySelector('.nav__container');
const navMenuColorTransition = document.querySelectorAll('.nav__menu--link');

window.addEventListener('scroll', () => {

    if (window.scrollY > 1500) {
        scrollToTopBtn.classList.remove('hide');
    } else if (window.scrollY <= 500) {
        scrollToTopBtn.classList.add('hide');
    }

    if (window.scrollY > 200) {
        navSectionSticky.style.backgroundColor = '#A0AEC0';
        navMenuColorTransition.forEach(link => {
            link.style.color = '#fff';
        });
    } else {
        navSectionSticky.style.backgroundColor = '#fff';
        navMenuColorTransition.forEach(link => {
            link.style.color = '#1A202C';
        });
    }

});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});









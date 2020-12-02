'use strict'

//////////////////////////////
// ========== Selectors ========== //

// Buttons 
const btnScrollTo = document.querySelector('.btn--scroll-to');

// Navbar 
const navLinks = document.querySelector('.nav__links');

// Header 
const header = document.querySelector('.header');

// Operations 
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content')

// Sections 
const section1 = document.querySelector('#section--1');

// Modal window 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');



//////////////////////////////
// Modal window 

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);

    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
};

//////////////////////////
// Cookie message 

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button';
header.append(message);

// Close Cookie message 
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
    message.remove();
})

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '103%';
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';



//////////////////////////
// Button Scrolling 

btnScrollTo.addEventListener('click', () => {
    section1.scrollIntoView({ behavior: 'smooth' })
});

//////////////////////////////
// Page Navigation

navLinks.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    };
});

//////////////////////////////
// Tabbed Component
tabsContainer.addEventListener('click', (e) => {
    const clicked = e.target.closest('.operations__tab');

    // Guard clause 
    if (!clicked) return;

    // Remove active classes 
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(t => t.classList.remove('operations__content--active'));

    // Activate tab
    clicked.classList.add('operations__tab--active');

    // Activate Content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});
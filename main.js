'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling whentapping on the navbar menu and contact button
const navbarMenu = document.querySelector('.navbar__menu');
const contactBtn = document.querySelector('.home__contact');
[navbarMenu, contactBtn].forEach((clickEvent)=>{
    clickEvent.addEventListener('click', (event) => {
        const target = event.target;
        const link = target.dataset.link;
        if(link == null) {
            return;
        }
        scrollIntoView(link);
    });
});



// fade out home page and scroll button slowly when scrolling down
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    home.style.opacity = 1 - (window.scrollY / homeHeight);
});

// show scroll-btn when scrolling down
const goToTopBtn = document.querySelector("#scroll-btn");

document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        goToTopBtn.classList.add('visible');
    } else {
        goToTopBtn.classList.remove('visible');
    }
});

// handle click on the scroll-btn 
goToTopBtn.addEventListener('click', () => {
    scrollIntoView('#home');
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}
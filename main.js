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
            return
        }
        const scrollTo = document.querySelector(link);
        scrollTo.scrollIntoView({behavior: "smooth"});
    });
})
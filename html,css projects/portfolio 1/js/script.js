const copyrightYear = document.querySelector('.copyright-year');

const d = new Date;
copyrightYear.innerHTML = d.getFullYear();


const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav')
const navMenu = document.querySelector('.nav-menu')
const navItems = document.querySelectorAll('.nav-menu_item');


menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    navMenu.classList.toggle('open');
    navItems.forEach(item => {
        item.classList.toggle('open');
    });
}
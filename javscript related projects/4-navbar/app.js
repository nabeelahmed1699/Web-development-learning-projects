const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    console.log('opened');
    navLinks.classList.toggle('open');
    links.forEach(element => {
        element.classList.toggle('fade');
    });
});
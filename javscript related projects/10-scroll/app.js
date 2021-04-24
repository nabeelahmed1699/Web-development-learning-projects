// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const dateElement = document.getElementById('date');
const d = new Date;
dateElement.innerHTML = d.getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')


navToggle.addEventListener('click', () => {
    // we will calculate the height dynamically then set the height of the links container
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    // the link container is not open
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});
const nav = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');
// ********** fixed navbar ************
window.addEventListener('scroll', () => {
    let scrollHeight = window.pageYOffset;
    if (scrollHeight > nav.getBoundingClientRect().height) {
        nav.classList.add('fixed-nav');
    }
    if (scrollHeight < nav.getBoundingClientRect().height) {
        nav.classList.remove('fixed-nav');
    }
    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    }
    if (scrollHeight < 500) {
        topLink.classList.remove('show-link');
    }
});
// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        // prevent default click
        e.preventDefault();

        // getting to the specific spot depend on the link we clicking
        const id = e.target.getAttribute('href');
        const element = document.querySelector(id);

        // calculating heights
        const navHeight = nav.getBoundingClientRect().height;
        const containerHeig = linksContainer.getBoundingClientRect().height;

        const fixNavbar = nav.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if (!fixNavbar) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeig;
        }
        window.scroll({
            left: 0,
            top: position
        });
        // closing the nav in smaller screen 
        linksContainer.style.height = 0;
    });
});
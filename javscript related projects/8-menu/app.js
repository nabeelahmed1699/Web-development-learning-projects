const menu = [{
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: 'streak dinner',
        category: 'dinner',
        price: 24,
        img: './images/item-10.jpeg',
        desc: `lorem10 bnjlasfbjasdfln gasbjlas;bvaskghas  hsjbnjkdbur jhkh khnsdfbke ijhiokbn,jghklf hh,bkjghklafvbkaf`,
    }
];


// !selecting the menu section to append the articles
var menuSection = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', () => {
    // displaying the buttons
    displayCategoryBtns();

    // initial display the menu
    displayMenuItems(menu);

    // applying the filter function once the DOM been loaded
    filterItems();
});


// filter function
function filterItems() {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            const categoryArray = menu.filter(item => {
                if (item.category === category) return item;
            });
            if (category === 'all') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(categoryArray);

            }
        });
    });
}

// initial menu display function
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(item => {
        return `<article class="menu-item">
                <img src="${item.img}" class="photo" alt="${item.title}">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>`
    });
    displayMenu = displayMenu.join('');
    menuSection.innerHTML = displayMenu;
}

function displayCategoryBtns() {
    // getting the unique categories from the menu
    const categories = menu.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;

    }, ['all']);
    const categoryBtns = categories.map((category) => {
        return `<button class="filter-btn" data-category="${category}">${category}</button>`;
    }).join('');
    btnContainer.innerHTML = categoryBtns;
}






// ! MY Own Method
// function createItem(item) {
//     //creating all elements
//     const article = document.createElement('article');
//     const img = document.createElement('img');
//     const div = document.createElement('div');
//     const header = document.createElement('header');
//     const h4_1 = document.createElement('h4');
//     const h4_2 = document.createElement('h4');
//     const p = document.createElement('p');

//     // assigning the values to the article
//     p.textContent = item.desc;
//     h4_2.textContent = item.price;
//     h4_1.textContent = item.title;
//     img.src = item.img;
//     img.alt = item.title;




//     // appending all the elemnts
//     header.appendChild(h4_1);
//     header.appendChild(h4_2);
//     div.appendChild(header);
//     div.appendChild(p);
//     article.appendChild(img);
//     article.appendChild(div);

//     // assigning classes
//     article.classList.add('menu-item');
//     article.classList.add(item.category);
//     article.classList.add('all');
//     img.classList.add('photo');
//     div.classList.add('item-info');
//     h4_2.classList.add('price');
//     p.classList.add('item-text');

//     return article;

// }
// window.addEventListener('DOMContentLoaded', () => {
//     menu.forEach((item) => {
//         const elem = createItem(item);
//         menuSection.appendChild(elem);

//     });
// });

// function filterItems() {
//     const btns = document.querySelectorAll('.filter-btn');
//     btns.forEach(btn => {
//         btn.addEventListener('click', (e) => {
//             const targetValue = e.target.textContent;
//             const articles = document.querySelectorAll('article');
//             articles.forEach(article => {
//                 if (!article.classList.contains(targetValue)) {
//                     article.style.display = 'none';
//                 } else {
//                     article.style.display = 'grid';
//                 }
//             });


//         });

//     });
// }

// filterItems();
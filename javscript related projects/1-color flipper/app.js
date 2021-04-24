const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// ! selecting button and the span tag
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// functions
const clicked = (Event => {
    // * getting random numbers to that we can parse through the array of colors randomly
    let randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// ! listening to click event on button
btn.addEventListener('click', clicked);

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
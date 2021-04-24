let count = 0;

// ! selectors
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

// functions
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const eventClasses = e.currentTarget.classList;
        if (eventClasses.contains('decrease')) {
            count--;
        } else if (eventClasses.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count > 0) {
            value.style.color = 'purple';
        }
        if (count == 0) {
            value.style.color = '#222';
        }
        value.textContent = count;
    });
});
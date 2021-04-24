//using selectors inside the element 

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', (e) => {

        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    });
});



// traversing the dom method
// const questiontexts = document.querySelectorAll('.question');
// const btns = document.querySelectorAll('.question-btn')


// btns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         const parentElementOfEvent = e.currentTarget.parentElement.parentElement;
//         parentElementOfEvent.classList.toggle('show-text');


//     });
// });
const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');



toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
    console.log('clicked');
});
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});
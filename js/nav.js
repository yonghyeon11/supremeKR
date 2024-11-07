const toggleBtn = document.querySelector('.navbar-toggleBtn');
const menu = document.querySelector('.navbar-menu');
const links = document.querySelector('.navbar-links');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    links.classList.toggle('active');
})
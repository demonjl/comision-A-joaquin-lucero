const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 10);
})
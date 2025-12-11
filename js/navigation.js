//Nav Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

//Toggle Theme
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click',() =>{
    let element = document.body;
    element.classList.toggle('dark-mode')
});
//Skill Group Select
const carouselItem = document.querySelectorAll('.carousel-item');
const skillList = document.querySelectorAll('.skill-list');

carouselItem.forEach(item => {
    item.addEventListener('click', function() {
        const category = this.id;

        carouselItem.forEach(item => {
            item.classList.remove('active');
        });
        skillList.forEach(item => {
            item.classList.remove('active');
        });

        const itemsToActivate = document.querySelectorAll(`.${category}`);

        itemsToActivate.forEach(item => {
            item.classList.add('active');
        });
    });
});


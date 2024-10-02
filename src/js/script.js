document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.ripple').forEach(function(button) {
        button.addEventListener('mouseover', function(event) {
            event.preventDefault();

            // Создание элемента ripple
            let div = document.createElement('div');
            let btnOffset = this.getBoundingClientRect();
            let xPos = event.pageX - btnOffset.left - window.scrollX;
            let yPos = event.pageY - btnOffset.top - window.scrollY;

            div.classList.add('ripple-effect');

            div.style.height = this.offsetHeight + 'px';
            div.style.width = this.offsetHeight + 'px';
            div.style.top = yPos - (this.offsetHeight / 2) + 'px';
            div.style.left = xPos - (this.offsetHeight / 2) + 'px';
            div.style.background = this.getAttribute('data-ripple-color');

            this.appendChild(div);

            button.addEventListener('mouseleave', function() {
                div.remove();
            }, { once: true });
        });
    });
});




// menu-modal

const menuModal = document.querySelector('.menu-modal');
const openMenuModal = document.querySelector('.burger-btn');
const closeMenuModal = document.querySelector('.close-btn');
const menuModalDropdown = menuModal.querySelector('.dropdown');
const overlay = document.querySelector('.overlay');


openMenuModal.addEventListener('click', function(event) {
    menuModal.classList.add('open');
    overlay.classList.add('open');
})
closeMenuModal.addEventListener('click', function(event) {
    menuModal.classList.remove('open');
    overlay.classList.remove('open');
})
overlay.addEventListener('click', function(event) {
    menuModal.classList.remove('open');
    overlay.classList.remove('open');
})

menuModalDropdown.addEventListener('click', function(event) {
    menuModalDropdown.classList.toggle('active');
})
menuModalDropdown.querySelectorAll('.dropdown-menu a').forEach(elem => {
    elem.addEventListener('click', function(event) {
        event.stopPropagation();
    })
})
document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.ripple').forEach(function(button) {
        button.addEventListener('mouseover', function(event) {
            event.preventDefault();

            let div = document.createElement('div');
            let btnOffset = this.getBoundingClientRect();
            let xPos = event.pageX - btnOffset.left - window.scrollX;
            let yPos = event.pageY - btnOffset.top - window.scrollY;

            div.classList.add('ripple-effect');

            let ripple = this.querySelector('.ripple-effect');

            if (!ripple) {
                div.style.height = this.offsetHeight + 'px';
                div.style.width = this.offsetHeight + 'px';
                div.style.top = yPos - (this.offsetHeight / 2) + 'px';
                div.style.left = xPos - (this.offsetHeight / 2) + 'px';
                div.style.background = this.getAttribute('data-ripple-color');

                this.appendChild(div);

                window.setTimeout(function(){
                    div.remove();
                }, 1000);
            }
        });
    });

});

const heroSwiper = document.querySelector('.hero-swiper');

if (heroSwiper) {
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.hero-swiper .custom-swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.hero-swiper-button-next',
            prevEl: '.hero-swiper-button-prev',
        },
    });
}

// custom select

const servicesSelect =  document.querySelector('.services');
const servicesOptions = document.querySelectorAll('.services-list li');
const servicesSelectBody = document.querySelector('.services-list');


if (servicesSelect) {
    servicesSelect.addEventListener('click' , () => {
        servicesSelectBody.classList.add('active');
    })
    servicesSelect.querySelector('p').addEventListener('click' , () => {
        servicesSelectBody.classList.add('active');
    })
    servicesOptions.forEach(el => {
        el.addEventListener('click' , ()=> {
            servicesSelect.querySelector('p').innerHTML = el.innerHTML;
            servicesSelect.dataset.current = el.dataset.value;
            servicesSelectBody.classList.remove('active')
        })
    })
    document.addEventListener('click' , (e)=> {
        if ((!e.target.closest('.services-wrap')) && servicesSelectBody.classList.contains('active')) {
            servicesSelectBody.classList.remove('active');
        }
    })
}









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
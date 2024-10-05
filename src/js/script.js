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
    const swiper = new Swiper(heroSwiper, {
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


const servicesSwiper = document.querySelector('.services-swiper');

if (servicesSwiper) {
    const swiperServ = new Swiper(servicesSwiper, {
        loop: true,
        slidesPerView: 1.3,
        spaceBetween: 20,
        breakpoints: {
            900: {
                slidesPerView: 2.2,
            },
            1024: {
                slidesPerView: 3.2,
            },
            1300: {
                slidesPerView: 4.2,
            },
            1532 :{
                slidesPerView:5
            }
        }
    });
}

const staffCardsBtns = document.querySelectorAll('.staff-card button');
staffCardsBtns?.forEach(btn => {
    btn.addEventListener('click', function(event) {
        let currentCard = event.target.closest('.staff-card');
        let currentInfoList = currentCard.querySelector('.staff-info');
        let currentInfoListCloseBtn = currentInfoList.querySelector('.close-row span');

        currentInfoList.classList.add('active');

        currentInfoListCloseBtn.addEventListener('click', function(event) {
            currentInfoList.classList.remove('active');
        })
    })
})

const vacancySwiper = document.querySelector('.vacancy-swiper');

if (vacancySwiper) {
    const swiperVacancy = new Swiper(vacancySwiper, {
        loop: true,
        slidesPerView: 1.3,

        breakpoints: {
            900: {
                slidesPerView: 2.2,
            },
            1024: {
                slidesPerView: 3.2,
            },
            1532 :{
                slidesPerView:4
            }
        },
        navigation: {
            nextEl: '.vacancy-swiper-button-next',
            prevEl: '.vacancy-swiper-button-prev',
        },
    });
}

const operatingTimeModal = document.querySelector('.operating-time-modal');
const operatingTimeModalBtns = document.querySelectorAll('.operating-time-modal-btn');
const operatingTimeModalClose = document.querySelector('.operating-time-modal .close-row span');

operatingTimeModalBtns?.forEach(btn => {
    btn.addEventListener('click', function(event) {
        operatingTimeModal.classList.add('active');
        overlay.classList.add('open');
    })
})
operatingTimeModalClose.addEventListener('click', function(event) {
    operatingTimeModal.classList.remove('active');
    overlay.classList.remove('open');
})
overlay.addEventListener('click', function(event) {
    operatingTimeModal.classList.remove('active');
    overlay.classList.remove('open');
})
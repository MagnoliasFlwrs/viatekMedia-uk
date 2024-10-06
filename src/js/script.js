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

// const servicesSelect =  document.querySelector('.services');
// const servicesOptions = document.querySelectorAll('.services-list li');
// const servicesSelectBody = document.querySelector('.services-list');
//
//
// if (servicesSelect) {
//     servicesSelect.addEventListener('click' , () => {
//         servicesSelectBody.classList.add('active');
//     })
//     servicesSelect.querySelector('p').addEventListener('click' , () => {
//         servicesSelectBody.classList.add('active');
//     })
//     servicesOptions.forEach(el => {
//         el.addEventListener('click' , ()=> {
//             servicesSelect.querySelector('p').innerHTML = el.innerHTML;
//             servicesSelect.dataset.current = el.dataset.value;
//             servicesSelectBody.classList.remove('active')
//         })
//     })
//     document.addEventListener('click' , (e)=> {
//         if ((!e.target.closest('.services-wrap')) && servicesSelectBody.classList.contains('active')) {
//             servicesSelectBody.classList.remove('active');
//         }
//     })
// }

const servicesSelects =  document.querySelectorAll('.services');

servicesSelects?.forEach((item) => {
    item.addEventListener('click' , ()=> {
        const servicesOptions = item.closest('.services-wrap').querySelectorAll('.services-list li');
        const servicesSelectBody = item.closest('.services-wrap').querySelector('.services-list');

        servicesSelectBody.classList.add('active');
        item.closest('.services-wrap').querySelector('p').addEventListener('click' , () => {
            servicesSelectBody.classList.add('active');
        })
        servicesOptions.forEach(el => {
            el.addEventListener('click' , ()=> {
                item.querySelector('p').innerHTML = el.innerHTML;
                item.dataset.current = el.dataset.value;
                servicesSelectBody.classList.remove('active')
            })
        })
        document.addEventListener('click' , (e)=> {
            if ((!e.target.closest('.services-wrap')) && servicesSelectBody.classList.contains('active')) {
                servicesSelectBody.classList.remove('active');
            }
        })
    })
})


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


const callBackModal = document.querySelector('.callback-modal');
const callBackModalCloseBtn = document.querySelector('.callback-modal .close-row span');
const callBackModalShowBtns = document.querySelectorAll('.callback-modal-show');

callBackModalShowBtns?.forEach(btn => {
    btn.addEventListener('click', function(event) {
        callBackModal.classList.add('active');
        overlay.classList.add('open');
    })
})

callBackModalCloseBtn.addEventListener('click', function(event) {
    callBackModal.classList.remove('active');
    overlay.classList.remove('open');
})
overlay.addEventListener('click', function(event) {
    callBackModal.classList.remove('active');
    overlay.classList.remove('open');
})

const contentPageModal = document.querySelector('.content-modal');
const contentPageModalCloseBtns = document.querySelectorAll('.content-modal .close-btn');
const showContentPageModalBtns = document.querySelectorAll('.show-content-page-btn');

showContentPageModalBtns?.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        contentPageModal.classList.add('active');
        overlay.classList.add('open');
    })
})
contentPageModalCloseBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        contentPageModal.classList.remove('active');
        overlay.classList.remove('open');
    })
})

overlay.addEventListener('click', function(event) {
    contentPageModal.classList.remove('active');
    overlay.classList.remove('open');
})

const dataModal = document.querySelector('.data-modal');
const dataPageModalCloseBtns = document.querySelectorAll('.data-modal .close-btn');
const showDataPageModalBtns = document.querySelectorAll('.show-data-page-btn');

showDataPageModalBtns?.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        dataModal.classList.add('active');
        overlay.classList.add('open');
    })
})
dataPageModalCloseBtns.forEach(el=> {
    el.addEventListener('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        dataModal.classList.remove('active');
        overlay.classList.remove('open');
    })
})
overlay.addEventListener('click', function(event) {
    dataModal.classList.remove('active');
    overlay.classList.remove('open');
})


const accordeonItems = document.querySelectorAll('.accordion-item');

accordeonItems?.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', function () {

        accordeonItems.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
                i.querySelector('.accordion-content').style.maxHeight = null;
            }
        });

        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }
    });
});

Fancybox.bind("[data-fancybox]", {

});

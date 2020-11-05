import Swiper, {Navigation, Pagination} from 'swiper';


Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
    }
})

const clientsSlider = new Swiper('.swiper-clients-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
});

const winePopup = document.querySelector('.wine__popup');
const closeWinePopup = document.querySelector('.wine__close-popup');
const tastingItemBtn = document.querySelectorAll('.tasting__item-btn');

tastingItemBtn.forEach(el => {
    el.addEventListener('click', () => {
        winePopup.style.display = 'block';
        if (document.documentElement.clientWidth > 810) {
            document.body.style.overflowY = 'hidden';
        }
    })
})
closeWinePopup.addEventListener('click', () => {
    winePopup.style.display = 'none';
    document.body.style.overflowY = '';
})
console.log()
"use strict";

const searchPopup = document.querySelector('.search-popup');
const navSearchBox = document.querySelector('.nav-search');
const carouselItems = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");
const scrollTop = document.querySelector('.back-to-top');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.close');
const hamburgerMenu = document.querySelector('.hamburger-menu');

closeSidebar.addEventListener('click', () => {
    sidebar.style.right = '-52%';
});

hamburgerMenu.addEventListener('click', () => {
    sidebar.style.right = '0%';
});

document.addEventListener('click', (e) => {

    if (e.target.matches('.close') || !e.target.closest('header')) {
        sidebar.style.right = '-52%';
    };
});


// IntersectionObserver for Navbar

const bannerSection = document.querySelector('.carousel');
const target = document.querySelector('.navigation-wrapper');

const navOptions = {
    rootMargin: '-82% 0px 0px 0px'
};

const scrollTopOptions = {
    threshold: 1
};

const bannerNavObserver = new IntersectionObserver(function (entries) {

    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            target.classList.add('sticky');
        } else {
            target.classList.remove('sticky');
        }
    });
}, navOptions);

const bannerScrollObserver = new IntersectionObserver(function (entries) {

    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            scrollTop.style.visibility = 'visible';

        } else {
            scrollTop.style.visibility = 'hidden';
        };
    });
}, scrollTopOptions);

bannerNavObserver.observe(bannerSection);
bannerScrollObserver.observe(bannerSection);


//Scroll to top

scrollTop.addEventListener('click', function () {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Show Search

navSearchBox.addEventListener('click', function () {

    searchPopup.classList.toggle('vis');
});


// Banner Carousel

let counter = 1;

const autoSlide = () => {
    counter += 1;
    carouselSlide(counter);
};

let timer = setInterval(autoSlide, 8000);

const carouselSlide = n => {

    let i;
    for (i = 0; i < carouselItems.length; i++) {
        carouselItems[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }

    if (n > carouselItems.length) {
        counter = 1;
    } else if (n < 1) {
        counter = carouselItems.length;
    }

    carouselItems[counter - 1].style.display = "block";
    dots[counter - 1].className += " active";
};

carouselSlide(counter);

const currentSlide = (n) => {
    counter = n;
    carouselSlide(counter);
    resetTimer();
};

const resetTimer = () => {
    clearInterval(timer);
    timer = setInterval(autoSlide, 8000);
};


// Owl Carousel

$('#oc-features').owlCarousel({
    autoplay: 800,
    loop: false,
    margin: 20,
    hover: false,
    dots: false,
    nav: false,

    responsive: {

        0: {
            items: 1
        },

        320: {
            items: 2
        },

        768: {
            items: 4
        },

        992: {
            items: 5
        }
    }
});

$('#course-carousel').owlCarousel({
    autoplay: 800,
    loop: true,
    margin: 20,
    hover: false,
    dots: false,
    nav: true,

    responsive: {

        0: {
            items: 1
        },

        564: {
            items: 1
        },

        768: {
            items: 2
        },

        992: {
            items: 3
        },

        1200: {
            items: 4
        }
    }
});

$('#instructor-carousel').owlCarousel({
    autoplay: 800,
    loop: true,
    margin: 20,
    hover: false,
    dots: false,
    nav: true,

    responsive: {

        0: {
            items: 1
        },

        580: {
            items: 1
        },

        600: {
            items: 2
        },

        992: {
            items: 3
        }
    }
});
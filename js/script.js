
//Mobile Navigation Functionality

const mobile_nav = document.querySelector('.header__nav--mobile-nav');

const nav = document.querySelector('.header__nav--main-nav');

const header_nav = document.querySelector('.header__nav');

mobile_nav.addEventListener('click', (event) => {
    event.preventDefault();
    if (nav.style.display === 'none') {
        header_nav.style.background = "black";
        nav.style.display = 'flex';
        mobile_nav.src = 'images/icon-close.svg';
    }
    else {
        header_nav.style.background = "none";
        nav.style.display = "none";
        mobile_nav.src = 'images/icon-hamburger.svg';
    }
})
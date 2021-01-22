$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        prevArrow: '<button style="background: rgba(255,255,255,0); border: none" type="button" onclick="this.blur();" class="slider-prev"><img src="icons/arrow-left.svg"</button>',
        nextArrow: '<button style="background: rgba(255,255,255,0); border: none" type="button" onclick="this.blur();" class="slider-next"><img src="icons/arrow-right.svg"</button>',
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: { 
                    arrows: false,
                    dots: true,
                    fade: false
                }
            }
        ]
    });

});


window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.numbers__menu'),
    menuItem = document.querySelectorAll('.numbers__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('numbers__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('numbers__menu_active');
        })
    })
})
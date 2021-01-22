$(document).ready(function(){
    $('.carousel').slick({
        dots: false,
        infinite: true,
        speed: 500,
        prevArrow: '<button style="background: rgba(255,255,255,0); border: none; cursor: pointer;" type="button" onclick="this.blur();" class="carousel-prev"><img src="icons/arrow_prev.svg"</button>',
        nextArrow: '<button style="background: rgba(255,255,255,0); border: none; cursor: pointer;" type="button" onclick="this.blur();" class="carousel-next"><img src="icons/arrow_next.svg"</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: { 
                    fade: false
                }
            }
        ]
    });

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.nav-menu'),
        menuItem = document.querySelectorAll('.nav-menu__item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('nav-menu_active');
            })
        })
    })
});


$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: false,
        speed: 800,
        adaptiveHeight: false,
        autoplay: false,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" onclick="this.blur();" class="slick-prev"><img src="icons/prev_arrow.svg"</button>',
        nextArrow: '<button type="button" onclick="this.blur();" class="slick-next"><img src="icons/next_arrow.svg"</button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                },
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true
                }
              }
        ]
        
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
          $(this)
              .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
              .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      function toggleSlide(item){
          $(item).each(function(i) {
              $(this).on('click', function(e) {
                  e.preventDefault();
                  $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                  $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                  })
            });
        }

      toggleSlide ('.catalog-item__back')
      toggleSlide ('.catalog-item__link')

      //modal

      $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn();
      })
      $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #thx').fadeOut();
      })

      $('.button_mini').each(function(i){
        $(this).on('click', function(){
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn();
        })
      })


      function validateForms(form){
        $(form).validate({
          rules: {
            phone: 'required',
            email: {
              required: true,
              email: true
            }
          },
          messages: {
            phone: "Пожалуйста, введите корректный номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
          }
        });
      }

      validateForms('#order form');
      validateForms('#consultation form');
      validateForms('#consultation-form');

      $('input[name=phone]').mask("+7 (999) 999-9999");


      $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function(){
          $(this).find("input").val("");

          $('#consultation, #order').fadeOut();
          $('.overlay, #thx').fadeIn('slow');

          $('form').trigger('reset')
        });
        return false;
      })


     
    $(window).scroll(function(){
        if($(this).scrollTop() > 1600){
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    })

    $("a[href^=#up]").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    new WOW().init();
  });
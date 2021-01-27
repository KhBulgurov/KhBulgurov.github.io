$(document).ready(function(){
    $('.main__subitem').each(function(i){
        $(this).on('click', function(){
            $('.modal__descr').text(i+1);
            var imageSource = $(this).closest('.main__subitem').find('img').attr('src');
            $('.modal__img').attr('src', imageSource);
            $('.overlay, .modal').fadeIn();
        })
    })
    $('.modal__close').on('click', function(){
        $('.overlay, #modal').fadeOut();
    })

});

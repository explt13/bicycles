$(document).ready(function() {
    $('.slider > .container').on('mousedown', function(event){
        $(this).css('cursor', 'grabbing')
    })
    $('.slider > .container').on('mouseup', function(){
        $(this).css('cursor', 'grab')
    })
    function ibg(){
        $.each($('.ibg'), function(index, val) {
            if ($(this).find('img').length > 0){
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")')
                $(this).find('img').hide()
            }
        })
    }
    ibg()
    $('.icon-menu').click(function(event){
        $(this).toggleClass('active');
        $('.menu__body').toggleClass('active')
        $('body').toggleClass('lock')
    });

    if($('.slider__body').length > 0){
        $('.slider__body').slick({
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
        })
    }
});
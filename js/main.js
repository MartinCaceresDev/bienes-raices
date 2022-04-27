$(document).ready(function(){
    // CAMBIO DE HEADER
    $(window).on('scroll', function(){
        let position= $('#first').offset();
        if($(window).scrollTop() >= position.top) {
            $('header').removeClass('transparent');
        }
        else {
            $('header').addClass('transparent');
        }
    })
    // ACCIONAMIENTO DE MENÚ LATERAL
    $('#burger').click(function(){
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    })
    // SMOOTH SCROLL
    $('a').on('click', function(){
        if(this.hash !==''){
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
})



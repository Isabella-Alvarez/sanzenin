$(document).ready(function(){
    
    /*Script de Activación de Slick Slider*/
    $('.slick-apps').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: true
    });
    
     $('.slick-web').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 5000,
                    dots: false,
                    infinite: true,
                    speed: 500,
                    fade: false,
                    cssEase: 'linear',
                    pauseOnHover: false,
                    arrows: true
                    });
    
    /* ------------------------------------------------------- */
    
    
    
    /* Menú Cortina Flotante */
    
    
    
    $('#cerrar').hide();
    
    $('#abrir').click(function(){
        $('aside#menu-cortina').animate({
            right: 0
        },500,'easeOutExpo');
        
        $('#abrir').hide();
        $('#cerrar').show();
        
        event.preventDefault();
    });
    
    $('#cerrar').click(function(){
        $('aside#menu-cortina').animate({
            right: -290
        },500,'easeOutExpo');
        
        $('#cerrar').hide();
        $('#abrir').show();
        
        event.preventDefault();
    });
    
    
    
    /* --------------------------------------------------------------- */
    
    
    
});
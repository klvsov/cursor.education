$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:50,
        autoplay:false,
        smartSpeed:1000,
        dots: true,
        nav:true,
        autoplayTimeout:2000,
        responsive:{
            360:{
                items:0
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
        }
    });
});


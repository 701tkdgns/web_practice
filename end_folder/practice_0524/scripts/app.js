$(document).ready(function(){
    // HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        smartSpeed: 1000,
        navText : ['PREV','NEXT'],
        responsive:{
            0:{
                nav:false
            },
            768:{
                nav:true
            }
        }
    })

    // project slider
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        smartSpeed: 1000,
        margin: 24,
        responsive:{
            0:{
                items:1,
                nav:false,
                margin:0,
            },
            768:{
                items:2,
            },
            1140:{
                items: 2,
                center: true,
                dots:true,
            }
        }
    })

    // reviews slider
    $('#reviews-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items: 1, 
        smartSpeed: 1000,
    })
});

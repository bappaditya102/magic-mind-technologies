$(document).ready(function () { 
    
    $('.owl-Programs').owlCarousel({
        loop:false,
        margin:35,
        responsiveClass:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,  
                margin:10,                           
            },
            580:{
                items:2,  
                margin:10,   
            },
            768:{
                items:3,
                margin:20,
            },
            1000:{
                items:4, 
                margin:20,
            },
            1200:{
                items:4,             
                
            }
        }
    });
    
    
});


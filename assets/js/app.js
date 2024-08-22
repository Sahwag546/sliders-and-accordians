$('.single-item').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1.7,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    
    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.show-three').slick({
    dots: true,
    arrow: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,

    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});
$('.third-slider').slick({
    dots: true,
    arrow: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    centermode: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
     
    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    
});




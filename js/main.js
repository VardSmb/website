$(function(){
    $('.product-item__favorite').on('click', function(){
        $(this).toggleClass('product-item__favorite--active')
    });

    $(".fixed-menu").hide();
$(window).scroll(function() {
    if(($(window).width() <= 700 && $(window).scrollTop() > 90) || ($(window).width() > 700 && $(window).scrollTop() > 230)) { 
        $('.fixed-menu').slideDown(200);
    } else {
        $('.fixed-menu').slideUp(200);       
    }     
});

$('.menu__btn').on('click', function(){
    $('.mobile-menu').toggleClass('mobile-menu--active').slide(200);
});

//Vlad, posmotri kod snizu. 
$('.filter__btn').on('click', function(){
    if($(window).width() < 1150){
     $('.aside-filter').toggleClass('aside-filter--active').slide(200);
    } else{
     $('.aside-filter .aside-filter--active').removeClass('aside-filter--active');
    }
});


    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__btn arrow-left"><img src="images/arrow-left.png" alt=""></button>',
        nextArrow: '<button class="product-slider__btn arrow-right"><img src="images/arrow-right.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.filter-style').styler();

    $('.filter__item-drop').on('click', function(){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    $('.footer__title-drop').on('click', function(){
        $(this).toggleClass('footer__title-drop--active');
        $(this).next().slideToggle('200');
    });

    var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 1000,
    from = 0,
    to = 0;

$range.ionRangeSlider({
	skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 800,
    onStart: updateInputs,
    onChange: updateInputs,
    postfix: " руб."
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});

$('.catalog__filter-btngrid').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
});

$('.catalog__filter-btnline').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
});


$('.product-card__slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    fade:true,
    asNavFor: ".product-card__slider-small"
});

$('.product-card__slider-small').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".product-card__slider-big",
    prevArrow: '<button class="product-slider__btn arrow-left"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="product-slider__btn arrow-right"><img src="images/arrow-right.png" alt=""></button>',
    touchMove: true,
    vertical: false,
});

$('.another__products-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__btn arrow-left"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="product-slider__btn arrow-right"><img src="images/arrow-right.png" alt=""></button>',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }
    ]

});

$('.another__collection-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__btn arrow-left"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="product-slider__btn arrow-right"><img src="images/arrow-right.png" alt=""></button>',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.viewed__products-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__btn arrow-left"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="product-slider__btn arrow-right"><img src="images/arrow-right.png" alt=""></button>',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }
    ]

});

$(".open-popup").click(function()
{
 var iddiv = $(this).attr("iddiv");
 $('#'+iddiv).fadeIn(300);
 $('.popup-overlay').attr('opendiv',iddiv);
 return true;
});
 
$('.close-popup').click(function()
{
 var iddiv = $(".open-popup").attr('opendiv');
 $('.popup-overlay').fadeOut(300);
 $('#'+iddiv).fadeOut(300);
});

	$(".popup-btn").click(function() {
    $(".popup-overlay").fadeOut();
	$("#popup-form.popup-overlay").fadeIn();
});  

$('input[name="phone"]').mask('+7 (000) 000-00-00');
$('input[name="phone_c"]').mask('+7 (000) 000-00-00');






});


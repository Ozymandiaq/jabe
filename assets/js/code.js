


$(document).ready(function () {
   
    var one = true;
    var two = true;
    var scrollPosM88 = $('.sub-tours__bannerBlock').offset().top;
    
    var onceM88 = false;
    $(window).scroll(function(){
        var scrolled88 = $(window).scrollTop();
        if ((scrolled88 > scrollPosM88) && !onceM88) {
            onceM88 = true;
            $('.line_long').addClass('active')
            setTimeout(function(){
                $('.op1').addClass('active')
                setTimeout(function(){
                    $('.op2').addClass('active')
                    setTimeout(function(){
                        $('.op3').addClass('active')
                        setTimeout(function(){
                            $('.line_sm').addClass('active')
                        }, 1000)
                    }, 500)
                }, 500)
            }, 500)
        }

    //     if(one && $('.trends').hasClass('aos-animate')){
    //         one = false;
    //         setTimeout(function(){
    //             $('.trend-1').addClass('active');
    //             setTimeout(function(){
    //                 $('.trend-2').addClass('active')
    //                 setTimeout(function(){
    //                     $('.trend-3').addClass('active')
    //                     setTimeout(function(){
    //                         $('.trend-4').addClass('active')
    //                         setTimeout(function(){
    //                             $('.trend-5').addClass('active')
    //                         }, 500)
    //                     }, 500)
    //                 }, 500)
    //             }, 500)
    //         }, 500)
    //     }
    //     if(two && $('.line-animate').hasClass('aos-animate')){
    //         two = false;
    //         $('.line-animate').addClass('active')
    //     }
    });

    //-------------form submit--------------
    $('body').on('click', '.submit', function (e) {
        e.preventDefault();
        var success = true;
        $('.not_empty').each(function () {
            var val = $(this).val();
            if(val == ''){
               $(this).addClass('error');success = false;
            } else{$(this).removeClass('error');}
            if($(this).hasClass('phone')){
                val = val.replace(/[^0-9]/g,'');
                if (val.length != "11") {$(this).addClass('error');success = false;
                }else{$(this).removeClass('error');}
            }
        });
        if(success){
            var loader = $(".load");
            var form = $(this).data('form');
            $.ajax({
                type: 'POST',
                url: 'mail/mail.php',
                data: $(form).serialize(),
                beforeSend: function () {
                    $(loader).attr('src', $(loader).data('assets')).show();
                    $(form).animate({
                        opacity: 0
                    }, 600, function () {
                        $(form).css({
                            visibility: 'hidden'
                        });
                    });
                },
                success: function (data) {
                    $(loader).hide();
                    $('.thanks').show();
                }
            })
        }
    });
    $('body').on('click', '.close, .modal-backdrop', function (e) {
        $('.thanks').hide(); $('form').css({opacity: 1, visibility: 'visible'});
    });
    $(".phone").inputmask("+7 (999) 999 99 99");
});
//-----------------------------------------------------------------------------------------------------------------



$('.openGuideAzamat').click(function(){
    $('.popupGuideAzamat').css({top: $(window).scrollTop() + 140 }).addClass('popupGuideActive');
    $('.popupGuideBack').fadeIn();

    $('.popupGuideBack, .popupGiudeCloseBtn').click(function(){
        $('.popupGuideAzamat').css({top: - 3000}).removeClass('popupGuideActive');
        $('.popupGuideBack').fadeOut();
    });
});


$('.openGuideAygerim').click(function(){
    $('.popupGuideAygerim').css({top: $(window).scrollTop() + 140 }).addClass('popupGuideActive');
    $('.popupGuideBack').fadeIn();

    $('.popupGuideBack, .popupGiudeCloseBtn').click(function(){
        $('.popupGuideAygerim').css({top: - 3000}).removeClass('popupGuideActive');
        $('.popupGuideBack').fadeOut();
    });
});


$('.openGuideAylin').click(function(){
    $('.popupGuideAylin').css({top: $(window).scrollTop() + 140 }).addClass('popupGuideActive');
    $('.popupGuideBack').fadeIn();

    $('.popupGuideBack, .popupGiudeCloseBtn').click(function(){
        $('.popupGuideAylin').css({top: - 3000}).removeClass('popupGuideActive');
        $('.popupGuideBack').fadeOut();
    });
});


$('.openGuideAlmat').click(function(){
    $('.popupGuideAlmat').css({top: $(window).scrollTop() + 140 }).addClass('popupGuideActive');
    $('.popupGuideBack').fadeIn();

    $('.popupGuideBack, .popupGiudeCloseBtn').click(function(){
        $('.popupGuideAlmat').css({top: - 3000}).removeClass('popupGuideActive');
        $('.popupGuideBack').fadeOut();
    });
});


$('.openGuideAray').click(function(){
    $('.popupGuideAray').css({top: $(window).scrollTop() + 140 }).addClass('popupGuideActive');
    $('.popupGuideBack').fadeIn();

    $('.popupGuideBack, .popupGiudeCloseBtn').click(function(){
        $('.popupGuideAray').css({top: - 3000}).removeClass('popupGuideActive');
        $('.popupGuideBack').fadeOut();
    });
});


$('.openGuideIlyas').click(function(){
    $('.popupGuideIlyas').css({top: $(window).scrollTop() + 140 }).addClass('popupGuideActive');
    $('.popupGuideBack').fadeIn();

    $('.popupGuideBack, .popupGiudeCloseBtn').click(function(){
        $('.popupGuideIlyas').css({top: - 3000}).removeClass('popupGuideActive');
        $('.popupGuideBack').fadeOut();
    });
});


$('.openGuideMayra').click(function(){
    $('.popupGuideMayra').css({top: $(window).scrollTop() + 140 }).addClass('popupGuideActive');
    $('.popupGuideBack').fadeIn();

    $('.popupGuideBack, .popupGiudeCloseBtn').click(function(){
        $('.popupGuideMayra').css({top: - 3000}).removeClass('popupGuideActive');
        $('.popupGuideBack').fadeOut();
    });
});


$('.openGuideStranger').click(function(){
    $('.popupGuideStranger').css({top: $(window).scrollTop() + 140 }).addClass('popupGuideActive');
    $('.popupGuideBack').fadeIn();

    $('.popupGuideBack, .popupGiudeCloseBtn').click(function(){
        $('.popupGuideStranger').css({top: - 3000}).removeClass('popupGuideActive');
        $('.popupGuideBack').fadeOut();
    });
});


$('.openGuideAnastasiya').click(function(){
    $('.popupGuideAnastasiya').css({top: $(window).scrollTop() + 140 }).addClass('popupGuideActive');
    $('.popupGuideBack').fadeIn();

    $('.popupGuideBack, .popupGiudeCloseBtn').click(function(){
        $('.popupGuideAnastasiya').css({top: - 3000}).removeClass('popupGuideActive');
        $('.popupGuideBack').fadeOut();
    });
});


$(window).scroll(function(){
    $('.popupGuideActive').css({'top': $(window).scrollTop() + 100 })
}).scroll();


//-----------------------MENU-POPUP--------------------

$('.openMenu').click(function(){
    $('.popupMenu').css({top: $(window).scrollTop() + 0 }).addClass('popupMenuActive');
    $('.popupGuideBack').fadeIn();
    $('header').css({background: 'none'});
    $('.menu').css({display: 'none'})
    $('.popupMenuCloseBtn').css({display: 'flex'})

    $('.popupGuideBack, .popupMenuCloseBtn').click(function(){
        $('.popupMenu').removeClass('popupMenuActive');
        $('.popupGuideBack').fadeOut();
        $('header').css({background: 'linear-gradient(to right, #3f3f3f, #000000)'});
        $('.menu').css({display: 'block'})
        $('.popupMenuCloseBtn').css({display: 'none'})
    });
});


$(window).scroll(function(){
    $('.popupMenuActive').css({'top': $(window).scrollTop() + 0 })
}).scroll();

//-----------------------MAIN-POPUP--------------------

$('.openGuide').click(function(){
    $('.popupGuide').css({top: $(window).scrollTop() + 250 }).addClass('popupGuideActive');
    $('.popupGuideBack').fadeIn();

    $('.popupGuideBack, .popupGiudeCloseBtn').click(function(){
        $('.popupGuide').css({top: - 3000}).removeClass('popupGuideActive');
        $('.popupGuideBack').fadeOut();
    });
});


$(window).scroll(function(){
    $('.popupGuideActive').css({'top': $(window).scrollTop() + 250 })
}).scroll();

//------------------------FLARE REPEAT------------------
setInterval(function () {
    $('.text-box').addClass('flareActive');
    setTimeout(function () {
        $('.text-box').removeClass('flareActive');
    },1000)
}, 9000);




//-----------------------------TOUR SLIDE HOVER----------------------------------------------

var tourSlide = document.getElementById('tourItemSlide');
document.getElementById('tourItemImg').addEventListener("mouseover", function(){tourSlide.style.left = "35%";
this.addEventListener("mouseout", function(){tourSlide.style.left = "-14%";});
});

var tourSlide1 = document.getElementById('tourItemSlide1');
document.getElementById('tourItemImg1').addEventListener("mouseover", function(){tourSlide1.style.left = "35%";
this.addEventListener("mouseout", function(){tourSlide1.style.left = "-14%";});
});

var tourSlide2 = document.getElementById('tourItemSlide2');
document.getElementById('tourItemImg2').addEventListener("mouseover", function(){tourSlide2.style.left = "35%";
this.addEventListener("mouseout", function(){tourSlide2.style.left = "-14%";});
});

var tourSlide3 = document.getElementById('tourItemSlide3');
document.getElementById('tourItemImg3').addEventListener("mouseover", function(){tourSlide3.style.left = "35%";
this.addEventListener("mouseout", function(){tourSlide3.style.left = "-14%";});
});
//--------------------------------------

var tourSlide = document.getElementById('tourItemSlide');
tourSlide.addEventListener("mouseover", function(){tourSlide.style.left = "35%";
tourSlide.addEventListener("mouseout", function(){tourSlide.style.left = "-14%";});
});

var tourSlide1 = document.getElementById('tourItemSlide1');
tourSlide1.addEventListener("mouseover", function(){tourSlide1.style.left = "35%";
tourSlide1.addEventListener("mouseout", function(){tourSlide1.style.left = "-14%";});
});

var tourSlide2 = document.getElementById('tourItemSlide2');
tourSlide2.addEventListener("mouseover", function(){tourSlide2.style.left = "35%";
tourSlide2.addEventListener("mouseout", function(){tourSlide2.style.left = "-14%";});
});

var tourSlide3 = document.getElementById('tourItemSlide3');
tourSlide3.addEventListener("mouseover", function(){tourSlide3.style.left = "35%";
tourSlide3.addEventListener("mouseout", function(){tourSlide3.style.left = "-14%";});
});
//--------------------------------------

//-----------------------------TOUR SLIDE MOB HOVER----------------------------------------------

// var tourSlideM = document.getElementById('tourItemSlideM');
// document.getElementById('tourItemImgM').addEventListener("mouseover", function(){tourSlideM.style.left = "40%";
// this.addEventListener("mouseout", function(){tourSlideM.style.left = "-12.5%";});
// });

// var tourSlideM1 = document.getElementById('tourItemSlideM1');
// document.getElementById('tourItemImgM1').addEventListener("mouseover", function(){tourSlideM1.style.left = "40%";
// this.addEventListener("mouseout", function(){tourSlideM1.style.left = "-12.5%";});
// });

// var tourSlideM2 = document.getElementById('tourItemSlideM2');
// document.getElementById('tourItemImgM2').addEventListener("mouseover", function(){tourSlideM2.style.left = "40%";
// this.addEventListener("mouseout", function(){tourSlideM2.style.left = "-12.5%";});
// });

// var tourSlideM3 = document.getElementById('tourItemSlideM3');
// document.getElementById('tourItemImgM3').addEventListener("mouseover", function(){tourSlideM3.style.left = "40%";
// this.addEventListener("mouseout", function(){tourSlideM3.style.left = "-12.5%";});
// });
// //--------------------------------------

// var tourSlideM = document.getElementById('tourItemSlideM');
// tourSlideM.addEventListener("mouseover", function(){tourSlideM.style.left = "40%";
// tourSlideM.addEventListener("mouseout", function(){tourSlideM.style.left = "-12.5%";});
// });

// var tourSlideM1 = document.getElementById('tourItemSlideM1');
// tourSlideM1.addEventListener("mouseover", function(){tourSlideM1.style.left = "40%";
// tourSlideM1.addEventListener("mouseout", function(){tourSlideM1.style.left = "-12.5%";});
// });

// var tourSlideM2 = document.getElementById('tourItemSlideM2');
// tourSlideM2.addEventListener("mouseover", function(){tourSlideM2.style.left = "40%";
// tourSlideM2.addEventListener("mouseout", function(){tourSlideM2.style.left = "-12.5%";});
// });

// var tourSlideM3 = document.getElementById('tourItemSlideM3');
// tourSlideM3.addEventListener("mouseover", function(){tourSlideM3.style.left = "40%";
// tourSlideM3.addEventListener("mouseout", function(){tourSlideM3.style.left = "-12.5%";});
// });
//--------------------------------------
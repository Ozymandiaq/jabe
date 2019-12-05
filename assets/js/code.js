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
    $('.popupGuideActive').css({'top': $(window).scrollTop() + 140 })
}).scroll();


//-----------------------MENU-POPUP--------------------

$('.openMenu').click(function(){
    $('.popupMenu').css({top: $(window).scrollTop() + 0 }).addClass('popupMenuActive');
    $('.popupGuideBack').fadeIn();

    $('.popupMenuCloseBtn').click(function(){
        $('.popupMenu').removeClass('popupMenuActive');
    });
});


$(window).scroll(function(){
    $('.popupMenuActive').css({'top': $(window).scrollTop() + 0 })
}).scroll();






function changeItem() {
    document.getElementsByClass('').style.width = '200px';
  }// функция, которая сработает при наведении.
  //она означает - выбрать элемент к Id у которого надо что-то изменить.
  // когда в скобки где написано one-two добавите Id своего элемента
  function rechangeItem() {
    document.getElementById('one-two').style.width = '100px';
  }// тут всё также. но наобарот. протсес происходящий про отводе курсора.
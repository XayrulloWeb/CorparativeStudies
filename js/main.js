(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonial carousel
    $(".testimonial-carousel-1").owlCarousel({
        loop: true,
        dots: false,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

    $(".testimonial-carousel-2").owlCarousel({
        loop: true,
        dots: false,
        rtl: true,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

})(jQuery);
document.addEventListener('DOMContentLoaded', function () {
    var showPopupBtns = document.querySelectorAll('.showPopupBtn');
    var closePopupBtn = document.querySelector('.closePopupBtn');
    var popup = document.querySelector('.popup');

    showPopupBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            document.body.style.overflow = 'hidden';
            popup.style.display = 'block';
        });
    });

    closePopupBtn.addEventListener('click', function () {
        document.body.style.overflow = '';
        popup.style.animation = 'fadeOut 0.5s ease-in-out';
        setTimeout(function () {
            popup.style.display = 'none';
            popup.style.animation = '';
        }, 500);
    });

    popup.addEventListener('click', function (e) {
        // Предотвращаем закрытие всплывающего окна при клике внутри него
        e.stopPropagation();
    });

    window.addEventListener('click', function () {
        // Закрываем всплывающее окно при клике вне него
        document.body.style.overflow = '';
        popup.style.animation = 'fadeOut 0.5s ease-in-out';
        setTimeout(function () {
            popup.style.display = 'none';
            popup.style.animation = '';
        }, 500);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const popupTriggers = document.querySelectorAll('.popup-trigger');
    const closeButtons = document.querySelectorAll('.close-popup');
    const smallScreen = window.matchMedia('(max-width: 768px)');

    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(popupId);

            if (popup && smallScreen.matches) {
                popup.style.display = 'block';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const popup = this.closest('.popup2');
            if (popup) {
                popup.style.display = 'none';
            }
        });
    });
});
// Объединение обработчиков событий для кнопок закрытия
document.addEventListener('DOMContentLoaded', function () {
    var closePopupBtn = document.querySelector('.closePopupBtn');
    var closeButtons = document.querySelectorAll('.close-popup');
    var popup = document.querySelector('.popup');

    function closePopup() {
        document.body.style.overflow = '';
        popup.style.animation = 'fadeOut 0.5s ease-in-out';
        setTimeout(function () {
            popup.style.display = 'none';
            popup.style.animation = '';
        }, 500);
    }

    closePopupBtn.addEventListener('click', closePopup);

    closeButtons.forEach(function (button) {
        button.addEventListener('click', closePopup);
    });
});

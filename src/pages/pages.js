function init() {

    var app = {
        matchMediaTablet: window.matchMedia("(max-width: 1023px)"),
        matchMediaMobile: window.matchMedia("(max-width: 767px)"),
        $prodLeftArrow: $(".product__left-arrow"),
        $prodRightArrow: $(".product__right-arrow"),
        $sliderTopLeftArrow: $(".slider-top__left-arrow"),
        $sliderTopRightArrow: $(".slider-top__right-arrow"),
        $companyLeftArrow: $(".company__left-arrow"),
        $companyRightArrow: $(".company__right-arrow"),
        $teamLeftArrow: $(".team-our__left-arrow"),
        $teamRightArrow: $(".team-our__right-arrow"),
        $proposalWrapper: $(".proposal-wrapper"),
        slick: function (slider, left, right, arrowsBool, dotsBool, slideToShow, slideToShow1300, slideToShow1024, slideToShow768) {
            slider.slick({
                // normal options...
                infinite: true,
                prevArrow: left,
                nextArrow: right,
                dots: dotsBool,
                autoplay: true,
                slidesToShow: slideToShow,
                slidesToScroll: 1,

                // the magic
                responsive: [
                    {

                        breakpoint: 1300,
                        settings: {
                            slidesToShow: slideToShow1300,
                            dots: dotsBool
                        }

                    },
                    {

                        breakpoint: 1023,
                        settings: {
                            slidesToShow: slideToShow1024,
                            dots: dotsBool
                        }

                    },
                    {

                        breakpoint: 767,
                        settings: {
                            slidesToShow: slideToShow768,
                            dots: dotsBool,
                            arrows: arrowsBool
                        }

                    },
                    {

                        // breakpoint: 300,
                        // settings: "unslick" // destroys slick

                    }
                ]
            })
        },
        scrollTop: function () {
            var scrollUp = $('.scroll-up');
            $(window).on('scroll', function () {

                var scrollTop = $(document).scrollTop();
                if (scrollTop >= window.innerHeight) {
                    scrollUp.show();
                } else {
                    scrollUp.hide();
                }

            });
            scrollUp.on('click', function () {

                var body = $('html, body');
                var top = $(window).scrollTop(); // Get position of the body

                if (top != 0) {
                    body.animate({scrollTop: 0}, 1000);
                }
            });
        },
        formMask: function () {
            var $phoneMask = $(".js-phone-mask");
            $($phoneMask).mask("+38 (000) 000-00-00", {
                    clearIfNotMatch: true
                }
            );
        },
        formValid: function () {
            var $form = $(".form__valid"),
                $btn = $(".form__btn");


            $btn.on("click", function (e) {
                var $form = $(this).parents("form"),
                    $inputName = $(this).parents($("form")).find($("input, textarea")),
                    msg = $form.serialize();
                if ($form.parsley().isValid()) {
                    console.log("send form");
                    alert("Thanks for the application, we will contact you soon.");
                    // $.ajax({
                    //     type: 'POST',
                    //     url: 'form.php',
                    //     data: msg,
                    //     success: function (data) {
                    //         alert("Thanks for the application, we will contact you soon.");
                    //         $inputName.val('');
                    //         $inputPhone.val('');
                    //     },
                    //     error: function (xhr, str) {
                    //         console.log('Error!');
                    //     }
                    // });

                    $($inputName).removeClass("error__input").val('');
                    $inputName.each(function (i, item) {
                        $(item).removeClass("error__input").val('');
                    });
                    app.$proposalWrapper.fadeOut();
                }
                else {
                    $inputName.each(function (i, item) {
                        if (!$(item).val()) {
                            $(item).addClass("error__input");
                        } else {
                            $(item).removeClass("error__input");
                        }
                    });
                    console.log("no send form");
                }
            });
        }

    };


}

module.exports = {
    init: init
};
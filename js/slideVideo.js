$(document).ready(function() {
    function videoEffect() {
        var activeE = $('.active');
        console.log(activeE);
        var elementRemove = activeE[0]
        var elementEff = activeE[1];
        $('.scale-up').removeClass('scale-up');
        $(elementEff).addClass('scale-up');
    }

    $(".owl-1").owlCarousel({
            dots: false,
            margin: 50,
            loop: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1

                },
                // breakpoint from 480 up
                480: {
                    items: 1
                },
                // breakpoint from 768 up
                1200: {
                    items: 3
                }
            },
            onDragged: videoEffect
        }

    )
    $(".owl-2").owlCarousel({
            dots: true,
            loop: true,
            items: 1,

            dotsContainer: '#carousel-custom-dots'
        }

    )
    $('.owl-4').owlCarousel({
        loop: false,
        items: 5,
        dots: false,
        margin: 70,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            700: {
                items: 5
            }
        }
    });

    var owl1 = $('.owl-1');
    owl1.owlCarousel();
    $('.owl1-prev').click(function(event) {

        event.preventDefault();
        owl1.trigger('prev.owl.carousel');
        videoEffect();
    })
    $('.owl1-next').click(function(event) {
        event.preventDefault();
        owl1.trigger('next.owl.carousel');
        videoEffect();
    });
    // owl-2 Event
    var owl2 = $('.owl-2');
    owl2.owlCarousel();
    $('.owl-dot').click(function() {
        owl2.trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    //owl-4 Event
    var owl4 = $('.owl-4');
    owl4.owlCarousel();
    $('.owl4-prev').click(function(event) {

        event.preventDefault();
        owl4.trigger('prev.owl.carousel');

    })
    $('.owl4-next').click(function(event) {
        event.preventDefault();
        owl4.trigger('next.owl.carousel');
        console.log("good")

    });
    //--------
    videoEffect();
});
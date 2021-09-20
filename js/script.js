
/*========================================================================
  preloader
==========================================================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*========================================================================
 team mmeber
==========================================================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1 /*not working*/
            },

            480: {
                items: 2  
            }
        }
    });
});

/*========================================================================
  progress bar
==========================================================================*/
$(function () {

    $("#progress-element").waypoint(function () {


        $('.progress-bar').each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    })

});

/*========================================================================
services tab
==========================================================================*/
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide',
    });
});

/*========================================================================
portfolio tab
==========================================================================*/
$(window).on('load', function () {
    // initialise Isotope//
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');


        // filter portfolio

        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');


    });

});

/*========================================================================
magnifier
==========================================================================*/
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true, // set to true to enable gallery


        }

    });

});

/*========================================================================
  testimonal
==========================================================================*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*========================================================================
 counter
==========================================================================*/
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });
});

/*========================================================================
clients
==========================================================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*========================================================================
navigation bar
==========================================================================*/
$(function () {

    //show/hide nav on page load
    showHideNav();

    $(window).scroll(function(){
        //show/hide nav on window scroll
        showHideNav();

    });

    function showHideNav() {
        if($(window).scrollTop () > 50 ) {
            //show white nav
            $("nav").addClass("white-nav-top");

            //show dark logo
            $(".navbar-brand img").attr("src", "images/solo-images/logo/logo-dark.png");

            //show back to top button
            $("#back-to-top").fadeIn();

        } else{
            //hide white nav
            $("nav").removeClass("white-nav-top");

            //show normal logo
            $(".navbar-brand img").attr("src", "images/solo-images/logo/logo.png");

            //hide back to top button
            $("#back-to-top").fadeOut();


        }
    }
});


/*========================================================================
  smoothscrolling
==========================================================================*/
$(function () {

    $("a.smooth-scroll").click(function(event){
        event.preventDefault();

        //get section id like #about, #services #portfolio, #team, #blog, #contact

        var section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop:$(section_id).offset().top -64
        }, 1250, "easeInOutExpo");

    });

});


/*========================================================================
    Google Map
==========================================================================*/
$(window).on('load', function () {

    var addressString = '38A Sunnyhaven Avenue, Beach Haven, Auckland 0626 New Zealand';
    var myLatLng = {lat:-36.793490, lng:174.685860};

    var map = new google.maps.Map(document.getElementById("map"), { 
        zoom: 11, center: myLatLng 
    });

    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Click to See Address"
    });
    const infowindow = new google.maps.InfoWindow({
        content: addressString,
    });

    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
    });

    google.maps.event.addDomListener (window, 'resize', function() {
     
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
        
    });
    
    
});


/*========================================================================
 Animation
==========================================================================*/
//animate on scroll
$(function () {
   
    new WOW().init();
});

//home animation on page load

$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
    
});
   






























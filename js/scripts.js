'use strict';

// 00. Preloader
$(window).load(function() {
  $('#preloader').delay(600).fadeOut(500);
});

$(document).ready(function() {
  var files = ['thumb_BGYU3857_1024.jpg','thumb_SOZZ5537_1024.jpg','thumb_BHNW5371_1024.jpg','thumb_BLFY5395_1024.jpg','thumb_BYJJ5263_1024.jpg','thumb_DAYZ7547_1024.jpg','thumb_DRJP6142_1024.jpg','thumb_FPCS2125_1024.jpg','thumb_FTQO6744_1024.jpg','thumb_GIKK8483_1024.jpg','thumb_GQMF3160_1024.jpg','thumb_IMGX8872_1024.jpg','thumb_IYEB3220_1024.jpg','thumb_JAWM7937_1024.jpg','thumb_KDDU0770_1024.jpg','thumb_LBGQ2093_1024.jpg','thumb_NOZI3158_1024.jpg','thumb_NSSY9841_1024.jpg','thumb_NVFC2778_1024.jpg','thumb_RNEZ0091_1024.jpg','thumb_TKDZ9805_1024.jpg','thumb_TVIA7417_1024.jpg','thumb_UUSK1423_1024.jpg','thumb_VEYR4547_1024.jpg','thumb_VOOG6636_1024.jpg','thumb_VVBY8533_1024.jpg','thumb_XESV3564_1024.jpg','thumb_YELG9285_1024.jpg' ];

  var $gallery = $('#owl-gallery');

  files.forEach(function(file) {
    var small = './images/gallery/thumbs/' + file;
    var big = './images/gallery/big/' + file;
    var item = '\
    <div class="item">\
      <div class="image">\
        <a href="'+big+'" data-rel="lightcase:mw-gallery">\
          <img src="'+small+'" alt="">\
        </a>\
      </div>\
    </div>';
    $gallery.append(item);
  });
  // 01. Prevent empty links scroll to top default functionality
  /* <![CDATA[ */
  ( function( $ ) {
    $( 'a[href*=#]:not([href=#])' ).on('click', function(e) {
      e.preventDefault();
    });
  })( jQuery );
  /* ]]> */

  // 02. Main navigation
  $('.show-menu').on('click', function(e) {
    if ( $('.onepage').length > 0 ) {
      e.preventDefault();
    }
    $('#menu').toggleClass("show");
  });
  $('#menu li a').on('click', function(e) {
    if ( $('.onepage').length > 0 ) {
      e.preventDefault();
    }
    $('#menu').toggleClass("show");
  });
  if ($("header").scrollTop() < $('#header').height()) {
    $(".show-menu").on( 'click', function() {
      $('html, body').animate({
        scrollTop: $("header").offset().top
      }, 500);
    });
  }

  // 03. Fullwidth Image Slider
  if ( $('#owl-fullwidth').length > 0 ) {
    $('#owl-fullwidth').owlCarousel({
      autoPlay: 9000,
      navigation : true,
      navigationText: ['', ''],
      slideSpeed : 900,
      singleItem : true,
      pagination : false
    });
  }

  // 04. Gallery slider
  if ( $('#owl-gallery').length > 0 ) {
    $("#owl-gallery").owlCarousel({
      navigation : false,
      itemsCustom : [
        [320, 1],
        [480, 1],
        [768, 2],
        [992, 3],
        [1200, 3]
      ],
      pagination : true
    });
  }

  // 05. People Involved slider
  if ( $('#owl-people').length > 0 ) {
    $("#owl-people").owlCarousel({
      autoPlay: 4000,
      stopOnHover : true,
      navigation : false,
      itemsCustom : [
        [320, 1],
        [480, 1],
        [768, 2],
        [992, 3],
        [1200, 3]
      ],
      pagination : true
    });
  }

  // 06. Parallax effects
  if( !device.tablet() && !device.mobile() && $('#parallax-quote').lenght > 0 ) {
    $('#parallax-quote').parallax("50%", 0.2);
  }

  // 07. Lightcase
  $('a[data-rel="lightcase:mw-gallery"]').lightcase({
    transition: 'elastic',
    showSequenceInfo: false
  });
  $('a[data-rel="lightcase:mw-groomsmen"]').lightcase({
    transition: 'elastic',
    showSequenceInfo: false
  });
  $('a[data-rel="lightcase:mw-bridesmaid"]').lightcase({
    transition: 'elastic',
    showSequenceInfo: false
  });

  // 08. Scroll To Top
  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 80) {
        $('#top-scroll').fadeIn();
      } else {
        $('#top-scroll').fadeOut();
      }
      // Sticky header navigation
      if($('.image-header').length > 0) {
        var headerHeight = $('.image-header').height();
      } else if ($('.video-header').length > 0) {
        var headerHeight = $('.video-header').height();
      } else if ($('.slider-header').length > 0) {
        var headerHeight = $('.slider-header').height();
      }
      if($(this).scrollTop() > headerHeight) {
        $('header').addClass('sticky');
        $('.keep').addClass('height');
      } else {
        $('header').removeClass('sticky');
        $('.keep').removeClass('height');
      }
    });

    $('#top-scroll').on('click', function() {
      $('body,html').animate({scrollTop:0}, 1200);
    });

  });

  // 09. Smooth Scroll to Section
  $(function() {
    $('a[href*=#]:not([href=#])').on('click', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 100
          }, 900);
          return false;
        }
      }
    });
  });

  // 10. Countdown
  if ( $('.countdown').length > 0 ) {
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $this.html(event.strftime(
          '<div><p>%w</p><span>Setmanes</span></div><div><p>%D</p><span>Dies</span></div><div><p>%H</p><span>Hores</span></div><div><p>%M</p><span>Minuts</span></div><div><p>%S</p><span>Seconds</span></div>'
        ));
      });
    });
  }

  // 11. Material Inputs Fields
  $('#contact input').on('focus', function() {
    $(this).siblings('.text-label').addClass('active');
  });
  $('#contact input').on('blur', function() {
    if( $(this).val() == '' ) {
      $(this).siblings('.text-label').removeClass('active');
    } else {
      $(this).siblings('.text-label').addClass('active');
    }
  });


  // 13. Google Maps with markers
  google.maps.event.addDomListener(window, 'load', init);
  function init() {
    // Basic options for a simple Google Map
    var image1 = 'images/wedding-pin.png';
    var image2 = 'images/party-pin.png';
    var image3 = 'images/restaurant-pin.png';
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 11,
      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(41.637942, 2.732259), // DBlanc
      scrollwheel: false,
      zoomControl: false,
      // How you would like to style the map.
      // This is where you would paste any style found on Snazzy Maps.
      styles: [ { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#e9e9e9" }, { "lightness": 17 } ] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [ { "color": "#f5f5f5" }, { "lightness": 20 } ] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#ffffff" }, { "lightness": 17 } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 } ] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [ { "color": "#ffffff" }, { "lightness": 18 } ] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [ { "color": "#ffffff" }, { "lightness": 16 } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#f5f5f5" }, { "lightness": 21 } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#dedede" }, { "lightness": 21 } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 } ] }, { "elementType": "labels.text.fill", "stylers": [ { "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 } ] }, { "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "geometry", "stylers": [ { "color": "#f2f2f2" }, { "lightness": 19 } ] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [ { "color": "#fefefe" }, { "lightness": 20 } ] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [ { "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 } ] }]
    };
    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    // Let's also add a markers while we're at it
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(41.637942, 2.732259),
      map: map,
      title: 'Wedding',
      icon: image1
    });
    // var marker2 = new google.maps.Marker({
    //     position: new google.maps.LatLng(40.6700, -73.9900),
    //     map: map,
    //     title: 'Party',
    //     icon: image2
    // });
    // var marker3 = new google.maps.Marker({
    //     position: new google.maps.LatLng(40.6800, -73.8400),
    //     map: map,
    //     title: 'Restaurant',
    //     icon: image3
    // });
  }

  // 14. YouTUBE Video Header
  if (!device.tablet() && !device.mobile() && ( $('.video-header').length > 0 )) {
    $(".player").mb_YTPlayer();
    $(".player").YTPApplyFilters({
      //grayscale: 10,
      //opacity: 10,
      //blur: 5
    });
  }
});

/**
 * Exoplanet Custom JS
 *
 * @package Exoplanet
 *
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 */

//  function showOTSearch()
// {
//   jQuery(".serach_outer").slideDown(700);
// }
// function closeOTSearch()
// {
//   jQuery(".serach_outer").slideUp(700);
// }


jQuery(function($){
  "use strict";
  jQuery('.menu > ul').superfish({
    // delay:       500,
    // animation:   {opacity:'show',height:'show'},
    // speed:       'fast'
  });

});


// MOBILE MENU
jQuery('.mobile-open').on('click', function () {
  jQuery(this).toggleClass('Show');
  jQuery(this).parents('.header-nav-box').toggleClass("open");
  // console.log('hello');
})
jQuery(".author-login").click(function(){
  jQuery(".login-details").toggle();
  // console.log('hello');
});

jQuery(document).ready(function () {
    null != localStorage.getItem("state") && (localStorage.settingNight, jQuery("body").toggleClass("light"), jQuery(".toggle-handle").toggleClass("selected")),
        jQuery(".toggle-handle").click(function () {
            jQuery("body").toggleClass("light"), jQuery(".toggle-handle").toggleClass("selected"), jQuery(".toggle-handle").hasClass("selected") ? localStorage.setItem("state", "true") : localStorage.removeItem("state");
        });
});

// THEME OWL SLIDERS

jQuery('document').ready(function(){
  // ------Silder Video-----------
  jQuery('.btnPlay.player-button').on('click', function(){
    jQuery('.player .player-controls .progress-ball').addClass('playshow');
    // console.log('hello');
    return false;
  });
  jQuery('.btnPlay.player-button').on('click', function(){
    jQuery('.player .player-controls .time').addClass('playtime');
    // console.log('hello');
    return false;
  });

  jQuery('.mobile-open').on('click', function () {
    jQuery(this).toggleClass('Show');
    jQuery(this).parents('.header-main-sidebar').toggleClass("open");
  })

   // ----Header Search---------------
   jQuery('.widget_product_search button').text('');
   jQuery('.widget_product_search button').append('<i class="fas fa-search ms-3"></i>');

  // ------------Countdown---------------
  function flashcountdown($timer,mydate){
    // Set the date we're counting down to
    var countDownDate = new Date(mydate).getTime();
    // Update the count down every 1 second
    var x = setInterval(function() {
        // Get todays date and time
        var now = new Date().getTime();
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Output the result in an element with id="timer"
        $timer.html( "<div class='numbers'><span class='timer_days'>" + days + "</span><span class='nofont'>Day</span>" + "</div>" + "   " +"<div class='numbers'><span class='timer_days'>" + hours + "</span><span class='nofont'>Hour</span>" + "</div>" + "   " + "<div class='numbers'><span class='timer_days'>" + minutes + "</span><span class='nofont'>Min</span>" + "</div>" + "   " + "<div class='numbers'><span class='timer_days'>" + seconds + "</span><span class='nofont'>Sec</spn" + "</div>");

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            $timer.html("Timer Up -EVENT EXPIRED");
        }
    }, 1000);
}

  var mydate =jQuery('.date').val();
  jQuery(".countdown").each(function(){
      flashcountdown(jQuery(this),mydate);
  });

  jQuery('.newsletter-data h2').each(function() {
      var word = jQuery(this).html();
      var index = word.indexOf(' ');
      if(index == -1) {
          index = word.length;
      }
      jQuery(this).html('<span class="first-word">' + word.substring(0, index) + '</span>' + word.substring(index, word.length));
  });

  jQuery('#latest_movies .carousel').slick({
    slidesToShow: 5,
    dots:false,
    margin: 20,
    prevArrow :'<i class="fas fa-chevron-left"></i>',
    nextArrow : '<i class="fas fa-chevron-right"></i>',
    responsive: [
    {
      breakpoint: 1299,
      settings: {
        slidesToShow: 4,
      }
    },
    {
     breakpoint: 991,
     settings: {
       slidesToShow: 3,
     }
   },
   {
     breakpoint: 767,
     settings: {
       slidesToShow: 2,
     }
   },
   {
     breakpoint: 575,
     settings: {
       slidesToShow: 1,
     }
   }
 ]
  });

  jQuery('#movie_category .carousel').slick({
    slidesToShow: 5,
    dots:false,
    margin: 20,
    prevArrow :'<i class="fas fa-chevron-left"></i>',
    nextArrow : '<i class="fas fa-chevron-right"></i>',
    responsive: [
    {
      breakpoint: 1299,
      settings: {
        slidesToShow: 4,
      }
    },
    {
     breakpoint: 991,
     settings: {
       slidesToShow: 3,
     }
   },
   {
     breakpoint: 767,
     settings: {
       slidesToShow: 2,
     }
   },
   {
     breakpoint: 575,
     settings: {
       slidesToShow: 1,
     }
   }
 ]
  });

  jQuery('#theater_movie .carousel').slick({
    slidesToShow: 5,
    dots:false,
    margin: 20,
    prevArrow :'<i class="fas fa-chevron-left"></i>',
    nextArrow : '<i class="fas fa-chevron-right"></i>',
    responsive: [
    {
      breakpoint: 1299,
      settings: {
        slidesToShow: 4,
      }
    },
   {
     breakpoint: 991,
     settings: {
       slidesToShow: 3,
     }
   },
   {
     breakpoint: 767,
     settings: {
       slidesToShow: 2,
     }
   },
   {
     breakpoint: 575,
     settings: {
       slidesToShow: 1,
     }
   }
 ]
  });

});
jQuery(".onsale").text(function () {
   return jQuery(this).text().replace("Sale!", "Sale");
})

  jQuery("#slider h1.headtwo").html(function(){
    var text1= jQuery(this).text().trim().split(" ");
    // console.log(text1, "my text")
    var last = text1[2];
    var l = text1.length;
    text1.splice(2,1)
    if(text1.length > 0 ){
      var updatedText = `<span class='last_slide_head'>${last}</span>`
      text1.splice(2, 0, updatedText)
      return text1.join(" ");
    }else{
      return text1.join(" ");
    }
  });

// SCROLL TOP

jQuery('document').ready(function(){
  jQuery(window).scroll(function() {
  if (jQuery(this).scrollTop() >= 50) {
      jQuery('#return-to-top').fadeIn(200);
    } else {
      jQuery('#return-to-top').fadeOut(200);
    }
  });
  jQuery('#return-to-top').click(function() {
    jQuery('body,html').animate({
      scrollTop : 0
    }, 2000);
  });

  jQuery('#counter .count').each(function () {
      jQuery(this).prop('Counter',0).animate({
          Counter: jQuery(this).text()
      }, {
          duration: 8000,
          easing: 'swing',
          step: function (now) {
             jQuery(this).text(Math.ceil(now));
          }
      });
  });
});

// // STICKY NAV BAR

// window.onscroll = function() { myScrollNav() };

// var navbar = document.getElementById("nav-box");
// var sticky = navbar.offsetTop;
// function myScrollNav() {
//   if (window.pageYOffset > sticky) {
//     navbar.classList.add("sticky");
//     navbar.classList.add("stickynavbar");
//   } else {
//     navbar.classList.remove("sticky");
//     navbar.classList.remove("stickynavbar");
//   }
// }

// // SITE LOADER

jQuery(window).load(function() {
  jQuery(".preloader").delay(2000).fadeOut("slow");
});

// Scroll Animation

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

// ------counter js------
(function($) {
  $.fn.countTo = function(options) {
    options = options || {};

    return $(this).each(function() {
      // set options for current element
      var settings = $.extend(
        {},
        $.fn.countTo.defaults,
        {
          from: $(this).data("from"),
          to: $(this).data("to"),
          speed: $(this).data("speed"),
          refreshInterval: $(this).data("refresh-interval"),
          decimals: $(this).data("decimals")
        },
        options
      );

      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data("countTo") || {};

      $self.data("countTo", data);

      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      // initialize the element with the starting value
      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate == "function") {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData("countTo");
          clearInterval(data.interval);
          value = settings.to;

          if (typeof settings.onComplete == "function") {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 0, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    formatter: formatter, // handler for formatting the value before rendering
    onUpdate: null, // callback method for every time the element is updated
    onComplete: null // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
})(jQuery);

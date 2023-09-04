



jQuery(function (jQuery) {
	 'use strict';

    var swiperslider1 = jQuery('.swiper-slider-1 .swiper-container');
    var swiperslider2 = jQuery('.swiper-slider-2 .swiper-container');
    jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        updater();
    });

    if (jQuery().swiper) {
        //Product Slider 1
        if (swiperslider1.length) {
            swiperslider1 = new Swiper(swiperslider1, {
                pagination: '.swiper-pagination',
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 0,
                loop: true,
                nextButton: '.swiper-slider-1 .slide-next',
                prevButton: '.swiper-slider-1 .slide-prev',
                breakpoints: {
                    1199: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 0
                    }
                }
            });
        }

        //Product Slider 2
        if (swiperslider2.length) {
            swiperslider2 = new Swiper(swiperslider2, {
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 0,
                loop: true,
                nextButton: '.swiper-slider-2 .slide-next',
                prevButton: '.swiper-slider-2 .slide-prev',
            });
        }

    }
    updater();
    /**
     * ==============================
     * swiper slider 
     * ==============================
     */

    function updater() {
        // refresh swiper slider
        if (jQuery().swiper) {
            //
            if (typeof (swiperslider1.length) === 'undefined') {
                swiperslider1.update();
                swiperslider1.onResize();
            }
            // //
            if (typeof (swiperslider2.length) === 'undefined') {
                swiperslider2.update();
                swiperslider2.onResize();
            }
        }
    }


});

jQuery(document).ready(function ($) {
	 // "use strict"

	 //Preloader
	// $(window).load(function() {
	// 	$('#preloader').fadeOut();
	// 	$('body').delay(350).css({'overflow':'visible'});
	// })

	 // header-contact-form-slider
	if ($('.slider-on').length > 0){
		$('.slider-on').vegas({
		    slides: [
		        { src: "images/slider/slide1.jpg" },
		        { src: "images/slider/slide2.jpg" },
		        { src: "images/slider/slide3.jpg" },
		    ],
		      transition: 'fade',
		});
	}




	 // smoothScroll
	$('.sidebar-menu, .header-nav').onePageNav({
	    currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 500,
	    scrollThreshold: 1,
	    filter: '',
	    easing: 'swing',
	    begin: function() {
	        //I get fired when the animation is starting
	     
	        	$('.sidebar-menu-icon').trigger('click');

	        	if($(window).width() < 801){
	        		$('.cssmenu ul').slideUp().removeClass('open');
	        	}
	        	
	           
	    }, 
	    end: function() {
	
	         
	    },
	    scrollChange: function($currentListItem) {
	        //I get fired when you enter a section and I pass the list item of the section

	        
	    }
	});

	$('.button-group').localScroll({
        duration: 1000
    });

    
	// fitVids
    if($(".responsive-video").length > 0){
		$(".responsive-video").fitVids();
	}

	
	// Header search
	$('.search span').click(function(){
	    $('.search-inner').show('open');
	});       
	 $('.search-off').click(function(){
	    $('.search-inner').hide('off');
	});
	 

	 // Sticky Header 
     $(".sticky-on").sticky({topSpacing: 0});

     // horizontal menu
     $(".cssmenu").each(function(){
	      var title = ($(this).data('title'))? $(this).data('title') : "Menu";
	      $(this).menumaker({
	        title: title,
	        format: "multitoggle"
	      });
	  })     


     // counterUp
	  $('.counter').counterUp({
	        delay: 10,
	        time: 5000
	    });


     // OwlCarousel-Slider

	 if ($('.post-image-slide').length > 0) {
	  $(".post-image-slide").owlCarousel({
	      items:1,
	      loop:false,
	      autoplay:false,
	      dot: false,    
	      nav:true,
	      navText:['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],
		  responsive:{
			 	320: {
					nav: false,
					 dot: false,    
				},
			480: {
					nav: true,
					 dot: false,    

				},
			}
	      
	  });
	}

	// Testimonial Slider
	if ($('.testimonial-list').length > 0) {
	  $(".testimonial-list").owlCarousel({
	      items:1,
	      loop:true,
	      autoplay:true,
	      autoplayHoverPause:true,
	      nav:false,
	      dot: true,      
	  });
	}	



	
	$('.golf-carousel').each(function(){
		var options = {
			navText : ['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],
			responsive:{
				 	280: {
						nav: false,
						items: 1,
						dot: true,
					},			
				640: {
						nav: false,
						items: 1,
						dot: true,
					},
				800: {
					items: 2,
					// items : ($(this).attr('data-items'))? $(this).data('items') : 2,
				} 	
			},
			autoplayTimeout:500, 
			// smartSpeed: 2000,
		};
		
		if($(this).attr('data-items')){
			options.items = $(this).data('items');
		}
		// margin
		if($(this).attr('data-margin')){
			options.margin = $(this).data('margin');
		}
		// autoplayTimeout
		if($(this).attr('data-autoplayTimeout')){
			options.autoplayTimeout = $(this).data('autoplayTimeout');
		}

		// loop
		if($(this).attr('data-loop')){
			options.loop = ($(this).data('loop') == 'yes')? true : false;
		}
	 	// nav
		if($(this).attr('data-nav')){
			options.nav = ($(this).data('nav') == 'yes')? true : false;
		}		
		
		// dot
		if($(this).attr('data-dot')){
			options.dot = ($(this).data('dot') == 'yes')? true : false;
		}

		// autoplay
		if($(this).attr('data-autoplay')){
			options.autoplay = ($(this).data('autoplay') == 'yes')? true : false;
		}
		// smartSpeed
		// if($(this).attr('data-smartSpeed')){
		// 	options.smartSpeed = ($(this).data('smartSpeed') == 'yes')? true : false;
		// }
		
		

		$(this).owlCarousel(options);

	});

	// Coaches Slider
	if ($('.coache-list').length > 0) {
	  $(".coache-list").owlCarousel({
	      items:3,
	      loop:true,
	      nav:true,
	      dot: true,
	      margin: 30,
	      autoplay:false,     
		  navText:['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],
		  responsive:{
			 	320: {
					nav: false,
					items: 1,
				},
			640: {
					nav: false,
					items: 2,
				},			
			1000: {
					items: 3,
				}
			}    
	  });
	}
	

	// Magnific Popup

	$('.single-post-item').magnificPopup({
		delegate: '.full-size',
		type: 'image',
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			easing: 'ease-in-out',
			duration: 300,
			opener: function(element) {
				return element.closest('.single-post-item').find('img');
			}
		}
	});


	// Magnific Popup Iframe

	$('.full-size-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// WOW JS
	// Use in Html <div class="wow fadeInUp" data-wow-duration="5s" data-wow-delay=".01s">...</div>
	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	    },
	    scrollContainer: null // optional scroll container selector, otherwise use window
	  }
	);
	wow.init();


 	// $("#submit").click(function(){
  //       $("#text").slideToggle("slow");
  //   }); 

	// Scroll To Top
	if ($('.scroll-top').length > 0) {
		$(".scroll-top").click(function(){
			$('html,body').animate({scrollTop:0},1000);
		});

		$(window).scroll(function(){
			if($(window).scrollTop() > 400){
				$(".scroll-top").fadeIn();
			}
			else{
				$(".scroll-top").fadeOut();
			}
			return false;
		});
	}

	$('.menu-off').on('click', function(){
		$('body').trigger('click');
	});

	$('.sidebar-menu ul li.parent > span').on('click', function(){
		$(this).closest('li').find('.dropdown').toggle(300);
	})

	//contact form scripts
	$('#contact-form').submit(function( event ) {

		$.ajax({
		  url: 'php/contactformsubmit.php',
		  data: $( this ).serialize(),
		  method: 'post',
		}).done(function(response) {
		    $('#contact-form input[type="submit"]').after(response);
		     $('#contact-form').find("input[type='text'], input[type='email'],  textarea").val("");
		});

		return false;
	});

	// Mailchip
		if($('.mc-subcribe-form').length > 0){

		var MccallbackFunction = function(resp){
			var msg = resp.msg;

			if (resp.result === 'success') {	
					 
		        $('.mc-msg').empty().append(msg);
		    }else{
		    	 $('.mc-msg').empty().append(msg);
		    }

		    console.log(resp);

		};

		$('.mc-subcribe-form').ajaxChimp({
			url: $('.mc-subcribe-form').data('posturl'),
			language: 'es',
			callback: MccallbackFunction
		}); 

	}//if($('.mc-subcribe-form').length > 0){
	

	$('.coache-content').each(function(){
		var TH = $(this).find('p').outerHeight() + $(this).find('.social-media-icon').outerHeight() + 35;
		$(this).css({
			"bottom" : -TH,
		});
		
	})	

});
// End Ready Function

jQuery(window).resize(function(){
	jQuery('.coache-content').each(function(){
		var TH = jQuery(this).find('p').outerHeight() + jQuery(this).find('.social-media-icon').outerHeight() + 35;
		jQuery(this).css({
			"bottom" : -TH,
		});
		
	})
})


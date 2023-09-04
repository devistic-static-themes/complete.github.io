jQuery(document).ready(function ($) {
	 "use strict"

	 //Preloader
	$(window).load(function() {
		$('#preloader').fadeOut();
		$('body').delay(350).css({'overflow':'visible'});
	})


    $(".cssmenu").each(function(){
          var title = ($(this).data('title'))? $(this).data('title') : "Menu";
          $(this).menumaker({
            title: title,
            format: "multitoggle"
          });
     })

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

	
    // Sectionize-Control
	if ($('select').length > 0) {
		$('select').selectize({
			create: true,
			sortField: {
				field: 'text',
				direction: 'asc'
			},
			dropdownParent: 'body'
		});
	}

	jQuery("#gallery").unitegallery({
		tiles_type:"justified"
	});


    
	// fitVids
    if($(".responsive-video").length > 0){
		$(".responsive-video").fitVids();
	}

	 // Sticky Header 
     $(".sticky-on").sticky({topSpacing: 0});

     // counterUp
	  $('.counter').counterUp({
	        delay: 10,
	        time: 5000
	    });

	if ($('.product-owl-active').length) {
	  $(".product-owl-active").owlCarousel({
	      autoPlay: false, 
		  slideSpeed:2000,
		  pagination:false,
		  navigation:true,	  
	      items : 4,
		  /* transitionStyle : "fade", */    /* [This code for animation ] */
		  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	      itemsDesktop : [1199,4],
		  itemsDesktopSmall : [980,3],
		  itemsTablet: [768,2],
		  itemsMobile : [479,1],
	  });
  
	 }
		// OwlCarousel gallery Slider
	  	if ($('#gallery-slider').length) {
		$('#gallery-slider').owlCarousel({
			loop: true,
			dots: false,
			nav: false,
			navText: ['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],
			smartSpeed: 2000,
			padding: 0,
			margin: 0,
			center: true,
			autoplay: false,
			responsiveClass: true,
	      	autoplayHoverPause:true,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				768: {
					items: 2
				},
				992: {
					items: 3,
				},
			}
		});
	}


	// Global owlCarousel Slider	
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
			autoplayHoverPause:true,
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


	// Magnific Popup
	$('.single-post-item, .gallery-box').magnificPopup({
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
				return element.closest('.single-post-item, .gallery-box').find('img');
			}
		}
	});


	// Magnific Popup Iframe

	$('.full-video').magnificPopup({
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

	// slideToggle
 	$("#submit").click(function(){
        $("#text").	slideToggle("slow");
    }); 

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
	// 	if($('.mc-subcribe-form').length > 0){

	// 	var MccallbackFunction = function(resp){
	// 		var msg = resp.msg;

	// 		if (resp.result === 'success') {	
					 
	// 	        $('.mc-msg').empty().append(msg);
	// 	    }else{
	// 	    	 $('.mc-msg').empty().append(msg);
	// 	    }

	// 	    console.log(resp);

	// 	};

	// 	$('.mc-subcribe-form').ajaxChimp({
	// 		url: $('.mc-subcribe-form').data('posturl'),
	// 		language: 'es',
	// 		callback: MccallbackFunction
	// 	}); 

	// }
	


});
// End Ready Function
jQuery(document).ready(function($) {
	"use strict"

	// header-contact-form-slider
	if ($('.slider-on').length > 0){
		$('.slider-on').vegas({
		    slides: [
		        { src: "images/slider2.jpg" },
		        { src: "images/slider5.jpg" },
		        { src: "images/slider3.jpg" },
		        { src: "images/slider4.jpg" },
		    ],
		      transition: 'fade',
		});
	}

	// smoothScroll
	$('.main-menu:not(.btngroup)').onePageNav({
	    currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 500,
	    scrollThreshold: 1,
	    filter: '',
	    easing: 'swing',
	    begin: function() {
	        //I get fired when the animation is starting
	        if( $(window).width() < 801 ){
	        	$('.toggle-menu').trigger('click');
	        }
	       
	    },
	    end: function() {
	        //I get fired when the animation is ending
	         
	    },
	    scrollChange: function($currentListItem) {
	        //I get fired when you enter a section and I pass the list item of the section
	        
	    }
	});

	$('.btngroup').localScroll({
        duration: 1000
    });

     //Book Information Slider
	 if ($('.book-item-list').length > 0) {
	  $('.book-item-list').owlCarousel({
	      items:1,
	      loop:true,
	      autoplay:false,
	      autoplayTimeout:2000,
	      autoplayHoverPause: true,
	      dot:false,
	      nav:true,
	      navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	      responsive: {
	      		300: {
					dot:true,
					nav: false,
				},
				480: {
					dot:true,
					nav: false,			
				},
	      		768: {
					nav: false,
					dot:true,
				},	
	      		800: {
					nav: false,
					dot:true,
				},	      		
				1000: {
					nav: true,
					dot:true,
				},		    
			} 
	  });
	}     
	// Blog Slider
	 if ($('.post-list').length > 0) {
	  $('.post-list').owlCarousel({
	      loop:true,
	      autoplay:false,
	      autoplayTimeout:2000,
	      autoplayHoverPause: true,
	      dot:false,
	      nav:true,
	      margin: 30,
	      navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	      responsive: {
				300: {
					items: 1,
					nav: false,
				},
				480: {
					items: 1,	
					nav: false,			
				},
				768: {
					items: 2,
					nav: false,
				},
				800: {
					items: 2,
					nav: false,
					dot:true,
				},
				1000: {
					items: 3,
				}
			}	      
	  });
	}    

	// client-Slider
	 if ($('.client-item-list').length > 0) {
	  $('.client-item-list').owlCarousel({
	      items:1,
	      loop:true,
	      autoplay:true,
	      autoplayTimeout:3000,
	      autoplayHoverPause: true,
	      dot:true,
	      nav: false,
	      // animateIn: 'slideOutDown',
	      // animateOut: 'flipInX',

	      animateIn: 'fadeInUp',
	      animateOut: 'fadeOut',
	  });
	}


	// Magnific Popup
	$('.blog-post-single-item').magnificPopup({
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
				return element.closest('.blog-post-single-item').find('img');
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
	    boxClass:     'wow',   
	    animateClass: 'animated',
	    offset:       0,     
	    mobile:       true, 
	    live:         true,     
	    callback:     function(box) {
	    },
	    scrollContainer: null 
	  }
	);
	wow.init();


	  // Sticky Header 
     $(".sticky-on").sticky({topSpacing: 0});

	

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

	// SlideToggle Menu
 	$(".toggle-menu").click(function(){
        $(".main-menu").slideToggle("slow");
    }); 


    

    // ToolTip
     $('[data-toggle="tooltip"]').tooltip()


     // parallax
	$('#paralax_bg').parallax("50%", 0.3);
    
	// counterUp
	  $('.counter').counterUp({
	        delay: 10,
	        time: 5000
	    });

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


	if($('.mc-subcribe-form').length > 0){

		function MccallbackFunction(resp){
			var msg = resp.msg;

			if (resp.result === 'success') {	
					 
		        $('.mc-msg').empty().append(msg);
		    }else{
		    	 $('.mc-msg').empty().append(msg);
		    }

		    console.log(resp);

		}

		$('.mc-subcribe-form').ajaxChimp({
			url: $('.mc-subcribe-form').data('posturl'),
			language: 'es',
			callback: MccallbackFunction
		}); 

	}//if($('.mc-subcribe-form').length > 0){
	



	// google-map
	if ($('#google-map').length > 0) {
		// This example adds a marker to indicate the position of Bondi Beach in Sydney,
		var pos = {
			lat: 40.735657,
			lng: -74.172367
		};
		var map = new google.maps.Map(document.getElementById('google-map'), {
			zoom: 12,
			center: pos,
			scrollwheel: false
		});
		var image = 'images/map-marker.png';
		var beachMarker = new google.maps.Marker({
			position: pos,
			map: map,
			icon: image
		});
		map.set('styles', [
			{
				featureType: 'Greyscale',
				stylers: [
					{
						saturation: -90
			},
					{
						gamma: 1.5
			}]
		}]);
	}







});
// End Ready Function
jQuery(document).ready(function ($) {
	 "use strict"

	 // property-listing
	 $('.property-menu ul li a').on('click', function(){	 	 

	 	 var className = $(this).attr('class')+'-style';
	 	 if($('.property-listing').hasClass(className)){
	 	 	return false;
	 	 }else{
	 	 	$('.property-listing').removeClass('grid-style').removeClass('list-style').addClass(className);
	 	 	$(this).closest('ul').find('li').removeClass('active');
	 	 	$(this).closest('li').addClass('active');
	 	 }
	 	 return false;
	 })

	  // Main Menu	
	  $(".cssmenu").each(function(){
	      var title = ($(this).data('title'))? $(this).data('title') : "Menu";
	      $(this).menumaker({
	        title: title,
	        format: "multitoggle"
	      });
	  }) 

	// txtEditor
	if ($('#txtEditor').length > 0) {
		$("#txtEditor").Editor(); 
	}

	Dropzone.autoDiscover = false;
	$(function() {
	    $("#myDropZone").dropzone({
	        url : "/file-upload"
	    });
	});

	// $('#advance-search-btn .btn').click(function() {
 //    	$(this).toggleClass("active-btn");
	// });   

	// Advance-Search Toggle
	if ($('.advance-search').length > 0) {
		$( ".advance-search-btn" ).click(function() {
		  $( ".advance-search" ).toggle("slow");
		  $(this).toggleClass("active-btn");

		});
	}

	// Advance-Search Toggle
	if ($('.features-property').length > 0) {
		$( ".search-map" ).click(function() {
		  $( ".property-map-search" ).toggle("slow");		  
		  $(this).toggleClass("active-btn");
		});
	}

	//  Registration
	if ($('.login-reg').length > 0) {
		$( "#open-registration-form" ).click(function() {
		  $( "#hidden-registration-form" ).show("slow");
		  $( "#hide-login-form" ).hide("slow");
		});
	}

	// Login 
	if ($('.login-reg').length > 0) {
		$( "#open-login-form" ).click(function() {
		  $( "#hidden-registration-form" ).hide("slow");
		  $( "#hide-login-form" ).show("slow");
		});
	}

	// Change Password
	if ($('.login-reg').length > 0) {
		$( "#open-change-password-form" ).click(function() {
		  $( "#change-password" ).show("slow");
		  $( "#hide-login-form" ).hide("slow");
		});
	}

	// Back To Login
	if ($('.login-reg').length > 0) {
		$( "#back-login-form" ).click(function() {			
		  $( "#change-password" ).hide("slow");
		  $( "#hide-login-form" ).show("slow");
		});
	}


	// fitVids video
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



	//unitegallery gallery property details page	
	jQuery("#gallery").unitegallery({
		gallery_width:'auto',	
		gallery_height:600,	
		thumb_color_overlay_effect: true,	
		thumb_overlay_color: "#000000",	
		thumb_overlay_opacity: 0.4,		
	    gallery_autoplay:false,
		gallery_play_interval: 3000,	
		gallery_pause_on_mouseover: true,	
		thumb_show_loader:true,	
		gallery_min_height: 200,
		slider_control_zoom: false,
		slider_enable_zoom_panel: false,
		slider_enable_text_panel: true,
		slider_textpanel_text_valign:"middle",
		slider_textpanel_css_description: "center",	
		slider_fullscreen_button_align_hor:"right",
		slider_play_button_align_hor:"right",
		slider_progress_indicator_align_hor:"right",
		theme_hide_panel_under_width: 200,
		slider_enable_fullscreen_button: true,
		strip_thumbs_align: "center",
		strippanel_handle_align: "center",
		strippanel_background_color:"transparent",
		slider_textpanel_bg_color:"transparent",
		strippanel_handle_offset: "50%",
		slider_textpanel_title_text_align:'center'
	});
 

	// related-blog-propertis-slider
	if ($('.agent-propertis-slider').length > 0) {
	  $('.agent-propertis-slider').owlCarousel({
	      items:2,
	      loop:true,
	      margin:30,
	      autoplay:false,
	      autoplayTimeout:5000,
	      autoplayHoverPause: true,
	      dot:true,
	      nav:false,
	      navText:['<i class="perch-angle-left "></i>', '<i class=" perch-angle-right"></i>'],	     
	      responsive:{
					 	320: {
							nav: false,
							items: 1,
							dot: true,
						},
						640: {
							nav: false,
							items: 2,
							dot: true,
						},	
					1000: {
						items: 2,
					} 	
				},
	  });
	} 
	// header-vegas-slider
	if ($('.vegas-slider').length > 0){
		$('.vegas-slider').vegas({
		    slides: [
		        { src: "images/slider/slider.jpg" },
		        { src: "images/slider/slider2.jpg" },
		        { src: "images/slider/slider3.jpg" },
		    ],
		      transition: 'fade',
		});
	}
	 
	// property-slider  
	if ($('.property-slider, .slider-list').length > 0) {
	  $('.property-slider, .slider-list').owlCarousel({
	      items:1,
	      loop:true,
	      autoplay:true,
          animateOut: 'fadeOut',
	      autoplayTimeout:5000,
	      autoplayHoverPause: true,
	      dots:false,
	      nav:true,
	      navText:['<i class="perch-angle-left "></i>', '<i class=" perch-angle-right"></i>'],	      
	      responsive:{
					300: {
							nav: false,
							dots: true,
						},			
					640: {
							nav: false,
							dots: true,
						},
					768: {
						nav: false,
							dots: true,
					},
					1000: {
							dots: false,
					},
				},
	  });
	} 

	// testimonial-list  
	if ($('.testimonial-list, .property-single-slide, .about-slider').length > 0) {
	  $('.testimonial-list, .property-single-slide, .about-slider').owlCarousel({
	      items:1,
	      loop:true,
	      autoplay:true,
	      autoplayTimeout:5000,
	      autoplayHoverPause: true,
	      dot:true,
	      nav:false,
	  });
	} 

	
	// floor-plan
	if ($('.floor-plan').length > 0) {
	  $('.floor-plan').owlCarousel({
	      items:2,
	      margin:30,
	      loop:false,
	      autoplay:false,
	      autoplayTimeout:7000,
	      autoplayHoverPause: true,
	      dot:true,
	      nav:false,
	      navText:['<i class="perch-angle-left "></i>', '<i class=" perch-angle-right"></i>'],				
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
					768: {
						items: 2,
					}, 	
					1000: {
						items: 2,
					} 	
				},
	  });
	} 	

	// Related propertis Slider
	if ($('.property-list, .related-propertis-slider, .related-post-slide, .agent-slide').length > 0) {
	  $('.property-list, .related-propertis-slider, .related-post-slide, .agent-slide').owlCarousel({
	      items:3,
	      margin:30,
	      loop:true,
	      autoplay:false,
	      autoplayTimeout:7000,
	      autoplayHoverPause: true,
	      dots:false,
	      nav:true,
	      navText:['<i class="perch-angle-left "></i>', '<i class=" perch-angle-right"></i>'],				
	      responsive:{
					 	280: {
							nav: false,
							items: 1,
							dots: true,
						},			
					640: {
							nav: false,
							items: 1,
							dots: true,
						},
					768: {
						nav: false,
						items: 2,
						dots: true,
					}, 	
					1000: {
						items: 3,
					} 	
				},
	  });
	}

	// Magnific Popup
	$('.flooor-level-image-holder, .photo-gallery, .property-slide-item').magnificPopup({
		delegate: '.large-size',
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
				return element.closest('.flooor-level-image-holder, .photo-gallery, .property-slide-item').find('img');
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

	//Account Setting Menu
	if ($('#account-setting').length > 0) {
			var offset = $('#account-setting').offset();
			$('html,body').animate({scrollTop: offset.top -100},500);
		
	}

	// Scroll To Top
	if ($('.scroll-top').length > 0) {
		$(".scroll-top").on( "click", function(){
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

 	// Tooltipz
    $('[data-toggle="tooltip"]').tooltip(); 

  	if ($('#dynamic-table').length > 0) {
    	$('#dynamic-table').DataTable();
	}
          
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
	
	$('.topbar-toggle-icon').on('click', function(){
		$('#topbar').slideToggle();
		$(this).toggleClass('open');
	})


});
// End Ready Function


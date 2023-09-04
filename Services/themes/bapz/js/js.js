$(document).ready(function(){
	function addanimationClass() {
	    $('.header-slider .owl-stage .owl-item').each(function(index){
            if ($(this).hasClass('active')) {               
                $(this).find('.slide-content').addClass('animated');
                console.log($(this).find('.slide-content').html());
            }else{
            	$(this).find('.slide-content').removeClass('animated');
            }
        });
	}

	var owl = $('.header-slider');
	owl.owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		autoplay:false,
		autoplayHoverPause: true,		
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'], 	
	});


	$('.slider-1').owlCarousel({
		margin:30,
		items: 3,
		loop: true,
		nav: true,
		dots: false,
		autoWidth:true,		
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'], 	
	});

	$('.video-popup-link').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });

	
	
});
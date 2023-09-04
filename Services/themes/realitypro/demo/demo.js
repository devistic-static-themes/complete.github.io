/* =================================

===  EXPAND COLLAPSE            ====

=================================== */

 jQuery(document).ready(function($){

 $('#toggle-switcher').on('click', function(){



		if($(this).hasClass('open')){

			$(this).removeClass('open');

			$('#switch-style').animate({'left':'-220px'});

		}else{

			$(this).addClass('open');

			$('#switch-style').animate({'left':'0'});

		}

	});



 	$('.layout-select').selectize({

		create: true,

		dropdownParent: 'body'

	});



	// bind change event to select

      $('.layout-select').on('change', function () {

          var url = $(this).val(); // get selected value

          if (url) { // require a URL

              window.location = url; // redirect

          }

          return false;

      });

});
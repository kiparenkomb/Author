import HP from './helpers';

(function ($) {
	$(document).ready(function(){

		// menu click event
		$('.menuBtn').click(function() {
			$(this).toggleClass('act');
				if($(this).hasClass('act')) {
					$('.mainMenu').addClass('act');
				}
				else {
					$('.mainMenu').removeClass('act');
				}
		});

		// banner
		$(".owl-carousel").owlCarousel({
			items: 1,
			autoplay: true,
			nav: true,
			dots: false,
			// animateOut: 'fadeOut'
		});

	});
}(jQuery));
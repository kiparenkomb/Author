import HP from './helpers';
import './my-owl-carousel';
import './tilt';


(function ($) {
	$(document).ready(function(){

/*------------------------------------------------------------------*\
													Mobile menu
\*------------------------------------------------------------------*/
		//menu click event
		$('.menuBtn').click(function() {
			$(this).toggleClass('act');
				if($(this).hasClass('act')) {
					$('.mainMenu').addClass('act');
				}
				else {
					$('.mainMenu').removeClass('act');
				}
		});

/*------------------------------------------------------------------*\
													Footer
\*------------------------------------------------------------------*/
		//prallax scroll
		//init controller
		var controller = new ScrollMagic.Controller();
		//loop through each .bcg_parallax element
		$('.bcg_parallax').each(function(){
			// if (document.documentElement.clientWidth > 425) {
				//parallax scene
				var paralaxTl = new TimelineMax();
				paralaxTl
					.from('.bcg', 2, {y: '-75%', ease:Power0.easeNone}, 0);
				var slideParallaxScene = new ScrollMagic.Scene({
					triggerElement: this,
					triggerHook: 1,
					duration: '100%'
				})
				.setTween(paralaxTl)
				// .addIndicators({
				// 		name: 'fade scene',
				// 		color: 'red',
				// 		indent: 100,
				// 		colorStart: 'black',
				// 		colorEnd: 'pink'
				// 	})
				.addTo(controller);
			// }
		});

		//form validation
		$(function() {
			$("#form_validation").validate({
				rules:{
					text_name:{
						required:true,
						minlength:2
					},
					text_email:{
						required:true,
						email:true
					},
					text:{
						required:true,
						minlength:5,
					}
				}
			});
		});


	});
}(jQuery));
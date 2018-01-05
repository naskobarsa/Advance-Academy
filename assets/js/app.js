;(function( $, window, document, undefined ) {

	var $doc = $( document );

	$doc.ready(function() {

		var $testimonial_slider = $('#testimonial-slider');
		var $canvas_btn_open = $('#canvas-open');
		var $canvas_btn_close = $('#canvas-close');
		var $canvas_menu = $('#canvas-menu');
		var $cwdoc = $('.canvas-wrapp--doc');
		var initScroll;

		function adjustPositionCw() {
			var leftEdge = $canvas_btn_open.offset();
			$cwdoc.css({
				left: leftEdge.left + 'px'
			})
		}
		adjustPositionCw();

		$(window).on('resize', function() {
			adjustPositionCw();
		});

		function checkBodyTop() {
			if ( $(document).scrollTop() > 60 ) { 
				$cwdoc.addClass('showIn');
				return;
			}
			$cwdoc.removeClass('showIn');
			return
		}
		checkBodyTop();

		$cwdoc.on('click', function() {
			$(this).removeClass('showIn');
			$doc.trigger('canvas.open');
		});

		$(document).on('scroll', function(e) {
			checkBodyTop();
		})

		$( window ).scroll(function() {
			return false;
		});

		$canvas_btn_open.on('click', function() {			
			$doc.trigger('canvas.open');			
		});

		$canvas_btn_close.on('click', function() {			
			$doc.trigger('canvas.close');
		});
	
		$doc.on('canvas.open', function() {
			$('body').addClass('stop-scroll');
			$canvas_menu.addClass('open');
			$canvas_btn_open.addClass('showoff');
		});

		$doc.on('canvas.close', function() {
			checkBodyTop();
			$('body').removeClass('stop-scroll')
			$canvas_menu.removeClass('open');
			$canvas_btn_open.removeClass('showoff');
		});

		$testimonial_slider.owlCarousel({
			items: 1,
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			autoplaySpeed:1500,
			loop:true,
			nav:true,
			navText: ['&laquo;','&raquo;'],
			paginationNumbers:true,
			dots: true,
			transitionStyle : "fade",
		});

	});

})(jQuery, window, document);



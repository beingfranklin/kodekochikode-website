(function($) {
	"use strict"

	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	// Mobile nav toggle
	$('.navbar-toggle').on('click',function() {
		$('.main-nav').toggleClass('open');
	});

	$('.nav-item').on('click', function() {
		$('.main-nav').toggleClass('open')
	});

	$("#countdown")
  .countdown("2019/03/15 08:00", function(event) {

		$('#days').text(event.strftime('%D'));
		$('#hours').text(event.strftime('%H'));
		$('#minutes').text(event.strftime('%M'));
		$('#seconds').text(event.strftime('%S'));	
    // $(this).text(
    //   event.strftime('%D days %H:%M:%S')
    // );
  });

	// Fixed nav
	// $(window).on('scroll', function() {
	// 	var wScroll = $(this).scrollTop();
	// 	wScroll > 50 ? $('#header').addClass('fixed-navbar') : $('#header').removeClass('fixed-navbar');
	// });

	// Smooth scroll
	$(".main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 800);
	});

	// Section title animation
	$('.section-title').each(function() {
		var $this = $(this);
		$this.find('.title > span').each(function(i) {
			var $span = $(this);
			var animated = new Waypoint({
				element: $this,
				handler: function()
				{
					setTimeout(function(){
						$span.addClass('appear')
					}, i*250);
					this.destroy();
				},
				offset: '95%'
			});
		});
	});

	// Parallax Background
	$.stellar({
		responsive: true
	});

	// CountTo
	// $('.counter').each(function() {
	// 	var $this = $(this);
	// 	var counter = new Waypoint({
	// 		element: $this,
	// 		handler: function()
	// 		{
	// 			$this.countTo();
	// 		},
	// 		offset: '95%'
	// 	});
	// });

})(jQuery);

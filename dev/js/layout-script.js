$(document).ready(function () {
	/**************** Javascript - swiper
	 **********************************************/
	var mySwiper = $('.swiper-container').swiper({
		pagination: '.pagination',
		loop: false,
		grabCursor: true,
		paginationClickable: false,
		pagination: false,
	});
	$('.arrow-left').on('click', function (e) {
		e.preventDefault()
		var swiper = $(this).siblings('.swiper-container').data('swiper');
		swiper.swipePrev();
	});
	$('.arrow-right').on('click', function (e) {
		e.preventDefault()
		var swiper = $(this).siblings('.swiper-container').data('swiper');
		swiper.swipeNext();
	});


	/**************** "scrollTop" plugin
	 *********************************************/
	// "colio" plugin
	var colio_run = function () {
		$('#demo_1').remove();
		$('.portfolio .list').colio({
			id: 'demo_1',
			theme: 'white',
			placement: 'before',
			onContent: function (content) {
				// init "flexslider" plugin
				$('.flexslider', content).flexslider({
					slideshow: false,
					animationSpeed: 300
				});
			}
		});
	};

	/**************** "portfolio" plugin
	 **********************************************/
	colio_run();

	// "quicksand" plugin
	var quicksand_run = function (items) {
		$('.portfolio .list').quicksand(items, {
			retainExisting: false,
			adjustWidth: false,
			duration: 500
		}, colio_run);
	};

	$('.portfolio .list li').each(function (n) {
		$(this).attr('data-id', n);
	});

	var copy = $('.portfolio .list li').clone();

	$('.portfolio .filters a').click(function () {
		$(this).addClass('filter-active').siblings().removeClass('filter-active');
		var href = $(this).attr('href').substr(1);
		filter = href ? '.' + href : '*';
		quicksand_run(copy.filter(filter));
		return false;
	});
});

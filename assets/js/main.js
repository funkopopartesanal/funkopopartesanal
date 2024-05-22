$('.hero-testimonials').slick({
	centerMode: true,
	dots: false,
	arrows: true,
	centerPadding: '32px',
	autoplay: true,
	autoplaySpeed: 4000,
	infinite: true,
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				centerMode: false
			}
		}
	]
});
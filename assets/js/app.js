window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  breakpoint: 450,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  breakpoint: 769,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			},{
				breakpoint: 1024,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4
				}
			},{
				breakpoint: 1279,
				settings: {
				  slidesToShow: 5,
				  slidesToScroll: 5
				}
			  }
		]
	});
});
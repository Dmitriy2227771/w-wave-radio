const slider = document.querySelector('.swiper');

let mySwiper = new Swiper(slider, {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 3000,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1110: {
			slidesPerView: 4,
		},
    1024: {
      slidesPerView: 2,
    },
		768: {
			slidesPerView: 2,
		},

    440: {
      spaceBetween: 30,
    },

    320: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    }
}})

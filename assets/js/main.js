/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js


****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
////////////////////////////////////////////////////
// 01. PreLoader Js
windowOn.on('load', function() {
    $("#loading").fadeOut(500);
});



	// const colorInput = document.querySelector('input[type=color]');
	// const colorVariable = '--tp-theme-1';

	// colorInput.addEventListener('change', function(e){
	// 	var clr = e.target.value;
	// 	document.documentElement.style.setProperty(colorVariable, clr);
	// })


	////////////////////////////////////////////////////
	// 02. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	////////////////////////////////////////////////////
	// 03. Sidebar Js
	$(".offcanvas-toggle-btn").on("click", function () {
		$(".offcanvas__area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas__close-btn").on("click", function () {
		$(".offcanvas__area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 04. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 05. Search Js
	$(".search-toggle").on("click", function () {
		$(".search__area").addClass("opened");
	});
	$(".search-close-btn").on("click", function () {
		$(".search__area").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 06. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});


	////////////////////////////////////////////////////
	// 07. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});
	
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

	////////////////////////////////////////////////////
	// 07. Nice Select Js
	$('select').niceSelect();


	// mainSlider
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 4000,
			dots: false,
			fade: true,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
			responsive: [{
			breakpoint: 767,
			settings: {
				dots: false,
				arrows: false
			}
			}]
		});
	
		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
			});
		}
	}
	mainSlider();

	$('.active-class').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	});

	////////////////////////////////////////////////////
	// 08. slider__active Slider Js
	if (jQuery(".slider__active").length > 0) {
		let sliderActive1 = ".slider__active";
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: 'fade',

			autoplay: {
				delay: 5000,
			},

			// If we need pagination
			pagination: {
				el: ".main-slider-paginations",
				// dynamicBullets: true,
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}


	var sliderr = new Swiper('.active-class', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".testimonial-pagination-6",
			clickable: true,
			renderBullet: function (index, className) {
			  return '<span class="' + className + '">' + '<button>'+(index + 1)+'</button>' + "</span>";
			},
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	var postboxSlider = new Swiper('.postbox__slider', {
		slidesPerView: 1,
        spaceBetween: 0,
		loop: true,
		autoplay: {
		  delay: 3000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".postbox-slider-button-next",
			prevEl: ".postbox-slider-button-prev",
		},
		breakpoints: {  
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// 13. Masonary Js
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});


		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 14. Wow Js
	new WOW().init();

	////////////////////////////////////////////////////
	// 16. Cart Quantity Js
	$('.cart-minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.cart-plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});


	////////////////////////////////////////////////////
	// 17. Show Login Toggle Js
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 18. Show Coupon Toggle Js
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 19. Create An Account Toggle Js
	$('#cbox').on('click', function () {
		$('#cbox_info').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 20. Shipping Box Toggle Js
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});

	////////////////////////////////////////////////////
	// 21. Counter Js
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	////////////////////////////////////////////////////
	// 22. Parallax Js
	if ($('.scene').length > 0) {
		$('.scene').parallax({
			scalarX: 10.0,
			scalarY: 15.0,
		});
	};

	////////////////////////////////////////////////////
	// 23. InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});

	

})(jQuery);

//HERO SLIDER
var swiper = new Swiper(".mySwipers", {
	loop: true, // Enable continuous loop mode
	spaceBetween: 10,
	centeredSlides: true,
	// autoplay: {
	//   delay: 4000,
	//   disableOnInteraction: false,
	// },
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	  renderBullet: function (index, className) {
		return '<span class="' + className + '">' + (index + 1) + '</span>';
	  },
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	speed: 1000,
  });
  

  window.addEventListener('load', function() {
	const preloader = document.getElementById('preloader');
	preloader.style.opacity = '0';
	preloader.style.visibility = 'hidden';
	preloader.style.transition = 'visibility 0s 0.3s, opacity 0.3s linear';
  });

  //Product Carousel
  var swiper = new Swiper(".mySwiperr", {
	loop: true, // Enable continuous loop mode
	spaceBetween: 10,
	centeredSlides: true,
	// autoplay: {
	//   delay: 3000,
	//   disableOnInteraction: false,
	// },
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	  renderBullet: function (index, className) {
		return '<span class="' + className + '">' + (index + 1) + '</span>';
	  },
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	speed: 1500,
  });

    //BEST SELLING Carousel
	var swiper = new Swiper(".mySwiperrr", {
		spaceBetween: 10,
		loop: true, // Enable continuous loop mode
		centeredSlides: true,
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
		speed: 1000,
	  });
	  var swiper1 = new Swiper(".mySwiperr1", {
		loop: true, // Enable continuous loop mode
		spaceBetween: 10,
		centeredSlides: true,
		navigation: {
		  nextEl: ".swiper-button-next-1",
		  prevEl: ".swiper-button-prev-1",
		},
		speed: 1000,
	  });
	  
	  var swiper2 = new Swiper(".mySwiperr2", {
		loop: true, // Enable continuous loop mode
		spaceBetween: 10,
		centeredSlides: true,
		navigation: {
		  nextEl: ".swiper-button-next-2",
		  prevEl: ".swiper-button-prev-2",
		},
		speed: 1000,
	  });
	  
	  var swiper3 = new Swiper(".mySwiperr3", {
		loop: true, // Enable continuous loop mode
		spaceBetween: 10,
		centeredSlides: true,
		navigation: {
		  nextEl: ".swiper-button-next-3",
		  prevEl: ".swiper-button-prev-3",
		},
		speed: 1000,
	  });

	  // TAB JS

	  function openCity(evt, cityName) {
		// Declare all variables
		var i, tabcontent, tablinks;
	  
		// Get all elements with class="tabcontent" and hide them
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
		  tabcontent[i].style.display = "none";
		}
	  
		// Get all elements with class="tablinks" and remove the class "active"
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
		  tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
	  
		// Show the current tab, and add an "active" class to the button that opened the tab
		document.getElementById(cityName).style.display = "block";
		evt.currentTarget.className += " active";
	  } 





	  // Single Product Tab
	  class ProductTab {
		constructor(tabElement) {
		  this.tabElement = tabElement;
		  this.imgs = this.tabElement.querySelectorAll('.img-select a');
		  this.imgBtns = [...this.imgs];
		  this.imgId = 1;
		  this.init();
		}
	  
		init() {
		  this.imgBtns.forEach((imgItem) => {
			imgItem.addEventListener('click', (event) => {
			  event.preventDefault();
			  this.imgId = imgItem.dataset.id;
			  this.slideImage();
			});
		  });
	  
		  window.addEventListener('resize', () => this.slideImage());
		  this.slideImage(); // Initial call to set the correct image on load
		}
	  
		slideImage() {
		  const displayWidth = this.tabElement.querySelector('.img-showcase img:first-child').clientWidth;
		  this.tabElement.querySelector('.img-showcase').style.transform = `translateX(${- (this.imgId - 1) * displayWidth}px)`;
		}
	  }
	  
	  // Initialize multiple instances
	  document.addEventListener('DOMContentLoaded', () => {
		const productTabs = document.querySelectorAll('.product-imgs');
		productTabs.forEach(tabElement => new ProductTab(tabElement));
	  });
	  


	  


	  //Flip SLider JS

	  var swiper = new Swiper(".myFlipSwiper", {
		effect: "fade",
		grabCursor: true,
		speed: 1500, // Slow down the fade effect
		fadeEffect: {
		  crossFade: true, // Smooth fade effect
		},
		autoplay: {
		  delay: 3000, // Time between transitions (in milliseconds)
		  disableOnInteraction: false, // Autoplay won't stop after user interactions
		},
	  });

// Function to apply typewriter effect to a specific element with given text
function typewriterEffect(elementId, text) {
	const typewriterText = document.getElementById(elementId);
	let index = 0;
  
	function type() {
	  if (index < text.length) {
		typewriterText.textContent += text.charAt(index);
		index++;
		setTimeout(type, 200); // Adjust the speed of typing here
	  } else {
		// After typing is complete, clear text after a delay and restart
		setTimeout(() => {
		  typewriterText.textContent = "";
		  index = 0; // Reset the character index
		  type(); // Restart the typing effect
		}, 1000); // Wait 1 second before restarting
	  }
	}
  
	type();
  }
  
  // Apply typewriter effect to multiple sliders
  window.onload = function() {
	typewriterEffect('typewriter-text1', 'Explore our selection Of Luxury T-Shirts');
	typewriterEffect('typewriter-text2', 'We Are Discover Premium Quality');
	typewriterEffect('typewriter-text3', 'Find Your Style with BARNOI......!');
  };




	  //HEADER NOTIFICATIONS

	  document.addEventListener("DOMContentLoaded", function() {
		const notifications = document.querySelectorAll(".notification");
		let currentIndex = 0;
		
		function showNextNotification() {
		  // Hide the current notification
		  notifications[currentIndex].style.opacity = 0;
		  notifications[currentIndex].style.transform = "translateY(100%)";
	  
		  // Update index to the next notification
		  currentIndex = (currentIndex + 1) % notifications.length;
	  
		  // Show the next notification
		  notifications[currentIndex].style.opacity = 1;
		  notifications[currentIndex].style.transform = "translateY(0)";
	  
		  // Schedule the next notification change
		  setTimeout(showNextNotification, 5000); // Change notification every 3 seconds
		}
	  
		// Start the notification cycle
		showNextNotification();
	  });
	  
	  
//HERO SLIDER
var swiper = new Swiper(".myProducts", {
	// loop: true, // Enable continuous loop mode
	spaceBetween: 10,
	// centeredSlides: true,
	// autoplay: {
	//   delay: 4000,
	//   disableOnInteraction: false,
	// },
	// pagination: {
	//   el: ".swiper-pagination",
	//   clickable: true,
	//   renderBullet: function (index, className) {
	// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
	//   },
	// },
	// navigation: {
	//   nextEl: ".swiper-button-next",
	//   prevEl: ".swiper-button-prev",
	// },
	speed: 1000,
  });


  $(function() {
	$('.toggler').on('click', function() {
	  $('.mobile__menu').stop().slideToggle(500); // Adjust the duration as needed
	});
  });
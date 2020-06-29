$(document).ready(function() {
	var isHistoryExist = false;

  $('.js-footer__jump-to-top').click(function() {
    jumpToStart();
  })

  function jumpToStart() {
    var firstElement = $('html, body');
    firstElement.scrollTop(0);
  }

	function openSearch() {
		$('.js-search__result').addClass('search__result--active');
		$('.js-overlay').addClass('overlay--active');

		if (isHistoryExist) {

		}
    if( !$('.js-search__input').val() ) {
			searchStatus(true);
    }
	}

	function closeSearch() {
		$('.js-overlay').removeClass('overlay--active');
		$('.js-search__result').removeClass('search__result--active'); 
	}

	function resetSearch() {
		$('.js-search__input').val('');
		$('.js-search__icon-close').removeClass('search__icon-close--active');
		closeSearch();
	}

	function searchStatus(isSearchEmpty) {
		if (isSearchEmpty) {
			$('.js-search__result-history').addClass('search__result-history--active');
			$('.js-search__result-tags').addClass('search__result-tags--active');
			$('.js-search__result-autosuggest').removeClass('search__result-autosuggest--active');
			$('.js-search__result-list').removeClass('search__result-list--active');

		} else {
			$('.js-search__result-history').removeClass('search__result-history--active');
			$('.js-search__result-tags').removeClass('search__result-tags--active');
			$('.js-search__result-autosuggest').addClass('search__result-autosuggest--active');
			$('.js-search__result-list').addClass('search__result-list--active');
		}

	}

	$('.js-search__input').focusin(function() {
		openSearch();
	})

	$('.js-search__input').focusout(function() {
		closeSearch();
	})

	$('.js-search__icon-close').click(function(e) {
		e.preventDefault();
		resetSearch()
	});

	$('.js-search__input').keyup(function(e) {
    if( $(this).val() ) {
			$('.js-search__icon-close').addClass('search__icon-close--active');
			$('.js-search__result-autosuggest--not-founded').text(e.target.value);

			searchStatus(false);
    } else {
			$('.js-search__icon-close').removeClass('search__icon-close--active');
			searchStatus(true);
    }
	});

  $(".js-header-desktop__tab-menu-list").mouseover(function() {
    $('.header-desktop__tab-menu-list--active').not(this).removeClass('header-desktop__tab-menu-list--active')
    $(this).addClass('header-desktop__tab-menu-list--active')

    var tabMenu = $(".header-desktop__tab-menu-list")
    var content = $(".header-desktop__tab-menu-content")
    var current = $(this).children('div').data('index')

    content.each(function () {
      if (current == $(this).data('index')) {
        $(this).addClass('header-desktop__tab-menu-content--active')
      } else {
        $(this).removeClass('header-desktop__tab-menu-content--active')
      }
    })
  });
  
  $(".js-header-responsive__burger-menu").click(function() {
    $('.header-responsive__side').addClass('header-responsive__side--open')
    $('.header-responsive__side-wrapper').addClass('header-responsive__side-wrapper--open')
  });
  $(".js-header-responsive__side-wrapper").click(function(e) {
  	if (e.target != this) {
  		return
  	}
    $('.header-responsive__side').removeClass('header-responsive__side--open')
    $('.header-responsive__side-wrapper').removeClass('header-responsive__side-wrapper--open')
  });

	window.onscroll = function() {stickyHeader()};
	var header = $(".js-header-desktop__row");
	var navbarWrapper = $(".js-header-desktop__navbar-wrapper"); 
	var sticky = 150;
	function stickyHeader() {
	  if (window.pageYOffset > sticky) {
	    navbarWrapper.slideUp(100);
	  } else {
	    navbarWrapper.slideDown(100);
	  }
	}

  new Swiper('.js-main-slider', {
	  lazy: false,
	  preloadImages: true,
	  loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
    },
  });

  var productSlider = new Swiper('.js-slider', {
	  lazy: true,
    slidesPerView: 2,
		spaceBetween: 10,
		freeMode: true,
	  loop: false,
    navigation: {
      nextEl: '.products-button-next',
      prevEl: '.products-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
	  breakpoints: {
	    700: {
	      slidesPerView: 3,
	      spaceBetween: 15,
	    },
	    991: {
	      slidesPerView: 4,
	      spaceBetween: 40,
				freeMode: false,
	    }
	  }
  });

  var specialSlider = new Swiper('.js-special-slider', {
	  lazy: true,
    slidesPerView: 2,
		spaceBetween: 10,
		freeMode: true,
	  loop: false,
    navigation: {
      nextEl: '.special-slider-button-next',
      prevEl: '.special-slider-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
	  breakpoints: {
	    700: {
	      slidesPerView: 3,
	      spaceBetween: 15,
	    },
	    991: {
	      slidesPerView: 4,
	      spaceBetween: 10,
				freeMode: false,
	    }
	  }
  });

  var brandSlider = new Swiper('.js-brand-slider', {
	  lazy: true,
    slidesPerView: 2,
		spaceBetween: 10,
		freeMode: true,
	  loop: true,
    navigation: {
      nextEl: '.brand-slider-button-next',
      prevEl: '.brand-slider-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
	  breakpoints: {
	    700: {
	      slidesPerView: 3,
	      spaceBetween: 15,
	    },
	    991: {
	      slidesPerView: 5,
	      spaceBetween: 40,
				freeMode: false,
	    }
	  }
  });

  var momentSlider = new Swiper('.js-moment-slider', {
  	init: false,
	  lazy: true,
    slidesPerView: 1,
	  loop: true,
	  autoplay: {
	  	delay: 7000
	  },
	  speed: 500,
  });

  momentSlider.on('init', function() {
  	startProgressBar();
  });

  momentSlider.init();

  momentSlider.on('slideChangeTransitionStart', function() {
  	resetProgressBar();
  });

  momentSlider.on('slideChangeTransitionEnd', function() {
  	startProgressBar();
  }); 
  

  function startProgressBar() {
    // apply keyframe animation
    $(".moment-slider__loader").css({
      width: "100%",
      transition: "width 7000ms ease-in-out"
    });
  }

  function resetProgressBar() {
    $(".moment-slider__loader").css({
      width: 0,
      transition: "width 0s ease-in-out"
    });
  }





  (function setSpecialSliderTimer() {
    var sliders = $('.js-special-slider');
    var slideCount = $('.js-special-slider__slide');

    slideCount.map(function(index, item) {
      var secondsa = $('.js-special-slider__counter-seconds');
      var minutesa = $('.js-special-slider__counter-minutes');
      var hoursa = $('.js-special-slider__counter-hour');
      var milliseconds = (secondsa[index].innerHTML*1000) + (minutesa[index].innerHTML*60000) + (hoursa[index].innerHTML*3600000);


      var counter = 0;

      var countdown = setInterval(function(){
        function convertMS( milliseconds ) {
            var hour, minute, seconds;
            seconds = Math.floor(milliseconds / 1000);
            minute = Math.floor(seconds / 60);
            seconds = seconds % 60;
            hour = Math.floor(minute / 60);
            minute = minute % 60;
            hour = hour % 24;
            return {
                hour: hour == 0 ? "00" : hour,
                minute: minute == 0 ? "00" : minute,
                seconds: seconds == 0 ? "00" : seconds
            };
        }
      var result = convertMS(milliseconds - counter);
      secondsa[index].innerHTML = result.seconds;
      minutesa[index].innerHTML = result.minute;
      hoursa[index].innerHTML = result.hour;
      if (hoursa[index].innerHTML <= 0 && minutesa[index].innerHTML <= 0 && secondsa[index].innerHTML <= 0 ) {
        clearInterval(countdown);
      }
      counter = counter + 1000
      }, 1000)
    })
  })();
})


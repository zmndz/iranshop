$(document).ready(function() {
	var isHistoryExist = false;

  $('.js-product__share-item-link').attr('data-url', window.location.href)

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


  var productGalleryThumbs = new Swiper('.js-product__gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      // watchSlidesVisibility: true,
      // watchSlidesProgress: true,

  });
  var productGalleryMain = new Swiper('.js-product__gallery-main', {
    spaceBetween: 10,
    lazy: false,
    preloadImages: true,
    slidesPerView: 1,
    loop: false,
    thumbs: {
      swiper: productGalleryThumbs
    },
    on: {
      slideChangeTransitionEnd: function () {
        magnify(".product__image", 2);
      },
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

  if (momentSlider.$wrapperEl) {
    momentSlider.init();
  }

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
    if (!(slideCount.length)) {
      return false
    }
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
                hour: hour == 0 ? "00" : hour >= 10 ? hour : '0' + hour,
                minute: minute == 0 ? "00" : minute >= 10 ? minute : '0' + minute,
                seconds: seconds == 0 ? "00" : seconds >= 10 ? seconds : '0' + seconds
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

  (function setProductTimer() {
    if (!($('.js-product__counter').length)) {
      return false
    }
    var secondsa = $('.js-product__counter-seconds');
    var minutesa = $('.js-product__counter-minutes');
    var hoursa = $('.js-product__counter-hours');
    var milliseconds = (secondsa[0].innerHTML*1000) + (minutesa[0].innerHTML*60000) + (hoursa[0].innerHTML*3600000);
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
              hour: hour == 0 ? "00" : hour >= 10 ? hour : '0' + hour,
              minute: minute == 0 ? "00" : minute >= 10 ? minute : '0' + minute,
              seconds: seconds == 0 ? "00" : seconds >= 10 ? seconds : '0' + seconds
          };
      }
    var result = convertMS(milliseconds - counter);
    secondsa[0].innerHTML = result.seconds;
    minutesa[0].innerHTML = result.minute;
    hoursa[0].innerHTML = result.hour;
    if (hoursa[0].innerHTML <= 0 && minutesa[0].innerHTML <= 0 && secondsa[0].innerHTML <= 0 ) {
      clearInterval(countdown);
    }
    counter = counter + 1000
    }, 1000)
  })();


  $('.js-product__attribute-summery-more-wrapper').click(function() {
    $('.js-product__attribute-summery-list-wrapper').toggleClass('product__attribute-summery-list-closed');
    var moreButton = $('.js-product__attribute-summery-more');
    if (moreButton.hasClass('product__attribute-summery-more-closed')) {
      moreButton.toggleClass('product__attribute-summery-more-closed');
      moreButton[0].innerText = '- بستن'
    } else {
      moreButton.toggleClass('product__attribute-summery-more-closed');
      moreButton[0].innerText = '+ موارد بیشتر'
    }
  });

  $('.js-product__color').click(function() {
    $(this).addClass('product__color--active');
    $('.js-product__color').not(this).removeClass('product__color--active');
  });

  $('.js-product__quantity-add').click(function() {
    var productQuantity = $('.js-product__quantity-input');
    if ((parseInt(productQuantity.val()) >= 1 )) {
      productQuantity.val(parseInt(productQuantity.val()) + 1); 
    } else {
      productQuantity.val(1); 
    }  });

  $('.js-product__quantity-remove').click(function() {
    var productQuantity = $('.js-product__quantity-input');
    if (!(parseInt(productQuantity.val()) <= 1 )) {
      productQuantity.val(parseInt(productQuantity.val()) - 1); 
    } else {
      productQuantity.val(1); 
    }
  });

  $('.js-product__actions-share').click(function(e) {
    e.preventDefault();
    $('.js-product__share-modal').css('display', 'flex').hide().fadeIn(100);
  });

  $('.js-modal__overlay').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).fadeOut(100);
  });

  $('.js-modal__close').click(function(e) {
    e.preventDefault();
    $(this).closest('.js-modal__overlay').fadeOut(100);
  });

  $('.js-modal__wrapper').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
  });

  $('.js-product__share-item-link, .js-product__share-item').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
  })

  $('.js-product__actions-video').click(function(e) {
    e.preventDefault();
    $('.js-product__video-modal').css('display', 'flex').hide().fadeIn(100);
  });

  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(element.data('url')).select();
    document.execCommand("copy");
    $temp.remove();
    return true;
  }

  $('.js-product__share-item-link').click(function(e) {
    e.preventDefault();
    var copyResult = copyToClipboard($(this));
    if (copyResult) {
      $('.js-product__share-item-link-label')[0].innerText = "کپی شد";
      $('.js-product__share-item-link-icon').removeClass('icon-grid-outline');
      $('.js-product__share-item-link-icon').addClass('icon-checkmark-circle-outline');

      setTimeout(function() {
        $('.js-product__share-item-link-label')[0].innerText = 'کپی لینک';
        $('.js-product__share-item-link-icon').removeClass('icon-checkmark-circle-outline');
        $('.js-product__share-item-link-icon').addClass('icon-grid-outline');
      }, 3000);
    }
  });

  $('.js-product__actions-compare').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('product__actions-compare--active');
  });

  function loadZoomSlide(element) {
    var activeProductSlide = $('.product__gallery-main').find('.swiper-slide-active').find('.product__image').attr('src')
    $(element).attr('src', activeProductSlide)
  }

  $('.js-product__actions-zoom').click(function (e) {
    e.preventDefault();
    $('.js-product__zoom-modal').css('display', 'flex').hide().fadeIn(100);
    // zoom(".js-product__zoom-image", 1.5);
    loadZoomSlide('.js-product__zoom-image');
  })

  // var showZoom = true;
  // $('.js-product__zoom-modal').click(function() {
  //   showZoom = true
  //   $('.img-zoom-glass').removeClass('img-zoom-glass--active');
  //   loadZoomSlide('.js-product__zoom-image');
  // })
  
  // $('.js-img-zoom-container').click(function(e) {
  //   loadZoomSlide('.js-product__zoom-image');
  //   zoom(".js-product__zoom-image", 1.3);
  //   if (showZoom) {
  //     $('.img-zoom-glass').addClass('img-zoom-glass--active');
  //     showZoom = false
  //   } else {
  //     $('.img-zoom-glass').removeClass('img-zoom-glass--active');
  //     showZoom = true
  //   }
  // })

  function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    imgList = $(imgID);
    imgList.siblings().remove();
    imgList.map(function(index, item) {
      if (item.closest('.swiper-slide-active')) {
        img = item;
      }
    })
    if (!img) {
      return false
    }
    /*create magnifier glass:*/
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    /*insert magnifier glass:*/
    img.parentElement.insertBefore(glass, img);
    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /*prevent the magnifier glass from being positioned outside the image:*/
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /*set the position of the magnifier glass:*/
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }
  magnify(".product__image", 2);

  // function zoom(imgID, zoom) {
  //   var img, glass, w, h, bw;
  //   imgList = $(imgID);
  //   // console.log("imgList", imgList)
  //   imgList.siblings().remove();
  //   img = imgList[0];
  //   // console.log("img", img)
  //   if (!img) {
  //     return false
  //   }

  //   var img, glass, w, h, bw;
  //   imgList = $(imgID);
  //   imgList.siblings().remove();
  //   img = imgList[0];
  //   if (!img) {
  //     return false
  //   }
  //   /*create magnifier glass:*/
  //   glass = document.createElement("DIV");
  //   glass.setAttribute("class", "img-zoom-glass");
  //   /*insert magnifier glass:*/
  //   img.parentElement.insertBefore(glass, img);
  //   /*set background properties for the magnifier glass:*/
  //   glass.style.backgroundImage = "url('" + img.src + "')";
  //   glass.style.backgroundRepeat = "no-repeat";
  //   glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  //   bw = 3;
  //   w = glass.offsetWidth / 2;
  //   h = glass.offsetHeight / 2;
  //   /*execute a function when someone moves the magnifier glass over the image:*/
  //   glass.addEventListener("mousemove", moveMagnifier);
  //   img.addEventListener("mousemove", moveMagnifier);
  //   /*and also for touch screens:*/
  //   glass.addEventListener("touchmove", moveMagnifier);
  //   img.addEventListener("touchmove", moveMagnifier);
  //   function moveMagnifier(e) {
  //     var pos, x, y;
  //     /*prevent any other actions that may occur when moving over the image*/
  //     e.preventDefault();
  //     /*get the cursor's x and y positions:*/
  //     pos = getCursorPos(e);
  //     x = pos.x;
  //     y = pos.y;
  //     /*prevent the magnifier glass from being positioned outside the image:*/
  //     if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
  //     if (x < w / zoom) {x = w / zoom;}
  //     if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
  //     if (y < h / zoom) {y = h / zoom;}
  //     /*set the position of the magnifier glass:*/
  //     glass.style.left = (x - w) + "px";
  //     glass.style.top = (y - h) + "px";
  //     /*display what the magnifier glass "sees":*/
  //     glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  //   }
  //   function getCursorPos(e) {
  //     var a, x = 0, y = 0;
  //     e = e || window.event;
  //     /*get the x and y positions of the image:*/
  //     a = img.getBoundingClientRect();
  //     /*calculate the cursor's x and y coordinates, relative to the image:*/
  //     x = e.pageX - a.left;
  //     y = e.pageY - a.top;
  //     /*consider any page scrolling:*/
  //     x = x - window.pageXOffset;
  //     y = y - window.pageYOffset;
  //     return {x : x, y : y};
  //   }
  // }

  $('.js-product__tabs-responsive').click(function() {
    $(this).closest('.js-product__tabs-panel').toggleClass('product__tabs-panel-closed');
    var moreButton = $(this).find('.js-product__tabs-responsive-link');
    if (moreButton.hasClass('product__tabs-responsive-link-closed')) {
      moreButton.toggleClass('product__tabs-responsive-link-closed');
      moreButton[0].innerText = 'نمایش کمتر'
    } else {
      moreButton.toggleClass('product__tabs-responsive-link-closed');
      moreButton[0].innerText = 'نمایش بیشتر'
    }
  });

  $('.js-product__tabs-more').click(function() {
    $('.js-product__tabs-content--description-closed').toggleClass('product__tabs-content--description-closed');
    var moreButton = $('.js-product__tabs-more');
    if (moreButton.hasClass('product__tabs-more--closed')) {
      moreButton.toggleClass('product__tabs-more--closed');
      moreButton[0].innerText = 'کمتر'
    } else {
      moreButton.toggleClass('product__tabs-more--closed');
      moreButton[0].innerText = 'ادامه مطلب'
    }
  });


  $('#js-product__video').click(function(e) {
    e.stopPropagation();
  });

  $('.js-product__video-modal').click(function(e) {
    var productVideo = document.getElementById('js-product__video');
    e.stopPropagation();
    productVideo.load();
  });

  $('.js-product__tabs-item').click(function(e) {
    e.preventDefault();
    $('.js-product__tabs-item').removeClass('product__tabs-item--active');
    $(this).addClass('product__tabs-item--active');
    var tabIndex = $(this).attr('data-tab');
    var tabPanel = $('.js-product__tabs-panel')
    tabPanel.removeClass('product__tabs-panel--active');
    tabPanel.eq(tabIndex).addClass('product__tabs-panel--active');
  });

  $('.product__rating-average').starrr({
    rating: 4,
    readOnly: true,
  })

  $('.product__tabs-comments-rate').starrr({
    rating: 4,
    readOnly: true,
    change: function(e, value){
      console.log('new rating is ' + value, e)
    }
  })

  $('.product__tabs-comments-rating').starrr({
    rating: 0,
    readOnly: false,
    change: function(e, value){
      e.target.setAttribute("data-rate", value)
    },
  })

  $('.js-product__tabs-comments-submit').click(function(e) {
    var formRated = $('.product__tabs-comments-rating').attr('data-rate')
    var isFormRatingValid = isElementValid('.product__tabs-comments-rating', formRated)
    var isCommentInputValid = isInputValid('.product__tabs-comments-input')
    var isNameInputValid = isInputValid('.product__tabs-comments-name')
    var isEmailInputValid = isInputValid('.product__tabs-comments-email')

    if (!isFormRatingValid || !isCommentInputValid || !isNameInputValid || !isEmailInputValid) {
      e.preventDefault()
    }
  })

  function isInputValid(element) {
    var element = $(element)
    var isValid = element.val()
    if (!element.length) {
      console.log("There is no Eelement")
      return false
    }

    if (!isValid) {
      $(element).addClass('validation-shake')
      setTimeout(function() {
        $(element).removeClass('validation-shake')
      }, 900)
      return false
    }
    return true
  }

  function isElementValid(element, isValid) {
    var element = $(element)
    if (!element.length) {
      console.log("There is no Eelement")
      return false
    }

    if (!isValid) {
      $(element).addClass('validation-shake')
      setTimeout(function() {
        $(element).removeClass('validation-shake')
      }, 900)
      return false
    }
    return true
  }


})







/*****************************************************************/
/************************ starrr package **************************/
/*****************************************************************/

var slice = [].slice;

(function($, window) {
  var Starrr;
  window.Starrr = Starrr = (function() {
    Starrr.prototype.defaults = {
      rating: void 0,
      max: 5,
      readOnly: false,
      emptyClass: 'icon-star',
      fullClass: 'icon-stock',
      change: function(e, value) {},
    };

    function Starrr($el, options) {
      this.options = $.extend({}, this.defaults, options);
      this.$el = $el;

      if (this.$el.closest('.starrr').attr('data-rate')) {
        this.options.rating = this.$el.closest('.starrr').attr('data-rate')
      }

      this.createStars();
      this.syncRating();
      if (this.options.readOnly) {
        return;
      }
      this.$el.on('mouseover.starrr', 'i', (function(_this) {
        return function(e) {
          return _this.syncRating(_this.getStars().index(e.currentTarget) + 1);
        };
      })(this));
      this.$el.on('mouseout.starrr', (function(_this) {
        return function() {
          return _this.syncRating();
        };
      })(this));
      this.$el.on('click.starrr', 'i', (function(_this) {
        return function(e) {
          e.preventDefault();
          return _this.setRating(_this.getStars().index(e.currentTarget) + 1);
        };
      })(this));
      this.$el.on('starrr:change', this.options.change);
    }

    Starrr.prototype.getStars = function() {
      return this.$el.find('i');
    };

    Starrr.prototype.createStars = function() {
      var j, ref, results;
      results = [];
      for (j = 1, ref = this.options.max; 1 <= ref ? j <= ref : j >= ref; 1 <= ref ? j++ : j--) {
        results.push(this.$el.append("<i></i>"));
      }
      return results;
    };

    Starrr.prototype.setRating = function(rating) {
      if (this.options.rating === rating) {
        rating = void 0;
      }
      this.options.rating = rating;
      this.syncRating();
      return this.$el.trigger('starrr:change', rating);
    };

    Starrr.prototype.getRating = function() {
      return this.options.rating;
    };

    Starrr.prototype.syncRating = function(rating) {
      var $stars, i, j, ref, results;
      rating || (rating = this.options.rating);
      $stars = this.getStars();
      results = [];
      for (i = j = 1, ref = this.options.max; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
        results.push($stars.eq(i - 1).removeClass(rating >= i ? this.options.emptyClass : this.options.fullClass).addClass(rating >= i ? this.options.fullClass : this.options.emptyClass));
      }
      return results;
    };

    return Starrr;

  })();
  return $.fn.extend({
    starrr: function() {
      var args, option;
      option = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return this.each(function() {
        var data;
        data = $(this).data('starrr');
        if (!data) {
          $(this).data('starrr', (data = new Starrr($(this), option)));
        }
        if (typeof option === 'string') {
          return data[option].apply(data, args);
        }
      });
    }
  });
})(window.jQuery, window);

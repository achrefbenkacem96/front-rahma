       // @ts-nocheck 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PluginsService {

  // @ts-ignore
  public $ = window.$;

  public slide: any;
  public slideTotal: any;
  public slideCurrent: any;

  constructor() {

  }

  public index(): void {
    this.loaderInit();
    this.wowInit();
    this.owlCarousalInit(this.$);
    this.accordion(this.$);
    this.magnific(this.$);
    this.progressBar(this.$);
    this.isotope(this.$);
    this.global_scroll(this.$);
    this.headerHeight(this.$);
    this.toggleDropDown_new(this.$);
    this.slickSlider(this.$);
  }

  // Function for toggle page Loader...
  public loaderInit(): void {
    this.$('#load').fadeOut();
    this.$('#loading').delay(1000).fadeOut('slow');
    this.$('#back-to-top').fadeOut()
  }

  public global_scroll($): void {
    $(window).on('scroll', function (e) {
      let header = $("#main-header"), yOffset = 0, triggerPoint = 80;
      yOffset = $(window).scrollTop();

      if (yOffset >= triggerPoint) {
        header.addClass("menu-sticky animated slideInDown");
      } else {
        header.removeClass("menu-sticky animated slideInDown");
      }

      // Back To Top
        // @ts-ignore
      if ($(this).scrollTop() > 250) {
        $('#back-to-top').fadeIn(1400);
      } else {
        $('#back-to-top').fadeOut(400);
      }

      // Pill Tab
      // const nav = $('#pills-tab');
      // if (nav.length) {

      //   const contentNav = nav.offset().top - window.outerHeight;
      //   if ($(window).scrollTop() >= (contentNav)) {
      //     $('#pills-tab li a').removeClass('active');
      //     $('#pills-tab li a[aria-selected=true]').addClass('active');
      //   }
      // }

      // Feature Tab
      const nav1 = $('#features');
      if (nav1.length) {
        const contentNav1 = nav1.offset().top - window.outerHeight;
        if ($(window).scrollTop() >= (contentNav1)) {
          $('#features .row li a').removeClass('active');
          $('#features .row li a[aria-selected=true]').addClass('active');
        }
      }
    });
  }

  /*------------------------
    Dropdown Menu
  --------------------------*/
    // @ts-ignore
  public headerHeight($) : void {
      // let height = $("#main-header").height();
      // $('.iq-height').css('height', height + 'px');
  }
    // @ts-ignore
  public toggleDropDown_new($): void {
    $(".nav-item.dropdown").mouseenter(function() {
        // @ts-ignore
      $(this).addClass("menu-show");
    });

    $(".nav-item.dropdown").mouseleave(function() {
        // @ts-ignore
        $(this).removeClass("menu-show");
    });
      // @ts-ignore
    $('.navbar-nav li a').on('click', function(e) {
        // @ts-ignore
      let anchor = $(this);
      $('html, body').stop().animate({
          // scrollTop: $(anchor.attr('href')).offset().top - 0
      }, 1500);
      e.preventDefault();
    });
    $('.navbar-nav li a').on('click', function() {
      // $(this).removeClass('active');
        // @ts-ignore
      $(this).parent('.nav-item.dropdown').addClass('menu-show');
    });
    // this.headerHeight();
    $(window).resize(this.headerHeight);
  }
  // @ts-ignore
  public checkElement(type, element): boolean {
    let found = false;
    let elements;
    switch (type) {
      case 'class':
        elements = document.getElementsByClassName(element);

        if (elements !== undefined && elements !== null && elements.length > 0) {
          found = true;
        }
        break;

      case 'id':
        elements = document.getElementById(element);

        if (elements !== undefined && elements !== null) {
          found = true;
        }
        break;
    }


    return found;
  }

  public wowInit(): void {

    const elementExist = this.checkElement('class', 'wow');

    // @ts-ignore
    if (elementExist) {
      // @ts-ignore
      const WOW = window.WOW;
      new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        live: false
      }).init();
    }
  }
  // @ts-ignore
  public owlCarousalInit($): void {

    const elementExist = this.checkElement('class', 'owl-carousel');
    if (elementExist) {
      this.$('.owl-carousel').each(function() {
          // @ts-ignore
        const $carousel = $(this);
        $carousel.owlCarousel({
          items: $carousel.data('items'),
          loop: $carousel.data('loop'),
          margin: $carousel.data('margin'),
          stagePadding: $carousel.data('padding'),
          nav: $carousel.data('nav'),
          dots: $carousel.data('dots'),
          autoplay: $carousel.data('autoplay'),
          autoplayTimeout: $carousel.data('autoplay-timeout'),
          navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>'],
          responsiveClass: true,
          responsive: {
            // breakpoint from 0 up
            0: {
              items: $carousel.data('items-mobile-sm'),
              nav: false,
              dots: true
            },
            // breakpoint from 480 up
            480: {
              items: $carousel.data('items-mobile'),
              nav: false,
              dots: true
            },
            // breakpoint from 786 up
            768: {
              items: $carousel.data('items-tab')
            },
            // breakpoint from 1023 up
            1023: {
              items: $carousel.data('items-laptop')
            },
            1199: {
              items: $carousel.data('items')
            }
          }
        });
      });
    }
  }
  // @ts-ignore
  public accordion($) {
    
    $('.iq-accordion .iq-accordion-block .iq-accordion-details').hide();
    $('.iq-accordion .iq-accordion-block:first').addClass('iq-active').children().slideDown('slow');
    $('.iq-accordion .iq-accordion-block').on("click", function() {

      if ($(this).children('div.iq-accordion-details').is(':hidden')) {
        $('.iq-accordion .iq-accordion-block').removeClass('iq-active').children('div.iq-accordion-details').slideUp('slow');
        $(this).toggleClass('iq-active').children('div.iq-accordion-details').slideDown('slow');
      }
    });
  }

  public progressBar($): void {
    const elementExist = this.checkElement('class', 'iq-progress-bar');
    if (elementExist) {
      $('.iq-progress-bar > span').each(function() {
        const $this = $(this);
        const width = $this.data('percent');
        $this.css({
          transition: 'width 2s'
        });
        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function() {
          // tslint:disable-next-line:only-arrow-functions
          $this.appear(function() {
            $this.css('width', width + '%');
          });
        }, 500);
      });
    }
  }

  public magnific($): void {
    $('.popup-gallery').magnificPopup({
      delegate: 'a.popup-img',
      tLoading: 'Loading image #%curr%...',
      type: 'image',
      mainClass: 'mfp-img-mobile',
      gallery: {
        navigateByImgClick: true,
        enabled: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      type: 'iframe',
      disableOn: 700,
      mainClass: 'mfp-fade',
      preloader: false,
      removalDelay: 160,
      fixedContentPos: false
    });
  }

  public revolutionSlider() {
    // @ts-ignore
    window.jQuery('#rev_slider_1_1').show().revolution({
      jsFileLocation: 'js/',
      sliderLayout: 'fullwidth',
      visibilityLevels: '1240,1024,778,480',
      gridwidth: 1440,
      gridheight: 768,
      spinner: 'spinner0',
      editorheight: '768,546,584,720',
      responsiveLevels: '1240,1024,778,480',
      disableProgressBar: 'on',
      navigation: {
        onHoverStop: false
      },
      parallax: {
          levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 30],
          type: 'mouse',
          origo: 'slidercenter',
          speed: 0
      },
      fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
      },
    })

    // @ts-ignore
    window.jQuery('#rev_slider_2_1').show().revolution({
      jsFileLocation: "js/",
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1024,778,480",
      gridwidth: "1440,1024,778,480",
      gridheight: "789,600,700,650",
      spinner: "spinner0",
      editorheight: "789,600,700,650",
      responsiveLevels: "1240,1024,778,480",
      disableProgressBar: "on",
      navigation: {
        onHoverStop: false
      },
      parallax: {
        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30],
        type: "mouse",
        origo: "slidercenter",
        speed: 0
      },
      fallbacks: {
          allowHTML5AutoPlayOnAndroid:true
      },
    });

    // @ts-ignore
    window.jQuery('#rev_slider_3_1').show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels: "1240,1024,778,480",
      gridwidth: "1440,1024,778,480",
      gridheight: "870,768,650,600",
      spinner: "spinner0",
      editorheight: "870,768,650,600",
      responsiveLevels: "1240,1024,778,480",
      disableProgressBar: "on",
      navigation: {
        onHoverStop: false
      },
      parallax: {
        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30],
        type: "mouse",
        origo: "slidercenter",
        speed: 0
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true
      },
    });

    // @ts-ignore
    window.jQuery('#rev_slider_4_1').show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1024,778,480",
      gridwidth:"1440,1024,778,480",
      gridheight:"900,600,600,400",
      spinner:"spinner0",
      editorheight:"900,600,600,400",
      responsiveLevels:"1240,1024,778,480",
      disableProgressBar:"on",
      navigation: {
        onHoverStop:false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });

    // @ts-ignore
    window.jQuery("#rev_slider_5_1").show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1024,778,480",
      gridwidth:"1440,1024,778,480",
      gridheight:"870,768,650,600",
      spinner:"spinner0",
      editorheight:"870,768,650,600",
      responsiveLevels:"1240,1024,778,480",
      disableProgressBar:"on",
      navigation: {
        onHoverStop:false
      },
      parallax: {
        levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],
        type:"mouse",
        origo:"slidercenter",
        speed:0
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });

    // @ts-ignore
    window.jQuery("#rev_slider_6_1").show().revolution({
      jsFileLocation:"js/",
      sliderLayout: 'fullwidth',
      visibilityLevels: '1240,1024,778,480',
      gridwidth: '1400,1024,767,479',
      gridheight: '900,700,500,400',
      minHeight: '',
      autoHeight: true,
      lazyType: 'smart',
      spinner: 'spinner0',
      editorheight: '900,700,500,400',
      responsiveLevels: '1240,1024,778,480',
      disableProgressBar: 'on',
      navigation: {
        mouseScrollNavigation: false,
        touch: {
          touchenabled: true
        }
      },
      parallax: {
        levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
        type: 'mouse'
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true
      }
   });

   //  @ts-ignore
   window.jQuery("#rev_slider_8_1").show().revolution({
      jsFileLocation:"js/",
      sliderLayout: "fullscreen",
      visibilityLevels: "1240,1024,778,480",
      gridwidth: "1400,1024,778,480",
      gridheight: "900,768,960,720",
      spinner: "spinner0",
      editorheight: "900,768,960,720",
      responsiveLevels: "1240,1024,778,480",
      disableProgressBar: "on",
      navigation: {
        onHoverStop: false
      },
      parallax: {
        levels: [2, 4, 8, 8, 10, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30],
        type: "mouse",
        speed: 0
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true
      },
    });

    // @ts-ignore
    window.jQuery("#rev_slider_9_1").show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1240,778,480",
      gridwidth:"1600,1600,778,480",
      gridheight:"900,900,960,720",
      spinner:"spinner0",
      editorheight:"900,768,960,720",
      responsiveLevels:"1240,1240,778,480",
      disableProgressBar:"on",
      navigation: {
        onHoverStop:false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });
  }

  public isotope ($): void {
    /* ------------------------   2 Isotope   -------------------------- */
    const elementExist = this.checkElement('class', 'isotope');
    if (elementExist) {
      // eslint-disable-next-line no-undef
      $('.isotope').isotope({
        itemSelector: '.iq-grid-item'
      });

      // filter items on button click
      $('.isotope-filters').on('click', 'button', function () {
        const filterValue = $(this).attr('data-filter');
        $('.isotope').isotope({
          resizable: true,
          filter: filterValue
        });
        $('.isotope-filters button').removeClass('show active')
        $(this).addClass('show active')
      })
    }

    /* ------------------------   3 Masonry   -------------------------- */

    const elementExist1 = this.checkElement('class', 'iq-masonry-block');
    if (elementExist1) {
      const $msnry = $('.iq-masonry-block .iq-masonry');
      if ($msnry) {
        const $filter = $('.iq-masonry-block .isotope-filters');
        $msnry.isotope({
          percentPosition: true,
          resizable: true,
          itemSelector: '.iq-masonry-block .iq-masonry-item',
          masonry: {
            gutterWidth: 0
          }
        });

        // bind filter button click
        $filter.on('click', 'button', function () {
          const filterValue = $(this).attr('data-filter');
          $msnry.isotope({
            filter: filterValue
          })
        });

        $filter.each(function (i, buttonGroup) {
          const $buttonGroup = $(buttonGroup);
          $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active')
          })
        })
      }
    }
  }

  // Slick  Slider
  public slickSlider ($): void {
    $('.slider.slider-nav').on('swipe', function(event, slick, direction) {

    });

    $('.slider.slider-nav').on('afterChange', function(event, currentSlide) {
      $('.slick-current').prev().addClass('near-item');
      $('.slick-current').next().addClass('near-item');
    });


    $('.slider.slider-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.slick-current').prev().removeClass('near-item');
      $('.slick-current').next().removeClass('near-item');
    });

    $('.slider.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      centerMode: true,
      focusOnSelect: true,
      asNavFor: '.slider-nav',
    });

    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      centerPadding: '60',
      asNavFor: '.slider-for',
      dots: false,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      responsive: [{
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30',
          slidesToShow: 3
        }
        }, {
          breakpoint: 767,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '15',
            slidesToShow: 1
          }
        }],
    });

    $('.slick-current').prev().addClass('near-item');
    $('.slick-current').next().addClass('near-item');
  }

}

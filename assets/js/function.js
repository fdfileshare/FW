
var timer = false;
var winTop = jQuery(window).scrollTop();
var winHeight = jQuery(window).height();
var topMargin = 250;

var duration = 300;
var easing      = 'easeOutExpo';

// var mediaQuery_mobile = 768;
var mediaQuery_mobile = 1025;

var h           = jQuery(window).height();
var nav         = jQuery('.header');
if( nav.length ){
  var nav_top     = parseInt(nav.offset().top);
  var nav_height  = nav.height();
  if(!nav_top && !nav_height){
    nav_top = nav_height = 100;
  }
}


//  window load
//  ----------------------------------------------------------------
jQuery(window).on('load', function() {


  // ハッシュがついてたら要素の頭までスクロール
  // ----------------------------------------------------------------
  var url = jQuery(location).attr('href');
  var nav = jQuery('.header');
  var nav_height = nav.height();

  if(url.indexOf("#") != -1){
    var id = url.split("#");
    var target = jQuery('#' + id[id.length - 1]);
    if( target.length ){
      var pos = target.offset().top - nav_height;
      jQuery("html, body").animate({
        scrollTop:pos
      },{
        duration : 1000,
        easing : 'easeOutQuint',
        complete : function(){
        }
      });
    }
  }
});
//  ----------------------------------------------------------------


//  document ready
//  ----------------------------------------------------------------
jQuery(document).ready(function($){
  // setAutoHeight();
  init();
  jQuery(".drawer").drawer();
  startSlick();
});


//  scroll
//  ----------------------------------------------------------------
jQuery(window).scroll(function($){
  winTop = jQuery(window).scrollTop();
  winHeight = jQuery(window).height();
  // if( nav.length ) fixedNav();
});


//  resize
//  ----------------------------------------------------------------
jQuery(window).resize(function($) {
  init();
  startSlick();

  if (timer !== false) {
    clearTimeout(timer);
  }
  timer = setTimeout(function() {
  }, 100);
});


//  initialize
//  ----------------------------------------------------------------
function init(){
  var browserHeight   = getBrowserHeight();
  var browserWidth    = getBrowserWidth();
  setAutoHeight();
  setCommentStyle();
  // setMainImageHeight();
}


//  wpdiscuz （comment）
//  ----------------------------------------------------------------
function setCommentStyle(){
  if( jQuery('#comments').length ){

    if(! jQuery('#comments').hasClass('loaded') ){

      jQuery('#comments').addClass('loaded');

      jQuery('.wc-form-wrapper').insertAfter( jQuery('#wcThreadWrapper') );
      jQuery('.wc_comm_form').each(function(){
        jQuery(this).prepend('<h3 class="wc-form-header">Add your Comment</h3>');
        jQuery(this).find('.wc-form-footer').insertBefore( jQuery(this).find('.wc-field-comment') );
        jQuery(this).find('.wc-form-footer .wc-field-submit').insertAfter( jQuery(this).find('.wc-field-comment') );
      });

      jQuery('#wpcomm').animate({
        opacity: 1,
        height: 'toggle'
      }, 700, 'easeOutExpo' );
    }

    jQuery('.wc-comment').each(function(){

      if( !jQuery(this).hasClass('moved') ){
        jQuery(this).find('.wc-comment-left').insertAfter( jQuery(this).find('.wc-comment-author') );
        jQuery(this).addClass('moved');
      }

    });



    if( jQuery('.wpdiscuz_unauth').length ){
      jQuery('.wc_comm_submit').click(function(){
        var commentpos = jQuery('#comments').offset().top - nav_height;
        jQuery("html, body").animate({
          scrollTop:commentpos
        },{
          duration : 800,
          easing : 'easeOutQuint',
          complete : function(){
          }
        });
      });
    }
  }
}


//  set Block height
//  ----------------------------------------------------------------
function setAutoHeight(){
  jQuery('.fixHeight').fixHeight();
  jQuery('.autoHeight').autoHeight({
    reset : 'reset',
    height : 'height'
  });
  jQuery('.itemLists .auto__thumb img').imagesLoaded(function(){
    if( getBrowserWidth() >= mediaQuery_mobile ){
      jQuery('.clmn-3').each(function(){
        jQuery(this).find('.auto__itemName').autoHeight({
          reset : 'reset',
          height : 'height',
          column : 3
        });
        jQuery(this).find('.auto__thumb').autoHeight({
          reset : 'reset',
          height : 'height',
          column : 3
        });
        jQuery(this).find('.auto__text').autoHeight({
          reset : 'reset',
          height : 'height',
          column : 3
        });

      });
      jQuery('.clmn-4').each(function(){
        jQuery(this).find('.auto__itemName').autoHeight({
          reset : 'reset',
          height : 'height',
          column : 4
        });
        jQuery(this).find('.auto__thumb').autoHeight({
          reset : 'reset',
          height : 'height',
          column : 4
        });

      });

    }
    else{
      jQuery('.clmn-3').each(function(){
        jQuery(this).find('.auto__itemName').autoHeight({
          reset : 'reset',
          height : 'height',
          column : 2
        });
        jQuery(this).find('.auto__thumb').autoHeight({
          reset : 'reset',
          height : 'height',
          column : 2
        });
        jQuery(this).find('.auto__text').autoHeight({
          reset : 'reset',
          height : 'height',
          column : 2
        });

      });
      jQuery('.clmn-4').each(function(){
        jQuery(this).find('.auto__block').autoHeight({
          reset : 'reset',
          height : 'height',
          column : 2
        });

      });

    }
  });
}

//  fixedNav
//  ----------------------------------------------------------------
function fixedNav(){

  var fixedPoint = nav_height - nav_height / 2;
  if( jQuery('.home').length ){ // TOP
    fixedPoint = jQuery('.indexArticle').offset().top;
  }

  if ( jQuery(this).scrollTop() >= fixedPoint ) {
  // if ( jQuery(this).scrollTop() >= nav_top + ( nav_height / 2 ) ) {
    nav.addClass('smallNav');
    jQuery('.content').addClass('scrolled');
  }else{
    nav.removeClass('smallNav');
    jQuery('.content').removeClass('scrolled');
  }
}

//  block height size
//  ----------------------------------------------------------------
function setMainImageHeight(){
  if(jQuery('.mainImageWrapper').length){
    $mainImage = jQuery('.mainImageWrapper');
    var mainImageH = $mainImage.height();
    var mainImageW = $mainImage.width();
    var imageW = 1920;

    if( mainImageW >= imageW ){
      $mainImage.css('background-size', 'cover' );
    }else{
      $mainImage.css('background-size', 'auto 100%' );
    }

  }
}

//  slick carousel slider
//  ----------------------------------------------------------------
function getSlickOptions(){
  return {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    speed: 500,
    centerMode: false,
    // focusOnSelect: true,
    variableWidth: true,
  }
}

function createSlick(){
  jQuery('.carouselItems').not('.slick-initialized').slick( getSlickOptions() );
}

function startSlick(){
  $slickElement = jQuery('.carouselItems');

  if( getBrowserWidth() >= mediaQuery_mobile && jQuery('.carouselItems').length ){
    jQuery('.carouselItemsWrapper').find('.slideItem').removeAttr('style');
    $slickElement.on('init', function(event, slick, currentSlide, nextSlide){
    });

    createSlick();

  }else{
    jQuery('.carouselItemsWrapper').find('img').imagesLoaded(function(){
      jQuery('.carouselItemsWrapper').find('.slideItem').autoHeight({
        reset : 'reset',
        height : 'height',
        column : 2
      });
    });
    if( $slickElement.hasClass('slick-initialized') ) $slickElement.slick('unslick');
  }

}


//  monitor width
//  ----------------------------------------------------------------
function getBrowserWidth(){
  if (window.innerWidth){
    return window.innerWidth;
  }else if(document.documentElement && document.documentElement.clientWidth != 0){
    return document.documentElement.clientWidth;
  }else if(document.body){
    return document.body.clientWidth;
  }return 0;
}


// monitor height
//  ----------------------------------------------------------------
function getBrowserHeight(){
  if (window.innerHeight){
    return window.innerHeight;
  }else if(document.documentElement && document.documentElement.clientHeight != 0){
    return document.documentElement.clientHeight;
  }else if(document.body){
    return document.body.clientHeight;
  }return 0;
}


jQuery(function($){

  var easing = 'easeOutQuad';
  var duration = 350;


  // cookie notification 消す
  // ----------------------------------------------------------------
  $('.btn-continue').click(function(){
    $(this).parents('.cookie-check').fadeOut('fast');
    return false;
  });


  // toggle archive links
  // ----------------------------------------------------------------
  // $('.page_item_has_children:first-child').addClass('first-expanded');
  $('.sideContents-archive .page_item_has_children').click(function(){
    $(this).toggleClass('expanded');
    $(this).find('ul').stop().animate({
      opacity: 1,
      height: 'toggle'
    }, 200, easing);
  });


  // comment form
  // ----------------------------------------------------------------
  $('#wpcomm').exResize(function(api){
    // var size = api.getSize();
    setCommentStyle();
  });


  // MW WP Form
  // ----------------------------------------------------------------
  $('.mw_wp_form select option[value=""]').html('- Please Select -');


  // gNav menu toggle
  // ----------------------------------------------------------------
  $('.gNav > ul > .parentNav').hover(function(){
    $(this).addClass('currentNav');
    $(this).find('.childNavContainer').stop().animate({
      opacity: 1,
      height: 'toggle'
    }, duration, easing);

  },function(){
    $(this).removeClass('currentNav');
    $(this).find('.childNavContainer').stop().animate({
      opacity: 0,
      height: 'toggle'
    }, duration, easing);

  });


  // input btn hover
  // ----------------------------------------------------------------
  jQuery('input.btn').wrap('<span class="inputContainer"></span>');
  jQuery('input.btn-primary').parent('.inputContainer').addClass('inputContainer-primary');
  jQuery('input.btn-secondary').parent('.inputContainer').addClass('inputContainer-secondary');
  jQuery('input.btn-tertiary').parent('.inputContainer').addClass('inputContainer-tertiary');
  jQuery('input.btn-back').parent('.inputContainer').addClass('inputContainer-back');
  // ----------------------------------------------------------------


  // sidebar
  // ----------------------------------------------------------------
  if( jQuery('.sideContentsMenu').length ){
    // jQuery('.sideContentsMenu .page_item_has_children a').click(function(){
    //   $(this).parent().find('ul').slideToggle;
    //   return false;
    // });
  }

  // contact form
  // ----------------------------------------------------------------
  if( jQuery('.mw_wp_form').length ){
    jQuery('.mwform-errors').prev('input:not([type="hidden"])').wrap('<div class="error"></div>');
    jQuery('.mwform-errors').prev('textarea').wrap('<div class="error"></div>');
    jQuery('.mwform-errors').parent('.item-content-select').addClass('item-content-select-error').find('select').wrap('<div class="error"></div>');

  }

  // page-home
  // ----------------------------------------------------------------
  if( jQuery('.home').length ){
  }
  // ----------------------------------------------------------------


  // single-products
  // ----------------------------------------------------------------
  if( jQuery('.page-products').length ){
    jQuery('.toggleList').click(function(){
      if( $(this).hasClass('expanded') ){
        $(this).text('EXPAND');
      }else{
        $(this).text('CLOSE');
      }
      $(this).toggleClass('expanded');
      $(this).next('.itemLists').slideToggle('fast').toggleClass('expanded');
      setAutoHeight();
    });
  }
  // ----------------------------------------------------------------


  // single-products
  // ----------------------------------------------------------------
  if( jQuery('.single-products').length || jQuery('.products-single').length ){
    $('.itemSlide').slick({
      fade: true,
      arrows: false,
      asNavFor: '.itemThumbs'
    });
    $('.itemThumbs').slick({
      dots: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll : 1,
      infinite: false,
      centerMode: false,
      focusOnSelect: true,
      asNavFor: '.itemSlide',
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 6,
            arrows: false,
            // centerMode: true,
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            arrows: true,
            // centerMode: false,
          }
        }
      ]
    });
  }


  // フォーム
  // ----------------------------------------------------------------
  if(jQuery('.searchBar').length){

    jQuery('.searchToggle').click(function(event){
      var input_width = 200;
      var padding_left_open = 15;
      var padding_left = 100;
      if( getBrowserWidth() <= mediaQuery_mobile ) {
        input_width = jQuery('.spSearchBarArea').width() - 25;
        padding_left_open = 0;
        padding_left = 0;
      }

      event.stopPropagation();
      if( !jQuery('.searchBar').hasClass('opened') ){
        jQuery(this).hide();
        jQuery('.searchBar').addClass('opened').stop().animate({
          'padding-left': padding_left_open
        }, duration, easing);
        jQuery('.searchBar').find('.inputArea').stop().animate({
          opacity: 1,
          'padding': '0 5px',
          width: input_width
        }, duration, easing);
        jQuery('.searchBar').find('.inputArea').focus();

      }
      return false;
    }).css('cursor','pointer');

    jQuery('.searchBar:visible').skOuterClick(function(){
      var input_width = 200;
      var padding_left_open = 15;
      var padding_left = 100;
      if( getBrowserWidth() <= mediaQuery_mobile ) {
        input_width = jQuery('.spSearchBarArea').width() - 25;
        padding_left_open = 0;
        padding_left = 0;
      }

      var isFocus = false;
      isFocus = $('.searchBar:visible').find('.inputArea').is(':focus')
      var inputVal = jQuery(this).find('.inputArea').val();

      if( !jQuery(this).hasClass('searchBtn') && jQuery('.searchBar').hasClass('opened') && !isFocus ){
        jQuery('.searchToggle').show();
        jQuery('.searchBar').removeClass('opened').stop().animate({
          'padding-left': padding_left
        }, duration, easing);
        jQuery('.searchBar').find('.inputArea').stop().animate({
          opacity: 0,
          'padding': 0,
          width: 0
        }, duration, easing);
      }
    });

  }
  // ----------------------------------------------------------------


  jQuery('a img').hover(function(){
    jQuery(this).attr('src', jQuery(this).attr('src').replace('_off', '_on'));
  }, function(){
    jQuery(this).attr('src', jQuery(this).attr('src').replace('_on', '_off'));
  });

  /* 　テーブルの偶数・奇数の行の色を変える　.odd　 */
  jQuery("tr:odd").addClass("odd");

  // デバイス判別
  var ua = navigator.userAgent;
  var device = '';
  if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
      device = 'mobile';
  }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
      device = 'tablet';
  }else{
      device = 'other';
  }
  jQuery('html').addClass(device);

});



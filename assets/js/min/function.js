function init(){getBrowserHeight(),getBrowserWidth();setAutoHeight(),setCommentStyle()}function setCommentStyle(){jQuery("#comments").length&&(jQuery("#comments").hasClass("loaded")||(jQuery("#comments").addClass("loaded"),jQuery(".wc-form-wrapper").insertAfter(jQuery("#wcThreadWrapper")),jQuery(".wc_comm_form").each(function(){jQuery(this).prepend('<h3 class="wc-form-header">Add your Comment</h3>'),jQuery(this).find(".wc-form-footer").insertBefore(jQuery(this).find(".wc-field-comment")),jQuery(this).find(".wc-form-footer .wc-field-submit").insertAfter(jQuery(this).find(".wc-field-comment"))}),jQuery("#wpcomm").animate({opacity:1,height:"toggle"},700,"easeOutExpo")),jQuery(".wc-comment").each(function(){jQuery(this).hasClass("moved")||(jQuery(this).find(".wc-comment-left").insertAfter(jQuery(this).find(".wc-comment-author")),jQuery(this).addClass("moved"))}),jQuery(".wpdiscuz_unauth").length&&jQuery(".wc_comm_submit").click(function(){var e=jQuery("#comments").offset().top-nav_height;jQuery("html, body").animate({scrollTop:e},{duration:800,easing:"easeOutQuint",complete:function(){}})}))}function setAutoHeight(){jQuery(".fixHeight").fixHeight(),jQuery(".autoHeight").autoHeight({reset:"reset",height:"height"}),jQuery(".itemLists .auto__thumb img").imagesLoaded(function(){getBrowserWidth()>=mediaQuery_mobile?(jQuery(".clmn-3").each(function(){jQuery(this).find(".auto__itemName").autoHeight({reset:"reset",height:"height",column:3}),jQuery(this).find(".auto__thumb").autoHeight({reset:"reset",height:"height",column:3}),jQuery(this).find(".auto__text").autoHeight({reset:"reset",height:"height",column:3})}),jQuery(".clmn-4").each(function(){jQuery(this).find(".auto__itemName").autoHeight({reset:"reset",height:"height",column:4}),jQuery(this).find(".auto__thumb").autoHeight({reset:"reset",height:"height",column:4})})):(jQuery(".clmn-3").each(function(){jQuery(this).find(".auto__itemName").autoHeight({reset:"reset",height:"height",column:2}),jQuery(this).find(".auto__thumb").autoHeight({reset:"reset",height:"height",column:2}),jQuery(this).find(".auto__text").autoHeight({reset:"reset",height:"height",column:2})}),jQuery(".clmn-4").each(function(){jQuery(this).find(".auto__block").autoHeight({reset:"reset",height:"height",column:2})}))})}function fixedNav(){var e=nav_height-nav_height/2;jQuery(".home").length&&(e=jQuery(".indexArticle").offset().top),jQuery(this).scrollTop()>=e?(nav.addClass("smallNav"),jQuery(".content").addClass("scrolled")):(nav.removeClass("smallNav"),jQuery(".content").removeClass("scrolled"))}function setMainImageHeight(){if(jQuery(".mainImageWrapper").length){$mainImage=jQuery(".mainImageWrapper");var e=($mainImage.height(),$mainImage.width()),t=1920;e>=t?$mainImage.css("background-size","cover"):$mainImage.css("background-size","auto 100%")}}function getSlickOptions(){return{slidesToShow:4,slidesToScroll:1,dots:!1,infinite:!1,speed:500,centerMode:!1,variableWidth:!0}}function createSlick(){jQuery(".carouselItems").not(".slick-initialized").slick(getSlickOptions())}function startSlick(){$slickElement=jQuery(".carouselItems"),getBrowserWidth()>=mediaQuery_mobile&&jQuery(".carouselItems").length?(jQuery(".carouselItemsWrapper").find(".slideItem").removeAttr("style"),$slickElement.on("init",function(e,t,i,r){}),createSlick()):(jQuery(".carouselItemsWrapper").find("img").imagesLoaded(function(){jQuery(".carouselItemsWrapper").find(".slideItem").autoHeight({reset:"reset",height:"height",column:2})}),$slickElement.hasClass("slick-initialized")&&$slickElement.slick("unslick"))}function getBrowserWidth(){return window.innerWidth?window.innerWidth:document.documentElement&&0!=document.documentElement.clientWidth?document.documentElement.clientWidth:document.body?document.body.clientWidth:0}function getBrowserHeight(){return window.innerHeight?window.innerHeight:document.documentElement&&0!=document.documentElement.clientHeight?document.documentElement.clientHeight:document.body?document.body.clientHeight:0}var timer=!1,winTop=jQuery(window).scrollTop(),winHeight=jQuery(window).height(),topMargin=250,duration=300,easing="easeOutExpo",mediaQuery_mobile=1025,h=jQuery(window).height(),nav=jQuery(".header");if(nav.length){var nav_top=parseInt(nav.offset().top),nav_height=nav.height();nav_top||nav_height||(nav_top=nav_height=100)}jQuery(window).on("load",function(){var e=jQuery(location).attr("href"),t=jQuery(".header"),i=t.height();if(e.indexOf("#")!=-1){var r=e.split("#"),n=jQuery("#"+r[r.length-1]);if(n.length){var a=n.offset().top-i;jQuery("html, body").animate({scrollTop:a},{duration:1e3,easing:"easeOutQuint",complete:function(){}})}}}),jQuery(document).ready(function(e){init(),jQuery(".drawer").drawer(),startSlick()}),jQuery(window).scroll(function(e){winTop=jQuery(window).scrollTop(),winHeight=jQuery(window).height()}),jQuery(window).resize(function(e){init(),startSlick(),timer!==!1&&clearTimeout(timer),timer=setTimeout(function(){},100)}),jQuery(function(e){var t="easeOutQuad",i=350;e(".btn-continue").click(function(){return e(this).parents(".cookie-check").fadeOut("fast"),!1}),e(".sideContents-archive .page_item_has_children").click(function(){e(this).toggleClass("expanded"),e(this).find("ul").stop().animate({opacity:1,height:"toggle"},200,t)}),e("#wpcomm").exResize(function(e){setCommentStyle()}),e('.mw_wp_form select option[value=""]').html("- Please Select -"),e(".gNav > ul > .parentNav").hover(function(){e(this).addClass("currentNav"),e(this).find(".childNavContainer").stop().animate({opacity:1,height:"toggle"},i,t)},function(){e(this).removeClass("currentNav"),e(this).find(".childNavContainer").stop().animate({opacity:0,height:"toggle"},i,t)}),jQuery("input.btn").wrap('<span class="inputContainer"></span>'),jQuery("input.btn-primary").parent(".inputContainer").addClass("inputContainer-primary"),jQuery("input.btn-secondary").parent(".inputContainer").addClass("inputContainer-secondary"),jQuery("input.btn-tertiary").parent(".inputContainer").addClass("inputContainer-tertiary"),jQuery("input.btn-back").parent(".inputContainer").addClass("inputContainer-back"),jQuery(".sideContentsMenu").length,jQuery(".mw_wp_form").length&&(jQuery(".mwform-errors").prev('input:not([type="hidden"])').wrap('<div class="error"></div>'),jQuery(".mwform-errors").prev("textarea").wrap('<div class="error"></div>'),jQuery(".mwform-errors").parent(".item-content-select").addClass("item-content-select-error").find("select").wrap('<div class="error"></div>')),jQuery(".home").length,jQuery(".page-products").length&&jQuery(".toggleList").click(function(){e(this).hasClass("expanded")?e(this).text("EXPAND"):e(this).text("CLOSE"),e(this).toggleClass("expanded"),e(this).next(".itemLists").slideToggle("fast").toggleClass("expanded"),setAutoHeight()}),(jQuery(".single-products").length||jQuery(".products-single").length)&&(e(".itemSlide").slick({fade:!0,arrows:!1,asNavFor:".itemThumbs"}),e(".itemThumbs").slick({dots:!1,arrows:!1,slidesToShow:3,slidesToScroll:1,infinite:!1,centerMode:!1,focusOnSelect:!0,asNavFor:".itemSlide",responsive:[{breakpoint:1025,settings:{slidesToShow:6,arrows:!1}},{breakpoint:768,settings:{slidesToShow:3,arrows:!0}}]})),jQuery(".searchBar").length&&(jQuery(".searchToggle").click(function(e){var r=200,n=15,a=100;return getBrowserWidth()<=mediaQuery_mobile&&(r=jQuery(".spSearchBarArea").width()-25,n=0,a=0),e.stopPropagation(),jQuery(".searchBar").hasClass("opened")||(jQuery(this).hide(),jQuery(".searchBar").addClass("opened").stop().animate({"padding-left":n},i,t),jQuery(".searchBar").find(".inputArea").stop().animate({opacity:1,padding:"0 5px",width:r},i,t),jQuery(".searchBar").find(".inputArea").focus()),!1}).css("cursor","pointer"),jQuery(".searchBar:visible").skOuterClick(function(){var r=200,n=15,a=100;getBrowserWidth()<=mediaQuery_mobile&&(r=jQuery(".spSearchBarArea").width()-25,n=0,a=0);var o=!1;o=e(".searchBar:visible").find(".inputArea").is(":focus");jQuery(this).find(".inputArea").val();jQuery(this).hasClass("searchBtn")||!jQuery(".searchBar").hasClass("opened")||o||(jQuery(".searchToggle").show(),jQuery(".searchBar").removeClass("opened").stop().animate({"padding-left":a},i,t),jQuery(".searchBar").find(".inputArea").stop().animate({opacity:0,padding:0,width:0},i,t))})),jQuery("a img").hover(function(){jQuery(this).attr("src",jQuery(this).attr("src").replace("_off","_on"))},function(){jQuery(this).attr("src",jQuery(this).attr("src").replace("_on","_off"))}),jQuery("tr:odd").addClass("odd");var r=navigator.userAgent,n="";n=r.indexOf("iPhone")>0||r.indexOf("iPod")>0||r.indexOf("Android")>0&&r.indexOf("Mobile")>0?"mobile":r.indexOf("iPad")>0||r.indexOf("Android")>0?"tablet":"other",jQuery("html").addClass(n)});
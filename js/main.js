/*MOBILE NAVIGATION*/ 

function nav() {
  var $toggle = $('.js-toggle');
  var $nav = $('.js-nav');
  var open = 'toggle-open';

  $toggle.on('click', function() {
      if($toggle.hasClass(open)) {
          $toggle.removeClass(open);
          $nav.stop().slideUp();
      } else {
          $toggle.addClass(open);
          $nav.stop().slideDown();
      }
  });
}


// /*Pojavljivanje navigacije kada je mobilna navigacija zatvorena(prilikom resize)*/ 
 $(window).resize(function() {
   if ( $(this).width() > 767) {
    $('.navigation').css('display', 'block');
  }
   else {
    $('.navigation').css('display', 'none');
  }
 });

// $(window).resize(function(){
//   if ( $(this).width() < 767 && $toggle.slideDown()) {
//     $($toggle).slideUp();
//   }
//    else {
//      $($toggle).addClass(open); 
//    }
// });


/*JUMPING NAVIGATION*/

// function skrol() {
//   var scrollLink = $('.scroll');
//   var headerHeight = $('header').outerHeight();
    
//   scrollLink.click(function(e) {
//     e.preventDefault();
//     $('body,html').animate({
//       scrollTop: $(this.hash).offset().top - headerHeight
//     }, 1500 );
//   });
// }



/*SLIDER*/

// function slider() {
//   $('.js-slider').slick({
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       dots: true,
//       speed:1500
//   });
// }


/*RELOAD ON TOP*/ 
// $(window).on('beforeunload', function() {
//   $(window).scrollTop(0);
// });

/*SCROOL TO TOP*/

// function scrollTop() {

//   $(window).scroll(function(){                              //Check to see if the window is top if not then display button
 
//    var showAfter = 100;
//    if ( $(this).scrollTop() > showAfter ) {                             // Show button after 100px
//     $('.back-to-top').fadeIn();
//    } else { 
//     $('.back-to-top').fadeOut();
//    }
//   });
  
//   $('.back-to-top').click(function(){                                     //Click event to scroll to top
//    $('html, body').animate({scrollTop : 0},800);
//    return false;
//   });
// };


/*FAQ SHOW-HIDE TEXT*/ 

// const faqs = document.querySelectorAll('.faq-question-list'); 

// for(let i = 0; i < faqs.length; i++) {
//   faqs[i].addEventListener('click', () => {
//     faqs[i].classList.toggle('active');
//   });
// }
 
// $(".faq-question-text").click(function() {
//   $(".faq-question-list").removeClass("active");
//   $(this).parent().addClass("active");
//   });

/*ACCORDION*/

function accordion() {
  var $accBtn = $('.faq-question-text');
  var $accContent = $('.faq-question-answer-container');
  var $accItem = $('.faq-question-list');
  var activeClass = 'active';

  $accBtn.on('click', function() {
    // $accContent.stop().slideUp();
    // $(this).next().stop().slideDown();
    // $accItem.removeClass(activeClass);
    // $(this).closest('.faq-question-list').addClass(activeClass);

    if($(this).closest('.faq-question-list').hasClass(activeClass)) {
      $(this).closest('.faq-question-list').removeClass(activeClass);
      $(this).next().stop().slideUp(); 
  } else {
	  $(this).closest('.faq-question-list').addClass(activeClass);
      $(this).next().stop().slideDown(); 
  }
  });
}



// scrollTop(); 
// skrol();
// slider();
accordion();
nav();


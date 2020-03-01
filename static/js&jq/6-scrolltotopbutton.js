$(document).ready(function () {
  var STTB = $('button.scrollToTop');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
      if (STTB.is(":hidden")) {
          STTB.fadeIn(200);
      }
    } else {
      STTB.fadeOut(200);
    }
  });
  STTB.click(function (event) {
    event.preventDefault();
    $('html').animate({
      scrollTop : 0
    },1000);
  });
});

$(document).ready(function () {
  $("nav.segment div.menu a.item").click(function (event) {
    event.preventDefault();
    $('html').animate({
      scrollTop : $("#" + $(this).data('scroll')).offset().top - $('nav.segment').innerHeight()
    },2000);
  });
});

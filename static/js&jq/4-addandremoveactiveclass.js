$(document).ready(function () {
  $("nav.segment div.menu a.item").click(function () {
    $('nav.segment div.menu a.item').removeClass('active');
    $(this).addClass('active');
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    $("section").each(function () {
      if (($(window).scrollTop() + $('nav.segment').innerHeight() + 550) >= $(this).offset().top) {
        var sectionId = $(this).attr('id');
          $('nav.segment div.menu a.item').removeClass('active');
          $('nav.segment div.menu a.item[data-scroll="' + sectionId + '"]').addClass('active');
      }
    });
  });
});

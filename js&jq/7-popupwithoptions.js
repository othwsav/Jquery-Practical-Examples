$(document).ready(function () {
  $('button.showPopup').click(function () {
    $(this).next().fadeIn(500);
  });
  $('.popup').click(function () {
    $(this).fadeOut(500);
  });
  $('.popup .modal').click(function (e) {
    e.stopPropagation();
  });
  $('.modal i.close.icon').click(function (e) {
      e.preventDefault();
      $(this).parents().eq(1).fadeOut(500);
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      e.preventDefault();
      $('div.theex.popup:visible').fadeOut(500);
    }
  });
});

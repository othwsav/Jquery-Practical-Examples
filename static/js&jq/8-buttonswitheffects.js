$(document).ready(function () {
  $("section.buttonswitheffects button").each(function (){
    $(this).prepend("<span></span>")
  });

  $("button.effect1, button.effect3").hover(function () {
    $(this).find('span').eq(0).animate({
      width : '100%'
    },160);
  }, function () {
    $(this).find('span').eq(0).animate({
      width : '0'
    },160);
  });

  $("button.effect2, button.effect4").hover(function () {
    $(this).find('span').eq(0).animate({
      height : '100%'
    },160);
  }, function () {
    $(this).find('span').eq(0).animate({
      height : '0'
    },160);
  });
});

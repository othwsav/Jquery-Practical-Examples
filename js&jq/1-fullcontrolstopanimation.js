$(document).ready(function() {
  $('#stopanimationval button.start').click(function () {
    $(".stopdiv").animate({
      opacity:'0.1',
      width:'100px',
      height:'500px',
    },4500);
    $(".stopdiv").animate({
      opacity:'1',
      width:'1000px',
      height:'50px',
    },4500);
    $(".stopdiv").animate({
      width:'400px',
      height:'750px',
      borderRadius: '50px',
      padding: "170px"
    },4500);
    $(".stopdiv").animate({
      opacity:'1',
      width:'1350px',
      height:'auto'
    },4500);
  });
  var clearQueue = $('#clearQueue').prop('checked');
  var goToEnd = $('#goToEnd').prop('checked');

  $('.stopValues .checkbox input').change(function () {
    clearQueue = $('#clearQueue').prop('checked');
    goToEnd = $('#goToEnd').prop('checked');
  });

  $('#stopanimationval button.stop').click(function(){
    $('.stopdiv').stop(clearQueue,goToEnd);
  });

});

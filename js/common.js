$(function() {

    $('.carousel').carousel({
        interval: 3000
      })
      
      $( ".knopka" ).click(function() {
        $('.nav').toggleClass('visible', 1000);
      });
      $( ".nav li" ).click(function() {
        $('.nav').toggleClass('visible', 1000);
      });
});

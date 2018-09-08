$(document).ready(function(){

  //~ Menu
  $('.sub-item').hide();

  $('.menu-item').click(function(){
    $(this).next('ul').slideToggle();
  });

  $('.flexslider').flexslider({
    controlNav: false,
    directionNav: false,
    slideshowSpeed: 3000,
    itemWidth: 5000,
  });

  $('#topo').click(function() {
    $('html, body').animate({scrollTop:0}, 'slow');
  });

});

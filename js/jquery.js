$(document).ready(function(){

  //~ Menu
  $('.sub-item').hide();

  $('.menu-item').click(function(){
    $(this).next('.sub-item').slideToggle();
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

  $('#datanasc').datepicker();

  $.getJSON('estados_cidades.json', function (data) {
    var items = [];
    var options = '<option value="">escolha um estado</option>';
    $.each(data, function (key, val) {
      options += '<option value="' + val.nome + '">' + val.nome + '</option>';
    });

    $("#estados").html(options);
    $("#estados").change(function () {
      var options_cidades = '';
      var str = "";
      $("#estados option:selected").each(function () {
        str += $(this).text();
      });
      $.each(data, function (key, val) {
        if(val.nome == str) {
          $.each(val.cidades, function (key_city, val_city) {
            options_cidades += '<option value="' + val_city + '">' + val_city + '</option>';
          });
        }
      });
      $("#cidades").html(options_cidades);
    }).change();
  });
});

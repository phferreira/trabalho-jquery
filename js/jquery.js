var player1 = 'O';
var player2 = 'X';
var player_atual = player1;

var verificar = function(a, b, c){
  if (($('td').eq(a).text() == player_atual) &&
     ($('td').eq(b).text() == player_atual) &&
     ($('td').eq(c).text() == player_atual))
  {
    $('td').eq(a).addClass('destaque');
    $('td').eq(b).addClass('destaque');
    $('td').eq(c).addClass('destaque');
    return true;
  }
}

$.fn.MyFunction = function(){
  return (
    verificar(0,1,2) ||
    verificar(3,4,5) ||
    verificar(6,7,8) ||
    verificar(0,3,6) ||
    verificar(1,4,7) ||
    verificar(2,5,8) ||
    verificar(0,4,8) ||
    verificar(2,4,6));
}

$(document).ready(function(){

  $('td').text('');

  $('td')


  $('td').click(function(){
    if ($(this).text() == '') {
      $(this).text(player_atual);

      if ($.fn.MyFunction()){
        $('td').unbind('click');
      }

      if (player_atual == player1){
        player_atual = player2
      }else{
        player_atual = player1;
      } return true;
    }
  });
});

$(document).ready(function() {

  var myGame = new Game();
  myGame.pickRandom();

  $('button').click(function(){
    myGame.checkInput();
  });

});

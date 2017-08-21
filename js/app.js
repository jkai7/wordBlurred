$(document).ready(function() {
  // console.log('hi')
  var myGame = new Game();
  myGame.pickRandom();
  // myGame.checkInput();

  $('button').click(function(){
    myGame.checkInput();
  });
});

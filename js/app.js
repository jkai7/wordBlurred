$(document).ready(function() {

  var myGame = new Game();
  var mySound;
  myGame.pickRandom();

  $('button').click(function(){
    myGame.checkInput();
  });



//CHANGE TO JQUERY FOR CONSISTENCY
  document.querySelector('input').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      myGame.checkInput();
      // console.log("blergh");

    }
});


});

$(document).ready(function() {

//creates new game object
  var myGame = new Game();
//calls pickRandom prototype
  myGame.pickRandom();

//calls checkInput prototype function at the press of button
  $('button').click(function(){
    myGame.checkInput();
  });
//CHANGE TO JQUERY FOR CONSISTENCY -- allows the ability to hit "enter" to submit - also calls checkInput
  document.querySelector('input').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      myGame.checkInput();
    }
  });
  //disable right click
// document.addEventListener('contextmenu', event => event.preventDefault());
  $(document).ready(function () {
      //Disable cut copy paste
      $('body').bind('cut copy paste', function (e) {
          e.preventDefault();
      });

      //Disable mouse right click
      $("body").on("contextmenu",function(e){
          return false;
      });
  });

});

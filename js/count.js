var availableWords = ["testing", "randomization", "music", "cat", "there", "their"];

var randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];

var strikes = 0;

function Game () {

}

Game.prototype.pickRandom = function () {
  $('.flash-card').html(randomWord);
};

Game.prototype.checkInput = function () {
    var input = $('.text-here').val().toLowerCase();
    this.strikes = 0;
    //console.log(input);
    if (input === randomWord){
      $('.flash-card').html("Correct!");
    } else {
      console.log("boo!");
      strikes += 1;
      console.log(strikes);
    }
};
//
// Game.prototype.gameOver = function () {
//   if(strikes === 3) {
//     alert("GAME OVER");
//   }
// };

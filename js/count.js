var availableWords = ["testing", "randomization", "music", "cat", "there", "their", "texting", "more", "call"];

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
      $('.flash-card').removeClass('blurred');
      $('.flash-card').addClass('unblurred');
    } else {
      $('.flash-card').html("Wrong!");
      strikes += 1;
      console.log(strikes);
      $('.x').toggle();
      $('.flash-card').removeClass('blurred');
      $('.flash-card').addClass('unblurred');

    }
};
//
// Game.prototype.gameOver = function () {
//   if(strikes === 3) {
//     alert("GAME OVER");
//   }
// };

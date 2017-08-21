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
      console.log("yay!");
    } else {
      console.log("boo!");
      strikes += 1;
    }
};

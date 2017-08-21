var availableWords = ["testing", "randomization", "music", "cat", "there", "their"];

var randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];

function Game () {

 this.strikes = 0;

}

Game.prototype.pickRandom = function () {
  $('.flash-card').html(randomWord);
};

Game.prototype.checkInput = function () {
    var input = $('.text-here').val().toLowerCase();
    console.log(input);
    if (input === randomWord){
      console.log("yay!");
    } else {
      console.log("boo!");
    }
};

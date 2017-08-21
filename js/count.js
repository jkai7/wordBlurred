function Game () {

 this.availableWords = ["testing", "randomization", "music", "cat", "there", "their"];

}

Game.prototype.pickRandom = function () {
  var randomWord = this.availableWords[Math.floor(Math.random() * this.availableWords.length)];
  $('.flash-card').html(randomWord);
};

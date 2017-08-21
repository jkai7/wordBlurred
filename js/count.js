function Game () {

 this.availableWords = ["testing", "randomization", "music", "cat", "there", "their"];

 this.strikes = 0;



}

Game.prototype.pickRandom = function () {
  // console.log('hi');
  var randomWord = this.availableWords[Math.floor(Math.random() * this.availableWords.length)];
  $('.flash-card').html(randomWord);
};

Game.prototype.checkInput = function () {
    var input = $('.text-here').val();
    //IF THIS DO THAT :)

};

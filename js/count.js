var availableWords = ["testing", "randomization", "music", "cat", "there", "their", "texting", "more", "call"];

var randomWord;

var strikes = 0;

function Game () {

}



Game.prototype.pickRandom = function () {
  randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];
  $('.flash-card').html(randomWord);
};

Game.prototype.checkInput = function () {
    var input = $('.text-here').val().toLowerCase();

    if (input === randomWord){
      //DISPLAY WORD UNBLURRED
      $('.flash-card').removeClass('blurred');
      $('.flash-card').addClass('unblurred');
      $('.flash-card').html("Correct!");
      // this.pickRandom();

      setTimeout(this.pickRandom, 1000);

      // var myThis = this;
      // setTimeout(function () {
      //   myThis.pickRandom();
      // }, 1000);


      //MOVE TO NEXT WORD

    } else {
      strikes += 1;
      //DISPLAY WORD UNBLURRED
      $('.flash-card').removeClass('blurred');
      $('.flash-card').addClass('unblurred');
      $('.flash-card').html("Wrong!");
      $('.x').toggle(); //ADD ONLY ONE AT A TIME ?**maybe use prepend/append?
      //console.log(strikes);

    }
    if(strikes === 3){
      alert("gameover!");
    } else {
      setTimeout(this.pickRandom, 1000);
      //CONTINUE WITH GAME - DISPLAY NEXT WORD
    }

};

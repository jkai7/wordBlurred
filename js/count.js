var availableWords = ["testing", "where", "randomization", "music", "cat", "account",
"ramification", "there", "their", "texting", "store", "more", "call", "effect", "affect",
"mall", "fall", "minute", "amount", "accord", "evident", "intend", "concern", "issue", "tissue",
"establish", "utter", "udder", "passage", "massage", "floor"];

var randomWord;

var strikes = 0;

function Game () {

}


Game.prototype.pickRandom = function () {
  randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];
  $('.flash-card').html(randomWord).addClass('blurred').removeClass('unblurred');
};

Game.prototype.checkInput = function () {
    var input = $('.text-here').val().toLowerCase();

    if (input === randomWord){

      $('.flash-card').removeClass('blurred');
      $('.flash-card').addClass('unblurred');
      $('.flash-card').html("Correct!");

      setTimeout(this.pickRandom, 1500);
      input = $('.text-here').val('');

      // var myThis = this;
      // setTimeout(function () {
      //   myThis.pickRandom();
      // }, 1000);


    } else {
      strikes += 1;
      //DISPLAY WORD UNBLURRED?
      $('.flash-card').removeClass('blurred');
      $('.flash-card').addClass('unblurred');
      $('.flash-card').html("Wrong!");
      setTimeout(this.pickRandom, 1500);
      // $('.flash-card').html(randomWord).removeClass('blurred').addClass('unblurred');
      input = $('.text-here').val('');
    }

    console.log(strikes);
        if (strikes === 1) {
          $('.x-1').toggle();
        }
        if (strikes === 2) {
          $('.x-2').toggle();
        }

      if(strikes === 3){
        $('.x-3').toggle();
        $('.flash-card').html("Game Over!");
      }

};

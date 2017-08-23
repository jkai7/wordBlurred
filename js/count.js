//NEED TO ADD MORE WORDS

var availableWords = ["testing", "where", "randomization", "music", "bologna", "cat", "account",
"ramification", "there", "their", "texting", "store", "more", "call", "effect", "affect",
"mall", "fall", "minute", "amount", "accord", "evident", "intend", "concern", "issue", "tissue",
"establish", "utter", "udder", "passage", "massage", "floor", "elephant",];

var randomWord;

var strikes = 0;

var score = 0;

var goodJob = new Audio("./sounds/correctSound.wav");
var noGood = new Audio("./sounds/wrong.wav");

function Game () {


}


Game.prototype.pickRandom = function () {
  randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];
  $('.flash-card').html(randomWord).addClass('blurred').removeClass('unblurred');
  $('.flash-card').removeClass('slideOutDown');
  $('.flash-card').addClass('slideInUp');
};

Game.prototype.checkInput = function () {
    var input = $('.text-here').val().toLowerCase();

    if (input === randomWord){
      score += 1;
      goodJob.play();
      console.log("your score: " + score);
      $('.flash-card').removeClass('blurred');
      $('.flash-card').addClass('unblurred');
      $('.flash-card').html("Correct!");
      $('p').html("Your score: " + score);

      input = $('.text-here').val('');
      $('.flash-card').removeClass('slideInUp');
      $('.flash-card').addClass('slideOutDown');
      // $('.flash-card').toggleClass('slideOutDown');
      setTimeout(this.pickRandom, 1500);
      console.log(numCorrect);

      // var myThis = this;
      // setTimeout(function () {
      //   myThis.pickRandom();
      // }, 1000);


    } else {
      strikes += 1;
      noGood.play();
      //DISPLAY WORD UNBLURRED?
      $('.flash-card').removeClass('blurred');
      $('.flash-card').addClass('unblurred');
      $('.flash-card').html("Wrong!");
      input = $('.text-here').val('');
    }

    console.log(strikes);
        if (strikes === 1) {
          $('.x-1').toggle();
          setTimeout(this.pickRandom, 1500);
          $('.flash-card').toggleClass('slideInUp');
          $('.flash-card').toggleClass('slideOutDown');
        }
        if (strikes === 2) {
          $('.x-2').toggle();
          setTimeout(this.pickRandom, 1500);
          $('.flash-card').toggleClass('slideInUp');
          $('.flash-card').toggleClass('slideOutDown');
        }

        if(strikes === 3){
          $('.x-3').toggle();
          $('.flash-card').html("Game Over!");
          $('.flash-card').toggleClass('slideInUp');
          $('.flash-card').toggleClass('jackInTheBox');
        }

};

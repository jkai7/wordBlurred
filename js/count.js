//NEED TO ADD MORE WORDS

var availableWords = ["testing", "where", "randomization", "music", "bologna", "fancy", "concept", "cat", "account",
"ramification", "there", "their", "passage", "texting", "store", "more", "call", "effect", "apparent", "property", "affect",
"mall", "fall", "minute", "constitute", "institute", "amount", "accord", "evident", "intend", "concern", "issue", "tissue",
"establish", "utter", "udder", "vain", "main", "passage", "massage", "floor", "elephant", "minor", "throne", "generate", "render",
"theory", "range", "confer", "conifer", "wander", "wonder", "jubilant", "exciting", "invisible", "joke", "relaxed", "daring",
"beautiful", "daunting", "fun", "amazing", "inspire", "hack", "iron", "skill", "retro", "travel", "lazy", "jump", "mountain", "waxy",
"pizza", "juicy", "puzzle", "muzzle", "piazza", "peep", "poop", "wallow", "willow", "noun", "noon", "pump", "divine", "gorgeous",
"ancient", "feeling", "freeing", "code", "anxious", "unlimited", "concrete", "scribble", "marble", "flour", "swell", "abundant",
"compression", "compress", "impress", "obscures", "manor", "trend", "wound", "available", ];

var randomWord;

var strikes = 0;

var score = 0;

var goodJob = new Audio("./sounds/correctSound.wav");
var noGood = new Audio("./sounds/wrong.wav");
var gameEnd = new Audio("./sounds/gameOver.wav");
var whoosh = new Audio("./sounds/woosh.wav");

function Game () {


}


Game.prototype.pickRandom = function () {
  randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];
  $('.flash-card').html(randomWord).addClass('blurred').removeClass('unblurred');
  whoosh.play();
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
      //DISPLAY WORD UNBLURRED?
      $('.flash-card').html(randomWord).removeClass('blurred');
      $('.flash-card').addClass('unblurred');
      // $('.flash-card').html("Wrong!");
      input = $('.text-here').val('');
    }

    console.log(strikes);
        if (strikes === 1) {
          noGood.play();
          $('.x-1').toggle();
          setTimeout(this.pickRandom, 1500);
          $('.flash-card').toggleClass('slideInUp');
          $('.flash-card').toggleClass('slideOutDown');
        }
        if (strikes === 2) {
          noGood.play();
          $('.x-2').toggle();
          setTimeout(this.pickRandom, 1500);
          $('.flash-card').toggleClass('slideInUp');
          $('.flash-card').toggleClass('slideOutDown');
        }

        if(strikes === 3){
          gameEnd.play();
          $('.x-3').toggle();
          $('.flash-card').html("Game Over!");
          $('.flash-card').toggleClass('slideInUp');
          $('.flash-card').toggleClass('jackInTheBox');
        }

};

//Word array ;)

var availableWords = ["testing", "where", "randomization", "music", "bologna", "fancy", "concept", "cat", "account",
"ramification", "there", "their", "passage", "texting", "store", "more", "call", "effect", "apparent", "property", "affect",
"mall", "fall", "minute", "constitute", "institute", "amount", "accord", "evident", "intend", "concern", "issue", "tissue",
"establish", "utter", "udder", "vain", "main", "passage", "massage", "floor", "elephant", "minor", "throne", "generate", "render",
"theory", "range", "confer", "conifer", "wander", "wonder", "jubilant", "exciting", "invisible", "joke", "relaxed", "daring",
"beautiful", "daunting", "fun", "amazing", "inspire", "hack", "iron", "skill", "retro", "travel", "lazy", "jump", "mountain", "waxy",
"pizza", "juicy", "puzzle", "muzzle", "piazza", "peep", "poop", "wallow", "willow", "noun", "noon", "pump", "divine", "gorgeous",
"ancient", "feeling", "freezing", "code", "anxious", "unlimited", "concrete", "scribble", "marble", "flour", "swell", "abundant",
"compression", "compress", "impress", "obscure", "manor", "trend", "wound", "available", "squabble", "aggravate", "subtle",
"sweet", "compassion", "juke", "aggressive", "princess", "immaculate", "art", "mother", "limp", "wobble",];

//Game mechanic variables
var randomWord;
var strikes = 0;
var score = 0;

//Sound objects
var goodJob = new Audio("./sounds/correctSound.wav");
var noGood = new Audio("./sounds/wrong.wav");
var gameEnd = new Audio("./sounds/gameOver.wav");
var whoosh = new Audio("./sounds/woosh.wav");


function Game () {

}

//RANDOM WORD PICKER prototype
Game.prototype.pickRandom = function () {
  //Chooses a word at random from word array
  randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];
  //Removes previous "unblurred" class AND adds "blurred" class back when new random word one is chosen
  $('.flash-card').html(randomWord).addClass('blurred').removeClass('unblurred');
  //"whoosh" sound that is played when card pops up
    whoosh.play();
  //Makes card pop up when new word is chosen
  $('.flash-card').removeClass('slideOutDown');
  $('.flash-card').addClass('slideInUp');

};


//prototype that checks input and adds to strike/score accordingly
Game.prototype.checkInput = function () {
    //takes in user input and lowercases it to compare
    var input = $('.text-here').val().toLowerCase();
    //If input is correct conditional
    if (input === randomWord){
      //Plays positive sound
      goodJob.play();
      //Adds score
      score += 1;
      $('.score').toggleClass('pulse');
      //Removes blur from card
      $('.flash-card').removeClass('blurred');
      $('.flash-card').addClass('unblurred');
      //Updates DOM of card to display "Correct!"
      $('.flash-card').html("Correct!");
      //Updates DOM with your score
      $('.score').html("Your score: " + score);

      //Animates the card going down
      $('.flash-card').removeClass('slideInUp');
      $('.flash-card').addClass('slideOutDown');
      //Delays the picking of new word
      setTimeout(this.pickRandom, 1500);


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

      // console.log(strikes);
      //TODO: fix this
      //YES I KNOW THIS SECTION IS HORRIBLE AND I NEED TO FIX IT :)
      if (strikes === 1) {
        noGood.play();
        $('.x-1').toggle();
        $('.x-1').toggleClass('flip');
        setTimeout(this.pickRandom, 1500);
        $('.flash-card').toggleClass('slideInUp');
        $('.flash-card').toggleClass('slideOutDown');
      }
      if (strikes === 2) {
        noGood.play();
        $('.x-2').toggle();
        $('.x-2').toggleClass('flip');
        setTimeout(this.pickRandom, 1500);
        $('.flash-card').toggleClass('slideInUp');
        $('.flash-card').toggleClass('slideOutDown');
      }

      if(strikes === 3){
        gameEnd.play();
        $('.x-3').toggle();
        $('.x-3').toggleClass('flip');
        $('.flash-card').html("Game Over!");
        $('.flash-card').toggleClass('slideInUp');
        $('.flash-card').toggleClass('jackInTheBox');
        $('.redoButton').removeClass('hidden').addClass('show');
        $('.redoButton').toggleClass('fadeIn');
      }
    }

    //Clears input in preparation of next card
    $('.text-here').val('');
};

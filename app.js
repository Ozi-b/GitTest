var user = prompt("What is your name?");
var mysteryNum = 7; //Math.floor(Math.random() * 101);
var playerNum = prompt("Guess the mystery number!");
var guessNum = 1;
var guessArr = [playerNum];
//var bestScore = 0;
var playerHistory = {name: user, score: 0};
var score = {};

if (playerHistory.name !== user) {
   playerHistory.name = user;
}

play(playerNum);

function play(num) {
   if (num < mysteryNum) {
      alert("Higher!");
      num = prompt("Sorry " + user + ". Guess higher!");
      guessNum++
      guessArr.push(num) 
      play(num);
   } else if (num > mysteryNum) {
      alert("Lower!");
      num = prompt("Sorry " + user + ". Guess lower!");
      guessNum++
      guessArr.push(num)
      play(num);
   } else if (num == mysteryNum) {
      guessNum++
      scoreboard(guessNum);
      playAgain();
   }
}

function scoreboard(num) {
   if (playerHistory.score > num) {
      playerHistory.score = num;
      alert("Congratualations! You have beaten your previous best score! Your current score is " + playerHistory.score + "!")  
   } else if (playerHistory.score < num) {
      alert("That's correct " + user + "! it took you " + guessNum + " guesses to get the mystery number! Here is a list of all of your guesses!\n" + guessArr + ". Good job!");
   }
}


function playAgain(){
   var replay = prompt("Wanna play again?\nType yes or no in the box!");
   var playerNum2 = prompt("Awesome! Type in your first guess!")
    if (replay == "yes") {
       play(playerNum2);
    } else if (replay == "no") {
      alert("Thank you for playing " + user + "!")
    }
}


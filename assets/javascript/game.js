var wins = 0;
var losses = 0;
var guesses = 9;
var letters = 
["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
var userGuessSoFar = [];
var winPoints = document.getElementById("wins");
var guessesLeft = document.getElementById("guessLeft");
var lossPoints = document.getElementById("losses");
var guessSoFar = document.getElementById("guess-so-far");




function updateDisplays() {
    winPoints.textContent = wins;
    guessesLeft.textContent = guesses;
    lossPoints.textContent = losses;
  }
  
  

document.onkeyup = function(event) {
    var userGuess = event.key;
    userGuessSoFar.push(userGuess);
    console.log(guessSoFar);
     guessSoFar.textContent = userGuessSoFar;

    if (userGuess === computerGuess) { 
        wins++; 
        guesses = 9;
        userGuessSoFar = [];
        computerGuess = letters[Math.floor(Math.random() * letters.length)];

    }
    else {
        guesses--;
        if (guesses === 0) {
            losses++; 
            guesses = 9; 
            userGuessSoFar = [];
        }
    }
    updateDisplays();
}

        
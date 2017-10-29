// select a random word
var HangMan = function () {
  this.varWords = ["union", "research", "cruelty", "shadow", "crown", "abduction", "applause", "undersea", "glutton", "eternity", "endorsement"];
  this.randomWord = '';
  this.usedLetters = '';
  this.guessedLetters = ''; // Keep a record of all selected letters
  this.randomWordcharCount = 0; // Used to find out if all characters have been matched
  this.wrongLetters = '';


  // This clears up all the variables from the previous game and recreates
  // the randomword
  this.startGame = function () {
    //math.floor rounds up to the nearest whole number
    //Math.Random() returns a random float between 0 and 1 (including 0, excluding 1)
    randomWord = varWords[Math.floor(Math.random() * varWords.length)];
    guessedLetters = "";
    usedLetters = "";
    spanguessedL.textContent = "";
    replaceUnder();
    wrongLetters = 0;
    imghm.src = "";
  };

  // Function to see if letter is in random word
  // Also used to update the counts
  this.compareLetters = function (letter) {
    if (usedLetter(letter)) {
      console.log("function compareLetters -> letter" + " has been used")
      alert("Letter has already been used!")
      return;
    }
    console.log("function->compareLetters")
    if (randomWord.includes(letter)) {
      replaceUnder(letter);
    } else {
      // user guessed wrong letter
      guessedLetters += letter;
      spanguessedL.textContent = guessedLetters;
      wrongLetters++;
      imghm.src = "./assets/images/" + wrongLetters.toString() + ".jpg"
    }
    usedLetters += letter;
  };

  this.usedLetter = function (letter) { // checks for used letters
    if (usedLetters.includes(letter)) {
      console.log("function->usedLetter: " + letter + "used")
      return true;
    } else {
      return false;
    }
  };


  this.checkGame = function () { // Check to see if you have won or lost
    console.log("function->checkGame")
    if (randomWordcharCount == 0) {
      wins.textContent = Number(wins.textContent) + 1;
      console.log("function->checkGame:You Won");
      alert("You Won");
      startGame();
    } else if (wrongLetters == 8) {
      losses.textContent = Number(losses.textContent) + 1;
      console.log("function->checkGame:You Lose");
      alert("You Lose");
      startGame();
    }
  };

  this.replaceUnder = function (letter) {
    console.log("function->replaceUnder");
    if (letter) {
      console.log("function->replaceUnder->replacing underscore with char");
      //replace underscore where letter belongs
      for (i = 0; i < randomWord.length; i++) {
        if (letter == randomWord[i]) {
          x = spanWord.textContent;
          x = x.substring(0, i) + letter + x.substring(i + 1);
          spanWord.textContent = x;
          randomWordcharCount--;
          console.log("function->replaceUnder:" + x + " Letters left=" + randomWordcharCount.toString());
        }
      }
    } else {
      console.log("function->replaceUnder:NewGame")
      // create underscores on page, should only happen in beginning of game
      spanWord.textContent = Array(randomWord.length + 1).join("_");
      randomWordcharCount = randomWord.length;
    }
  };
};
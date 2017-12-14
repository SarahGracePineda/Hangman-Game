
// <!--  array of words -->
var wordList =["caramel","chocolate","brownie","lollipop","donut","cupcake","cookie","marshmallow","macaron"];
console.log(wordList);
// <!-- var for computer guess -->
var computerGuess = [];
// <!-- we need to break words into individual letters -->
var lettersinChosenWord = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
// number of blanks for each word
var numBlanks = 0;
//holds a mix of blank words and selected letters
var blanksAndSuccesses = [];
//count number of wrong guesses
var wrongGuesses = [];
//Hold the letters that were guessed
var letterGuessed = "";
var guesses = 10;

//random word
var chosenWord = wordList [Math.floor(Math.random() * wordList.length)];
console.log(chosenWord);



for (var i = 0; i < wordList.length; i++) {
  blanksAndSuccesses.push(chosenWord.charAt(i));
  }
  console.log(blanksAndSuccesses);


for(var i = 0; i < blanksAndSuccesses; i++) {
  blanksAndSuccesses.push("_");
  };









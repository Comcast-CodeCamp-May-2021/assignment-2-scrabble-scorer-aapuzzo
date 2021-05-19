// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
  return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  let userWord = input.question("Let's play some scrabble! Enter a word: ");
  return userWord;
};

let simpleScore = function(word) {
  word = word.toUpperCase();
  let letterPoints = 0;

  for (let i = 0; i < word.length; i++) {
    letterPoints++
  }
  return letterPoints;
}

let vowelBonusScore = function(word) {
  word = word.toUpperCase();
  wordArray = word.split("");
  let letterPoints = 0;
  //let vowelArray = ['A', 'E', 'I', 'O', 'U'];
  
  for (i = 0; i < wordArray.length; i++){
     if (wordArray[i] === 'A' || wordArray[i] === 'E' ||wordArray[i] === 'I' ||wordArray[i] === 'O' ||wordArray[i] === 'U') {
      letterPoints += 3;            
     }
    else {
      letterPoints++
    }    
  }
  return letterPoints;
}

let scrabbleScore = function(word) {
  word = word.toUpperCase();
	let letterPoints = 0;
  // console.log(word);
  
	for (let i = 0; i < word.length; i++) {
    // console.log(word[i])
    for (let key in newPointStructure) {      
      if (key === word[i]) {
        letterPoints += newPointStructure[key];
      }
    }
  }
  return letterPoints;
}

const scoringAlgorithms = [
  simpleScoreObj = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: simpleScore
  },
  vowelBonusScoreObj = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScore
  },
  oldScrabbleScorerObj = { 
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction: scrabbleScore
  }  
];

function scorerPrompt() {
  let userChoice = input.question(`Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: `);

  if (userChoice === String(0)) {
    return scoringAlgorithms[0];
    // console.log("simple");
  }
  else if (userChoice === String(1)) {
    return scoringAlgorithms[1];
    // console.log("vowels");
  }
  else if (userChoice === String(2)) {
    return scoringAlgorithms[2];
    // console.log("old scrabble");
  }  
}


function transform(oldPointStructure) {
  let pointStructure = {};

  for (let key in oldPointStructure) {
    // console.log(key, oldPointStructure[key]);    
    for(i = 0; i < oldPointStructure[key].length; i++) {
      pointStructure[oldPointStructure[key][i].toLowerCase()] = Number(key)
    }
  }
  console.log(pointStructure)
  return pointStructure;
}


let newPointStructure = transform(oldPointStructure);

function runProgram() { 
  
  let userWord = initialPrompt(); 
  let score = scorerPrompt();
  console.log(`Score for '${userWord}': ${score.scoringFunction(userWord)}`);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


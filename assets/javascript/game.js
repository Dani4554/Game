	
	//Sets the array that will hold all the letters for the game

	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
	 "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	//sets all the variables necessarry for the game
	var computerGuess = " ";
	var guessLeft = 9;

	var wins = 0;
	var losses = 0;
	var lettersGuessed = [];

document.onkeyup = function(event) {
	var userGuess = event.key; //gets user key

	computerGuess = generate(letters); //calls to function generate which generates a random number

	lettersGuessed.push(userGuess);// adds the key the user chose to an array that displays all letters guessed

	//developer purposes	
	console.log(computerGuess);
	console.log(userGuess);

	// Logical operation that determines if the user guessed the correct letter and sets the variables accordingly
	if(computerGuess === userGuess){
			wins++;
			lettersGuessed = [];
			guessLeft = 9;
	}	
	else{

		guessLeft--;
		if(guessLeft == 0){
			losses++;
			guessLeft = 9;
			lettersGuessed = [];

		}
	}

	//prints all the variables to html
	document.getElementById("wins1").innerHTML = wins;
	document.getElementById("losses1").innerHTML = losses;
	document.getElementById("left1").innerHTML = guessLeft;
	document.getElementById("guessed1").innerHTML = lettersGuessed;


}

	//function used to make a random letter for the computer
	function generate (letters){
		var index;
		var mainL;

		index = Math.floor( (Math.random() * 26) + 1);

		mainL = letters[index];

		return(mainL);
	}



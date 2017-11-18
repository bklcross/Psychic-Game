// define alphabet letters that computer can pick from
var allKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// initialize wins and losses values
var wins = 0;
var losses = 0;
// initialize number of gusses
var guessesLeft = 9;
// array that contain all guesses
var guessesSoFar = [];
// what the user guess by pressing a key
var userGuess = null;
// computer picks a  random letter
// the Math.floor() function returns the largest integer less than or equal to a given number
// the Math.random() function returns pseudo-random number between 0 (inclusive) and 1 (exclusive) --why? so z can not be selected?
// random number between 0 (inclusive) and 1 (exclusive) is selected then multiplied by length of allKeys array 26
// the product is modified by Math.floor function by rounding down to the nearest integer
var computerPicks = allKeys[Math.floor(Math.random() * allKeys.length)];
// log all variable into the console
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + computerPicks);
// start listening for events
// the onkeyup event occurs when the user releases a key (on the keyboard).
// document function writes into HTML page. when an HTML document is loaded into a web browser, it becomes a document object
// all the different visitor's actions that a web page can respond to are called events, an event represents the precise moment when something happens like clicking on key
document.onkeyup = function(event)
	{
		// toLowerCase makes all string into lower case
		// The static String.fromCharCode() method returns a string created by using the specified sequence of Unicode values.
		// the keyCode property returns the Unicode character code of the key that triggered the onkeyup event
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		// compare user's guess to guessesSoFar array
		// user cannot pick same guess again
		// user can only pick from with in allKeys array
		// the indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex,Returns -1 if the value is not found
		if (guessesSoFar.indexOf(userGuess) < 0 && allKeys.indexOf(userGuess) >= 0)
		{
			guessesSoFar[guessesSoFar.length]=userGuess;
			// decrease guessesLeft by 1
			guessesLeft--;
		}

		// computerPicks is same as the userGuess then add one value to wins
		// restart guessesLeft to 9
		// eempty guessesSoFar array
		// computerPicks a new value
		if (computerPicks == userGuess)
		{
			wins++;
			console.log("You win!");
			guessesLeft = 9;
			guessesSoFar = [];
			computerPicks = allKeys[Math.floor(Math.random() * allKeys.length)];
			console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + computerPicks);
		}

		// if guessesLeft = 0 then add one value to losses
		// reset guessesLeft to 9
		// empty guessesSoFar array
		// computerPicks new value
		if (guessesLeft == 0)
		{
			losses++;
			console.log("You Lose!");
			guessesLeft = 9;
			guessesSoFar = [];
			computerPicks = allKeys[Math.floor(Math.random() * allKeys.length)];
			console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + computerPicks);
		}

		// show changes in html
		var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I\'m thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
		// place html into the game ID
		// document.querySelector () returns the first Element within the document that matches the specified selector, or group of selectors, or null if no matches are found
		document.querySelector("#game").innerHTML = html;

	}
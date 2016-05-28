//The player will be a random number at start of the game.
//The random number is between 19 - 120.
var x = Math.floor((Math.random() * 120) + 19);
window.onload = function() {
	document.getElementById('randomNumber').innerHTML = x;
}

//display players score
var playerScore = 0;

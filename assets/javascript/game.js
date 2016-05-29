//RULES
//////////////////////////////////////////////////////////////////////////
//1  The player will be shown a random number at the start of the game.
//2  When the player clicks on a crystal it will add a specific amount of points to the player's total score.
//3  The player wins the game if their total score matches the random number and the player loses the game if their 
//total score goes above the random number.
//4  The amount of points each crystal adds is not shown to the player, but their total score is displayed and 
//updated after each crystal is clicked.
//5  The number of games won and lost will be displayed.
//6  If the player successfully matches their total score to the random number they get 1 win, 
//if the player's total score is above the random number the player get 1 loss, either way the game restarts.
//7  When the game is restarted, the player will be shown a new random number, all the crystals will now have 
//4 different hidden values, and the player's total score is reset to 0.



//The player will be a random number at start of the game.
//The random number is between 19 - 120.
var x = Math.floor((Math.random() * 120) + 19);
window.onload = function() {
	document.getElementById('randomNumber').innerHTML = x;
}

//display players score
var playerScore = 0;

//The player will be shown a random number at the start of the game.
//The random number should be between 19 - 120.
x = Math.floor((Math.random() * 120) + 19);
$("#button1").innerHTML = x;
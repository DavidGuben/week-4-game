//   CODE RULES
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1  The player will be shown a random number at the start of the game.
// 2  When the player clicks on a crystal it will add a specific amount of points to the player's total score.
// 3  The player wins the game if their total score matches the random number and the player loses the game if their 
//    total score goes above the random number.
// 4  The amount of points each crystal adds is not shown to the player, but their total score is displayed and 
//    updated after each crystal is clicked.
// 5  The number of games won and lost will be displayed.
// 6  If the player successfully matches their total score to the random number they get 1 win, 
//    if the player's total score is above the random number the player get 1 loss, either way the game restarts.
// 7  When the game is restarted, the player will be shown a new random number, all the crystals will now have 
//    our different hidden values, and the player's total score is reset to 0.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//    GAME RULES
//     The player will be a random number at start of the game.
//     The random number is between 19 - 120.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//MAIN GAME FUNCTION
$( document ).ready(function() {
			//VARIABLES
    var randomNum = Math.floor(Math.random() * 120) + 19;

    var counter = 0;

    var wins = "";

    var losses = "";

    var numbers = [4, 10, 2, 6];

        function randomFunc() {
    	var randomNum = Math.floor(Math.random() * 120) + 19;
    }

    	//NUMBER TO BEAT
    $('#randomNumber').text(randomNum);
    	
    	//YOUR NUMBER
    $("#playerCounter").append(0);

    	//WINS AND LOSSES COUNTERS
    $('#wins').append(wins);
    $('#losses').append(losses);
    	
    	//LOOP CRYSTAL SETUP
    for (var i=0; i< numbers.length; i++){

      var Crystal = $('<img>');
      	
      	//ADD DATA TO CRYSTALS
      Crystal.attr('data-num', numbers[i]);
      Crystal.attr('src', 'assets/images/crystalEDIT.png')
      Crystal.attr('alt', 'crystals');
      	
      	//CRYSTAL STYLE
      Crystal.addClass('crystalImg');
      	
      	//ADD CRYSTAL DATA TO CRYSTALS DIV
      $('#crystals').append(Crystal);
    }
    	
    	//CRYSTAL ANIMATION
    $(".crystalImg").hover(function(){
    	$(this).animate({ marginBottom: "30px" });
		}, function() {
    	$(this).animate({ marginBottom: "0px" });
		});
    	
    	//CRYSTAL CLICK FUNCTION
    $('.crystalImg').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      	
      	//CREATE PLAYER COUNTER
      $('#playerCounter').text(counter);

      //WIN OR LOSE IF STATEMENT
      if (counter == randomNum){
      	counter = 0;
      	wins++;
      	$("#wins").append(" " + wins + " ");
      	randomFunc();
        alert('You won!');

      }else if( counter > randomNum){
      	counter = 0;
      	losses++;
      	$("#losses").append(" " + losses+ " ");
      	randomFunc();
        alert('You lost!');
      }
    });

  });
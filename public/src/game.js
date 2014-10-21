var rock_click = function(){
	game1 = new Game;
	choice1 = new Rock;
	choice2 = computer()
	return game1.winningChoice(choice1, choice2);
};

var computer = function() {
	choices = [new Rock, new Paper, new Scissors, new Spock, new Lizard];
	return choices[Math.floor(Math.random() * choices.length)];
};

$('#rock').on('click', function(){ $('h3').text('the winner is ' + rock_click())});

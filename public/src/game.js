var choice_click = function(selection){
	game1 = new Game;
	choice2 = computer();
	console.log(selection, choice2);
	return game1.winningChoice(selection, choice2);
};


var computer = function() {
	choices = [new Rock, new Paper, new Scissors, new Spock, new Lizard];
	return choices[Math.floor(Math.random() * choices.length)];
};

var playerChoices = {rock: new Rock, paper: new Paper, scissors: new Scissors, lizard: new Lizard, spock: new Spock}

var playerChoice = function(image) {
	return playerChoices[$(image).data('gesture')];
};

$('img').on('click', function(){ 
	$('h3').text(choice_click(playerChoice(this)))
});





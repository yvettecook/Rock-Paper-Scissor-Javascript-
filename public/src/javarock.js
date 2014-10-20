function Rock (type) {
	this.type = 'rock';
}

function Scissors () {
	this.type = 'scissors';
};

function Paper () {
	this.type = 'paper';
};

function Lizard () {
	this.type = 'lizard';
};

function Spock () {
	this.type = 'spock';
};

function Game(){};

Game.prototype.winningChoice = function(choiceOne, choiceTwo) {
	if (choiceOne.type === choiceTwo.type) return 'draw';
	else if (this.WINNINGPAIRS[choiceOne.type][choiceTwo.type] != undefined) 
		return choiceOne.type;
 	else	return choiceTwo.type;
};

Game.prototype.WINNINGPAIRS = {
	"rock": { "scissors": 'blunt', "lizard": 'crushes' },
	"paper": { "rock": 'covers', "spock": 'disproves' },
	"scissors": { "paper": 'cuts', "lizard": 'decapitates' },
	"spock": { "scissors": 'smashes', "rock": 'vaporizes' },
	"lizard": { "spock": 'poisons', "paper": 'eats' }
}



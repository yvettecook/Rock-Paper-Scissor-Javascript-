function Rock () {
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

function Game() {};

Game.prototype.winningChoice = function(choiceOne, choiceTwo) {
	if (choiceOne.type === choiceTwo.type) return drawMessage;
	else if (this.WINNINGPAIRS[choiceOne.type][choiceTwo.type] != undefined) 
		return this.winningMessage('you', choiceOne, choiceTwo);
 	else return this.winningMessage('computer', choiceTwo, choiceOne);
};

Game.prototype.WINNINGPAIRS = {
	"rock": { "scissors": 'blunts', "lizard": 'crushes' },
	"paper": { "rock": 'covers', "spock": 'disproves' },
	"scissors": { "paper": 'cut', "lizard": 'decapitates' },
	"spock": { "scissors": 'smashes', "rock": 'vaporizes' },
	"lizard": { "spock": 'poisons', "paper": 'eats' }
}

Game.prototype.winningMessage = function(winner, winningChoice, losingChoice) {
	var verb = this.WINNINGPAIRS[winningChoice.type][losingChoice.type]
	return winner + ' win! ' + winningChoice.type + ' ' + verb + ' ' + losingChoice.type;
};

var drawMessage = "It's a draw"


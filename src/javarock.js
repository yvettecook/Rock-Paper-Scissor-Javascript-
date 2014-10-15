function Rock (type) {
	this.type = 'rock';
	this.weakness = 'paper';
}

function Scissors () {
	this.type = 'scissors';
	this.weakness = 'rock';
};

function Paper () {
	this.type = 'paper';
	this.weakness = 'scissors';
};

function Javarock(){};

Javarock.prototype.winningOption = function(choiceOne, choiceTwo) {
	if (choiceOne.type === choiceTwo.type) return 'draw';
	if (choiceOne.weakness === choiceTwo.type) return choiceTwo.type;
	if (choiceOne.weakness !== choiceTwo.type) return choiceOne.type;
};
function Rock (type) {
	this.type = 'rock';
}

function Scissors () {
	this.type = 'scissors';
};

function Paper () {
	this.type = 'paper';
};

function Javarock(){
	this.trumps = {
		"rock":"scissors",
		"paper":"rock",
		"scissors":"paper"
	};
};

Javarock.prototype.winningOption = function(choiceOne, choiceTwo) {
	if(choiceOne.type === choiceTwo.type) return 'draw';
	if(this.trumps[choiceOne.type] === choiceTwo.type) return choiceOne.type;
	else return choiceTwo.type;
};
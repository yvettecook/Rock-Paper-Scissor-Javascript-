describe('javarock', function(){
	beforeEach(function(){
		rock = new Rock;
		scissors = new Scissors;
		paper = new Paper;
		lizard = new Lizard;
		spock = new Spock;
	});
	
	describe('has the following types', function(){
		it('rock', function(){
			expect(rock.type).toEqual('rock');
		});

		it('scissor', function(){
			expect(scissors.type).toEqual('scissors');
		});

		it('paper', function(){
			expect(paper.type).toEqual('paper');
		});

		it ('lizard', function() {
			expect(lizard.type).toEqual('lizard');
		});

		it('spock', function() {
			expect(spock.type).toEqual('spock');
		});
	});

	describe('has rules which mean that when', function() {
		beforeEach(function(){
			javarock = new Game;
		});
		
		it('rock vs. rock it returns draw', function() {
			expect(javarock.winningChoice(rock, rock)).toEqual('draw')
		});
		
		it('rock vs scissors: rock will win', function() {
			expect(javarock.winningChoice(rock, scissors)).toEqual('rock')
		});

		it('scissors vs rock: rock will win', function() {
			expect(javarock.winningChoice(scissors, rock)).toEqual('rock')
		});

		it('rock vs paper: paper will win', function() {
			expect(javarock.winningChoice(rock, paper)).toEqual('paper')
		});

		it('paper vs rock: paper will win', function(){
			expect(javarock.winningChoice(paper, rock)).toEqual('paper')
		});

		it('rock vs paper: paper will win', function() {
			expect(javarock.winningChoice(rock, paper)).toEqual('paper')
		});

		it('scissors vs paper: scissors will win', function() {
			expect(javarock.winningChoice(scissors, paper)).toEqual('scissors')
		});

		it('scissors vs lizard: scissors will win', function() {
			expect(javarock.winningChoice(scissors, lizard)).toEqual('scissors')
		});

		it('scissors vs spock: spock will win', function() {
			expect(javarock.winningChoice(scissors, spock)).toEqual('spock')
		});
	});

	describe('when displaying error messages', function() {

	});
});
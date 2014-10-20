describe('javarock', function(){
	beforeEach(function(){
		rock = new Rock;
		scissors = new Scissors;
		paper = new Paper;
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
	});

	describe('has rules which mean that when', function() {
		beforeEach(function(){
			javarock = new Javarock;
		});
		
		it('rock vs. rock it returns draw', function() {
			expect(javarock.winningOption(rock, rock)).toEqual('draw')
		});
		
		it('rock vs scissors then rock will win', function() {
			expect(javarock.winningOption(rock, scissors)).toEqual('rock')
		});

		it('scissors vs rock then rock will win', function() {
			expect(javarock.winningOption(scissors, rock)).toEqual('rock')
		});

		it('rock vs paper then paper will win', function() {
			expect(javarock.winningOption(rock, paper)).toEqual('paper')
		});

		it('paper vs rock then paper will win', function(){
			expect(javarock.winningOption(paper, rock)).toEqual('paper')
		});

		it('rock vs paper then paper will win', function() {
			expect(javarock.winningOption(rock, paper)).toEqual('paper')
		});

		it('scissors vs paper then scissors will win', function() {
			expect(javarock.winningOption(scissors, paper)).toEqual('scissors')
		});
	});
});
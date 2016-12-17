import Game from 'game';
// import Player from 'player';
import Board from 'board';

describe('Game', function() {
  var testGame;
  // testBoard,
  // testGame;

  beforeEach(function() {
    testGame = new Game();
    // testBoard = new Board();
    // testPlayer = new Player();
  });

  describe('players', function() {
    it('should assign both players', function() {
      testGame.players("Beylul", "Yeni");
      expect(testGame.player1).toEqual("Beylul");
      expect(testGame.player2).toEqual("Yeni");
    });
  });

  describe('play', function() {
    it('should assign the right mark and player', function() {
      testGame.players("Beylul", "Yeni");
      testGame.play(0, 1);
      expect(testGame.player).toBe("Beylul");
      expect(testGame.mark).toEqual("x");
    });

    it('should fill the spot with the designated mark, if empty', function() {
      testGame.players("Beylul", "Yeni");
      expect(testGame.play(0, 1)).toBe("Beylul picked spot [0][1]");
    });

    it('should increment counter by one', function() {
      testGame.players("Beylul", "Yeni");
      testGame.play(0, 1);
      testGame.play(1, 1);
      expect(testGame.counter).toEqual(3);
    });

    it('should ask the same player to go again if spot filled ', function() {
      var check = testGame.check;
      testGame.players("Beylul", "Yeni");
      testGame.play(1, 1);
      testGame.play(0, 0);
      expect(testGame.play(0, 0)).toBe("Spot taken! Beylul try again.");
      expect(testGame.counter).toEqual(3);
    });

    describe('won', function() {
      it('should check for a win if either player has won', function() {
        testGame.players("Beylul", "Yeni");
        // console.log(testGame.player1);
        testGame.play(1, 0);
        testGame.play(0, 1);
        testGame.play(1, 1);
        testGame.play(2, 1);
        testGame.play(1, 2);
        // console.log(testGame.board);
        expect(testGame.won()).toEqual(true);
      });

      it('should return a tie if no win and board is full', function() {
        testGame.players("Beylul", "Yeni");
        testGame.play(0, 0); //x
        testGame.play(0, 1); //o
        testGame.play(0, 2); //x
        testGame.play(1, 0); //o
        testGame.play(1, 1); //x
        testGame.play(2, 2); //o
        testGame.play(1, 2); //x
        testGame.play(2, 1); //o
        // testGame.play(2, 0); //x
        console.log(testGame.board.board);
        expect(testGame.play(2, 0)).toEqual("It's a tie!");
      })

    });
  });
});

import Game from 'app/models/game';
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
      //testGame.players("x", "o");
      expect(testGame.player1).toEqual("x");
      expect(testGame.player2).toEqual("o");
    });
  });

  describe('play', function() {
    it('should assign the right mark and player', function() {
      //testGame.players("x", "o");
      testGame.play(0, 1);
      expect(testGame.player).toBe("x");
      expect(testGame.mark).toEqual("x");
    });

    it('should fill the spot with the designated mark, if empty', function() {
      //testGame.players("x", "o");
      expect(testGame.play(0, 1)).toBe("x picked spot [0][1]");
    });

    it('should increment counter by one', function() {
      //testGame.players("x", "o");
      testGame.play(0, 1);
      testGame.play(1, 1);
      expect(testGame.counter).toEqual(3);
      expect(testGame.board.checkBoard()).toEqual([ [ undefined, 'x', undefined ], [ undefined, 'o', undefined ], [ undefined, undefined, undefined ] ]);
    });

    it('should ask the same player to go again if spot filled ', function() {
      var check = testGame.check;
      //testGame.players("x", "o");
      testGame.play(1, 1);
      testGame.play(0, 0);
      expect(testGame.play(0, 0)).toBe("Spot taken! x try again.");
      expect(testGame.counter).toEqual(3);
      expect(testGame.board.checkBoard()).toEqual([ [ 'o', undefined, undefined ], [ undefined, 'x', undefined ], [ undefined, undefined, undefined ] ]);
    });

    describe('won', function() {
      it('should check for a win if either player has won horizontal middle', function() {
        //testGame.players("x", "o");
        testGame.play(1, 0);
        testGame.play(0, 1);
        testGame.play(1, 1);
        testGame.play(2, 1);
        testGame.play(1, 2);
        expect(testGame.won()).toEqual("x has won!");
      });

      it('should check for a win if either player has won horizontal top', function() {

        testGame.play(1, 1);
        testGame.play(0, 0);
        testGame.play(1, 2);
        testGame.play(0, 1);
        testGame.play(2, 2);
        testGame.play(0, 2);
        expect(testGame.won()).toEqual("o has won!");
      });

      it('should check for a win if either player has won horizontal bottom', function() {
        //testGame.players("x", "o");
        testGame.play(2, 0);
        testGame.play(1, 1);
        testGame.play(2, 1);
        testGame.play(1, 2);
        testGame.play(2, 2);
        expect(testGame.won()).toEqual("x has won!");
      });

      it('should check for a win if either player has won verticaly left', function() {
        //testGame.players("x", "o");
        testGame.play(1, 2);
        testGame.play(0, 0);
        testGame.play(1, 1);
        testGame.play(1, 0);
        testGame.play(2, 1);
        testGame.play(2, 0);
        expect(testGame.won()).toEqual("o has won!");
        expect(testGame.board.checkBoard()).toEqual([ [ undefined, undefined, undefined ], [ undefined, undefined, undefined ], [ undefined, undefined, undefined ] ]);
      });

      it('should check for a win if either player has won verticaly middle', function() {
        //testGame.players("x", "o");
        testGame.play(0, 0);
        testGame.play(0, 1);
        testGame.play(1, 0);
        testGame.play(1, 1);
        testGame.play(1, 2);
        testGame.play(2, 1);
        expect(testGame.won()).toEqual("o has won!");
        expect(testGame.board.checkBoard()).toEqual([ [ undefined, undefined, undefined ], [ undefined, undefined, undefined ], [ undefined, undefined, undefined ] ]);
      });

      it('should check for a win if either player has won verticaly right', function() {
        //testGame.players("x", "o");
        testGame.play(0, 2);
        testGame.play(1, 1);
        testGame.play(1, 2);
        testGame.play(2, 1);
        testGame.play(2, 2);
        expect(testGame.won()).toEqual("x has won!");
      });

      it('should check for a win if either player has won diagonaly left to right', function() {
        //testGame.players("x", "o");
        testGame.play(0, 1);
        testGame.play(0, 0);
        testGame.play(0, 2);
        testGame.play(1, 1);
        testGame.play(1, 2);
        testGame.play(2, 2);

        expect(testGame.won()).toEqual("o has won!");
      });
      it('should check for a win if either player has won diagonaly right to left', function() {
        //testGame.players("x", "o");
        testGame.play(0, 2);
        testGame.play(0, 0);
        testGame.play(1, 1);
        testGame.play(1, 0);
        testGame.play(2, 0);
        expect(testGame.won()).toEqual("x has won!");
      });

      it('should check for a win there is no win and the count is 9, then it\'s a tie.', function() {
        //testGame.players("x", "o");
        testGame.play(1, 1);
        testGame.play(0, 2);
        testGame.play(2, 0);
        testGame.play(2, 2);
        testGame.play(0, 0);
        testGame.play(2, 1);
        testGame.play(0, 1);
        testGame.play(1, 0);
        testGame.play(1, 2);

        expect(testGame.won()).toEqual("It's a tie");
        expect(testGame.board.checkBoard()).toEqual([ [ undefined, undefined, undefined ], [ undefined, undefined, undefined ], [ undefined, undefined, undefined ] ]);
      });
    });
  });
});

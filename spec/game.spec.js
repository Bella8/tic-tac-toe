import Game from 'app/models/game';
import Board from 'app/models/board';

describe('Game', function() {
  var testGame;
  beforeEach(function() {
    testGame = new Game();
  });

  describe('Constructor', function() {
   it('Constructor Exists', function() {
     expect(Game).toBeFunction();
   });
   it('Constructor Initializes attributes', function() {
     expect(testGame.player1).toEqual("x");
     expect(testGame.player2).toEqual("o");
     expect(testGame.counter).toEqual(1);
     expect(testGame.mark).toEqual("x");
   });
 });


  describe('play', function() {
    it('should assign the right mark and player', function() {
      testGame.play(0, 1);
      expect(testGame.player).toBe("x");
      // console.log("this is mark " + testGame.mark);
      // expect(testGame.mark).toEqual("x");
    });

    it('should fill the spot with the designated mark, if empty', function() {
      expect(testGame.play(0, 1)).toBe("x picked spot [0][1]");
    });

    it('should increment counter by one', function() {
      testGame.play(0, 1);
      testGame.play(1, 1);
      expect(testGame.counter).toEqual(3);
      expect(testGame.board.checkBoard()).toEqual([ [ undefined, 'x', undefined ], [ undefined, 'o', undefined ], [ undefined, undefined, undefined ] ]);
    });

    it('should ask the same player to go again if spot filled ', function() {
      var check = testGame.check;
      testGame.play(1, 1);
      testGame.play(0, 0);
      expect(testGame.play(0, 0)).toBe("Spot taken! x try again.");
      expect(testGame.counter).toEqual(3);
      expect(testGame.board.checkBoard()).toEqual([ [ 'o', undefined, undefined ], [ undefined, 'x', undefined ], [ undefined, undefined, undefined ] ]);
    });

    describe('won', function() {
      it('should check for a win if either player has won horizontal middle', function() {
        testGame.play(1, 0);
        testGame.play(0, 1);
        testGame.play(1, 1);
        testGame.play(2, 1);
        testGame.play(1, 2);
        // expect(testGame.play(1, 2)).toEqual("x has won!");
        expect(testGame.won()).toEqual(true);
      });

      it('should check for a win if either player has won horizontal top', function() {
        testGame.play(1, 1);
        testGame.play(0, 0);
        testGame.play(1, 2);
        testGame.play(0, 1);
        testGame.play(2, 2);
        testGame.play(0, 2);
        // expect(testGame.won()).toEqual("o has won!");
        expect(testGame.won()).toEqual(true);
      });

      it('should check for a win if either player has won horizontal bottom', function() {
        testGame.play(2, 0);
        testGame.play(1, 1);
        testGame.play(2, 1);
        testGame.play(1, 2);
        testGame.play(2, 2);
        // expect(testGame.won()).toEqual("x has won!");
        expect(testGame.won()).toEqual(true);
      });

      it('should check for a win if either player has won verticaly left', function() {
        testGame.play(1, 2);
        testGame.play(0, 0);
        testGame.play(1, 1);
        testGame.play(1, 0);
        testGame.play(2, 1);
        testGame.play(2, 0);
        // expect(testGame.won()).toEqual("o has won!");
        expect(testGame.won()).toEqual(true);
        // expect(testGame.board.checkBoard()).toEqual([ [ undefined, undefined, undefined ], [ undefined, undefined, undefined ], [ undefined, undefined, undefined ] ]);
      });

      it('should check for a win if either player has won verticaly middle', function() {
        testGame.play(0, 0);
        testGame.play(0, 1);
        testGame.play(1, 0);
        testGame.play(1, 1);
        testGame.play(1, 2);
        testGame.play(2, 1);
        // expect(testGame.won()).toEqual("o has won!");
        expect(testGame.won()).toEqual(true);
        // expect(testGame.board.checkBoard()).toEqual([ [ undefined, undefined, undefined ], [ undefined, undefined, undefined ], [ undefined, undefined, undefined ] ]);
      });

      it('should check for a win if either player has won verticaly right', function() {
        testGame.play(0, 2);
        testGame.play(1, 1);
        testGame.play(1, 2);
        testGame.play(2, 1);
        testGame.play(2, 2);
        // expect(testGame.won()).toEqual("x has won!");
        expect(testGame.won()).toEqual(true);
      });

      it('should check for a win if either player has won diagonaly left to right', function() {
        testGame.play(0, 1);
        testGame.play(0, 0);
        testGame.play(0, 2);
        testGame.play(1, 1);
        testGame.play(1, 2);
        testGame.play(2, 2);

        // expect(testGame.won()).toEqual("o has won!");
        expect(testGame.won()).toEqual(true);
      });
      it('should check for a win if either player has won diagonaly right to left', function() {
        testGame.play(0, 2);
        testGame.play(0, 0);
        testGame.play(1, 1);
        testGame.play(1, 0);
        testGame.play(2, 0);
        console.log(testGame.board.board);
        // expect(testGame.won()).toEqual("x has won!");
        expect(testGame.won()).toEqual(true);
      });

      it('should check for a win there is no win and the count is 9, then it\'s a tie.', function() {
        testGame.play(1, 1);
        testGame.play(0, 2);
        testGame.play(2, 0);
        testGame.play(2, 2);
        testGame.play(0, 0);
        testGame.play(2, 1);
        testGame.play(0, 1);
        testGame.play(1, 0);
        testGame.play(1, 2);

        // expect(testGame.won()).toEqual("It's a tie");
        expect(testGame.won()).toEqual(false);
        // expect(testGame.board.checkBoard()).toEqual([ [ undefined, undefined, undefined ], [ undefined, undefined, undefined ], [ undefined, undefined, undefined ] ]);
      });
    });
  });
});

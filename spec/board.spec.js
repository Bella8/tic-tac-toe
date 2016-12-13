import Game from 'tic-tac-toe';
import Player from 'tic-tac-toe';
import Board from 'tic-tac-toe';

describe('Board', function() {
  var testBoard = new Board();
  describe('empty', function() {
    it('should return true if all spots in board are empty', function() {
        expect(testBoard.empty()).toEqual(true);
    });
  });
});

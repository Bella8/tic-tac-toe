import Board from 'board';

describe('Board', function() {
  var testBoard;
  beforeEach(function() {
    testBoard = new Board();
  });

  describe('empty', function() {
    it('should return true if all spots in board are empty', function() {
      expect(testBoard.empty()).toEqual(true);
    });

    it('should return false if one spot is filled', function() {
      testBoard.board[0][1] = "X";
      expect(testBoard.empty()).toEqual(false);
    });
  });

  describe('filled', function() {
    it('should return true if that spot in board is filled', function() {
      expect(testBoard.filled(0,0)).toEqual(false);
    });

    it('should return false if one spot is filled', function() {
      testBoard.board[0][1] = "O";
      expect(testBoard.filled(0,1)).toEqual(true);
    })
  });

  describe('checkBoard', function() {
    it('should return an array with all the elements', function() {
      testBoard.board[0][2] = "X";
      expect(testBoard.checkBoard()).toEqual([ [ undefined, undefined, 'X' ], [ undefined, undefined, undefined ], [ undefined, undefined, undefined ] ]);
      expect(testBoard.checkBoard()).not.toEqual([ [ "O", "O", 'X' ], [ undefined, undefined, undefined ], [ undefined, undefined, undefined ] ]);
    });

    it('should have a length of 3', function() {
      expect(testBoard.checkBoard().length).toEqual(3);
    });

    it('should not be undefined', function() {
      expect(testBoard.checkBoard()).not.toEqual(undefined);
    });
  });

});

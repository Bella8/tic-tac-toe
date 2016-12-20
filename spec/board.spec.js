import Board from 'app/models/board';

describe('Board', function() {
  var testBoard;
  beforeEach(function() {
    testBoard = new Board();
  });

  describe('Constructor', function() {
    it('Constructor Exists', function() {
      expect(Board).toBeFunction();
    });
    it('Constructor Initializes attributes', function() {
      expect(testBoard.board).toEqual([ [ undefined, undefined, undefined ], [ undefined, undefined, undefined ], [ undefined, undefined, undefined ] ]);
    });
  });

  describe('empty', function() {
    it('should return true if all spots in board are empty', function() {
      expect(testBoard.empty()).toEqual(true);
    });

    it('should return false if one spot is filled', function() {
      testBoard.board[0][0] = "X";
      expect(testBoard.empty()).toEqual(false);
    });
  });

  describe('filled', function() {
    it('should return true if that spot in board is filled', function() {
      expect(testBoard.filled(0,0)).toEqual(false);
    });

    it('should return true if one spot is filled', function() {
      testBoard.board[0][1] = "X";
      expect(testBoard.filled(0,1)).toEqual(true);
    });
  });

  describe('checkBoard', function() {
    it('should return an array with all the elements', function() {
      testBoard.board[0][2] = "X";
      expect(testBoard.checkBoard()).toEqual([ [ undefined, undefined, 'X' ], [ undefined, undefined, undefined ], [ undefined, undefined, undefined ] ]);
      expect(testBoard.checkBoard()).not.toEqual([[ ,"O","X"],[ , , ],[ , , ]]);
    });

    it('should have a length of 3', function() {
      expect(testBoard.checkBoard().length).toEqual(3);
    });

    it('should not be undefined', function() {
      expect(testBoard.checkBoard()).not.toEqual(undefined);
    });
  });

  describe('clearBoard', function() {
    it('should clear board when starting a new game', function() {
      testBoard.board[0][2] = "X";
      expect(testBoard.clearBoard()).toEqual("Board has been cleared.");
      expect(testBoard.checkBoard()).toEqual([ [ undefined, undefined, undefined ], [ undefined, undefined, undefined ], [ undefined, undefined, undefined ] ]);
      expect(testBoard.checkBoard()).not.toEqual([[ , ,"X"],[ , , ],[ , , ]]);

    });
  });

});

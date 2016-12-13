import Board from 'board';

describe('Board', function() {
  var testBoard = new Board();
  describe('empty', function() {
    it('should return true if all spots in board are empty', function() {
        expect(testBoard.empty()).toEqual(true);
    });

    it('should return false if one spot is filled', function() {
      testBoard.board[0][1] = "X";
      expect(testBoard.empty()).toEqual(false);
    })
  });

  describe('filled', function() {
    it('should return true if that spot in board is filled', function() {
        expect(testBoard.filled(0,0)).toEqual(false);
    });

    it('should return false if one spot is filled', function() {
      testBoard.board[0][1] = "X";
      expect(testBoard.filled(0,1)).toEqual(true);
    })
  });

});

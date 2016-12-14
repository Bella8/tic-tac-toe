var Board = function() {
  this.board = new Array(3);
  // write a for loop
  this.board[0] = new Array(3);
  this.board[1] = new Array(3);
  this.board[2] = new Array(3);
};

Board.prototype.empty = function () {
  var isEmpty = true;
  for (var i = 0; i < this.board.length; i++) {
    for (var j= 0; j < this.board[i].length; j++) {
      if (this.board[i][j] !== undefined) {
        isEmpty = false;
      }
    }
    return isEmpty;
  }
};

Board.prototype.filled = function (c, r) {
  var isFilled = false;
  if (this.board[c][r] !== undefined) {
    isFilled = true;
  }
  if (isFilled === false) {
    this.board[c][r] = "x";
  }
  return isFilled;
};

Board.prototype.checkBoard = function () {
  return this.board;
};

// TODO: implement clear board function
export default Board;

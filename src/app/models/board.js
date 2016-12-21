import Backbone from 'backbone';

var Board = Backbone.Model.extend({

  initialize: function() {
    this.board = new Array(3);
    this.board[0] = new Array(3);
    this.board[1] = new Array(3);
    this.board[2] = new Array(3);

  },

  empty: function () {
    var isEmpty = true;
    for (var i = 0; i < this.board.length; i++) {
      for (var j= 0; j < this.board[i].length; j++) {
        if (this.board[i][j] !== undefined) {
          isEmpty = false;
        }
      }
      return isEmpty;
    }
  },

  filled: function (row, column) {
    var isFilled = false; // assuming its empty
    if (this.board[row][column] !== undefined) { //if not empty
      isFilled = true;  // its filled
    }
    return isFilled;
  },

  fill: function (row, column, mark) {
    this.board[row][column] = mark;
  },

  checkBoard: function () {
    return this.board;
  },

  clearBoard: function () {

  for (var i = 0; i < this.board.length; i++) {
    for (var j= 0; j < this.board[i].length; j++) {
      this.board[i][j] = undefined;
    }
  }
  var reply = "Board has been cleared.";
  this.trigger('change');
  return reply;
}
});

export default Board;

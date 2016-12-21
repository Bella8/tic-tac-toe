import Backbone from 'backbone';
import Board from 'app/models/board';


const Game = Backbone.Model.extend({

  initialize: function(){
    this.board = new Board();
    this.player1 = "x";
    this.player2 ="o";
    this.counter = 1;
    this.mark = "x";
  },

  play: function(row, column) {
    // // this.mark = "";


    if(this.counter % 2 == 1) {
      this.player = this.player1;
      this.mark = "x";
    }
    else {
      this.player = this.player2;
      this.mark = "o";
    }

    var reply;
    var isFilled  =  this.board.filled(row,column);
    if(isFilled === false){
      this.board.fill(row, column, this.mark);
      reply = this.player + " picked spot " + "[" + row + "]" + "[" + column + "]";
      this.counter += 1;
      this.trigger('change'); // to trigger render for each play
    }
    else {
      reply = "Spot taken! " + this.player + " try again.";
    }

    var winning = this.won();

    if (winning === true) {
      if (this.wonMark === 'x') {
        reply = this.player1 + " has won!";
      }
      else if (this.wonMark === 'o') {
        reply = this.player2 + " has won!";
      }
    }
    else if (this.counter === 9) {

      reply = "It's a tie!";
    }
    return reply;
  },

  won: function() {

    this.hasWon = false;
    this.mark = "";

    //horizontal
    for (var index = 0; index < this.board.board.length; index++) {
      if (this.board.board[index][0] === this.board.board[index][1] && this.board.board[index][1] === this.board.board[index][2] && this.board.board[index][0] !== undefined) {
        this.hasWon = true;
        this.mark = this.board.board[index][0];
      }
      //vertical win
      else if (this.board.board[0][index] === this.board.board[1][index] && this.board.board[1][index] === this.board.board[2][index] && this.board.board[0][index] !== undefined) {
        this.hasWon = true;
        this.mark = this.board.board[0][index];
      }

    }
    //diagonal
    if (this.board.board[0][0] === this.board.board[1][1] && this.board.board[1][1] === this.board.board[2][2] && this.board.board[1][1] !== undefined) {
      this.hasWon = true;
      this.mark = this.board.board[1][1];
    }
    else if (this.board.board[0][2] === this.board.board[1][1] && this.board.board[1][1] === this.board.board[2][0] && this.board.board[1][1] !== undefined) {
      this.hasWon = true;
      this.mark = this.board.board[1][1];
    }
    if (this.hasWon === true) {
      // this.board.clearBoard();
    }
    return this.hasWon;

  },
});

export default Game;

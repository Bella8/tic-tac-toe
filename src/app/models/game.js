import Backbone from 'backbone';
import Board from 'app/models/board';

// var testBoard = [[ , , ],[ , , ],[ , , ]];

const Game = Backbone.Model.extend({
  // defaults:{
  //   // grid: testBoard,
  //   player1: "x",
  //   player2: "o"
  // },
  initialize: function(){
    this.board = new Board();
    this.player1 = "x";
    this.player2 ="o";
    this.counter = 1;
  },

  play: function(row, column) {
    this.mark = "";
    if (this.counter === undefined){
      this.counter = 1;
    }

    if(this.counter % 2 == 1) {
      this.player = this.player1;
      this.mark = "x";
    }
    else {
      this.player = this.player2;
      this.mark = "o";
    }

    var reply;
    var winning = this.won;
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

    if (winning === true) {
      if (this.wonMark === 'x') {
        reply = this.player1 + " has won!";
      }
      else if (this.wonMark === 'o') {
        reply = this.player2 + " has won!";
      }
    }
    else if (this.counter === 9) {
      // console.log("inside haswon false statement");
      reply = "It's a tie!";
    }
    return reply;
  },

  won: function() {

    this.won = false;
    this.mark = "";

    //horizontal
    for (var index = 0; index < this.board.board.length; index++) {
      if (this.board.board[index][0] === this.board.board[index][1] && this.board.board[index][1] === this.board.board[index][2] && this.board.board[index][0] !== undefined) {
        this.won = true;
        this.mark = this.board.board[index][0];
      }
      //vertical win
      else if (this.board.board[0][index] === this.board.board[1][index] && this.board.board[1][index] === this.board.board[2][index] && this.board.board[0][index] !== undefined) {
        this.won = true;
        this.mark = this.board.board[0][index];
      }

    }
    //diagonal
    if (this.board.board[0][0] === this.board.board[1][1] && this.board.board[1][1] === this.board.board[2][2] && this.board.board[1][1] !== undefined) {
      this.won = true;
      this.mark = this.board.board[1][1];
    }
    else if (this.board.board[0][2] === this.board.board[1][1] && this.board.board[1][1] === this.board.board[2][0] && this.board.board[1][1] !== undefined) {
      this.won = true;
      this.mark = this.board.board[1][1];
    }

    if (this.won === true) {
      if (this.mark === 'x') {
        this.reply = this.player1 + " has won!";
      }
      else if (this.mark === 'o') {
        this.reply = this.player2 + " has won!";
      }
      this.board.clearBoard();
      return this.reply;
    }
    else if (this.counter === 10 && this.won === false){
      this.reply = "It's a tie";
    }
    this.board.clearBoard();
    return this.reply;
  },
});

export default Game;

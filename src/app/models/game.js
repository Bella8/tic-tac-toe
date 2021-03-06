import Backbone from 'backbone';
import $ from 'jquery';
import Board from 'app/models/board';


const Game = Backbone.Model.extend({

  initialize: function(){
    this.board = new Board();
    this.player1 = "x";
    this.player2 ="o";
    this.counter = 1;
  },

  play: function(row, column) {

    if(this.counter % 2 == 1) {
      this.player = this.player1;
      this.mark = "x";
    }
    else {
      this.player = this.player2;
      this.mark = "o";
    }

    this.reply = "";
    var winning = this.won();
    var isFilled  =  this.board.filled(row,column);
    if(isFilled === false && winning === false){
      this.board.fill(row, column, this.mark);
      this.counter += 1;
      this.trigger('change'); // to trigger render for each play
      var  counter = this.counter;
    }

    var isWinning = this.won();

    if (isWinning === true && this.reply === "") {
      if (this.wonMark === 'x') {
        this.reply = this.player1 + " has won!";
      }
      else if (this.wonMark === 'o') {
        this.reply = this.player2 + " has won!";
      }
      if (counter === this.counter) {
      }
      this.counter = 1;
    }
    if (this.counter === 10 && isWinning === false) {
      this.reply = "It's a tie!";
      this.counter = 1;
    }
    // console.log("this.counter = " + this.counter);
    // console.log("counter is " + counter);
    return this.reply;
  },

  won: function() {

    this.hasWon = false;
    this.wonMark = "x";

    //horizontal
    for (var index = 0; index < this.board.board.length; index++) {
      if (this.board.board[index][0] === this.board.board[index][1] && this.board.board[index][1] === this.board.board[index][2] && this.board.board[index][0] !== undefined) {
        this.hasWon = true;
        this.wonMark = this.board.board[index][0];
      }
      //vertical win
      else if (this.board.board[0][index] === this.board.board[1][index] && this.board.board[1][index] === this.board.board[2][index] && this.board.board[0][index] !== undefined) {
        this.hasWon = true;
        this.wonMark = this.board.board[0][index];
      }

    }
    //diagonal
    if (this.board.board[0][0] === this.board.board[1][1] && this.board.board[1][1] === this.board.board[2][2] && this.board.board[1][1] !== undefined) {
      this.hasWon = true;
      this.wonMark = this.board.board[1][1];
    }
    else if (this.board.board[0][2] === this.board.board[1][1] && this.board.board[1][1] === this.board.board[2][0] && this.board.board[1][1] !== undefined) {
      this.hasWon = true;
      this.wonMark = this.board.board[1][1];
    }
    if (this.hasWon === true) {
    }
    return this.hasWon;
  },
});

export default Game;

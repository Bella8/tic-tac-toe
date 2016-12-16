import Board from 'board';

var Game = function() {
  this.board = new Board();
};

Game.prototype.players = function (player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.play = function (row,column) {
  //if counter == 9 invoke won function and clear board
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

  var isFilled  =  this.board.filled(row,column);
  var reply;
  if(isFilled === false){
    this.board.fill(row, column, this.mark);
    reply = this.player + " picked spot " + "[" + row + "]" + "[" + column + "]";
    this.counter += 1;
  }
  else {
    reply = "Spot taken! " + this.player + " try again.";
  }
  // this.board.hasWon(this.counter);
  return reply;
};


//move won into board
Game.prototype.won = function () {

  // create horizontal, vertical, and diagonal functions and call them in won

  this.won = false;
  this.mark = "";
  this.reply = "";

  //horizontal
  for (var index = 0; index < this.board.board.length; index++) {
    if (this.board.board[index][0] === this.board.board[index][1] && this.board.board[index][1] === this.board.board[index][2] && this.board.board[index][0] !== undefined) {
        this.won = true;
        this.mark = this.board.board[index][0];
      }
  }

  //diagonal

  //vertical

  if (this.won === true) {
    if (this.mark === 'x') {
      this.reply = this.player1 + " has won!";
    }
    else if (this.mark === 'o') {
      this.reply = this.player2 + " has won!";
    }
    return this.reply;
  }

};
//once won = true or board is filled end the game, clear the board
// Have you been filled up?  Then determine of worn or tie?

//command query separation: a method should either tell you the state of something or change the state

export default Game;

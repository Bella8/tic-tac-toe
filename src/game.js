import Board from 'board';

var Game = function() {
  this.board = new Board();
};

Game.prototype.players = function (player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.play = function (row,column) {
//TODO: NEED TO FIGURE OUT WHY TIE DOES NOT WORK!

  this.mark = "";
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

  var reply;
  var winning = this.won();

  var isFilled  =  this.board.filled(row,column);
  if(isFilled === false){
    this.board.fill(row, column, this.mark);
    reply = this.player + " picked spot " + "[" + row + "]" + "[" + column + "]";
    this.counter += 1;
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
    console.log("inside haswon false statement");
    reply = "It's a tie!";
  }

  return reply;
};


//move won into board
Game.prototype.won = function () {

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
    // console.log(this.board.checkBoard());
    this.board.clearBoard();
    // console.log(this.board.checkBoard());
    return this.reply;
  }
  else if (this.counter === 10 && this.won === false){
    this.reply = "It\'s a tie";
  }
  // console.log(this.board.checkBoard());
  this.board.clearBoard();
  // console.log(this.board.checkBoard());
  return this.reply;

};
//once won = true or board is filled end the game, clear the board
// Have you been filled up?  Then determine of won or tie?

//command query separation: a method should either tell you the state of something or change the state

export default Game;

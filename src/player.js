import Board from 'board';

var Player = function() {
  this.board = new Board();
};

Player.prototype.players = function (player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Player.prototype.play = function (row,column) {
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
    reply = this.player + " picked spot " + "[" + row + "]" + "[" + column + "]";
    this.counter += 1;
  }
  else {
    reply = "Spot taken! " + this.player + " try again.";
  }
  return reply;
};

export default Player;


import Player from 'player';

var Game = function() {
  this.player = new Player();
  // this.board = new Board();
};

//move won into board
Game.prototype.won = function () {

  // create horizontal, vertical, and diagonal functions and call them in won

  this.won = false;
  this.mark = "";
  this.reply = "";

  //horizontal
  for (var index = 0; index < this.player.board.board.length; index++) {
    if (this.player.board.board[index][0] === this.player.board.board[index][1] && this.player.board.board[index][1] === this.player.board.board[index][2] && this.player.board.board[index][0] !== undefined) {
        this.won = true;
        this.mark = this.player.board.board[index][0];
      }
  }

  //diagonal

  //vertical

  if (this.won === true) {
    if (this.mark === 'x') {
      this.reply = this.player.player1 + " has won!";
    }
    else if (this.mark === 'o') {
      this.reply = this.player.player2 + " has won!";
    }
    return this.reply;
  }

};
//once won = true or board is filled end the game, clear the board
// Have you been filled up?  Then determine of worn or tie?

//command query separation: a method should either tell you the state of something or change the state

export default Game;

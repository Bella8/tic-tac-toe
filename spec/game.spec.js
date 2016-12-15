import Game from 'game';
import Player from 'player';
import Board from 'board';

describe('Game', function() {
  var testGame;
      // testBoard,
      // testPlayer;

  beforeEach(function() {
    testGame = new Game();
    // testBoard = new Board();
    // testPlayer = new Player();
  });

  describe('won', function() {
    it('should check for a win if either player has won', function() {
      testGame.player.players("Beylul", "Yeni");
      // console.log(testPlayer.player1);
      testGame.player.play(1, 0);
      testGame.player.play(0, 1);
      testGame.player.play(1, 1);
      testGame.player.play(2, 1);
      testGame.player.play(1, 2);
      console.log(testGame.player.board.board);
      expect(testGame.won()).toEqual("Beylul has won!");
    });

  });
});

import Player from 'player';
import Board from 'board';
describe('Player', function() {
  var testPlayer;

  beforeEach(function() {
    testPlayer = new Player();
  });

  describe('players', function() {
    it('should assign both players', function() {
      testPlayer.players("Beylul", "Yeni");
      expect(testPlayer.player1).toEqual("Beylul");
      expect(testPlayer.player2).toEqual("Yeni");
    });
  });

  describe('play', function() {
    it('should assign the right mark and player', function() {
      testPlayer.players("Beylul", "Yeni");
      testPlayer.play(0, 1);
      expect(testPlayer.player).toBe("Beylul");
      expect(testPlayer.mark).toEqual("x");
    });

    it('should fill the spot with the designated mark, if empty', function() {
      testPlayer.players("Beylul", "Yeni");
      expect(testPlayer.play(0, 1)).toBe("Beylul picked spot [0][1]");
    });

    it('should increment counter by one', function() {
      testPlayer.players("Beylul", "Yeni");
      testPlayer.play(0, 1);
      testPlayer.play(1, 1);
      expect(testPlayer.counter).toEqual(3);
    });

    it('should ask the same player to go again if spot filled ', function() {
      var check = testPlayer.check;
      testPlayer.players("Beylul", "Yeni");
      testPlayer.play(1, 1);
      testPlayer.play(0, 0);
      expect(testPlayer.play(0, 0)).toBe("Spot taken! Beylul try again.");
      expect(testPlayer.counter).toEqual(3);
    });
  });
});

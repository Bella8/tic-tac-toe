import Backbone from 'backbone';
import Board from 'app/models/board';

var testBoard = [[ , , ],[ , , ],[ , , ]];

const Game = Backbone.Model.extend({
  initialize: function(){
    this.board = new Board( {
      grid: testBoard
    });
  }

});

export default Game;

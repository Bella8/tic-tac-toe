import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import BoardView from 'app/views/board_view';


const GameView = Backbone.View.extend({
  initialize: function(options) {
    this.board = options.model;
    this.boardTemplate = _.template($("#board").html());
  },

  render: function() {
    var board = new BoardView({
      el: '#board-table',
      model: this.board,
      template: this.boardTemplate
    });
    board.render();
    return this;
  },

  events: {
    'click #restart': 'newGame'
  },

  newGame: function(event) {
    console.log(event.target.id);
  }

});

export default GameView;

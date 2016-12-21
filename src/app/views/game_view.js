import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import BoardView from 'app/views/board_view';


const GameView = Backbone.View.extend({
  initialize: function(options) {
    this.board = this.model.board;
    this.boardTemplate = _.template($("#board").html());
    _.bindAll(this, "render");
    this.listenTo(this.model, 'change', this.render);
    this.boardView = new BoardView({
      el: '#board-table',
      model: this.board,
      template: this.boardTemplate,
      game: this.model
    });
  },

  render: function() {
    this.boardView.render();
    return this;
  },

  events: {
    'click #restart': 'newGame'
  },

  newGame: function(event) {
    this.board.clearBoard();
    // this.board.counter = 1;
    $(".winner").html("");
    this.render();
  }
});

export default GameView;

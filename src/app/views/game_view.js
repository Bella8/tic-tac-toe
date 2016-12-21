import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import BoardView from 'app/views/board_view';


const GameView = Backbone.View.extend({
  initialize: function(options) {
    this.board = this.model.board;
    this.boardTemplate = _.template($("#board").html());
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var board = new BoardView({
      el: '#board-table',
      model: this.board,
      template: this.boardTemplate,
      game: this.model
    });
    board.render();
    console.log("in boardview render");
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

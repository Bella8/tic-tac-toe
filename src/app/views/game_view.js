import $ from 'jquery';
import Backbone from 'backbone';
// import _ from 'underscore';
// import BoardView from 'app/views/board_view';


var GameView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  events: {
    'click #restart': 'newGame',
    'click td': 'fillSquare',
  },

  newGame: function(e) {
     console.log("new game clicked");
  },

  fillSquare: function(e) {
    console.log("in TD");
  }

});

export default GameView;

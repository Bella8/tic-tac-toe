import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';


const BoardView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.board = options.model;
    this.game = options.game;
  },

  render: function(){
    var html = this.template({board: this.board.board});
    this.$el.html(html);

    return this;
  },

  events: {
    "click": "clickBox",
  },

  clickBox: function(event) {
    event.preventDefault();
    // console.log(event.target.id);
    var tagId = event.target.id;
    var split = tagId.split("-");

    var positionGrid = {
    "zero": 0,
    "one": 1,
    "two": 2
    }

    var row = positionGrid[split[0]];
    var column = positionGrid[split[1]];
    this.game.play(row, column);
    $(".winner").html(this.game.reply);
  }
});


export default BoardView;

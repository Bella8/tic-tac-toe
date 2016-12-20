import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';


const BoardView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.board = options.model;
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
    console.log(event.target.id);
  }
});


export default BoardView;

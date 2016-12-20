import Backbone from 'backbone';

var Board = Backbone.Model.extend({
  defaults: {
    grid: [[],[],[]]
    // mark: ['x', 'o'],
    // players: [],
    // counter: 0
  }
});

export default Board;

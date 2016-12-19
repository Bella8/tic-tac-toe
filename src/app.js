import Game from 'app/models/game';
import GameView from 'app/views/game_view';

var game = new Game({
//players
// new board defult 

});

var gameview = new GameView ({
  el: "#game",
  model: game
});

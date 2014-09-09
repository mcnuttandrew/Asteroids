( function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  
  var GameView = window.Asteroids.GameView = function(ctx, game){
    this.ctx = ctx;
    this.game = game;
  };
  
  GameView.prototype.start = function(){
    var that = this;
    that.bindKeyHandlers();
    setInterval(function (){
      that.game.step();
      that.game.draw(that.ctx);
    }, 20);
  };
  
  GameView.prototype.bindKeyHandlers = function(){
    var ship = this.game.ship;
    key("W", ship.power.bind(ship, [0, -1/5]));
    key("A", ship.power.bind(ship, [-1/5, 0]));
    key("S", ship.power.bind(ship, [0,1/5]));
    key("D", ship.power.bind(ship, [1/5,0]));

  };
})();a
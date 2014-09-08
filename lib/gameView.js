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
    setInterval(function (){
      that.game.moveObjects();
      that.game.draw(that.ctx);
    }, 20);
  };

})();
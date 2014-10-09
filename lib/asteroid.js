( function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var COLOR = "#04ff00";
  var RADIUS = 15;
  
  var Asteroid = window.Asteroids.Asteroid = function(pos, game){
    this.game = game;
    var vel = Asteroids.Util.prototype.randomVec(1);
    Asteroids.MovingObject.call(this, pos, vel, RADIUS, COLOR);
  }
	
  Asteroid.prototype.move = function(movement) {
    this.pos[0] += movement[0];
    this.pos[1] += movement[1];
		if(this instanceof Asteroids.Bullet){
    	if(this.game.isOutOfBounds(this.pos)){
    		this.game.remove(this);
    	}
		} else {
			this.pos = this.game.wrap(this.pos);   
		}
  };
  
  Asteroids.Util.prototype.inherits.call(Asteroid, Asteroids.MovingObject); 

})();
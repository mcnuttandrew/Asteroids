( function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
	
	var RADIUS = 2;
	var COLOR = "#FF0000"
	var Bullet = window.Asteroids.Bullet = function(game, pos, vel){	
		this.game = game; 	
		Asteroids.MovingObject.call(this, pos, vel, RADIUS, COLOR);
	}
	Asteroids.Util.prototype.inherits.call(Bullet, Asteroids.MovingObject); 
	
	
	})();
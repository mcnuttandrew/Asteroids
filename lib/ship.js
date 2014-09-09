<<<<<<< HEAD
(function () {
		if (typeof window.Asteroids === "undefined") {
		  window.Asteroids = {};
		}

		var RADIUS = 5; 
		var COLOR = "#999999";

		var Ship = window.Asteroids.Ship = function(game) {
		  this.game = game;
		  var pos = [200, 200];
		  var vel = [0, 0];
		  Asteroids.MovingObject.call(this, pos, vel, RADIUS, COLOR);
		};

		Asteroids.Util.prototype.inherits.call(Ship, Asteroids.MovingObject);

		Ship.prototype.relocate = function() {
		  this.pos = this.game.randomPosition();
		  this.vel = [0, 0]; 
		}

		Ship.prototype.power = function(impulse){
		  this.vel[0] += impulse[0];
		  this.vel[1] += impulse[1];
		}

		Ship.prototype.fireBullet = function(){
			var velX = this.vel[0] + 1.2 * this.vel[0]/(Math.abs(this.vel[0]) + .001 );
			var velY = this.vel[1] + 1.2 *  this.vel[1]/(Math.abs(this.vel[1]) + .001 );
			var newPos = [this.pos[0], this.pos[1]];
			var newVel = [velX, velY];
			var newBullet = new Asteroids.Bullet(this.game, newPos, newVel);
			this.game.add(newBullet);
		}
=======
( function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var RADIUS = 5; 
  var COLOR = "#999999";
  
  var Ship = window.Asteroids.Ship = function(game) {
    this.game = game;
    var pos = [200, 200];
    var vel = [0, 0];
    Asteroids.MovingObject.call(this, pos, vel, RADIUS, COLOR);
  };
  
  Asteroids.Util.prototype.inherits.call(Ship, Asteroids.MovingObject);
  
  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0]; 
  }
  
  Ship.prototype.power = function(impulse){
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }
>>>>>>> 4a61cc6d6dfc374f01d85d0c4432e21e4084660a
  
})();
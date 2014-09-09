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
  
})();
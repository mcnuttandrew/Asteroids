( function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var DIM_X = 1000;
  var DIM_Y = 1000;
  var NUM_ASTEROIDS = 20;
  
  var Game = window.Asteroids.Game = function() {
    this.asteroids = this.addAsteroids();
  };
  
  
  Game.prototype.addAsteroids = function() {
    var allAsteroids = [];
    for (var i = 0; i < NUM_ASTEROIDS; i++){
      allAsteroids.push(new Asteroids.Asteroid(this.randomPosition()));
    }
    return allAsteroids; 
  };
  
 
 
  
  Game.prototype.randomPosition = function() {
    var xPos = Math.floor(Math.random() * DIM_X);
    var yPos = Math.floor(Math.random() * DIM_Y);
    return [xPos, yPos];
  };
  
  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    for (var i = 0; i < this.asteroids.length; i++){
      this.asteroids[i].draw(ctx);
    }
  };
  
  Game.prototype.moveObjects = function() {
    for (var i = 0; i < this.asteroids.length; i++){
      this.asteroids[i].move();
    }
  };
  

})();
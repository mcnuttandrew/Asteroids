( function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  

  var MovingObject = window.Asteroids.MovingObject = function(pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color; 
  };
  
  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0], 
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    
    ctx.fill();
  };
  
  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var xVar = Math.pow((otherObject.pos[0] - this.pos[0]), 2);
    var yVar = Math.pow((otherObject.pos[1] - this.pos[1]), 2);
    var objDistance = Math.sqrt(xVar + yVar);
    var collided = (objDistance < this.radius) || (objDistance < otherObject.radius);
    return collided;
  };
  
  MovingObject.prototype.collideWith = function(otherObject){
    Astroids.Game.remove(otherObject);
    Astroids.Game.remove(this);
  };
  
  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);   
  };
  

})();
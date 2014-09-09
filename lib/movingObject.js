( function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
<<<<<<< HEAD
=======
  
>>>>>>> 4a61cc6d6dfc374f01d85d0c4432e21e4084660a

  var MovingObject = window.Asteroids.MovingObject = function(pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color; 
  };
  
  MovingObject.prototype.draw = function(ctx) {
<<<<<<< HEAD
    ctx.strokeStyle = this.color;
=======
    ctx.fillStyle = this.color;
>>>>>>> 4a61cc6d6dfc374f01d85d0c4432e21e4084660a
    ctx.beginPath();
    ctx.arc(
      this.pos[0], 
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    
<<<<<<< HEAD
    ctx.stroke();
=======
    ctx.fill();
>>>>>>> 4a61cc6d6dfc374f01d85d0c4432e21e4084660a
  };
  
  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var xVar = Math.pow((otherObject.pos[0] - this.pos[0]), 2);
    var yVar = Math.pow((otherObject.pos[1] - this.pos[1]), 2);
    var objDistance = Math.sqrt(xVar + yVar);
<<<<<<< HEAD
    var collided = (objDistance <= this.radius) || (objDistance <= otherObject.radius);
    if (collided === true){
    	this.collideWith(otherObject);
=======
    var collided = (objDistance < this.radius) || (objDistance < otherObject.radius);
    if (collided && otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
>>>>>>> 4a61cc6d6dfc374f01d85d0c4432e21e4084660a
    }
  };
  
  MovingObject.prototype.collideWith = function(otherObject){
<<<<<<< HEAD
    if ((this instanceof Asteroids.Bullet) && (otherObject instanceof Asteroids.Asteroid) ) {
      
			otherObject.game.remove(this);
			otherObject.game.remove(otherObject);	
    }
		if (!(this instanceof Asteroids.Bullet) && otherObject instanceof Asteroids.Ship ) {
      otherObject.relocate();
    }
=======
>>>>>>> 4a61cc6d6dfc374f01d85d0c4432e21e4084660a
  };
  
  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
<<<<<<< HEAD
		if(this instanceof Asteroids.Bullet){
			
    	if (this.pos[0] < 0 || this.pos[0] > 400){
				
    		this.game.remove(this);
    	} else if(this.pos[1] < 0 || this.pos[1] > 400){
				//console.log("whoops deleted here");
    		this.game.remove(this);
			}
		} else {
			this.pos = this.game.wrap(this.pos);   
		}
=======
    this.pos = this.game.wrap(this.pos);   
>>>>>>> 4a61cc6d6dfc374f01d85d0c4432e21e4084660a
  };
  

})();
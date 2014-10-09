( function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var DIM_X = 400;
  var DIM_Y = 400;
  var NUM_ASTEROIDS = 50;
  
  var Game = window.Asteroids.Game = function() {
    this.asteroids = this.addAsteroids();
    this.ship = new Asteroids.Ship(this);
    this.bullets = [];
  };
  
  
  Game.prototype.addAsteroids = function() {
    var allAsteroids = [];
    for (var i = 0; i < NUM_ASTEROIDS; i++){
      allAsteroids.push(new Asteroids.Asteroid(this.randomPosition(), this));
    }
    return allAsteroids; 
  };
  
  Game.prototype.wrap = function(pos) {
    var newPos = pos; 
    if(newPos[0] < 0){
      newPos[0] = 400 - Math.abs(newPos[0]) ;
    }
    if(newPos[0] >= 400){
      newPos[0] =  newPos[0]%400;
    }
    if(newPos[1] < 0){
      newPos[1] = 400 - Math.abs(newPos[1]) ;
    }
    if(newPos[1] >= 400){
      newPos[1] =  newPos[1]%400;
    }
    return newPos;
  };
 
  
  Game.prototype.randomPosition = function() {
    var xPos = Math.floor(Math.random() * DIM_X);
    var yPos = Math.floor(Math.random() * DIM_Y);
    return [xPos, yPos];
  };
  
  Game.prototype.draw = function(ctx) {
		
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
		ctx.fillStyle = "#000000";
		ctx.rect(0, 0, DIM_X + 30, DIM_Y + 30);
		ctx.fill();
    var objs = this.allObjects();
    for (var i = 0; i < objs.length; i++){
      objs[i].draw(ctx);
    }
  };
  
  Game.prototype.moveObjects = function() {
		//non-asteroids
    var objs = [this.ship].concat(this.bullets);
//	var objs = this.allObjects()
    for (var i = 0; i < objs.length; i++){ 
      objs[i].move();
    }
		// //asteroids
	  var objs = this.asteroids;
		var forces = this.getForces(objs);
		
    for (var i = 0; i < objs.length; i++){
      objs[i].move(forces[i]);
    }
		
  };
  //flocking algorithm here
	//start work on rule 1
	Game.prototype.getForces = function(boids){
		//find center of mass
		var collect = [];
		var avg = [0,0];
		for(var i = 0; i < boids.length; i++){
			avg[0] += boids[i].pos[0];
			avg[1] += boids[i].pos[1];
		}
		avg[0] = avg[0] / boids.length;
		avg[1] = avg[1] / boids.length;
		//for clarity draw the center
		
		for(var i = 0; i < boids.length; i++){
			//compute direction
			var dir = Math.atan((avg[0]-boids[i].pos[0])/(avg[1]-boids[i].pos[1]));
			collect.push(dir);
		}
		// console.log(avg);
		return collect
	}
	
	
  Game.prototype.allObjects = function(){
    var collect = [this.ship].concat(this.asteroids).concat(this.bullets);
    return collect;
  };
  
  Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
  };
  
  Game.prototype.remove = function(obj){
		var grabList = [];
		if(obj instanceof Asteroids.Asteroid){
			grabList = this.asteroids;
		} else {
			grabList = this.bullets;
		}
    for(var i = 0; i < grabList.length; i++){
      if (grabList[i] === obj){
        grabList.splice(i, 1);
      }
    }
  };
  
  Game.prototype.checkCollisions = function(){
    var objs = this.allObjects();
    for (var i = 0; i < objs.length; i++){ 
      for (var j = 0; j < objs.length; j++){ 
        if(i !== j){
          objs[i].isCollidedWith(objs[j]);
        }
      }
    }
  };
  
	Game.prototype.add = function(bullet){
		this.bullets.push(bullet);		
	} //refactor out old code later
	
	Game.prototype.isOutOfBounds = function(pos){ 
		if (pos[0] < 0 || pos[0] > DIM_X){
			return true
		} else if(pos[1] < 0 || pos[1] > DIM_Y){
			return true
		} else {
			return false
		}
	}
  
})();
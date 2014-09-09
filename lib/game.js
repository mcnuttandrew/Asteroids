( function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var DIM_X = 400;
  var DIM_Y = 400;
  var NUM_ASTEROIDS = 10;
  
  var Game = window.Asteroids.Game = function() {
    this.asteroids = this.addAsteroids();
    this.ship = new Asteroids.Ship(this);
<<<<<<< HEAD
    this.bullets = [];
=======
    
>>>>>>> 4a61cc6d6dfc374f01d85d0c4432e21e4084660a
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
<<<<<<< HEAD
		ctx.fillStype = "#ffffff";
		ctx.rect(0, 0, DIM_X+30, DIM_Y+30);
		ctx.fill();
=======
>>>>>>> 4a61cc6d6dfc374f01d85d0c4432e21e4084660a
    var objs = this.allObjects();
    for (var i = 0; i < objs.length; i++){
      objs[i].draw(ctx);
    }
  };
  
  Game.prototype.moveObjects = function() {
    var objs = this.allObjects();
    for (var i = 0; i < objs.length; i++){ 
      objs[i].move();
    }
  };
  
  Game.prototype.allObjects = function(){
<<<<<<< HEAD
    var collect = [this.ship].concat(this.asteroids).concat(this.bullets);
=======
    var collect = [this.ship].concat(this.asteroids);
>>>>>>> 4a61cc6d6dfc374f01d85d0c4432e21e4084660a
    return collect;
  };
  
  Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
  };
  
<<<<<<< HEAD
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
=======
  Game.prototype.remove = function(asteroid){
    for(var i = 0; i < this.asteroids.length; i++){
      if (this.asteroids[i] === asteroid){
        this.asteroids.splice(i, 1);
>>>>>>> 4a61cc6d6dfc374f01d85d0c4432e21e4084660a
      }
    }
  };
  
  Game.prototype.checkCollisions = function(){
    var objs = this.allObjects();
    for (var i = 0; i < objs.length; i++){ 
      for (var j = 0; j < objs.length; j++){ 
<<<<<<< HEAD
        if(i !== j){
          objs[i].isCollidedWith(objs[j]);
=======
        if(i !== j && objs[i].isCollidedWith(objs[j])){
          // this.remove(this.allObjects[i]);
 //          this.remove(this.allObjects[j - 1]);
>>>>>>> 4a61cc6d6dfc374f01d85d0c4432e21e4084660a
        }
      }
    }
  };
  
<<<<<<< HEAD
	Game.prototype.add = function(bullet){
//		fail
		this.bullets.push(bullet);		
	} //refactor out old code later
	
=======
>>>>>>> 4a61cc6d6dfc374f01d85d0c4432e21e4084660a
  
})();
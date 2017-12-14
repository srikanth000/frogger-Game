// Enemies our player must avoid
speeds=[300,380,250,180,200];
pos=[30,90,200,110,180,250,330];
var Enemy = function(m,n) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.m=m;
    this.n=pos[Math.floor(Math.random()*pos.length)];

    this.speed=speeds[Math.floor(Math.random()*speeds.length)];


};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.m = (dt * this.speed) + this.m;
     if (this.m >= 505) {
      this.m = 0;
}
this.checkPlayerStatus();

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.m, this.n);
};

// Now write your own player class
var Player=function(x,y){
	this.x=x;
	this.y=y;
	this.sprite='images/char-boy.png';
	
};
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(dt=='left' && this.x>=29)
    	this.x=this.x-50;
    else if(dt == 'down' && this.y<=350)
    	this.y=this.y+50;
    else if(dt == 'up' && this.y>=50)
    	this.y=this.y-50;
    else if(dt=='right' && this.x<=350)
    	this.x=this.x+50;
   // this.checkCollisions()
    
   if(this.y==50)
	{
		alert("You are winner");
		this.y=400;
	}

};

Enemy.prototype.checkPlayerStatus = function() {

	var width=50;
	var height=50;
	if (player.x < this.m + width &&  player.x + width > this.m && player.y < this.n + height &  height + player.y > this.n) {
       
       player.gameOver();
	}
	
	
};


Player.prototype.gameOver=function() {
	alert("gameOver");
	this.x=100;
	this.y=400;

}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.handleInput = function(input) {
	this.update(input);
};

Player.prototype.isWin =function() {

};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy1=new Enemy(30,80);
var enemy2=new Enemy(30,250);
var enemy3=new Enemy(30,80);
var enemy4=new Enemy(30,250);


var allEnemies=[enemy1,enemy2,enemy4,enemy3]; //initializing the enemy

//	 Place the player object in a variable called player
var player=new Player(100,400);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

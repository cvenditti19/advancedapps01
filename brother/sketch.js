//The Variables are named here
var bird;
var pipes = [];
var s = 0
//Setups up the canvas size
function setup() {
	new Audio('https://www.bensound.com/royalty-free-music?download=retrosoul').play()

	createCanvas(800,800);
//Creates A new burd and pipes 
	bird = new Bird();
  pipes.push(new Pipe());
}
//Draw Function Sets color of the background
function draw() {
  background(0, 255, 255);
	//Random length for the pipes
  for (var i = pipes.length-1; i >= 0; i--) {
//Shows and moves the pipes   
		pipes[i].show();
    pipes[i].update();
		textSize(10)	
		text("Current Score: \n" + s, 5, 30);
		textSize(10)	
		text("Don't Fail" , 5, 60);
		fill(0,255,0)
		textSize(95)	
		text("B  R  O  T  H  E  R", 5, 400);
	
		//If the bird hits the pipe the console displays "HIT"
    if (pipes[i].hits(bird)) {
      console.log("HIT");
   document.location.reload()

		}

//If the pipes are off screen make them disappear
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }
//Shows the bird and updates its movement
  bird.update();
  bird.show();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  
	}


	
}
//When ever the mouse is clicked the bird jumps uo
function mousePressed() {
  s=s+1;
    bird.up();
    //console.log("SPACE");
  
		 

}
//Bird function makes it move and defines the variable
function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

  this.show = function() {
		//The body, beak, and eye of flappy
		fill(255,125,125)
		stroke(0)
		triangle(this.x+10,this.y-5,this.x+10,this.y+5, this.x+35, this.y+2.5)
		fill(255,255,102);
    ellipse(this.x, this.y, 32, 32);
    fill(0);
    ellipse(this.x-4, this.y-5, 10, 10);
		 	if (mouseIsPressed === true) {
		fill(255,165,0)
				triangle(this.x+5,this.y+5,this.x-5,this.y+5, this.x, this.y)
  } else {
    fill(255,165,0)
		triangle(this.x+5,this.y+5,this.x-5,this.y+5, this.x, this.y+10)
	}
	}
//When ever you move up the speed slows down
  this.up = function() {
    this.velocity += this.lift;
  }
//Puts into play gravity speed and what not
  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}
//Makes each pipe random and unique, also makes it so the actual bird can fit through the pipes
function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }
//Show function makes it so things show up on the canvas
  this.show = function() {
    fill(255,0,0);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }
//Update function makes it so things show up on the canvas and so you can move thigns
  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}
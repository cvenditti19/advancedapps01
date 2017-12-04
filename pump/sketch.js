var r,g,b;

function setup() { 
  createCanvas(800,800);
	background(0,250,0);
	r = random(255);
            g = random(255);
	b = random(255);
} 

function draw() { 

}
	
function mouseWheel() {
  background(0,250,0);  
}

function draw() {
	strokeWeight(2);
	stroke(r,g,b)
	fill(r,g,b,42)
	ellipse(mouseX,mouseY,70,70)
}
function mousePressed() {
	r = random(255);
  g = random(255);
	b = random(255);
}



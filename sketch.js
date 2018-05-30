
var x = 0;
var y = 0;
var speed = 3;
var on = false;

function setup(){
createCanvas(600, 600);
}

function draw(){
	background(0);

		if(mouseX > 200 && mouseY < 400){
			fill(255, 0, 0);
		} else {
			fill(0, 0, 255);
		}
		noStroke();
		rectMode(CENTER);
		rect(300, 300, 100, 100);
		stroke(255);
		strokeWeight(4);
		noFill();

		// if (mouseIsPressed){
		// 	fill(0, 255, 0);
		// }

		if(x > width && y > height || x < 0 && y < 0){
			speed = speed * -1
		}

		if (on) {
			fill (0, 255, 0);
		} else {
			noFill();
		}

		if (on) {
			ellipse(x, 400, 200, 200);
			ellipse(400, y, 200, 200);
		} else {

		ellipse(x, 300, 100, 100);
		ellipse(300, y, 100, 100);
}
y = y + speed
x = x + speed

}

function mouseClicked() {
	on = !on;
}

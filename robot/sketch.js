function setup() {

	createCanvas (500,330);
	background(230);
	noStroke();

}

function draw() {

	// ROBOT #1

	beginShape();
	fill(129, 129, 129);
	vertex(65, 15);
	vertex(85, 15);
	vertex(85, 65);
	vertex(65, 65);
	endShape(CLOSE);


	beginShape();
	fill(129, 129, 129);
	vertex(50, 20);
	vertex(100, 20);
	vertex(100, 70);
	vertex(50, 70);
	endShape(CLOSE);

	fill(54, 255, 0);
	ellipse(65, 40, 10, 10);
	fill(54, 255, 0);
	ellipse(85, 40, 10, 10);

	beginShape();
	fill(54, 255, 0);
	vertex(65, 55);
	vertex(85, 55);
	vertex(85, 65);
	vertex(65, 65);
	endShape(CLOSE);

	beginShape();
	fill(129, 129, 129);
	vertex(70, 70);
	vertex(80, 70);
	vertex(80, 80);
	vertex(70, 80);
	endShape(CLOSE);

	beginShape();
	fill(129, 129, 129);
	vertex(40, 80);
	vertex(110, 80);
	vertex(110, 200);
	vertex(40, 200);
	endShape(CLOSE);

	beginShape();
	fill(129, 129, 129);
	vertex(28, 80);
	vertex(38, 80);
	vertex(38, 170);
	vertex(28, 170);
	endShape(CLOSE);

	beginShape();
	fill(129, 129, 129);
	vertex(112, 80);
	vertex(122, 80);
	vertex(122, 170);
	vertex(112, 170);
	endShape(CLOSE);

	beginShape();
	fill(129, 129, 129);
	vertex(58, 203);
	vertex(68, 203);
	vertex(68, 290);
	vertex(58, 290);
	endShape(CLOSE); 

	beginShape();
	fill(129, 129, 129);
	vertex(78, 203);
	vertex(88, 203);
	vertex(88, 290);
	vertex(78, 290);
	endShape(CLOSE); 

	// END ROBOT #1

	// ROBOT #2

	rect(315, 15, 20, 30);
	rect(300, 20, 50, 50);

	fill(54, 255, 0);
	ellipse(315, 40, 10, 10);

	fill(54, 255, 0);
	ellipse(335, 40, 10, 10);

	fill(54, 255, 0);
	rect(315, 55, 20, 10);

	fill(129, 129, 129);
	rect(320, 70, 10, 10);

	fill(129, 129, 129);
	rect(285, 80, 80, 100);

	fill(129, 129, 129);
	rect(273, 80, 10, 90);

	fill(129, 129, 129);
	rect(367, 80, 10, 90);

	fill(129, 129, 129);
	rect(305, 182, 10, 85);
	fill(129, 129, 129);
	rect(337, 182, 10, 85);

	
}
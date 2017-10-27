function setup() {
	createCanvas(600,600);
}

// function draw() {
// 	function onLoad() {
// 		var randNum = Math.floor(Math.range(1,2));
// 		if (randNum == 1) {
// 			//left path
// 		} else (randNum == 2) {
// 			//right path
// 		}
// 	} //close onLoad

// 	function mousePressed() {
// 		function location () {

// 		}
//  		if (keyPressed == 1) {
// 			if (existingPiece == leftPath) {
// 				print rightPath
// 			} else if {
// 				print leftPath
// 			}
// 		} else if (keyPressed == 2) {
// 			if (existingPiece == leftPath) {
// 				print rightPath
// 			} else if {
// 				print leftPath
// 			}
// 		} else {
// 			error message 
// 		}
// 	}





function draw() {


//left side
beginShape();
var x = 200;
var y = 0;
strokeWeight(20);
vertex(0+x,20+y);
vertex(20+x,20+y);
vertex(20+x,40+y);
vertex(40+x,40+y);
vertex(40+x,60+y);
vertex(60+x,60+y);
vertex(60+x,80+y);
vertex(80+x,80+y);
vertex(80+x,100+y);
vertex(100+x,100+y);
vertex(100+x,120+y);
vertex(120+x,120+y);
vertex(120+x,140+y);
vertex(140+x,140+y);
vertex(140+x,160+y);
vertex(160+x,160+y);
vertex(160+x,180+y);
vertex(180+x,180+y);
vertex(180+x,200+y);
vertex(200+x,200+y);
endShape();

//right side
beginShape();
strokeWeight(20);
vertex(180,0);
vertex(180,20);
vertex(160,20);
vertex(160,40);
vertex(140,40);
vertex(140,60);
vertex(120,60);
vertex(120,80);
vertex(100,80);
vertex(100,100);
vertex(80,100);
vertex(80,120);
vertex(60,120);
vertex(60,140);
vertex(40,140);
vertex(40,160);
vertex(20,160);
vertex(20,180);
vertex(0,180);
vertex(0, 200);
endShape();

beginShape();
var x = 0;
var y = 200;
strokeWeight(20);
vertex(0+x,20+y);
vertex(20+x,20+y);
vertex(20+x,40+y);
vertex(40+x,40+y);
vertex(40+x,60+y);
vertex(60+x,60+y);
vertex(60+x,80+y);
vertex(80+x,80+y);
vertex(80+x,100+y);
vertex(100+x,100+y);
vertex(100+x,120+y);
vertex(120+x,120+y);
vertex(120+x,140+y);
vertex(140+x,140+y);
vertex(140+x,160+y);
vertex(160+x,160+y);
vertex(160+x,180+y);
vertex(180+x,180+y);
vertex(180+x,200+y);
vertex(200+x,200+y);
endShape();

}
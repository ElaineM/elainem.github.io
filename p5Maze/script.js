var option = 0;
var position = "";
var stroke = 20;

//reloads the page when "start over" is clicked
$("#reload").click(function() {
	location.reload();
});

//creates the maze shape
function rightShape(x,y) {
	beginShape();
	strokeWeight(10);
	vertex(180+x,0+y);
	vertex(180+x,20+y);
	vertex(160+x,20+y);
	vertex(160+x,40+y);
	vertex(140+x,40+y);
	vertex(140+x,60+y);
	vertex(120+x,60+y);
	vertex(120+x,80+y);
	vertex(100+x,80+y);
	vertex(100+x,100+y);
	vertex(80+x,100+y);
	vertex(80+x,120+y);
	vertex(60+x,120+y);
	vertex(60+x,140+y);
	vertex(40+x,140+y);
	vertex(40+x,160+y);
	vertex(20+x,160+y);
	vertex(20+x,180+y);
	vertex(0+x,180+y);
	vertex(0+x,200+y);
	endShape();
	}

function leftShape(x,y) {
	beginShape();
	strokeWeight(10);
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

// P5 function that creates the canvas
function setup() {
	createCanvas(windowWidth, windowHeight);
	// console.log(myArray);
}

// P5 function that draws on the canvas
function draw(){

		//grid lines
		line(0,0,0,600);
		line(200,0,200,600);
		line(400,0,400,600);
		line(600,0,600,600);
		line(0,0,600,0);
		line(0,200,600,200);
		line(0,400,600,400);
		line(0,600,600,600);
}

function keyPressed() {
		if (option == 0) {
			if (keyCode == UP_ARROW) {
				leftShape(0,0);
				position = "left";
		
			} else if (keyCode == DOWN_ARROW) {
				rightShape(0,0);
				position = "right";
		
			} 
		} else if (option == 1) {
			if (position == "left") {
					if (keyCode == UP_ARROW) {
						rightShape(200,0);
						position = "rightTwo";
					} else if (keyCode == DOWN_ARROW) {
						rightShape(0,200);
						position == "rightFour";
						console.log("test");
					}
			} else if (position == "right") {
					if (keyCode == UP_ARROW) {
						leftShape(0,200);
						position = "leftFour";
					} else if (keyCode == DOWN_ARROW) {
						leftShape(200,0);
						position == "leftTwo";
					}
				}

		} else if (option == 2) {
					if (position == "rightTwo") {
						if (keyCode == UP_ARROW) {
							leftShape(400,0);
							position = "leftThree";
						} else if (keyCode == DOWN_ARROW) {
							//game over
						} 
					} else if (position == "rightFour") {
						if (keyCode == UP_ARROW) {
							leftShape(200,200);
							position = "leftFive";
						} else if (keyCode == DOWN_ARROW) {
							leftShape(0,400);
							position = "rightSeven";
						} 
					}
		} else if (option == 3) {
				if (position == "leftThree") {
					if (keyCode == DOWN_ARROW) {
						rightShape(400,200);
						position = "rightSix";
				} else if (keyCode == UP_ARROW) {
						alert("Game Over");
				}
			}

		} else if (option == 4) {
				if (position == "rightSix") {
					if (keyCode == UP_ARROW) {
						leftShape(400,400);
						position = "leftNine";

				} else if (keyCode == DOWN_ARROW) {
						rightShape(200,200);
						position = "leftFive";
					}
				}
			
		} else if (option == 5) {
				if (position == "leftNine") {
					if (keyCode == UP_ARROW) {
						alert("You win!");
				} else if (keyCode == DOWN_ARROW) {
						alert("You Loose!");
					}
				}
		} else { }
		//for testing only
		$("#gridPosition").html(option + " , " + position);
		
		//incrementer that moves the user forward in the maze
		option++;
	}



	// OLD PRACTICE STUFF || from P5 reference
// function drawCircles(x,y){
// 	ellipse(x,y-25,10,10);
// 	// ellipse(x,y,10,10);
// 	// ellipse(x,y+25,10,10);
// }

// function setup() {
// 	createCanvas(windowWidth, windowHeight);
// }

// function draw() {
// 	drawCircles(100,100);
// 	drawCircles(200,100);
// 	drawCircles(300,100);

// if (keyCode == UP_ARROW) {
// 	a = 100;
// 	b = 100;
// 	drawCircles(100+a,100+b);
// 	} else if (keyCode == DOWN_ARROW){
// 		a = 150;
// 		b = 150;
// 		drawCircles(100+a,100+b);
// 	}
// }

// function draw() {
// 	backgroun(255);
// 	Arrow()
// 	for (var i=Arrow; i<500;i+=5); {		
// 	}

// 	function Arrow() {
// 		beginShape();
// 		vertex(180,82);
// 		vertex(207,36);
// 		vertex(214,63);
// 		vertex(407,11);
// 		vertex(412,30);
// 		vertex(219,82);
// 		vertex(223,109);
// 		endShape(CLOSE);
// 	}

// }


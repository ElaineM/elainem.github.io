var option = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	background(255);
	var density = map(mouseX, 0, width, 20,50);

	if (option == 1) {
		for (var x = 50; x <= width-50; x+=density) {
			for (var y = 50; y <= height-50; y += density) {
				line(x-5, y-5, x+5, y+5);
				line(x+5, y-5, x-5, y+5);
			}
		}
	}

	else if (option == 2) {
		for (var x= 50; x<= width-50; x += density) {
			for (var y = 50; y <= height-50; y+= density) {
				line(x,y, width/2, height/2);
			}
		}
	}

	else if (option == 3) {
		for (var x= 50; x<= width-50; x += density) {
			for (var y = 50; y <= height-50; y+= density) {
				ellipse(x,y,40,40);
			}	
		}
	}

	else if (option == 4) {
		var count = 0;
		for (var x= 50; x<= width-50; x += density) {
			for (var y = 50; y <= height-50; y+= density) {
				strokeWeight(count*0.2);
				ellipse(x,y,20,20);
				count++;
			}
		}
	}

	else if (option == 5) {
		for (var x= 50; x<= width-50; x += density) {
			for (var y = 50; y <= height-50; y+= density) {
				for(var i = 0; i<16; i+=4){
				line(x-i,y,x-i, y+12);
				}
				line(x,y,x+12,y+12);
			}
		}
	}
} // close draw


function mousePressed() {
	option++;
	if (option > 5) option = 1;
	console.log(option);
}

// when pressing on the mouse, the bg color changes
// var isBlack = false;

// function setup() {
// 	createCanvas(900,600);
// }

// function draw() {
// 	if (isBlack == true) {
// 		background(0);
// 	} else {
// 		background(255,0,0);
// 	}
// }

// function mousePressed() {
// 	isBlack = !isBlack;
// }



// Move the circle with the arrow ke
// var circleX = 450;
// var circleY = 300;

// function setup() {
// 	createCanvas(900, 600);

// }

// function draw() {
// 	background(255);
// 	ellipse(circleX, circleY, 100,100);

// 	if (keyIsPressed) {
// 		if (keyCode == UP_ARROW) {
// 			circleY -= 5;
// 		} else if (keyCode == DOWN_ARROW) {
// 			circleY += 5;
// 		} else if (keyCode == LEFT_ARROW) {
// 			circleX -= 5;
// 		} else if (keyCode == RIGHT_ARROW){
// 			circleX += 5;
// 		}
// 	}
// }



// change bg color when mouse is pressed inside of circle
// var bgcolor = 0;

// function setup() {
// 	createCanvas(600,600);
// } 

// function draw() {
// 	background(bgcolor);
// 	fill(255);

// 	ellipse(width/2,height/2, 100,100);
// 	var d = dist(width/2, height/2, mouseX,mouseY) //same arguments as line, measures distance btwn 2 pts
// 	if (d < 50 && mouseIsPressed) {
// 		bgcolor = 255;
// 	} else {
// 		bgcolor = 0;
// 	}
// }

// function setup() {
// 	createCanvas(900,600);
// 	strokeWeight(4);
// }

// function draw() {
// 	background(102);
// 	Map function
// 	var grey = map(mouseX, 0, width, 0,255);
	// map(input value, min value of input, max value, start of range, end of range)
	// fill(grey);
	// ellipse(mouseX,mouseY,30,30);

//drawing
	// if (mouseX < 300) {
	// 	stroke(255,0,0);
	// } else {
	// 	stroke(0); //stroke goes back to black
	// }
	// if (mouseIsPressed == true) {
	// line(mouseX,mouseY, pmouseX,pmouseY);
	// }
// }



//	Hashmark grid
// function setup() {
// 	createCanvas(600,600);
// }

// function setup() {
// 	createCanvas(windowWidth, windowHeight);
// 	noFill();
// }
// function draw() {
// 	background(255);
// 	for(var x=50;x <= height-50;x+=50) {
// 		for(var y=50; y <= height-50;y+=50) {
// 			// ellipse(x,y,40,40);
// 			for(var i=0;i<16;i+=4) {
// 			line(x+i,y,x+i,y+12); 
			
// 			}
// 			line(x,y,x+12,y+12); 
// 		}
// 	}
// }


// Nested for loops
// function setup() {

// }

// function draw() {
// 	background(255);
// 	for (var i=0;i < width; i+=50) {
// 		for (var j=0; j<height; j+=50) {
// 			ellipse(i,j, 20,20);
// 		}

// 	}
// }


// Circle with circles inside
// function draw() {
// 	background (255);
// 	noFill();
// 	for (var i=50;i<600;i+=2) {
// 		ellipse(width/2, height/2, i,i); 
// 	}
// }


// function setup() {
// 	createCanvas(600,600);
// }

// function draw() {
// 	background(200);
// 	for(var i=0;i<width; i++) {
// 		stroke(i/width *255);
// 		line(i,0,i,height);
// 	}

// }

// var x = 100;
// var y = 100;

// function setup() {
// 	createCanvas(600,600);
// }

// function draw() {
// 	background(255);
// 	line(0,0,width, height);
// 	line(width, 0, 0, height);
// }
var myArray = [];
var option = 1;

function rightShape(x,y) {
	beginShape();
	strokeWeight(20);
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

function setup() {
	createCanvas(windowWidth, windowHeight);
	// console.log(myArray);
}

function draw(){
	
		if (option == 1) {
			if (keyCode == UP_ARROW) {
				leftShape(100,100);
				console.log("1");
			
			} else if (keyCode == DOWN_ARROW) {
				rightShape(300,100);
				console.log("2")
		
			} 
		} else if (option == 2) {
			if (keyCode == UP_ARROW) {
				leftShape(200,200);
			
			} else if (keyCode == DOWN_ARROW) {
				rightShape(600,200);
		
			} 
		} else if (option == 3) {
			if (keyCode == UP_ARROW) {
				leftShape(300,300);
			
			} else if (keyCode == DOWN_ARROW) {
				rightShape(900,300);
			
			} 
		}

		function mousePressed() {
			option++;
			console.log(option);
		}
	// }
}
	
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


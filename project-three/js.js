// Example 1 - Previous week review

// var array = ["one","two"];
// for(var i=0; i<array.length; i++) {
	
	// Example 1a
	//if(i < 2){	console.log(array[i])}
	
	// Example 1b
	//for(var i=0; i<array.length; i++) {
	//console.log(array[i])
	//}

	// Example 1
	//var outPutString = " ";

	//for (var x = 0; x <= 7; x++){
	//	outPutString += array[i] + " ";
	//	}
	//console.log(outPutString);	
// }

// Example 2 - JS Timing

// var i = 0;

// while (i < 10){
// 		console.log("The number is " + i);
// 		i++;
// }

// when to use while loop vs when to use for loop? 
// for loops might accidentally default to an infinite loop, while loops specifiy an end with i++

// var z = 0;
// while(z < array.length){
// 	console.log(array[z]);
// 	z++;
// }

// var d = "";
// while( d !=  "the"){
// 	console.log(d);
// 	d = "the"; //prints "" first, the immediately assign the to var d
// }

// Example 3 - Delaying events

setTimeout(function(){
	document.getElementById("derby").innerHTML = "READY"
}, 1000);
setTimeout(function(){
	document.getElementById("derby").innerHTML = "SET"
}, 2000);
setTimeout(function(){
	document.getElementById("derby").innerHTML = "GO!"
}, 3000);

// Example 4  - Math Object

// Math.random();
// Math.random() * 10;
// Math.ceil(8.5);
// console.log(Math.floor(Math.random()*10));

// var timer = 0;
// var counter = 0;

// for (var i=0; i<10; i++){
// 	setTimeout(function(){
// 		console.log("Hello World " + Math.random()*5);
// 	}, timer);
// 	timer += 100;
// 	counter++;
// }

//Example 5 - emojis

// var snowTimer = 0;

// for (var i = 0; i < 200; i++) {
// 	setTimeout(function(){
// 		var snow = "";
// 		for (var s = 0; s< 40; s++){
// 			var snowOrRain = Math.random()*100;
// 			if (snowOrRain < 33) {
// 				snow += "❄️ ";
// 			} else if (snowOrRain > 33 && snowOrRain < 66) {
// 				snow += "💧";
// 			} else{
// 				snow += " ";
// 			}

// 			} // close for loop
// 			console.log(snow);
// 		}, snowTimer); //close setTimeout
// 	snowTimer += 70;
// } //close for loop



var raceTimer = 0;
console.log("🐎🐎🐎🐎🐎");
console.log("🐎 🐎 🐎 🐎 🐎");
console.log("🐎  🐎  🐎  🐎  🐎")
for (var i = 0; i < 20; i++) {
	setTimeout(function(derbyRace){

		var pony = "";
		for (var s = 0; s< 10; s++){
			var derby = Math.random()*100;
			if (derby < 33) {
				pony += "🐎";
			} else if (derby > 33 && derby < 66) {
				pony += " "; //1 space
			} else if (derby > 33 && derby < 43) {
				pony += "  "; //2 spaces
			} else if (derby > 43 && derby < 53) {
				pony += "   "; //3 spaces
			} else if (derby > 53 && derby < 66) {
				pony += "    "; //4 spaces
			} else {
				pony += "     "; //5 spaces
			}

			} 
			
			// close for loop
			// console.log(pony);
			var watch = derbyRace
			document.getElementById(derby).innerHTML = "<h1>" + watch + "</h1>";

		}, raceTimer); //close setTimeout
	raceTimer += 70;
} //close for loop
















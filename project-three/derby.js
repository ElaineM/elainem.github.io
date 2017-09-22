setTimeout(function(){
	document.getElementById("derby").innerHTML = "READY"
}, 1000);
setTimeout(function(){
	document.getElementById("derby").innerHTML = "SET"
}, 2000);
setTimeout(function(){
	document.getElementById("derby").innerHTML = "GO!"
}, 3000);




setTimeout(function(){
var raceTimer = 0;
console.log("🐎🐎🐎🐎");
console.log("🐎 🐎 🐎 🐎");
console.log("🐎  🐎  🐎  🐎")
  
for (var i = 0; i < 10; i++) {
	setTimeout(function(derbyRace){

		var pony = "";
		for (var s = 0; s< 10; s++){
			var derby = Math.random()*100;
			if (derby < 43) {
				pony += "🐎";
			} else if (derby > 43 && derby < 53) {
				pony += " "; //1 space
			} else if (derby > 54 && derby < 66) {
				pony += "  "; //2 spaces
			} else {
				pony += "   "; //3 spaces
			} 
			} 
			// return pony
			// close for loop
			console.log(pony);
			// var watch = derbyRace
			// document.getElementById(derby).innerHTML = "<h1>" + watch + "</h1>";

		}, raceTimer); //close setTimeout
	raceTimer += 150;
} //close for loop
  
  
}, 4000);

setTimeout(function(){
	document.getElementById("derby").innerHTML = "🥇"
}, 5000);


setTimeout(function(){
	var winner = document.getElementById("winner");
	winner.innerHTML =  "🐎";
	winner.classList.add("horizTranslate");
	console.log(winner);
}, 6000);















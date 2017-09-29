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

		var  sp = ' ',
			horseOne = "http://elainematthias.com/img/js-img/horse-one-sm.jpg" + sp,
		 	horseTwo = "http://elainematthias.com/img/js-img/horse-two-sm.jpg" + sp,
			horseThree = "http://elainematthias.com/img/js-img/horse-three-sm.jpg" + sp,
			horses = [horseOne,horseTwo, horseThree],
			nl = '\n',
			result = '';
			console.image(horseOne, horseTwo, horseThree);

		// select a random position within the arra
	setTimeout(function(derbyRace){ 

		var pony = "";
		for (var s = 0; s< 10; s++){
			var derby = Math.random()*100;
			if (derby < 43) {
				pony += horseOne;
			} else if (derby > 43 && derby < 53) {
				pony += horseTwo
			} else {
				pony += horseThree
			} 
			console.image(pony)+console.log(sp);
		
		} //close for loop
	}, raceTimer);	
	raceTimer += 200; //close setTimeout
 
}, 3500);  // close launchAnimation

// setTimeout(function(){
// 	document.getElementById("derby").innerHTML = "🥇"
// }, 7000);


// setTimeout(function(){
// 	var winner = document.getElementById("winner");
// 	winner.innerHTML =  "🐎";
// 	winner.classList.add("horizTranslate");
// }, 8000);




function startRace(){
	var btnvalue = $(this.target).val();

	setTimeout(function(){
	document.getElementById("derby").innerHTML = "READY"
}, 0);
setTimeout(function(){
	document.getElementById("derby").innerHTML = "SET"
}, 1000);
setTimeout(function(){
	document.getElementById("derby").innerHTML = "GO!"
}, 2000);

		

	var horseTimer = 4000;

	for (var i = 0; i < 50; i++){

		setTimeout(function(){

			var running = "";
			var horse = "";
			var style = "font-size: 25px;";

			for (var a = 0; a < 100; a++) {

				var horse = Math.random()*1;

				if (horse < 0.33) {
					running += " 🐎";
				}
				else if (horse > 0.33 && horse < 0.66) {
					running += " 🏇🏻 ";
				} 
				else {
					running += " 🏇🏿 ";
				}
			}
			console.log('%c' + running, style);

		}, horseTimer);
		horseTimer += 100;
	}

		for (var a = 0; a < 2; a++) {
			setTimeout(function(){
			var winner = Math.random(1,2);

			if (winner === 1) {
			document.getElementById("derby").innerHTML = "Your Horse Won!"
			} else {
			document.getElementById("derby").innerHTML = "Your Horse lost!"
			}
		}, 10000);

};
};



// setTimeout(function(){
// 	document.getElementById("derby").innerHTML = "🥇"
// }, 7000);


// setTimeout(function(){
// 	var winner = document.getElementById("winner");
// 	winner.innerHTML =  "🐎";
// 	winner.classList.add("horizTranslate");
// }, 8000);
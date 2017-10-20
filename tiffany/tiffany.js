var css1 = "color: transparent; text-shadow: 2px 2px blue; font-size: 25px";
var css2 = "color: transparent; text-shadow: 2px 2px red; font-size: 25px";
var css3 = "color: transparent; text-shadow: 2px 2px yellow; font-size: 25px";

$(function () { 


	$('.circle').click(function() {

		

	var arrowTimer = 0;

	for (var i = 0; i < 50; i++){

		setTimeout(function(){

			var write = "";
			var style = "font-size: 25px;";

			for (var a = 0; a < 100; a++) {

				var arrow = Math.random()*1;

				if (arrow < 0.33) {
					write += " 🐎";
				}
				else if (arrow > 0.33 && arrow < 0.66) {
					write += " 🏇🏻 ";
				} 
				else {
					write += " 🏇🏿 ";
				}
			}
			console.log('%c' + write, style);

		}, arrowTimer);
		arrowTimer += 150;
	}

});
});

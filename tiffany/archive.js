var horseTimer = 0;

		for (var i = 0; i < 40; i++){

		setTimeout(function(){

			var horse = "🐎";
			var style = "";

			for (var a = 0; a < 20; a++) {

				var arrow = Math.random()*1;

				if (arrow < 0.33) {
					horse += "🐎";
					console.log('%c' + horse, css1); 
				}
				else if (arrow > 0.33 && arrow < 0.66) {
					horse += "🐎"
					style += css2;
					console.log('%c' + horse, style); 
				}
				else {
					horse += "🐎"
					style += css3;
					console.log('%c' + horse, style); 
				}
			}

		}, horseTimer);
		horseTimer += 150;
	}



$('.circle').click(function() {
		var fireTimer00 = 0;
			for (var i = 0; i < 10; i++) { 
				
				setTimeout(function(){    
					var  fire = "";
			        
			        for (var j = 0; j < 40; j++) { 

			            var fireOrspace = Math.random()*1; 

			            if (fireOrspace < .33) {
			                fire+= addFire; 
		
			                console.log('%c' + fire, css1);
			            }else if (fireOrspace > .3s && fireOrspace < .66){
			                fire += addShoot;
			 
			                console.log('%c' + fire, css2); 
			            }else {
			                fire += addFire;
		
			                console.log('%c' + fire, css3); 
			            }

			        }

			      }
			    
			    fireTimer00 += 2000; 
			}); 

	});




var fireTimer00 = 0;
			for (var i = 0; i < 10; i++) { 
				
				setTimeout(function(){    
					var  fire = "";
			       
			        for (var j = 0; j < 1; j++) { 

			            var fireOrspace = Math.random()*1; 

			            if (fireOrspace < .33) {
			                fire+= addFire; 
			                style += css1; 
			     
			            } else if (fireOrspace > .33 && fireOrspace < .66){
			                fire += addShoot;
			                style += css2;
			        
			            }else {
			                fire += addFire;
			                style += css3
			          
			            }

			        }
      				console.log('%c' + fire, style, ); 
    
			      }, fireTimer00);
			    
			    fireTimer00 += 2000; 
			}
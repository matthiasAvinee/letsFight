(function() {


    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


(function () {
			
	var coin,
		coinImage,
		canvas,
		positionJ1,
		poingImage,
		poing,
		IdPoing,
		IdBasic,
<<<<<<< HEAD
		health,
		encours,
		defenseJ2
=======
		healthJ2,
		healthJ1,
		defenseJ1,
		encours
>>>>>>> 3fe06688c7ce2a13738a5e0dea636292301a085e
		;

	function poingLoop(){

		encours=true;
		cancelAnimationFrame(IdBasic);
		cancelAnimationFrame(IdPoing);
		IdPoing=window.requestAnimationFrame(poingLoop);
		poing.update();
		poing.afficher();
		setTimeout(function(){ gameLoop(); }, 200);
	
		
	};

	function basic(){
		cancelAnimationFrame(IdPoing);
		cancelAnimationFrame(IdBasic);
		IdBasic=window.requestAnimationFrame(basic);
	  	coin.update();
    	coin.afficher();

	};

	function defenseP1(){
		cancelAnimationFrame(IdPoing);
		cancelAnimationFrame(IdBasic);
		IdBasic=window.requestAnimationFrame(basic);
	  	drawImage()

	};


	function gameLoop () {

		
		defenseJ1=false;
		encours=false;
		defenseJ2=false;
		cancelAnimationFrame(IdPoing);
		cancelAnimationFrame(IdBasic);	
	    basic();
	  
	  window.onkeydown = function(e) {
    var key = e.keyCode || e.which;


    switch (key) {


//Move J1
		case 90:
		cancelAnimationFrame(IdPoing);
		cancelAnimationFrame(IdBasic);
 		if (!encours) {
    		poingLoop();

<<<<<<< HEAD
    		if(positionJ1+35>590 && !defenseJ2){
    			let health = document.getElementById("healthJ2");
				health.value -= 10; //Or whatever you want to do with it.
=======
    		if(positionJ1+35>590){
    			let healthJ2 = document.getElementById("healthJ2");
				healthJ2.value -= 10; //Or whatever you want to do with it.
>>>>>>> 3fe06688c7ce2a13738a5e0dea636292301a085e

			}
		}
		break;

		case 81:
		cancelAnimationFrame(IdPoing);
		cancelAnimationFrame(IdBasic);
		basic();
       		if(positionJ1>0){
       			positionJ1=positionJ1-10;
    		}
		break;

       case 68:
       	cancelAnimationFrame(IdPoing);
		cancelAnimationFrame(IdBasic);
       	basic();
        	if(positionJ1<585){
        		positionJ1=positionJ1+10;

    		}
        break;

        case 83:

        break;


//move J2
    	case 39:
        //-Move right
        break;
 		case 37:
        // move left
        break;
    	case 38:
    	//move up
        break;

    	case 40:
    	//down
    	defenseJ2=true;
        break;

    	default:
        break;
    
   }

    }
  
    



};
	 
    

	
	
	function sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		
		that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;
				
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {	
                    // Go to the next frame
                    frameIndex += 1;

                } else {
                    frameIndex = 0;
                }
            }
        };
		
		that.afficher = function () {
		xposition=positionJ1;
		  // Clear the canvas
		  that.context.clearRect(0, 0, 750, that.height);
		  

		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    xposition,
		    0,
		    that.width / numberOfFrames,
		    that.height);
		};
		
		return that;
	}
	
	// Get canvas
	perso1 = document.getElementById("coinAnimation");
	boite = document.getElementById("boite");

	

	
	
	positionJ1 = 0;
	perso1.width=750;
	perso1.height=90;
	
	// Create sprite sheet
	coinImage = new Image();	
	poingImage= new Image();
	boiteImage= new Image();
	

	// Create sprite
	coin = sprite({
		context: perso1.getContext("2d"),
		width: 300,
		height: 100,
		image: coinImage,
		numberOfFrames: 5,
		ticksPerFrame: 5
	});

	poing = sprite({
		context: perso1.getContext("2d"),
		width: 200,
		height: 100,
		image: poingImage,
		numberOfFrames: 3,
		ticksPerFrame: 5
	});

	
	// Load sprite sheet
	coinImage.addEventListener("load", gameLoop);
	coinImage.src = "../sprite/test.png";


	poingImage.addEventListener("switch",poingLoop);
	poingImage.src="../sprite/coupdepoing.png";

	defenseImage.addEventListener("switch",defenseLoop);
	defenseImage.src="../sprite/defence.png"


	boiteImage.addEventListener("load",function() {

    var ctx=boite.getContext("2d");
    ctx.drawImage(boiteImage,50,50,10,50,250,40,10,10,0);



 		
})
	boiteImage.src="../sprite/boite.jpg";




} ());



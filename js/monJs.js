(function() {
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	// MIT license

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
		position,
		poingImage,
		poing,
		IdPoing,
		IdBasic
		;

	function poingLoop(){
		cancelAnimationFrame(IdBasic);
		cancelAnimationFrame(IdPoing);
		IdPoing=window.requestAnimationFrame(poingLoop);
		poing.update();
		poing.afficher();	
	};

	function basic(){
		cancelAnimationFrame(IdPoing);
		cancelAnimationFrame(IdBasic);
		IdBasic=window.requestAnimationFrame(basic);
	  	coin.update();
    	coin.afficher();

	};


	function gameLoop () {
	  basic();
	  
	  window.onkeydown = function(e) {
    var key = e.keyCode || e.which;

    switch (key) {
        case 37:
        basic();
        if(position>0){
        position=position-10;
        
    } 
        break;
    case 39:
        //-Move right
        basic();
        if(position<700){
        position=position+10;

    }
        break;
    case 38:
    	poingLoop();

        break;
   
    case 40:
    	
        
        break;

    default:
    
		
        break;

     
    }

};
	 
    

	}
	
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
		xposition=position;
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
	
	position = 0;
	perso1.width=750;
	perso1.height=90;
	// Create sprite sheet
	coinImage = new Image();	
	poingImage= new Image();

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


} ());



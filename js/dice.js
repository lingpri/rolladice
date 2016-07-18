 define(function () {

    var x = 10;
    var y = 10;
    var rectWidth = 60;
    var rectHeight = 60;


    return {

    	rollit : function() {

    		var canvas = document.getElementById('dice');
	        var ctx = canvas.getContext('2d');

	        var d1 = Math.floor(Math.random() * 6) + 1;

	        var middle = [1,5,3];
	        var top_left = [4,5,6];
	        var top_right_bottom_left = [2,3,4,5,6];
	        var middle_left_right = [6];
	        var bottom_right = [4,5,6];

    		function makeDots(d1)  {

    			console.log("rolling number:"+d1);

    			var circle = new Path2D();

    			if(middle.indexOf(d1) != -1) {

    				drawMiddle();

    			}
    			if(top_left.indexOf(d1) != -1) {

    				drawTopLeft();

    			}
    			if(top_right_bottom_left.indexOf(d1) != -1) {

    				drawTopRight();
    				drawBottomLeft();

    			}
    			if(middle_left_right.indexOf(d1) != -1) {

    				drawMiddleLeft();
    				drawMiddleRight();
    				
    			}
    			if(bottom_right.indexOf(d1) != -1) {

    				drawBottomRight();
    				
    			}

    			function drawMiddle() {

    				 //middle circle
				    circle.moveTo(40,40);
				    circle.arc(40,40,5,0,Math.PI*2,true);
				    ctx.fill(circle);

    			}

    			function drawTopLeft() {

    				 //top left circle
				    circle.moveTo(20,25);
				    circle.arc(20,25,5,0,Math.PI*2,true); 
				     ctx.fill(circle);

    			}

    			function drawTopRight() {

    				//top right circle
				    //
				    circle.moveTo(60,25);
				    circle.arc(60,25,5,0,Math.PI*2,true);
				     ctx.fill(circle);

    			}

    			function drawMiddleLeft() {

    				 //middle left circle
				    circle.moveTo(20,40);
				    circle.arc(20,40,5,0,Math.PI*2,true); 
				     ctx.fill(circle);

    			}

    			function drawMiddleRight() {

    				 //middle right circle
				     circle.moveTo(60,40);
				     circle.arc(60,40,5,0,Math.PI*2,true); 
				      ctx.fill(circle);

    			}

    			function drawBottomLeft() {

    				 //bottom left circle
				    //
				    circle.moveTo(20,55);
    				circle.arc(20,55,5,0,Math.PI*2,true);
    				ctx.fill(circle);


    			}

    			function drawBottomRight() {

    				circle.moveTo(65,55);
				    circle.arc(60,55,5,0,Math.PI*2,true); 
				    ctx.fill(circle);

    			}
				
			}

			if (canvas.getContext) {
				makeDots(d1);
			}	

    	},

	    create : function (x,y,width,height) {
	        var dice = Object.create(this);
	        dice.x = x || this.x;
	        dice.y = y || this.y;
	        dice.rectWidth = width || this.rectwidth;
	        dice.rectHeight = height || this.rectHeight;

	        var canvas = document.getElementById('dice');
	        var ctx = canvas.getContext('2d');

	        function makeRectangle() {
					
					if (canvas.getContext){
						    
						    var rectangle = new Path2D();
						    rectangle.rect(dice.x,dice.y, 60,60);
						    ctx.stroke(rectangle);
					}
					  
			}
			
	        makeRectangle();
	        
 
	    }

   };
       
}());
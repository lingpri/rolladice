 define(function () {

    var x = 10;
    var y = 10;
    var rectWidth = 60;
    var rectHeight = 60;


    return {

	    create : function (x,y,width,height) {
	        var dice = Object.create(this);
	        dice.x = x || this.x;
	        dice.y = y || this.y;
	        dice.rectWidth = width || this.rectwidth;
	        dice.rectHeight = height || this.rectHeight;

	        function makeRectangle() {
					 				 
					var canvas = document.getElementById('dice');
					if (canvas.getContext){
						    var ctx = canvas.getContext('2d');
						    var rectangle = new Path2D();
						    rectangle.rect(dice.x,dice.y, 60,60);
						    ctx.stroke(rectangle);
					}
					  
			}
	        makeRectangle();
 
	    }

   };
       
}());
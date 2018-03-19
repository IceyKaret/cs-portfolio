
var sketch = function(processing) {with(processing) {size(1318, 1000);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var rectSize = 10

draw = function() {



position = function( x, y){

x = x + 100;

fill(152, 255, 152)
strokeWeight(3)
stroke()
ellipse(x - 100, y - 50, 140, 140)
fill(245, 222, 179)
triangle( x - 150, y, x - 100, y + 200, x - 50, y)
stroke()
triangle( x - 125, y + 100, x - 100, y + 200, x - 50, y)
fill(101,67,33)
noStroke()
rect( x - 60, y - 50, rectSize, rectSize)
rect( x - 100, y - 35, rectSize, rectSize)
rect( x - 140, y - 70, rectSize, rectSize)
rect( x - 120, y - 100, rectSize, rectSize)
rect( x - 100, y - 65, rectSize, rectSize)
rect( x - 80, y - 90, rectSize, rectSize)
rect( x - 140, y - 40, rectSize, rectSize)


    }
    

    mouseClicked = function(){
        position( mouseX, mouseY)
    }
}

}};var p = new Processing(document.getElementById("output-canvas"), sketch);

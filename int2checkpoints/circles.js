
var sketch = function(processing) {with(processing) {size(10000, 900);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;

var xPos2 = 900;

var yPos = 0;

var yPos2 = 900;

    strokeWeight(1)
    stroke(0,200,200)
    fill(0,200,200)
    ellipse (100,250,2000,2000)
    
    strokeWeight(1)
    stroke(200,75,0)
    fill(200,75,0)
    ellipse (100,250,1500,1500)
    
    strokeWeight(1)
    stroke(200,75,0)
    fill(200,200,0)
    ellipse (100,250,1000,1000)
    
    strokeWeight(1)
    stroke(255,255,255)
    fill(255,255,255)
    ellipse (100,250,500,500)

draw = function() {
  
    strokeWeight(2);
    stroke(0,0,0)
    fill(100,100,100)
    ellipse(xPos, yPos, 100, 100);
    xPos=xPos+20;
    yPos=yPos+20;
    
    strokeWeight(0);
    stroke(50, 50, 50)
    fill(50,50,50)
    ellipse(xPos+160, yPos+45, 100, 100);

    strokeWeight(2);
    stroke(20,20,20)
    fill(50,50,50)
    ellipse(xPos+150, yPos+30, 100, 100);
    xPos=xPos+150;
    yPos=yPos+20;
    
   
    
   
    

    
 
};    

}};var p = new Processing(document.getElementById("output-canvas"), sketch);


var sketch = function(processing) {with(processing) {size(660, 1000);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(30,50,100);



draw = function() {
   
   noStroke();
   
   
   for(var i = 0; i < width; i+=100){
       for(var j = 0; j < height; j+=100){
           var size = random(75);
           fill(random(0), random(225) , random(255))
           ellipse(i, j, size, size)
       }
   
   ellipse ( mouseX, mouseY, size, size);
   
   }

   
};    



}};var p = new Processing(document.getElementById("output-canvas"), sketch);

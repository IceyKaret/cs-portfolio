
var sketch = function(processing) {with(processing) {size(660, 1000);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var myArr = []; //The array (Place where information is stored).

var rgbRed = 255; // Creates the variable "rgbRed".

var rgbGreen = 255; // Creates the variable "rgbGreen".

var rgbBlue = 255; // Creates the variable "rgbBlue".

var shape = rect; // Creates the variable shape and specifies for it to default as rect.

var shapePos = 10; // Creates the variable "shapePos".

var size = 20; // Creates the variable "size".

var barrier = 40; // Creates the variable "barrier".

draw = function() { 
    
    background(); // Constantly resets the background so that the mouse does not leave a trail of rectangles.
    
   
    for(var i = 0; i < 1; i++){ //Generates the "buttons" on the side and the dividing line.
    
        line(40, 0, 40, 1000); // Creates part of the outline for the drawing area.
        
        fill(255, 0, 0); // Sets the colors of the buttons.
        
        rect(1, 10, 30, 30);
        
        fill(0, 255, 0);
        
        rect(1, 40, 30, 30);
        
        fill(0, 0, 255);
        
        rect(1, 70, 30, 30);
        
        line(-10, 165, 40, 165);
        
        fill(255);
        
        rect(1, 100, 30, 30);
        
        fill(0);
        
        ellipse(16, 210, 30, 30);
        
        rect(1, 240, 30, 30);
        
        line(-10, 310, 40, 310);
        
        rect(1, 350, 30, 10);
        
        rect(11, 340, 10, 30);
        
        rect(1, 390, 30, 10);
        
        line(-10, 440, 40, 440);
       
        line(659, 0, 659, 1000);
        
    };
    
     fill(rgbRed, rgbGreen, rgbBlue); // Sets the color of the onscreen items to the specified rgb values.
    
     if (mouseX > barrier){ // Specifies that for the codeblock to run the mouse must be within the drawing area a.k.a. the greater than 40-50 x.
    
   
     shape (mouseX - shapePos, mouseY - shapePos, size, size);  // Constantly creates rectangles based on the mouse's x and y values that are later celted through the background() command.
     
    };
    
    for(var i = 0; i < myArr.length; i++){ // As long as the ("infinite" based off of the myArr length) loop goes on this creates shapes based off of x, y, size, and shape variables pushed to the array..
    
       fill(myArr[i].r, myArr[i].g, myArr[i].b);
       myArr[i].sh(myArr[i].x, myArr[i].y, myArr[i].s, myArr[i].s );
       
    };
    

};

  function arrayPush() { // Creates the arrayPush function.
               
    myArr.push( {x: mouseX - shapePos, y: mouseY - shapePos, r: rgbRed, g: rgbGreen, b: rgbBlue, s: size, sh: shape}); // Codeblock of the arrayPush function (runs when the arrayPush function is called.)
    
   };

mouseClicked = function(){ // Sends the x and y coordinates of the mouse to the array when the mouse is clicked.
    
    if (mouseX > barrier + 10){ // Specifies that the mouse must be within the drawing area to send the x and y coordinates of the mouse to the array.
   
   arrayPush() // Runs the arrayPush function.
   
    };
    
      if (mouseX >= 1 && mouseX <= 30 && mouseY >= 10 && mouseY <= 40){ // Creates the button parameters for the color red.
        rgbRed = 255; // Specifies the variable rgbRed if the mouse is within a certain area as definied by the x and y values in the if statement. This is the same for rgbGreen and rgbBlue as well.
        rgbGreen = 0;
        rgbBlue = 0;
        
    };
    
      if (mouseX >= 1 && mouseX <= 30 && mouseY >= 40 && mouseY <= 70){ // Creates the button parameters for the color green.
        rgbRed = 0;
        rgbGreen = 255;
        rgbBlue = 0;
    
      };
        
        if (mouseX >= 1 && mouseX <= 30 && mouseY >= 70 && mouseY <= 100){ // Creates the button parameters for the color blue.
        rgbRed = 0;
        rgbGreen = 0;
        rgbBlue = 255;
        
    };
    
        if (mouseX >= 1 && mouseX <= 30 && mouseY >= 100 && mouseY <= 130){ // Creates the button parameters for the color white.
        rgbRed = 255;
        rgbGreen = 255;
        rgbBlue = 255;
        
    };
    
        if (mouseX >= 1 && mouseX <= 30 && mouseY >= 195 && mouseY <= 225){ // Creates the button parameters for the circle button.
        
        shape = ellipse; // Sets the variable "shape" to ellipse.
        
        shapePos = 0; // Sets the variable "shapePos" to 0.
        
    };
        if (mouseX >= 1 && mouseX <= 30 && mouseY >= 240 && mouseY <= 270){ // Creates the button parameters for the rectangle button.
        
        shape = rect;
        
        shapePos = 10;
        
    };
    
        if (mouseX >= 1 && mouseX <= 30 && mouseY >= 350 && mouseY <= 380){ // Creates the button parameters for the plus size button.
            
        size += 5 // Adds 5 to the variable "size".
        
        shapePos += 2.5 // Adds 2.5 to the variable "shapePos".
        
        barrier += 5 // Adds 5 to the variable "barrier".
            
        };
        
        if (mouseX >= 1 && mouseX <= 30 && mouseY >= 390 && mouseY <= 400){ // Creates the button parameters for the plus size button.
            
        size -= 5
        
        shapePos -= 2.5
        
        barrier -= 5
            
        };


};

mouseDragged = function(){ // Sends the x and y coordinates of the mouse to the array as long as the mouse button is dragged.
    
    if (mouseX > barrier + 10){ // Specifies that the mouse must be within the drawing area to send the x and y coordinates of the mouse to the array.

    arrayPush() // Runs the arrayPush function.

    };
 
};

}};var p = new Processing(document.getElementById("output-canvas"), sketch);

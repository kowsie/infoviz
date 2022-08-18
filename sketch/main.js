function setup() {
    createCanvas(430, 430);
  }
  
  function draw() {
    background(255,255,255);
   noStroke();
   fill(0);
     fill(0,map(mouseX,0,width,255,0));
     ellipse(map(mouseX,190,-150,width,0),63,124,124);
    ellipse(map(mouseX,0,width,110,-110),143,182,182);
    fill(255);
    fill(255,255,255);
    //rect(36,48,165,146);
    rectMode(CORNER);
    rect(map(mouseX, 0, width, 36, 40), 
         map(mouseX, 0, width, 48, 10), 
         map(mouseX, 0, width, 165, 165*2), 
         map(mouseX, 0, width, 146, 146*2));
     fill(0,map(mouseX,0,width,255,0));
     ellipse(map(mouseY,0,width,40,-34),50,57,57);
    fill(255);
    
    //34,50,17,19
  //rect(map(mouseX,355,-34.5,width,0),50,17,19);
    rectMode(CENTER);
    rect(44,58, 
          
         map(mouseX, 0, width, 17, 19), 
         map(mouseX, 0, width, 19, 19),
         map(mouseX, 0, width, 0, 19));
    fill(0,map(mouseX,0,width,255,0));
     //ellipse(map(mouseX,0,width,326,-326),100,78,78);
     ellipse(CENTER);
    ellipse(326,100,
          map(mouseX, 0, width, 78, 0), 
         map(mouseX, 0, width, 78, 0),
         map(mouseX, 0, width, 0, 78));
    fill(0,map(mouseX,0,width,255,0));
     ellipse(map(mouseX,0,width,294,-294),60,46,46);
    fill(255,255,255);
    //(287,60,36,38)
    rect(map(mouseX,144,-347,width,0),80,36,38);
    fill(0,map(mouseX,0,width,255,0));
     //ellipse(map(mouseX,0,width,390,-390),82,38,38);
     ellipse(CENTER);
    ellipse(390,82,
          
         map(mouseX, 0, width, 38, 0), 
         map(mouseX, 0, width, 38, 0),
         map(mouseX, 0, width, 0, 38));
    
    fill(255);
    square(map(mouseX,30,-380,width,0)+random(2),70+random(2),22);
    fill(0,map(mouseX,0,width,255,0));
    
     ellipse(map(mouseX,0,width,46,-46)+random(2),384+random(2),42,42);
     fill(0,map(mouseX,0,width,255,0));
     ellipse(map(mouseX,380,-75,width,0),360,42,42);
    fill(255,255,255);
    rect(map(mouseX,368,-51,width,0),372,32,28);
    fill(0,map(mouseX,0,width,255,0));
     //ellipse(200,285,108,108);
    
    fill(0,map(mouseX,0,width,255,0));
    ellipse(CENTER);
    ellipse(200,285,
          
         map(mouseX, 0, width, 108, 0), 
         map(mouseX, 0, width, 108, 0),
         map(mouseX, 0, width, 0, 108));
      
     //ellipse(235,350,111,111);
    ellipse(CENTER);
    ellipse(235,350,
          
         map(mouseX, 0, width, 111, 0), 
         map(mouseX, 0, width, 111, 0),
         map(mouseX, 0, width, 0, 111));
      
    fill(255,255,255);
    //rect(220,340,89,85);
    
      
    rectMode(CORNER);
    rect(map(mouseX, 0, width, 176, 40), 
         map(mouseX, 0, width, 298, 10), 
         map(mouseX, 0, width, 89, 89*2), 
         map(mouseX, 0, width, 85, 85*2));
  fill(0,map(mouseX,0,width,255,0));
     //ellipse(366,360,138,138);
   ellipse(CENTER);
    ellipse(366,360,
          
         map(mouseX, 0, width, 138, 0), 
         map(mouseX, 0, width, 138, 0),
         map(mouseX, 0, width, 0, 138));
    
     fill(255,255,255);
    rect(320,317,110,121);
    fill(0,map(mouseX,0,width,255,0));
     ellipse(290,262,78,78);
    fill(0,map(mouseX,0,width,255,0));
     ellipse(264,218,61,61);
    
     fill(255,255,255);
    //rect(251,208,55,55);
    rectMode(CENTER);
    rect(275,234,
         map(mouseX, 0, width, 55, 0), 
         map(mouseX, 0, width, 55, 0), 
         map(mouseX, 0, width, 0, 55)); 
   fill(0,map(mouseX,0,width,255,0));
     //ellipse(320,194,20,20);
    ellipse(CENTER);
    ellipse(320,194,
          
         map(mouseX, 0, width, 20, 0), 
         map(mouseX, 0, width, 20, 0),
         map(mouseX, 0, width, 0, 20));
    fill(255,255,255);
    rect(325+random(2),188+random(2),14,16);
    fill(0,map(mouseX,0,width,255,0));
     //ellipse(368,216,39,39);
    ellipse(CENTER);
    ellipse(368,216,
          
         map(mouseX, 0, width, 39, 0), 
         map(mouseX, 0, width, 39, 0),
         map(mouseX, 0, width, 0, 39));
    fill(0,map(mouseX,0,width,255,0));
     ellipse(CENTER);
    ellipse(381,194,
          
         map(mouseX, 0, width, 31, 0), 
         map(mouseX, 0, width, 31, 0),
         map(mouseX, 0, width, 0, 31));
     //ellipse(381,194,31,31);
    fill(255,255,255);
    rect(374,206,28,28);
  
        
  }
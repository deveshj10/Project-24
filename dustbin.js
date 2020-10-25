class Dustbin {
    
      constructor(x,y,width,height) { 
        var options = { isStatic:true, 
          'friction':0.3, 
          'density':1.0 ,
          }; 

    this.bodybottom = Bodies.rectangle(400,590, 10, 20, options);
   this.width1 = 180; 
   this.height1 = 20;

    this.bodyleft = Bodies.rectangle(300, 540, 20, 100, options);
  this.width2 = 20;
  this.height2 = 100;

   this.bodyright = Bodies.rectangle(500, 540, 20, 100, options);
     this.width3 = 20;
    this.height3 = 100;

   this.color="red";
   
    World.add(world, this.bodybottom); 
   World.add(world, this.bodyleft);
 World.add(world, this.bodyright); }
    
    
    display(){
      var pos1 =this.bodybottom.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos1.x, pos1.y, this.width1, this.height1);
     
      var pos2 =this.bodyleft.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos2.x, pos2.y, this.width2, this.height2);
      
      var pos3 =this.bodyright.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos3.x, pos3.y, this.width3, this.height3);
    
  }
}
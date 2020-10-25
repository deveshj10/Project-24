class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0.3,
         friction:1.0,
          density:1.5
      }
      this.body = Bodies.circle(x,y,r,options);
      
      World.add(world, this.body);
    }
    display(){
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(this.body.position.x, this.body.position.y,this.body.radius);
      
    }

    
  };
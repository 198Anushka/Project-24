class Dustbin{
    constructor() {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.bottomBody = Bodies.rectangle(50, 65, 200,10, options);
        this.leftBody = Bodies.rectangle(30,67,20,100,options);
        this.rightBody =  Bodies.rectangle(100,70,20,100,options);
        this.bw=200;
        this.bh=10;
        this.lw=20;
        this.lh=100;
        this.rw=20;
        this.rh=100;
      //  this.bx=
        
    
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
      }
      display(){
        var angle = this.bottomBody.angle;
        push();
        translate(this.bottomBody.position.x, this.bottomBody.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.bw, this.bh);
        pop();
        var angle = this.leftBody.angle;
        push();
        translate(this.leftBody.position.x, this.leftBody.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.lw, this.lh);
        pop();
        var angle = this.rightBody.angle;
        push();
        translate(this.rightBody.position.x, this.rightBody.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.rw, this.rh);
        pop();
      }
}
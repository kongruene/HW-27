class Rope{
    constructor(bodyA, bodyB, XO){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:XO, y:0},
            stiffness: 0.04,
            length: 200
        }
       // this.pointB = pointB
       this.c = XO;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);

      
    }
    display(){
            var A = this.sling.bodyA.position;
           // var pointB = this.pointB;
            var B = this.sling.bodyB.position;
            strokeWeight(7);
            stroke(84, 39, 15);
            line(A.x, A.y, B.x+this.c, B.y);
    }

}
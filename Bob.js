class Bob{
    constructor(x, y, r){
        
        var options={
            isStatic:false,
            restitution:0.08,
            density:1
        }
        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.r = 2*r;
        World.add(world, this.body);
    }
    display(){
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
    }
}
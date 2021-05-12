
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1, b2, b3, b4;
var engine, world, ground, r1, r2, r3, r4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;
	b1 = new Bob(320, 300, 40);
	b2 = new Bob(360, 300, 40);
	b3 = new Bob(400, 300, 40);
	b4 = new Bob(440, 300, 40);
	ground = new Ground(400, 150, 400, 30)

	//Create the Bodies Here.
r1 = new Rope(b1.body, ground.body, -80)
r2 = new Rope(b2.body, ground.body, -40)
r3 = new Rope(b3.body, ground.body, 40)
r4 = new Rope(b4.body, ground.body, 80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  ground.display();
  drawSprites();
 r1.display();
 r2.display();
 r3.display();
 r4.display();



}

 function keyPressed(){
 	if(keyCode === UP_ARROW){
 	   Matter.Body.applyForce(b1.body,b1.body.position,{x:-400, y:-400});
	   }
    }

//function keyPressed() { if (keyCode === UP_ARROW) { Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45}); } }
	








const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var papO;


function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);

	papO = new Paper(200, 600, 40)

	
  
}


function draw() {

	Engine.update(engine);
  rectMode(CENTER);
  background(230);
  papO.display();
 

  groundObject.display();
  dustbinObj.display();

  

}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(papO.body, papO.body.position,{x: 135, y: -135})
	}
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(100,100,50,50);

	Engine.run(engine);
  
}
function keyPressed(){

if(keyCode === UP_ARROW) {

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
}
}

function draw() {
  rectMode(CENTER);
  background(0);
  paper.display;
  drawSprites();
 
}




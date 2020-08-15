
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var box1,box2,box3;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	paper = new Paper(100,550);

	ground = new Ground(400,650,800,20);

	box1 = new Trash(640,630,200,20);
	box2 = new Trash(540,590,20,100);
	box3 = new Trash(740,590,20,100);


	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:105,y:-205});
	 
  
	}

}



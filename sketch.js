
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var box1 = createSprite(790,200,400,400);
	var box2 = createSprite(500,200,400,400);
	var box3 = createSprite(650,200,400,400);
	var box4 = createSprite(230,200,400,400);
	var box5 = createSprite(440,200,400,400);
    
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  
  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup()
{
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;


	roof = new Roof(500,100,400,30);

	ball1 = new Ball(350,300,50,50);

	rope1 = new Rope(ball1.body,{x : 350, y : 100})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  roof.display();
  drawSprites();



  
  rope1.display();	

  ball1.display();

  fill("red");
  textSize(30)
  text("x : "+mouseX+" y : "+mouseY,mouseX,mouseY)
 
}




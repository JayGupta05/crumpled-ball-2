var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1,rect2;
var paper,dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 //World.add(world, ground);
	fill("red");
	paper = new Paper(100,300);
	
	dustbin = new Dustbin(400,670);
	
	ground = new Ground(400,690,800,20);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(225);
	
	paper.display();
  	dustbin.display();
  	ground.display();
  
  	drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45})
	}
}




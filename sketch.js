
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper1;

var dustbin1;

var ground1;



function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;
	paper1 = new Paper(200,450,70);
	dustbin1 = new dustbin(1090,660,20,100);
	ground1 = new Ground(800,680,1600,20);
	
	  
}


function draw() {
	
	background("white");
    Engine.update(engine);
	paper1.display();
	ground1.display();	
	dustbin1.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:280,y:-280});
  
	}
}
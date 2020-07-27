var ground,bin1,bin2,bin3,paperObject,bin,dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	bin = loadImage('sprites/dustbingreen.png');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperObject = new paper(400,600,40);

	ground = createSprite(400,680,800,20);
	ground.shapeColor = "white";
	
	//bin1 = createSprite(675,635,20,75);
	//bin1.shapeColor = "green";
	

	//bin2 = createSprite(790,635,20,75);
	//bin2.shapeColor = "green";
	

	//bin3 = createSprite(735,660,125,20);
	//bin3.shapeColor = "green";
	dustbin = createSprite(730,620,10,10);
	dustbin.addImage('dustbingreen.png',bin);
	dustbin.scale = 0.4;

	var render = Render.create({ 
		element: document.body,
		 engine: engine,
		  options: { 
			  width: 1200, 
			  height: 700,
			  wireframes: false 
			} }); 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  
  drawSprites();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		//Matter.Body.setStatic(paperObject, false);
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:200,y:-200});
	}
}



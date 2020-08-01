var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodives;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	var ground_options ={
        isStatic: true
	}
	ground = Bodies.rectangle(200,390,200,20,ground_options);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:false} );
 	World.add(world, ground);

	 console.log(ground);
	
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
 // if(package.isTouching+)
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Engine.run(engine);
  }
}





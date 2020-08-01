var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var left_side, bottom_side, right_side;
var left_sprite, bottom_sprite, right_sprite;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
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
	groundSprite.shapeColor=color(255);
	

	left_sprite=createSprite((width/2)-125, (height-135)+60, 10,width/12);
	left_sprite.shapeColor=color(255,0,0);

	right_sprite=createSprite((width/2)+100, (height-135)+60, 10,width/12);
	right_sprite.shapeColor=color(255,0,0);

	bottom_sprite=createSprite((width/2)-6, 600+60, 225,10);
	bottom_sprite.shapeColor=color(255,0,0);



	engine = Engine.create();
	world = engine.world;
	var ground_options ={
        isStatic: true
	}

	ground = Bodies.rectangle(200,390,200,20,ground_options);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	console.log(ground);
	left_side = Bodies.rectangle((width/2)-125, (height-135)+60, 10,width/12 , {isStatic:true} );
	bottom_side = Bodies.rectangle(width/2-12, 600+60, width, 10 , {isStatic:true} );
	right_side = Bodies.rectangle((width/2)+100, (height-135)+60, 10,width/12 , {isStatic:true} );
	World.add(world, left_side);
	World.add(world, bottom_side);
	World.add(world, right_side);

}
//

function draw() {
  //rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  left_sprite.x= left_side.position.x ;
  left_sprite.y= left_side.position.y ;

  bottom_sprite.x= bottom_side.position.x ;
  bottom_sprite.y= bottom_side.position.y ;
  //bottom_sprite.y= bottom


  right_sprite.x= right_side.position.x ;
  right_sprite.y= right_side.position.y ;


  drawSprites();
}


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Engine.run(engine);
	//Engine.update(engine);
	fill(255,105,180);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
	ellipseMode(RADIUS);
	
	ellipse(packageBody.position.x, packageBody.position.y,10,10)
	packageSprite.x= packageBody.position.x ;
    packageSprite.y= packageBody.position.y ;
  }
}




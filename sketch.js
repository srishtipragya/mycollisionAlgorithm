var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  
  gameObject1=createSprite(100,100,50,100);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(300,100,50,100);
  gameObject2.shapeColor="green";
  gameObject3=createSprite(500,100,50,100);
  gameObject3.shapeColor="green";
  gameObject4=createSprite(700,100,50,100);
  gameObject4.shapeColor="green";

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameObject1,movingRect)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  drawSprites();
}


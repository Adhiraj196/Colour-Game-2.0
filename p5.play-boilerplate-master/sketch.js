var Kree
var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 50);
 Kree = createSprite(0,100,50,70)
 movingRect = createSprite(500, 130, 25, 25);
 fixedRect.shapeColor = "black"
 movingRect.shapeColor = "green"
}
function draw() {
  background('gold'); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if (isTouching(movingRect,fixedRect)){
    movingRect.shapeColor ="pink"
    fixedRect.shapeColor ="red"
  }
  else{
    movingRect.shapeColor ="maroon"
    fixedRect.shapeColor ="white"
  }
  if (isTouching(movingRect,Kree)){
    movingRect.shapeColor ="pink"
    Kree.shapeColor ="red"
  }
  else{
    movingRect.shapeColor ="maroon"
    Kree.shapeColor ="white"
  }
  drawSprites();
}

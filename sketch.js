var movingRect
var fixedRect


function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400,200,50,40)
  movingRect.shapeColor="green"

  fixedRect=createSprite(200,100,30,30)
  fixedRect.shapeColor="green"

}

function draw() {
  background("silver"); 
  movingRect.y=World.mouseY
  movingRect.x=World.mouseX 
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
     fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
     movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
     fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){

    movingRect.shapeColor="red"
    fixedRect.shapeColour="red"
  }
  else{
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green"
  }
  drawSprites();
}
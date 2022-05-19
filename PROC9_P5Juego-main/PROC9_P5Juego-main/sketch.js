var caja; 

function setup() {
  createCanvas(400,400); 
  caja = createSprite(200,200,20,20);
}

function draw() 
{
  background("white");


if (keyIsDown(UP_ARROW)){
  caja.y -= 1;
  background("green");
}
if (keyIsDown(DOWN_ARROW)){
  caja.y += 1;
  background("pink");
}
if (keyIsDown(LEFT_ARROW)){
  caja.x -= 1;
  background("blue");
}
if (keyIsDown(RIGHT_ARROW)){
  caja.x += 1; 
  background("purple");
}

  drawSprites()
}





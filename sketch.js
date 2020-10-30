var fixedrect ,movingrect;
function setup() {

  createCanvas(800,400);
fixedrect =createSprite(400,100,50,80);
movingrect =createSprite(400,350,80,50);
  movingrect.velocityY =-5;
  fixedrect.velocityY =5;
  movingrect.shapeColor="orange"
  fixedrect.shapeColor="red"

}

function draw() {
background(0); 


if (movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&
  fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2){
movingrect.velocityX=movingrect.velocityX*(-1);
fixedrect.velocityX=fixedrect.velocityX*(-1);
  } 
if (movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2&&
fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
  movingrect.velocityY=movingrect.velocityY*(-1);
  fixedrect.velocityY=fixedrect.velocityY*(-1);
}
drawSprites();

}
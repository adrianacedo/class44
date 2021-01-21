var ball
function preload(){
  marioimg = loadAnimation("mario1.png","mario2.png","mario3.png")
  groundimg = loadImage("ground-removebg-preview.png");
  bgimg = loadImage("mariobg.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
   ball = createSprite(50, height-200,20,20);
  ball.addAnimation("mario",marioimg);
  ball.scale = 2.5;
  ground = createSprite(width/2,height-80,width,20)
  ground.visible = false;
}

function draw() {
  background(bgimg);
  if(keyDown("space")){
    ball.velocityY = -6
  }
  console.log(ground.height)
  ball.velocityY =ball.velocityY+0.8
  ground.velocityX = -3;
  if(ground.x<50){
    ground.x = ground.width/2;
  } 
  ball.collide(ground)
  spawnenemy();
  drawSprites();
}
function spawnenemy(){
  if(frameCount % 100===0){
enemy = createSprite(width,height-200,20,60);
enemy.velocityX =-4
}
}
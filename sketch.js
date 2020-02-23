var sun, earth, mars,phase1,phase2;
var sunimg, earthimg, marsimg;
var radius;

function preload(){
  sunimg = loadImage("sprites/Sun.png");
  earthimg = loadImage("sprites/Earth.png");
  marsimg = loadImage("sprites/Mars.png");
}

function setup() {
  createCanvas(1000,800);
  earth = createSprite(400,400,50,50);
  earth.addImage("earth",earthimg);
  mars = createSprite(300,400,50,50);
  mars.addImage("mars",marsimg);
  sun = createSprite(600, 400, 50, 50);
  sun.addImage("sun",sunimg);
  sun.scale = 2;
  
  earth.velocityY = 3;
  mars.velocityY = 1;

  sun.setCollider("circle",0,0,13);
  earth.setCollider("circle",0,0,10);
  mars.setCollider("circle",0,0,10);
}

function draw() {
  background(0); 
  move(earth,600,800,300,400); 
  move(mars,700,900,100,300);

  if (frameCount % 2 === 0){
    sun.scale = sun.scale + 0.1;
  }

  Sunistoohot(sun,earth);
  Sunistoohot(sun,mars);

  earth.debug = true;
  mars.debug = true;
  sun.debug = true;
  drawSprites();
}

function move(sprite,y1,x1,y2,x2){
  if(sprite.y > y1){
    sprite.velocityY = 0;
    sprite.velocityX = 3;
    sprite.y = y1;
  }
  else if (sprite.x > x1){
    sprite.velocityX = 0;
    sprite.velocityY = -3;
    sprite.x = x1;
  }
  else if (sprite.y < y2){
    sprite.velocityY = 0;
    sprite.velocityX = -3;
    sprite.y = y2;
  }
  else if (sprite.x < x2){
    sprite.velocityX = 0;
    sprite.velocityY = 3;
    sprite.x = x2;
  }
  
}

function Sunistoohot(body,destroyed){
  if(body.isTouching(destroyed)){
    destroyed.destroy();
  }
}
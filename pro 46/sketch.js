var player,plr_img
var enemy,eimg
var health,himg
var health2,health3


function preload(){
  plr_img=loadImage("aeroplane.jpg")
  eimg=loadImage("alien1.png")
  himg=loadImage("life.png")
  
}



function setup() {
  createCanvas(600, 600);
  
  player=createSprite(300,560)
  player.addImage(plr_img)
  player.scale=0.5
  
  health1=createSprite(10,20)
  health1.addImage(himg)
  health1.scale=0.1

  health2=createSprite(50,20)
  health2.addImage(himg)
  health2.scale=0.1

  health3=createSprite(90,20)
  health3.addImage(himg)
  health3.scale=0.1


}

function draw() {
  background(0);
  
  drawSprites();
  spawnEnemy();
  
  if(keyWentDown("left")){
    player.velocityX=-5
  }
  if(keyWentUp("left")){
    player.velocityX=0
  }
  if(keyWentDown("right")){
    player.velocityX=+5
  }
  if(keyWentUp("right")){
    player.velocityX=0
  }
  
}

function spawnEnemy(){
  if(frameCount%100===0){
    enemy=createSprite(random(50,550))
    enemy.addImage(eimg)
    enemy.scale=0.09
    enemy.velocityY=3
  }
  
}
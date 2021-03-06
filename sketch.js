var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var Play = 1
var gameState = Play
var end = 0



function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(250,300,30,30)
  ghost.addImage ("ghost", ghostImg)
  ghost.scale = 0.4
  doorsGroup = new Group ()
climbersGroup = new Group ()
invisibleBlock = new Group ()
}

function draw() {
  background(200);
  if (gameState === Play){
    if(tower.y > 400){
      tower.y = 300
    }
    drawSprites ()

if (keyDown("space")){
  ghost.velocityY = -9
}
ghost.velocityY = ghost.velocityY + 0.6

if (keyDown ("right_arrow")){
  ghost.x = ghost.x + 3
}

if (keyDown ("left_arrow")){
  ghost.x = ghost.x - 3
}
Climber ()
}




else if (gameState === end){

}

}
  


function Climber(){
if (frameCount% 240 === 0){
  var door = createSprite (200,-50)
  var climber = createSprite (200,10)
  var invisibleBlock = createSprite (200,15)
  invisibleBlock.width = climber.width
  invisibleBlock.height = 2
  door.x = Math.round (random(120,400))
  climber.x = door.x
  invisibleBlock.x = door.x
door.addImage (doorImg)
climber.addImage (climberImg)
door.velocityY = 1
climber.velocityY = 1
invisibleBlock.velocityY = 1
ghost.depth = door.depth 
ghost.depth += 1
door.lifetime = 800
climber.lifetime = 800
invisibleBlock.lifetime = 800
doorsGroup.add (door)
climbersGroup.add (climber)
invisibleBlockGroup.add (invisibleBlock)

}

}
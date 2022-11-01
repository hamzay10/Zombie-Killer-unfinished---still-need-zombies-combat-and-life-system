var mikeImage, mike
var zombie1, zombie2, zombie3
var platform, platform2, platform3, platformImage
var ground, groundImage
var backgroundImage
var bulletGroup, bullet, bulletImage
var mikeLife, zombieLife
var gameOverImage,restartImage,victoryImage


function preload(){
  backgroundImage = loadImage("assets/background.png");
  platformImage = loadImage("assets/platform.png")
  groundImage = loadImage("assets/floor.png")

  mikeImage = loadAnimation("assets/sprite1.png","assets/sprite2.png")
  zombie = loadAnimation("assets/zombie1.png","assets/zombie2.png")

  gameOverImage = loadImage("assets/gameover.png")
  restartImage = loadImage("assets/restart.png")
  victoryImage = loadImage("assets/victoryImage.png")

}

function setup() {
   var canvas = createCanvas(1280,920);

   mike = createSprite(225,500,180,180)
   mike.addAnimation("mike", mikeImage)
   mike.scale = 0.7;
   

   ground = createSprite(width/2,height + 20,width,2);
   ground.addImage("ground",groundImage);
   ground.x = width/2
   ground.scale = 1.9
   
   
   platform = createSprite(490,540)
   platform.addImage(platformImage)
   platform.scale = 0.23


   platform2 = createSprite(810,330)
   platform2.addImage(platformImage)
   platform2.scale = 0.23

   platform3 = createSprite(1105,540)
   platform3.addImage(platformImage)
   platform3.scale = 0.23

   

   platform.setCollider("rectangle",0,0,950,310)
   platform2.setCollider("rectangle",0,0,950,310)
   platform3.setCollider("rectangle",0,0,950,310)


   mike.setCollider("rectangle",-50,0,200,330)




   invisibleGround = createSprite(600,1000,1370,300);  
   invisibleGround.shapeColor = "#f4cbaa";
   invisibleGround.visible = false
   invisibleGround.debug = true



   


}

function draw() {
    background(backgroundImage);

    
    if((keyDown("UP")) && mike.y  >= 720) {
      mike.velocityY = mike.velocityY-32
    }

    if((keyDown("DOWN"))) {
      mike.velocityY = mike.velocityY+15
    }

    if((keyDown("LEFT"))) {
      mike.x = mike.x - 10
    }

    if((keyDown("RIGHT"))) {
      mike.x = mike.x + 10
    }
    mike.velocityY = mike.velocityY + 0.8
    
   mike.collide(invisibleGround)
   mike.collide(platform)
   mike.collide(platform2)
   mike.collide(platform3)



    drawSprites()
}
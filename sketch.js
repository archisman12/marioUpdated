var END = 0;
var PLAY = 1;
var SERVE = 2;
var STATE = 3;
var START = 4;
var CHARACTER1 = 5;
var CHARACTER2 = 6;
var LUIGI = 7;
var LUIGI2 = 8;
var CHARACTER3=9;
var MISSION=10
var MISSIONOVER=11;
var gameState = START;
var welcomeImg, welcome;
var WelcomeMarioImg;
var lugiblock, marioBlock;
var startImg,start;
var sizeSound;
var backgroundImage, background;
var mario_running, mario1, mario2, mario3, mario;
var luigi_running, luigi1, luigi2, luigi3, luigi;
var mario_bomb, mario_bombImage;
var mario_flowerImage, mario_flower;
var startPage;
var missionPlayImg,missionPlay;
var JumpSound;
var coinSound;
var mario_goldImage, marioGold;
var mario;
var landImage, land;
var gameType;
var mario_standing;
var lostSound;
var timePlayImg, freePlayImg;
var invisibleGround;
var mario_shellImg;
var bulletImage, bulllet;
var lifesroom, lifesroomimage;
var badgePointImage;
var checkPoint, checkpointImage;
var space;
var coinCollected = 0
var life = 4;
var CountTime = 100020;
var count = 1;
var restartImage, restart;
var score = 0;
var gameOverImage, gameOver;


function preload() {
  backgroundImage = loadImage("background-mario.png")
  mario_running =
    loadAnimation("mario1.png", "mario2.png", "mario3.png");
  luigi_running = loadAnimation("Luigi1.png", "luigi2.png", "luigi3.png")
  mario_bombImage = loadImage("mario bomb.png");
  spaceImg = loadImage("space.png")
  mario_flowerImage = loadImage("mario flower.png")
  mario_goldImage = loadImage("mario gold.png");
  mario_shellImg = loadImage("shell.png")
  startImg=loadImage("flatDark41.png")
  mario_poisonmushroomImage = loadImage("mushroom.png")
  mario_mushroomImage = loadImage("mushroom.png");
  backgroundSound = loadSound("Recording (5).m4a");
  badgePointImage = loadImage("BadgePoint.png")
  restartImage = loadImage("replay button.png");
  landImage = loadImage("land.png");
  //checkpointImgage=loadImage("Checkpoint.png")
  //  lostSound=loadSound("Recording ().m4a");
  gameOverImage = loadImage("gameOver.png");
  escapeImage=loadImage("esc.png")
  mario_standing = loadImage("mario standing.png");
  bulletImage = loadImage("Bullet mario.png");
  lifeshroomImage = loadImage("LifeShroom.png");
  JumpSound = loadSound("Recording (10).m4a")
  freePlayImg = loadImage("FREE PLAY.png");
  characterImg = loadImage("CHARACTER.png")
  coinSound = loadSound("coin sound.m4a");
  timePlayImg = loadImage("TIME PLAY.png");
  gameTypeImg = loadImage("game type.png");
  startPage = loadImage("start.png");
  marioSound=loadSound("Recording (22).m4a")
  sizeSound = loadSound("Recording (20).m4a")
  luigiImage = loadImage("luigi n.png")
  missionImg=loadImage("mission.png")
  incompleteImg=loadImage("incomplete.png")
  welcomeImg = loadImage("welcome.png")
  WelcomeLuigiImg = loadImage("luigi123.png")
  marioBlockImage = loadImage("mario block.png")
  missionPlayImg=loadImage("mission play.png")
}




function setup() {
  createCanvas(displayWidth, displayHeight);





  background = createSprite(displayWidth - 1000, displayHeight - 490);
  background.addImage(backgroundImage);

  start = createSprite(displayWidth - 515, displayHeight - 500, 0);
  start.addImage(startPage)
  start.scale = 0.8

  startt=createSprite(displayWidth/2,displayHeight-300)
  startt.addImage(startImg);
  startt.visible=false;
  
  incomplete=createSprite(displayWidth-950, displayHeight - 300)
  incomplete.addImage(incompleteImg)
  incomplete.visible=false;

  gameOver = createSprite(displayWidth / 2, displayHeight -530);
  gameOver.addImage(gameOverImage);
  gameOver.visible = false
  gameOver.scale = 0.6

  mario = createSprite(displayWidth - 1300, displayHeight - 300);
  mario.addAnimation("running", mario_running);
  mario.scale = 0.19

  luigi = createSprite(displayWidth - 1300, displayHeight - 300);
  luigi.addAnimation("running", luigi_running)
  luigi.scale = 0.09
  luigi.visible = false;

  invisibleGround = createSprite(490, 548, 1700, 15);
  invisibleGround.visible = false;



  restart = createSprite(width / 2, height / 2 - 150, 0, 0);
  restart.addImage(restartImage);
  restart.scale = 0.5;

  Freeplay = createSprite(displayWidth - 1100, displayHeight - 500)
  Freeplay.addImage(freePlayImg);
  Freeplay.visible = false;


  space = createSprite(displayWidth / 2, displayHeight - 250);
  space.addImage(spaceImg);
  

  
  missionPlay= createSprite(displayWidth - 800, displayHeight - 500)
  missionPlay.addImage(missionPlayImg);
  missionPlay.visible = false;


  Timeplay = createSprite(displayWidth - 500, displayHeight - 500)
  Timeplay.addImage(timePlayImg);
  Timeplay.visible = false;

  gameType = createSprite(displayWidth - 800, displayHeight - 620)
  gameType.addImage(gameTypeImg);
  gameType.visible = false;


  normal = createSprite(displayWidth - 1320, displayHeight - 730, 585, 1039)
  normal.shapeColor = ("#4CC417")

  WelcomeLuigi = createSprite(width - 1200, height - 480);
  WelcomeLuigi.addImage(WelcomeLuigiImg)
  WelcomeLuigi.scale = 0.2


  character = createSprite(displayWidth / 2, displayHeight - 600)
  character.addImage(characterImg)
  character.visible = false;
  
  lugiblock = createSprite(displayWidth - 1265, displayHeight - 400)
  lugiblock.addImage(luigiImage)
  lugiblock.scale = 0.7
  lugiblock.visible = false;
  
  marioBlock = createSprite(displayWidth - 100, displayHeight - 400)
  marioBlock.addImage(marioBlockImage)
  marioBlock.scale = 0.7
  marioBlock.visible = false;

  
  esc=createSprite(displayWidth-100,displayHeight-730)
  esc.addImage(escapeImage)
  esc.scale=0.5
  marioSound.play();
  mission=createSprite(displayWidth/2,displayHeight/2)
  mission.addImage(missionImg)
  mission.visible=false
  obstaclesGroup = createGroup();
  landcoinGroup = createGroup();
  invisibleBlockGroup = createGroup();
  pointsGroup = createGroup();
  badgePointsGroup = createGroup();
  landsGroup = createGroup()
  invisibleblockGroup = createGroup();
  bulletsGroup = createGroup();
  lifeshroomsGroup = createGroup();
  backgroundSound.loop()
}

function draw() {
  //background(67);

 if(mousePressedOver(esc)){
   gameState=PLAY;
    background.velocityX = 0;
    luigi.visible = false;
   lugiblock.visible=false;
   marioBlock.visible=false;
   character.visible=false;
    mario.visible = false;
   startt.visible=false
   mission.visible=false;
missionPlay.visible=false;
    badgePointsGroup.destroyEach();
    obstaclesGroup.destroyEach();
    pointsGroup.destroyEach();
    lifeshroomsGroup.destroyEach();
    bulletsGroup.destroyEach();
    landsGroup.destroyEach();
   
   
 }
  //luigi.visible=false;

  background.velocityX = -1.7
  if (background.x < 620) {
    background.x = background.width / 2;

  }
  //console.log(background.x)
  luigi.collide(invisibleGround)
  mario.collide(invisibleGround)

  if (gameState === START) {
    mario.visible = false
    restart.visible = false;
    esc.visible = false;

    background.velocityX = 0;
    // start.x = background.x
    // start.y = background.y
    if (touches.length > 0 ||keyDown("space")) {
      gameState = PLAY;
      touches=[]
    }
  }
  if (gameState === PLAY) {
    mario.visible = false
  Freeplay.visible = true;
    Timeplay.visible = true;
    gameType.visible = true;
esc.visible = true;
    restart.visible = false;
    normal.visible = false;
    WelcomeLuigi.visible = false;
    background.velocityX = 0;
    //normal.visible = false;
    start.visible = false;
    //welcome.visible = false;
    space.visible = false;
    missionPlay.visible=true;
  startt.visible=false;
    if (mousePressedOver(Timeplay)) {
      gameState = CHARACTER1;


    }
    if (mousePressedOver(Freeplay)) {
      gameState = CHARACTER2;

    }
    
    
    if (mousePressedOver(missionPlay)) {
      gameState = CHARACTER3;
    }
  }
  
  
  if (gameState === CHARACTER1) {
    console.log("hello")

esc.visible = true;
    if (mousePressedOver(lugiblock)) {
      gameState = LUIGI
      console.log("hello")

    }


    if (mousePressedOver(marioBlock)) {
      gameState = STATE
    }
    background.velocityX = 0;
    Freeplay.visible = false;
missionPlay.visible=false;
    Timeplay.visible = false;
    gameType.visible = false;
    character.visible = true;

    lugiblock.visible = true;

    marioBlock.visible = true;


  }





  if (gameState === CHARACTER2) {



esc.visible = true;
    if (mousePressedOver(lugiblock)) {
      gameState = LUIGI2
      console.log("hello")

    }


    if (mousePressedOver(marioBlock)) {
      gameState = SERVE;
    }
    background.velocityX = 0;
    Freeplay.visible = false;

    Timeplay.visible = false;
    gameType.visible = false;
    character.visible = true;
    missionPlay.visible=false;
    lugiblock.visible = true;

    marioBlock.visible = true;





  } if(gameState===CHARACTER3){
     
    
esc.visible = true;
    background.velocityX = 0;
    Freeplay.visible = false;
     missionPlay.visible=false;
    Timeplay.visible = false;
    gameType.visible = false;
    character.visible = false;
      mission.visible=true ;
    
      startt.visible=true;
  
    if(mousePressedOver(startt))
       gameState=MISSION;


    
  }
  
  
  else if(gameState===MISSION){
     Freeplay.visible = false;
    mario.visible=true
    Timeplay.visible = false;
    startt.visible=false;
    mission.visible=false;
    gameType.visible = false;

    marioBlock.visible = false;
    lugiblock.visible = false;
    character.visible = false;
    restart.visible = false;

esc.visible = true;
    //mario.debug=true;s
    restart.visible = false;
    if (touches.length > 0 || keyWentDown("space") && mario.y > displayWidth - 1200) {
      mario.velocityY = -12;
      JumpSound.play()
      touches = [];
    }
    if (touches.length >0 && mario.overlapPoint( touches[0].x, touches[0].y)||keyDown("left_arrow") && mario.x > 0 && mario.y > 160) {
      
      mario.x = mario.x - 3;
      touches=[0]


    }
    if (keyDown("right_arrow") && mario.x < 627 && mario.y > 160) {
      //  background.x = background.x-1.8;

      mario.x = mario.x + 3;
    }



    mario.velocityY = mario.velocityY + 0.8

    
    if(coinCollected==60){
       gamestate=MISSIONOVER
       
       
       }
    //CountTime.delay(100);
    if (obstaclesGroup.isTouching(mario)) {
      //gameState = END
      life = life - 1;
      mario.scale = 0.19;
      
      // lostSound.play();
      obstaclesGroup.destroyEach();
    }
    if (life == 0) {
      incomplete.visible=true
      gameState = END

    }

    spawnObstacles();
    spawnpoints();
    spawnbadgePoint();
    spawnlands();
    spawnBullets();
    spawnlifeshroom();
    if (badgePointsGroup.isTouching(mario)) {
      coinCollected = coinCollected + 2;
      coinSound.play();
      badgePointsGroup.destroyEach()


    }
    if (pointsGroup.isTouching(mario)) {
      score = score + 150;
      pointsGroup.destroyEach()
    }




    if (lifeshroomsGroup.isTouching(mario)) {
      life = life + 1;
      lifeshroomsGroup.destroyEach()
    }
    if (bulletsGroup.isTouching(mario)) {
      life = life - 1;
      mario.scale = 0.19;
     // bulletsGroup.velocityY=2
      // incomplete.visible=true
      bulletsGroup.destroyEach()
    }


    if (landsGroup.isTouching(mario)) {
      mario.velocityY = 0;
    }

    score = score + Math.round(getFrameRate()/60);
    switch (coinCollected) {


      case 10:
        mario.scale = 0.21;
        break;
      case 16:
        mario.scale = 0.22;
        break;
      case 22:
        mario.scale = 0.23;
        break;
      case 40:
        mario.scale = 0.24;
        break;
      case 60:
        mario.scale = 0.25;
        break;
     


      default:
        break;
    }

    
  }
  if(gameState===MISSIONOVER){
     text("Mission completed",displayWidth/2,displayHeight-600)
    
    
esc.visible = true;
     
     }
  
  
  
  else if (gameState === LUIGI2) {

    luigi.visible = true

esc.visible = true;
    marioBlock.visible = false;
    lugiblock.visible = false;
    character.visible = false;
    restart.visible = false;
    if (touches.length > 0 || keyWentDown("space") && luigi.y > displayWidth - 1200) {
      luigi.velocityY = -12;
      JumpSound.play()
      touches = [];
    }
    if (keyDown("left_arrow") && luigi.x > 0 && luigi.y > 160) {

      luigi.x = luigi.x - 3;


    }
    if (keyDown("right_arrow") && luigi.x < 627 && luigi.y > 160) {


      luigi.x = luigi.x + 3;
    }
 

    luigi.velocityY = luigi.velocityY + 0.8

    if (obstaclesGroup.isTouching(luigi)) {
      //gameState = END
      life = life - 1;
      luigi.scale = 0.09;
      // lostSound.play();
      obstaclesGroup.destroyEach();
    }
    if (life == 0) {
      gameState = END

    }

    spawnObstacles();
    spawnpoints();
    spawnbadgePoint();
    spawnlands();
    spawnBullets();
    spawnlifeshroom();
    if (badgePointsGroup.isTouching(luigi)) {
      coinCollected = coinCollected + 1;
      coinSound.play();
      badgePointsGroup.destroyEach()


    }
    if (pointsGroup.isTouching(luigi)) {
      score = score + 150;
      pointsGroup.destroyEach()
    }




    if (lifeshroomsGroup.isTouching(luigi)) {
      life = life + 1;
      lifeshroomsGroup.destroyEach()
    }
    if (bulletsGroup.isTouching(luigi)) {
      life = life - 1;
      mario.scale = 0.19;
      bulletsGroup.destroyEach()
    }


    if (landsGroup.isTouching(luigi)) {
      luigi.velocityY = 0;
    }

    score = score + Math.round(getFrameRate() / 60);
    switch (coinCollected) {
      case 4:
        mario.scale = 0.10;
        break;
      case 6:
        mario.scale = 0.11;
        break;
      case 11:
        mario.scale = 0.12;
        break;
      case 21:
        mario.scale = 0.13;
        break;
      case 26:
        mario.scale = 0.14;
        break;


    }





  } else if (gameState === LUIGI) {
    luigi.visible = true

esc.visible = true;
    marioBlock.visible = false;
    lugiblock.visible = false;
    character.visible = false;
    restart.visible = false;
    if (touches.length > 0 || keyWentDown("space") && luigi.y > displayWidth - 1200) {
      luigi.velocityY = -12;
      JumpSound.play()
      touches = [];
    }
    if (keyDown("left_arrow") && luigi.x > 0 && luigi.y > 160) {

      luigi.x = luigi.x - 3;


    }
    if (keyDown("right_arrow") && luigi.x < 627 && luigi.y > 160) {


      luigi.x = luigi.x + 3;
    }



    luigi.velocityY = luigi.velocityY + 0.8
    CountTime = CountTime - count;


    if (CountTime == 0) {
      gameState = END;
    }
    //CountTime.delay(100);
    if (obstaclesGroup.isTouching(luigi)) {
      //gameState = END
      life = life - 1;
      luigi.scale = 0.09;
      // lostSound.play();
      obstaclesGroup.destroyEach();
    }
    if (life == 0) {
      gameState = END

    }

    spawnObstacles();
    spawnpoints();
    spawnbadgePoint();
    spawnlands();
    spawnBullets();
    spawnlifeshroom();
    if (badgePointsGroup.isTouching(luigi)) {
      coinCollected = coinCollected + 1;
      coinSound.play();
      badgePointsGroup.destroyEach()


    }
    if (pointsGroup.isTouching(luigi)) {
      score = score + 150;
      pointsGroup.destroyEach()
    }




    if (lifeshroomsGroup.isTouching(luigi)) {
      life = life + 1;
      lifeshroomsGroup.destroyEach()
    }
    if (bulletsGroup.isTouching(luigi)) {
      life = life - 1;
      mario.scale = 0.19;
      bulletsGroup.destroyEach()
    }


    if (landsGroup.isTouching(luigi)) {
      luigi.velocityY = 0;
    }

    score = score + Math.round(getFrameRate() / 60);
    switch (coinCollected) {
      case 4:
        mario.scale = 0.10;
        break;
      case 6:
        mario.scale = 0.11;
        break;
      case 11:
        mario.scale = 0.12;
        break;
      case 21:
        mario.scale = 0.13;
        break;
      case 26:
        mario.scale = 0.14;
        break;



    }
  }


  if (gameState === SERVE) {
    mario.visible = true

    Freeplay.visible = false;
    Timeplay.visible = false;
    gameType.visible = false;

    marioBlock.visible = false;
    lugiblock.visible = false;
    character.visible = false;
    restart.visible = false;

esc.visible = true;
    //mario.debug=true;
    restart.visible = false;
    if (touches.length > 0 || keyDown("space") && mario.y > displayWidth - 1200) {
      mario.velocityY = -12;
      JumpSound.play()
      touches = [];
    }
    if (keyDown("left_arrow") && mario.x > 0 && mario.y > 160) {
      // background.x = background.x+1.8;
      mario.x = mario.x - 3;


    }
    if (keyDown("right_arrow") && mario.x < 627 && mario.y > 160) {
      //  background.x = background.x-1.8;

      mario.x = mario.x + 3;
    }



    mario.velocityY = mario.velocityY + 0.8

    //CountTime.delay(100);
    if (obstaclesGroup.isTouching(mario)) {
      //gameState = END
      life = life - 1;
      mario.scale = 0.19;
      // lostSound.play();
      obstaclesGroup.destroyEach();
    }
    if (life == 0) {
      gameState = END

    }

    spawnObstacles();
    spawnpoints();
    spawnbadgePoint();
    spawnlands();
    spawnBullets();
    spawnlifeshroom();
    if (badgePointsGroup.isTouching(mario)) {
      coinCollected = coinCollected + 1;
      coinSound.play();
      badgePointsGroup.destroyEach()


    }
    if (pointsGroup.isTouching(mario)) {
      score = score + 150;
      pointsGroup.destroyEach()
    }




    if (lifeshroomsGroup.isTouching(mario)) {
      life = life + 1;
      lifeshroomsGroup.destroyEach()
    }
    if (bulletsGroup.isTouching(mario)) {
      life = life - 1;
      mario.scale = 0.19;
      bulletsGroup.destroyEach()
    }


    if (landsGroup.isTouching(mario)) {
      mario.velocityY = 0;
    }

    score = score + Math.round(getFrameRate() / 60);
    switch (coinCollected) {


      case 3:
        mario.scale = 0.21;
        break;
      case 5:
        mario.scale = 0.22;
        break;
      case 10:
        mario.scale = 0.23;
        break;
      case 20:
        mario.scale = 0.24;
        break;
      case 25:
        mario.scale = 0.25;
        break;
      case 32:
        mario.scale = 0.26;
        break;
      case 35:
        mario.scale = 0.27;
        break;
      case 40:
        mario.scale = 0.28;
        break;


      default:
        break;
    }


  }
  if (gameState === STATE) {
    mario.visible = true

    Freeplay.visible = false;
    Timeplay.visible = false;
    gameType.visible = false;



    marioBlock.visible = false;
    lugiblock.visible = false;
    character.visible = false;
    restart.visible = false;

esc.visible = true;

    //mario.debug=true;
    restart.visible = false;
    if (touches.length > 0 || keyWentDown("space") && mario.y > displayWidth - 1200) {
      mario.velocityY = -12;
      JumpSound.play()
      touches = [];
    }
    if (keyDown("left_arrow") && mario.x > 0 && mario.y > 160) {

      mario.x = mario.x - 3;


    }
    if (keyDown("right_arrow") && mario.x < 627 && mario.y > 160) {


      mario.x = mario.x + 3;
    }



    mario.velocityY = mario.velocityY + 0.8
    CountTime = CountTime - count;


    if (CountTime == 0) {
      gameState = END;
    }
    //CountTime.delay(100);
    if (obstaclesGroup.isTouching(mario)) {
      //gameState = END
      life = life - 1;
      mario.scale = 0.19;
      // lostSound.play();
      obstaclesGroup.destroyEach();
    }
    if (life == 0) {
      gameState = END

    }

    spawnObstacles();
    spawnpoints();
    spawnbadgePoint();
    spawnlands();
    spawnBullets();
    spawnlifeshroom();
    if (badgePointsGroup.isTouching(mario)) {
      coinCollected = coinCollected + 1;
      coinSound.play();
      badgePointsGroup.destroyEach()


    }
    if (pointsGroup.isTouching(mario)) {
      score = score + 150;
      pointsGroup.destroyEach()
    }




    if (lifeshroomsGroup.isTouching(mario)) {
      life = life + 1;
      lifeshroomsGroup.destroyEach()
    }
    if (bulletsGroup.isTouching(mario)) {
      life = life - 1;
      mario.scale = 0.19;
      bulletsGroup.destroyEach()
    }


    if (landsGroup.isTouching(mario)) {
      mario.velocityY = 0;
    }

    score = score + Math.round(getFrameRate() / 60);
    switch (coinCollected) {
      case 3:
        mario.scale = 0.21;
        break;
      case 5:
        mario.scale = 0.22;
        break;
      case 10:
        mario.scale = 0.23;
        break;
      case 20:
        mario.scale = 0.24;
        break;
      case 25:
        mario.scale = 0.25;
        break;
      case 32:
        mario.scale = 0.26;
        break;
      case 35:
        mario.scale = 0.27;
        break;
      case 40:
        mario.scale = 0.28;
        break;
    }
  } else if (gameState === END) {
    textSize(49);
    text("game Over", 500, 100);
    text.visible = true;
    background.velocityX = 0;
    luigi.visible = false;
    mario.visible = false;
    restart.visible = true;
    gameOver.visible = true;
    // backgroundSound.stop();


    badgePointsGroup.destroyEach();
    obstaclesGroup.destroyEach();
    pointsGroup.destroyEach();
    lifeshroomsGroup.destroyEach();
    bulletsGroup.destroyEach();
    landsGroup.destroyEach();
    if (touches.length > 0 || mousePressedOver(restart)) {
      touches = []
      reset();

    }


  }


  function reset() {
    gameState = PLAY;
    score = 0;
    coinCollected = 0;
    life = 4;
    background.velocityX = 1.5 ;
    mario.visible = true;
    gameOver.visible = false;
    mario.x = 60;
    mario.y = 490;
    incomplete.visible=false
    startt.visible=false;
    mission.visible=false;
    
 
  }





  drawSprites();
  textSize(30);
  fill("red");
  text("Coin Collected:" + coinCollected, 400, 50);

  textSize(30);
  fill("red");
  text("Time:" + CountTime, 245, 100);


  textSize(30);
  fill("red")
  text("Score: " + score, 205, 50);

  textSize(30);
  fill("red")
  text("Life: " + life, 800, 50);
}

function spawnObstacles() {
  if (frameCount % 650 === 0) {
    var obstacle = createSprite(width - 60, 510, 0, 0);
    obstacle.velocityX = -1.7

    //generate random obstacles
    var rand = Math.round(random(1, 3));
    switch (rand) {
      case 1:
        obstacle.addImage(mario_bombImage);
        break;
      case 2:
        obstacle.addImage(mario_shellImg);
        break;
      case 3:
        obstacle.addImage(mario_poisonmushroomImage);
        break;

      default:
        break;
    }

    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.13;
    obstacle.lifetime = width / 1.7;

    //add each obstacle to the group
    obstaclesGroup.add(obstacle);

  }
}

function spawnpoints() {
  if (frameCount % 900 === 0) {
    var point = createSprite(width - 60, 510, 0, 0);
    point.velocityX = -1.7;

    //generate random obstacles
    var pos = Math.round(random(1, 2));
    switch (pos) {
      case 1:
        point.addImage(mario_flowerImage);
        break;
      case 2:
        point.addImage(mario_mushroomImage);
        break;

      default:
        break
    }
    //assign scale and lifetime to the obstacle           
    point.scale = 0.1;
    point.lifetime = width / 1.7;

    //add each obstacle to the group
    pointsGroup.add(point);
  }
}

function spawnbadgePoint() {
  if (frameCount % 200 === 0) {
    badgePoint = createSprite(width - 60, 400, 0, 0);
    badgePoint.y = Math.round(random(0, 400));
    badgePoint.addImage(badgePointImage);
    badgePoint.scale = 1;
    badgePoint.velocityX = -1.7


    badgePoint.lifetime = width / 1.7;
    badgePointsGroup.add(badgePoint);
    //console.log(badgePoint.y)

    badgePoint.depth = mario.depth;
    mario.depth = badgePoint.depth + 1;

  }
}

function spawnlands() {

  if (frameCount % 250 === 0) {

    var land = createSprite(width - 60, 10);
    land.addImage(landImage);
    land.scale = 1.4
    land.y = Math.round(random(120, 500));
    land.velocityX = -1.7;
    land.depth = mario.depth;
    mario.depth = land.depth + 1;
    //door.lifetime = 600;
    land.lifetime = width / 1.7;
    land.debug = false;
    land.setCollider("rectangle", 0, -3, 65, 3)
    landsGroup.add(land);

    var invisibleblock = createSprite(width - 64, 15)
    invisibleblock.width = land.width;
    invisibleblock.height = 5;
    invisibleblock.lifeTime = width / 1.7
    invisibleblock.y = land.y;
    invisibleblock.velocityX = -1.7;
    invisibleblockGroup.add(invisibleblock);
    invisibleblock.visible = false;
    //  invisibleblock.debug=true;






    // var landcoin=createSprite(width-60,10,50)
    //// landcoin.width = land.width;
    // landcoin.height =5;
    //landcoin.addImage(badgePointImage)
    //    landcoin.y = land.y;
    //  
    // landcoin.velocityX =-1.7;
    //    landcoinGroup.add(landcoin);
    //  landcoin.debug=true;





  }
}

function spawnBullets() {
  if (frameCount % 250 === 0) {
    var bullet = createSprite(width - 60, 300, 20, 20);
    bullet.y = Math.round(random(120, 500));
    bullet.addImage(bulletImage);
    bullet.velocityX = -1.7;
    bullet.lifetime = width / 1.7;
    bullet.scale = 0.04;
    bulletsGroup.add(bullet);
    //bullet.debug=true;
    // bullet.setCollider("rectangle",0,0,5000,300)
  }


}

function spawnlifeshroom() {
  if (frameCount % 1003 === 0) {
    var lifeshroom = createSprite(width - 60, 510, 0, 0);
    lifeshroom.velocityX = -1.7;
    lifeshroom.addImage(lifeshroomImage)
    //generate random obstacles

    //assign scale and lifetime to the obstacle           
    lifeshroom.scale = 0.09;
    lifeshroom.lifetime = width / 1.7;

    //add each obstacle to the group
    lifeshroomsGroup.add(lifeshroom);
    //console.log(lifeshroom)

  }
}
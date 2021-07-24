var ground;
var airLand;
var person;
var landGroup;
var lives=0;
var coronaGroup,faceMaskGroup,infectedPersonGroup,invisibleSpriteGroup,sanitizerGroup,injectionGroup,hospitalCross;

function preload() {
	landImage = loadImage("floating land.png");
    c1 = loadImage("Corona Virus/1.png");
    c2 = loadImage("Corona Virus/2.png");
    c3 = loadImage("Corona Virus/3.png");
    c4 = loadImage("Corona Virus/4.png");
    c5 = loadImage("Corona Virus/5.png");
    c6 = loadImage("Corona Virus/6.png");
    c7 = loadImage("Corona Virus/7.png");
    c8 = loadImage("Corona Virus/8.png");
    c9 = loadImage("Corona Virus/9.png");
    c10 = loadImage("Corona Virus/10.png");

    f1 = loadImage("Face Mask/1.png")
    f2 = loadImage("Face Mask/2.png")
    f3 = loadImage("Face Mask/3.png")
    f4 = loadImage("Face Mask/4.png")
    f5 = loadImage("Face Mask/5.png")
    f6 = loadImage("Face Mask/6.png")
    f7 = loadImage("Face Mask/7.png")
    f8 = loadImage("Face Mask/8.png")
    f9 = loadImage("Face Mask/9.png")

    ip1 = loadImage("Infected Person/1.png")
    ip2 = loadImage("Infected Person/2.png")
    ip3 = loadImage("Infected Person/3.png")
    ip4 = loadImage("Infected Person/4.png")
    ip5 = loadImage("Infected Person/5.png")
    ip6 = loadImage("Infected Person/6.png")

    s1 = loadImage("Hand Sanitizer/1.png")
    s2 = loadImage("Hand Sanitizer/2.png")
    s3 = loadImage("Hand Sanitizer/3.png")
    s4 = loadImage("Hand Sanitizer/4.png")
    s5 = loadImage("Hand Sanitizer/5.png")
    s6 = loadImage("Hand Sanitizer/6.png")
    s7 = loadImage("Hand Sanitizer/7.png")
    s8 = loadImage("Hand Sanitizer/8.png")
    s9 = loadImage("Hand Sanitizer/9.png")
r
    ij1 = loadImage("Injection/1.png")
    ij2 = loadImage("Injection/2.png")
    ij3 = loadImage("Injection/3.png")
    ij4 = loadImage("Injection/4.png")
    ij5 = loadImage("Injection/5.png")
    ij6 = loadImage("Injection/6.png")
    ij7 = loadImage("Injection/7.png")
    ij8 = loadImage("Injection/8.png")
    ij9 = loadImage("Injection/9.png")
    ij10 = loadImage("Injectionr/10.png")

    hc1 = loadImage("Hospital Cross/1.png")
    hc2 = loadImage("Hospital Cross/2.png")
    hc3 = loadImage("Hospital Cross/3.png")
    hc4 = loadImage("Hospital Cross/4.png")
    hc5 = loadImage("Hospital Cross/5.png")

    bgImage = loadImage("Hospital BGs/bg3.jpg");
}



function setup() {
  createCanvas(displayWidth,displayHeight-200);

  ground = createSprite(100, displayHeight-210, 3000, 20);
  ground.shapeColor="brown";

  person = createSprite(100,displayHeight-250,20,60);
  person.shapeColor="black";
  landGroup = new Group();
  person.debug=true;

  coronaGroup = new Group()
  faceMaskGroup = new Group()
  infectedPersonGroup = new Group()
  invisibleSpriteGroup = new Group()
  sanitizerGroup = new Group()
  injectionGroup = new Group()
  hospitalCross = new Group()

}


function draw() {
  background("lightBlue"); 
  textSize(25);
  fill("black");
  text("LIVES : " + lives,50,100);
  ground.velocityX = -3;
  if(ground.x < 0 ){
  	ground.x = 300;
  } 

  if(keyDown("space")){
  	person.velocityY = -10;

  }
    person.velocityY+=0.8;
   

  if(keyDown(LEFT_ARROW)){
  	person.x-=20
  	
  }

  if(keyDown(RIGHT_ARROW)){
  	person.x+=20
  	
  }
if(person.isTouching(invisibleSpriteGroup)){
	person.velocityY=0;
  person.collide(invisibleSpriteGroup);
}

if(person.isTouching(faceMaskGroup))
{
  lives = lives + 1
  faceMaskGroup.destroyEach()
}

  floatingLand();
  person.collide(ground);
  drawSprites();
}

function floatingLand(){
	if(frameCount % 200 === 0){
      airLand= createSprite(displayWidth-100,200,50,10);
      airLand.y = Math.round(random(100,displayHeight-250))

      invisibleSprite = createSprite(airLand.x,airLand.y ,200,10)
      invisibleSprite.visible = false
      invisibleSprite.shapeColor = "red"

      invisibleSprite.velocityX = -3

      invisibleSpriteGroup.add(invisibleSprite)

      spawnCorona(airLand.x,airLand.y)
      spawnFaceMask(airLand.x,airLand.y)
      spawnInfectedPerson(airLand.x,airLand.y)
      
      airLand.shapeColor="blue";
      landGroup.add(airLand);
      airLand.velocityX = -3;
      airLand.addImage(landImage);
      airLand.scale=0.5; 

airLand.depth=person.depth
person.depth=person.depth+1
airLand.debug = true;
airLand.setCollider("circle",0,0,50);

      
	}
}

function spawnCorona(xPos,yPos){
  if(frameCount % 300 === 0){

    obstacle = createSprite(100,200,50,30);
      obstacle.x=xPos
      obstacle.y=yPos
      
      obstacle.velocityX = -3;
      obstacle.scale = 0.09;
      coronaGroup.add(obstacle)

      var rand = Math.round(random(1,10));
      switch(rand){
        case 1 : obstacle.addImage(c1);
        break
        case 2 : obstacle.addImage(c2);
        break
        case 3 : obstacle.addImage(c3);
        break
        case 4 : obstacle.addImage(c4);
        break
        case 5 : obstacle.addImage(c5);
        break
        case 6 : obstacle.addImage(c6);
        break
        case 7 : obstacle.addImage(c7);
        break
        case 8 : obstacle.addImage(c8);
        break
        case 9 : obstacle.addImage(c9);
        break
        case 10 : obstacle.addImage(c10);
        break
        default : break
      }
  }
}


function spawnFaceMask(xPos,yPos){
  if(frameCount % 400 === 0){

    var faceMask = createSprite(100,200,50,30);
      faceMask.x=xPos
      faceMask.y=yPos
      
      faceMask.velocityX = -3;
      faceMask.scale = 0.05;

      faceMaskGroup.add(faceMask)

      var rand = Math.round(random(1,10));
      switch(rand){
        case 1 : faceMask.addImage(f1);
        break
        case 2 : faceMask.addImage(f2);
        break
        case 3 : faceMask.addImage(f3);
        break
        case 4 : faceMask.addImage(f4);
        break
        case 5 : faceMask.addImage(f5);
        break
        case 6 : faceMask.addImage(f6);
        break
        case 7 : faceMask.addImage(f7);
        break
        case 8 : faceMask.addImage(f8);
        break
        case 9 : faceMask.addImage(f9);
        break
        
        default : break
      }
  }
}

function spawnInfectedPerson(xPos,yPos){
  if(frameCount % 500 === 0){

    var infectedPerson = createSprite(100,200,50,30);
      infectedPerson.x=xPos
      infectedPerson.y=yPos
      
      infectedPerson.velocityX = -3;
      infectedPerson.scale = 0.05;

      infectedPersonGroup.add(infectedPerson)

      var rand = Math.round(random(1,10));
      switch(rand){
        case 1 : infectedPerson.addImage(ip1);
        break
        case 2 : infectedPerson.addImage(ip2);
        break
        case 3 : infectedPerson.addImage(ip3);
        break
        case 4 : infectedPerson.addImage(ip4);
        break
        case 5 : infectedPerson.addImage(ip5);
        break
        case 6 : infectedPerson.addImage(ip6);
        break
        
        
        default : break
      }
  }
}

function spawnSantizer(xPos,yPos){
  if(frameCount % 500 === 0){

    var sanitizer = createSprite(100,200,50,30);
      sanitizer.x=xPos
      sanitizer.y=yPos
      
      sanitizer.velocityX = -3;
      sanitizer.scale = 0.05;

      sanitizerGroup.add(sanitizer)

      var rand = Math.round(random(1,10));
      switch(rand){
        case 1 : sanitizer.addImage(s1);
        break
        case 2 : sanitizer.addImage(s2);
        break
        case 3 : sanitizer.addImage(s3);
        break
        case 4 : sanitizer.addImage(s4);
        break
        case 5 : sanitizer.addImage(s5);
        break
        case 6 : sanitizer.addImage(s6);
        break
        case 7 : sanitizer.addImage(s7);
        break
        case 8 : sanitizer.addImage(s8);
        break
        case 9 : sanitizer.addImage(s9);
        break
        
        
        default : break
      }
  }

function spawnInjection(xPos,yPos){
  if(frameCount % 500 === 0){

    var injection = createSprite(100,200,50,30);
      injection.x=xPos
      injection.y=yPos
      
      injection.velocityX = -3;
      injection.scale = 0.05;

      sanitizerGroup.add(injection)

      var rand = Math.round(random(1,10));
      switch(rand){
        case 1 : injection.addImage(s1);
        break
        case 2 : injection.addImage(s2);
        break
        case 3 : injection.addImage(s3);
        break
        case 4 : injection.addImage(s4);
        break
        case 5 : injection.addImage(s5);
        break
        case 6 : injection.addImage(s6);
        break
        case 7 : injection.addImage(s7);
        break
        case 8 : injection.addImage(s8);
        break
        case 9 : injection.addImage(s9);
        break
        
        
        default : break
      }
  }

  function spawnHospitalCross(xPos,yPos){
  if(frameCount % 500 === 0){

    var hospitalCross = createSprite(100,200,50,30);
      hospitalCross.x=xPos
      hospitalCross.y=yPos
      
      hospitalCross.velocityX = -3;
      hospitalCross.scale = 0.05;

      hospitalCrossGroup.add(hospitalCross)

      var rand = Math.round(random(1,10));
      switch(rand){
        case 1 : hospitalCross.addImage(s1);
        break
        case 2 : hospitalCross.addImage(s2);
        break
        case 3 : hospitalCross.addImage(s3);
        break
        case 4 : hospitalCross.addImage(s4);
        break
        case 5 : hospitalCross.addImage(s5);
        break
        
        default : break
      }
  }

}








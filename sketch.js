var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyImg
var fairyVoice
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyimage1.png","images/fairyimage2.png")
    fairyVoice = loadSound("sound/JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);
      
	 fairyVoice.play()
	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
     fairy=createSprite(300,490);
     fairy.addAnimation("fairyFlying",fairyImg)
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    fairy.scale = 0.3;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
   if(keyDown(RIGHT_ARROW)){
	  fairy.velocityX=6; 
   }
   else if(keyDown(LEFT_ARROW)){
	fairy.velocityX=-6; 
 }
 else if(keyDown(DOWN_ARROW)){
	star.velocityY=3; 
 }
  if (star.y>470){
	  star.velocityY=0;
  }
  drawSprites();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}

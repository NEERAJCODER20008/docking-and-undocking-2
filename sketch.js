var iss,spacecraft;
var hasDocked=false
function preload(){

  issImg=loadImage("images/iss.png");
  spacebg=loadImage("images/spacebg.jpg");
  space1=loadAnimation("images/spacecraft1.png");
  space2=loadAnimation("images/spacecraft2.png");
  space3=loadAnimation("images/spacecraft3.png");
  space4=loadAnimation("images/spacecraft4.png");

}
 function setup() {
  createCanvas(800,400);
    iss = createSprite(400, 200, 50, 50);
    iss.addImage(issImg)

    spacecraft = createSprite(350,350,50,50)
    spacecraft.scale=0.2
    spacecraft.addAnimation("s1",space1)
}

function draw() {
  background(spacebg);  
  drawSprites();

  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)
    
    if(keyDown("UP_ARROW")){
      spacecraft.y-=2

    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.changeAnimation("s2",space2)

    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.changeAnimation("s3",space3)
      spacecraft.x-=1
    }


    if(keyDown("RIGHT_ARROW")){
      spacecraft.changeAnimation("s4",space4)
      spacecraft.x+=1
    }

  }
  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    hasDocked=true
    textSize(25)
    fill("white")
    text("Docking Succesful",200,300)
  }
}
 
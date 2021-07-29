var stationImage,capImage,bgimage;
var iss,capsule;
var hasDocked;
var hasDocked = false;
var invisiblebox



function preload(){
stationImage = loadImage('images/space pro.jpg')
capImage = loadImage('images/cartoon-space-capsule-vector-illustration-K0B2G0.jpg')
bgimage = loadImage('images/spacee-2060x1288.jpg')
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(330,130)
  iss.addImage(stationImage)

  capsule = createSprite(285,240)
  capsule.addImage(capImage)
  capImage = scale(0.005)

  iss.scale = 1.0
  capsule.scale = 0.06

  invisiblebox = createSprite(300,164,10,10)
  invisiblebox.visible = false
  invisiblebox.depth = iss.depth
  invisiblebox.depth = invisiblebox.depth + 1

  
}

function draw() {
  background(bgimage); 
  
  if(!hasDocked){
    capsule.x = capsule.x + random(-1,1)
    console.log(capsule.position)

    if(keyDown("up")){
      capsule.y = capsule.y - 2
     
    }

   if(keyDown("right")){
     capsule.x = capsule.x+2
   }

   if(keyDown("left")){
     capsule.x = capsule.x - 2
   }

   if(keyDown("down")){
    capsule.y = capsule.y + 2
  }
  }

  if(capsule.isTouching(invisiblebox)){
    hasDocked = true

    fill("black")
    textSize(25)
    text("Docking successful" , 400,200)
  }














  drawSprites();
}
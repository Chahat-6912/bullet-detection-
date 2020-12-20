var car, carImage, thickness;
var speed, weight;

function preload(){
carImage = loadImage("unnamed.png");
bkg = loadImage("city.jpg")
bullet = loadImage("by.png")
}

function setup() {
  createCanvas(1600,400);

  bg = createSprite(800, 200, 1600, 400)
bg.addImage(bkg)

  speed = random(223,321);
  weight = random(30, 52);
  thickness = 20

car = createSprite(50, 200, 50, 50);
car.addImage(bullet)
car.shapeColor = "black";
car.velocityX = speed;
car.scale = 0.1


wall = createSprite(1500, 200, thickness, height/2);
wall.shapeColor = "black";

damage = 0.5 * weight * speed * speed / thickness * thickness * thickness 

}

function draw() {
  background("lightCyan");

if (car.collide(wall)) {

 if (damage < 100 ){
   car.shapeColor = "lime"
   fill("lime");
   textSize(200);
   text("best !!",500, 250);
 }

 if (damage > 100){
   car.shapeColor = "red"
   fill("red");
   textSize(200);
   text("! worst !",500, 250);
 }
} 

  drawSprites();
  if(car.shapeColor === "lime")
  { fill("lime"); 
  textSize(200); 
  text("best !!",500, 250); } 

  if(car.shapeColor === "red")
  { fill("red"); 
  textSize(200); 
  text("! worst !",500, 250); } 
}
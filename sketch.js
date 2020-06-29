const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var gameState;

var img;

function preload(){
 
}

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  img = loadImage("garbage.png");

  ground1 = new ground(600, 390, 1200, 20);
  sup1 = new ground(730, 350, 5, 100);
  sup2 = new ground(820, 350, 5, 100);
  crumpled = new scrap(200, 200, 50, 50);
  slingy = new slingshot(crumpled.body, {x: 200, y: 200});
}

function draw() {
  background("white");
  Engine.update(engine);

  ground1.display();
  crumpled.display();
  sup1.display();
  sup2.display();
  image(img, 700, 275, 150, 125);
  slingy.display();
  console.log(crumpled.body.position.x);

  textSize(25);
  textFont("Comic Sans MS"); 
  text("The ball feels too light and increasing the density doesn't help. Other than that, everything is fine.", 50, 50);
  
  if(crumpled.x > 0) {
    crumpled.hide();
  }
}

function mouseDragged(){
  Matter.Body.setPosition(crumpled.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingy.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(crumpled.body, {x: 200, y: 200});
    slingy.attach(crumpled.body);
  }
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var en;
function setup() {
  createCanvas(800,400);
  en = Engine.create(); //create engine
  wo = en.world;        //create world in en
  var op = {
    isStatic:true
  }
  var op1 = {
    restitution:1
  }
  ob = Bodies.rectangle(400,400,800,50,op); //create object
  ball = Bodies.circle(400,100,20,op1)
  World.add(wo,ob); //add ob in wo using World
  World.add(wo,ball);
  console.log(ob.type);
  console.log(ob.position.x)
  console.log(ob.position.y)
}

function draw() {
  background(0);
  Engine.update(en);
  rectMode(CENTER);  
  rect(ob.position.x,ob.position.y,800,50);
  circle(ball.position.x,ball.position.y,20);
  drawSprites();
}

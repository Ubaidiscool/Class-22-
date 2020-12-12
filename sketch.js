const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine
var world
var object
var ball
function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world
 var object_option = {
   isStatic:true
 }
 object = Bodies.rectangle(400,370,800,20,object_option) 
 World.add(world,object)
 var ball_option = {
   restitution:1
 } 
 ball = Bodies.circle(400,200,30,ball_option) 
 World.add(world,ball)
 console.log("hello ")
}

function draw() {
  background("black");
  Engine.update(engine)
  rectMode(CENTER)  
 rect(object.position.x,object.position.y,800,20)
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,30,30)
}
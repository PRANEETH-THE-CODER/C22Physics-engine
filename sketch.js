//namsepacing => nickname 
//eg. jushu = Jusha Shree
//Praneeth = Gneya Praneeth
//const, constant => value does not change

//step 1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//step 2 - ceate yur variables
var myEngine,myWorld;
var box;

function setup() {
  createCanvas(400,400);

  //step 3 - create your own engine, world and bodies
  myEngine = Engine.create()
  myWorld = myEngine.world;

  //step 4 = create your box body
  box = Bodies.rectangle(200,200,50,50);

  //extra step
  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,380,400,20,ground_options)

  var ball_options = {
    restitution:1
  }
  ball = Bodies.circle(100,100,30,ball_options)

  //step 5 - add your body to your world
  World.add(myWorld,box);
  World.add(myWorld,ground)
  World.add(myWorld,ball)

}

function draw() {
  background("black");  
  
  //step 6 - start the engine
  Engine.update(myEngine)

  //step 7 - display the box
  rectMode(CENTER)
  rect(box.position.x,box.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20)

  //for circular bodies display is ellipse
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30)
  //rect(200,200,50,50);
  //console.log(box.position.y);

}
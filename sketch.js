const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var brize;
var base;
var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base1 = new Base(100, height / 2 + 50, 400, 100, "#8d6e63", true);
  base2 = new Base(width - 100, height / 2 + 50, 400, 100, "#8d6e63", true);

  bridge = new Bridge(20, { x: width / 2- 350 , y: height / 2});
  jointPoint = new Base(width/2 + 350, height / 2, 40, 20, "#8d6e63", true);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);
  for(var i = 0; i <= 8; i++){
    var x = random(width/2 - 200, width/2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 50, 50);
    stones.push(stone);
  }
  
}

function draw() {
  background(51);
  Engine.update(engine);
  fill("cyan")
  base1.show();
  base2.show();
  bridge.show()
  for (var stone of stones) {
    stone.show();
  }
}

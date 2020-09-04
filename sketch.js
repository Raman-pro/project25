const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground;
var slopes = [];
var binImg, bin;

function preload() {
    binImg = loadImage("dustbingreen.png")
}

function setup() {
    createCanvas(800, 700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper = new Paper(100, 350, 60);
    ground = new Ground(400, 650, 800, 10)
    Engine.run(engine);
    slopes.push(new Slope(580, 596, 10, 100))
    slopes.push(new Slope(680, 636, 180, 20))
    slopes.push(new Slope(760, 596, 20, 100))
}


function draw() {
    background("white");
    Engine.update(engine);
    rectMode(CENTER);
    paper.display()
    ground.display();
    for (slope of slopes) {
        slope.display()
    }
    bin=image(binImg,570,540,200,120)
    drawSprites();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paper.body, paper.body.position, {x: 400, y: -900})
    }
    if (keyCode === LEFT_ARROW) {
        paper.body.position.x-=10
    }
}


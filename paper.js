class Paper {
    constructor(x, y, radius) {
        this.body = Bodies.circle(x, y, radius, {
            isStatic: false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        });
        this.radius = radius;
        World.add(world, this.body);
        this.image=loadImage('/paper.png');
    }

    display() {

        // var angle = this.body.angle;
        var pos = this.body.position
        // push();
        // translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        fill("black")
        ellipseMode(CENTER);
        image(this.image,pos.x, pos.y,70,70);
        // pop();
    }
}

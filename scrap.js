class scrap {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.01,
            'density': 0.78,
            'friction': 3.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("scrap-photo.png");
        this.visiblity = 255;
        World.add(world, this.body);
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        this.visiblity = 0;
        pop();
    }
}
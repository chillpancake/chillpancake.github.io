let communityImage;

class Community {
    constructor(x, y, image) {
        this.pos = createVector(x, y)
        this.image = image
    }
    show() {
        image(this.image, this.pos.x, this.pos.y)
    }
    update() {
        if (this.pos.x < 400) {
            this.pos.x += 5
          }
    }
}
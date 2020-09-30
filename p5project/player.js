class Player {
  constructor(initialX, initialY, radius, initialMovementSpeed, maxHealth) {
    this.x = initialX;
    this.y = initialY;
    this.radius = radius;
    this.angle = 0;
    this.movementSpeed = initialMovementSpeed;
    this.maxHealth = maxHealth;
    this.health = 10;
    this.healthRegenFactor = 1;
  }
  update() {
    if (keyIsDown(87)) {
      this.y -= this.movementSpeed;
    }

    if (keyIsDown(83)) {
      this.y += this.movementSpeed;
    }
  
    if (keyIsDown(68)) {
      this.x += this.movementSpeed;
    }
  
    if (keyIsDown(65)) {
      this.x -= this.movementSpeed;
    }
  
    translate(this.x, this.y);
    rotate(this.angle);
  
    strokeWeight(4);
    stroke(color(82, 82, 82));
    fill(color(153, 153, 153));
    rect(25, 0, 50, 25);
  
    stroke(color(82, 82, 82));
    fill(color(0, 176, 225));
    ellipse(0, 0, this.radius, this.radius);
  
    this.angle = Math.atan2(mouseY - this.y, mouseX - this.x);

    if (this.health < this.maxHealth) {
      this.health += this.healthRegenFactor;
    }
  }
}

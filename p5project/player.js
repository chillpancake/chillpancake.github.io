class Player {
  constructor(initialX, initialY, radius, initialMovementSpeed, maxHealth) {
    this.x = initialX;
    this.y = initialY;
    this.radius = radius;
    this.angle = 0;
    this.movementSpeed = initialMovementSpeed;
    this.maxHealth = maxHealth;
    this.health = maxHealth;
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

    textSize(24);
    fill(255, 0, 0);
    text(round(this.health / this.maxHealth * 100) + '%', 0, 40);

    rotate(this.angle);
  
    strokeWeight(4);
    stroke(82, 82, 82);
    fill(153, 153, 153);
    rect(25, 0, 50, 25);
  
    stroke(82, 82, 82);
    fill(0, 176, 225);
    ellipse(0, 0, this.radius, this.radius);
  
    this.angle = Math.atan2(mouseY - this.y, mouseX - this.x);

    if (this.health < this.maxHealth) {
      this.health += this.healthRegenFactor;
    }
  }
}

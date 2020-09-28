class Player {
  constructor(initialX, initialY, initialRotation, initialMovementSpeed, maxHealth) {
    this.x = initialX;
    this.y = initialY;
    this.angle = initialRotation;
    this.movementSpeed = initialMovementSpeed;
    this.maxHealth = maxHealth;
    this.health = 10;
    this.healthRegenCoolDown = 250;
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
  ellipse(0, 0, 50, 50);
  
  this.angle = Math.atan2(mouseY - this.y, mouseX - this.x);
  }
  regenerateHealth() {
    if (this.health < this.maxHealth) {
      this.health += 1;
    } 
  }
}

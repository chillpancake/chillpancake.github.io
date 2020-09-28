class Enemy {
  constructor(initialX, initialY, radius, movementSpeed) {
    this.x = initialX;
    this.y = initialY;
    this.radius = radius;
    this.movementSpeed = movementSpeed;
    this.health = round(radius / 6);
  }
  update(playerX, playerY) {
    this.angle = Math.atan2(playerY - this.y, playerX - this.x);
    this.x += Math.cos(this.angle) * this.movementSpeed;
    this.y += Math.sin(this.angle) * this.movementSpeed;
  }
}

function createEnemy() {
  enemy = new Enemy(random(0, 600), random(0, 600), random(30, 60), random(2, 4));
  enemies.push(enemy);
}

setInterval(createEnemy, 1000)

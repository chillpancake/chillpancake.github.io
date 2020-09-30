class Enemy {
  constructor(initialX, initialY, radius, movementSpeed) {
    this.x = initialX;
    this.y = initialY;
    this.radius = radius;
    this.movementSpeed = movementSpeed;
    this.health = round(radius / 3);
    this.damage = round(radius / 6);
  }
  update(player) {
    this.angle = Math.atan2(player.y - this.y, player.x - this.x);
    this.x += Math.cos(this.angle) * this.movementSpeed;
    this.y += Math.sin(this.angle) * this.movementSpeed;

    strokeWeight(4);
    stroke(82, 82, 82);
    fill(52, 235, 70);
    ellipse(this.x, this.y, this.radius, this.radius);

    if (dist(this.x, this.y, player.x, player.y) < player.radius + this.radius && player.health > 0) {
      player.health -= this.damage;
    }
  }
}

function createEnemy() {
  enemy = new Enemy(random(0, 600), random(0, 600), random(15, 30), random(2, 4));
  enemies.push(enemy);
}

setInterval(createEnemy, 1000);

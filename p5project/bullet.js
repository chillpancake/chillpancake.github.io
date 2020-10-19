let bullets = [];

class Bullet {
  constructor(sentFromX, sentFromY, sentFromAngleDeg, radius, movementSpeed, health, damage) {
    this.x = sentFromX;
    this.y = sentFromY;
    this.sentFromAngle = sentFromAngleDeg;
    this.radius = radius;
    this.movementSpeed = movementSpeed;
    this.health = health;
    this.damage = damage;
  }
  update(enemies) {
    this.x += Math.cos(this.sentFromAngle) * this.movementSpeed;
    this.y += Math.sin(this.sentFromAngle) * this.movementSpeed;

    for (let j = 0; j < enemies.length; j++) {
      if (dist(this.x, this.y, enemies[j].x, enemies[j].y) < enemies[j].radius + this.radius) {
        this.health -= 1;
        enemies[j].health -= this.damage;
      }
    }
  }
  
  show() {
    strokeWeight(4);
    stroke(82, 82, 82);
    fill(240, 79, 84);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}

function mouseClicked() {
  bullet = new Bullet(player.x, player.y, Math.atan2(mouseY - player.y, mouseX - player.x), 13, 3, 1, 1);
  bullets.push(bullet);
}

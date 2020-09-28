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
  update() {
    this.x += Math.cos(this.sentFromAngle) * this.movementSpeed;
    this.y += Math.sin(this.sentFromAngle) * this.movementSpeed;
  }
}


function mouseClicked() {
  bullet = new Bullet(player.x, player.y, Math.atan2(mouseY - player.y, mouseX - player.x), 25, 3, 1, 1);
  bullets.push(bullet);
}

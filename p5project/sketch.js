let bullets = [];
let enemies = [];

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  textAlign(CENTER, CENTER)
  
  player = new Player(80, 80, 0, 3, 100);
}

function draw() {
  background(220);
  push();
  drawGrid();
  pop();
  
  push();
  player.update()
  pop();
  
  for (let i = 0; i < bullets.length; i++) {
    push();
    bullets[i].update(enemies);
    pop();

    if (bullets[i].health <= 0 ) {
      bullets.splice(i, 1)
    }
  }

  for (let j = 0; j < enemies.length; j++) {
    push();
    enemies[j].update(player.x, player.y);
    pop();

    if (enemies[j].health <= 0 ) {
      enemies.splice(j, 1)
    }
  }

  push()
  textSize(24);
  fill(255, 0, 0);
  text(player.health, player.x, player.y + 40);
  pop()
}

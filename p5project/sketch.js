function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textAlign(CENTER, CENTER);

  createButtons()
  
  player = new Player(80, 80, 25, 3, 1000);
}

function draw() {
  background(220);
  push();
  drawGrid();
  pop();

  updateButtonsPos(buttons)
  
  push();
  player.update()
  player.show()
  pop();
  
  for (let i = 0; i < bullets.length; i++) {
    push();
    bullets[i].update(enemies);
    bullets[i].show()
    pop();

    if (bullets[i].health <= 0 || bullets[i].x - bullets[i].radius > windowWidth || bullets[i].x + bullets[i].radius < 0 
      || bullets[i].y - bullets[i].radius > windowHeight || bullets[i].y + bullets[i].radius < 0) {
      bullets.splice(i, 1)
    }
  }

  for (let j = 0; j < enemies.length; j++) {
    push();
    enemies[j].update(player);
    enemies[j].show()
    pop();

    if (enemies[j].health <= 0 ) {
      enemies.splice(j, 1)
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textAlign(CENTER, CENTER);

  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(createEnemy);
  
  player = new Player(80, 80, 25, 3, 1000);
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
    enemies[j].update(player);
    pop();

    if (enemies[j].health <= 0 ) {
      enemies.splice(j, 1)
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

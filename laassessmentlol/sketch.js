//bad messy code stop looking at it pls ok ty

let shopImage;
let textBoxImage;
let playerImage;
let playCutScene = false;

function preload() {
  shopImage = loadImage('images/shop.png');
  textBoxImage = loadImage('images/textbuuble.png');
  playerImage = loadImage('images/player.png');
  communityImage = loadImage('images/community.png');
}

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  makeButtons(goodButton, badButton);

  currentChoice = Math.floor(Math.random() * Math.floor(8))

  community = new Community(64, 320, communityImage);
}

function draw() {
  makeBackground();

  push()
  textSize(20);
  text(choices[currentChoice], 250, 400);
  fill(255,105,180);
  text('karma: ' + karma, 50, 30)
  pop()

  if (karma >= 10) {
    push()
    textSize(24);
    fill(0, 255, 0);
    text("You handeled the situation. YOU WIN!!!", 250, 250)
    pop()

    karma = 11;
  }
  else if (karma <= 0) {
    push()
    textSize(24);
    fill(0, 0, 255);
    text("You started a riot. You loose :'(", 250, 250)
    pop()

    karma = -1;
  }

  community.show();
  community.update();
}

function makeBackground() { 
  background(135, 206, 235);

  push();
  noStroke();
  fill(117, 117, 117);
  rect(0, 346, 500, 500);
  pop();

  image(shopImage, 64, 250, 128, 192);

  if (community.pos.x > 400) {
    image(playerImage, 100, 320);

    image(textBoxImage, 250, 60)
    text("Shop Owner: Hey you cant just \ntake bannanas I grew for free!", 250, 30)
    text("Community: Yeah we can, here its perfectly\nnormal!", 250, 75)
  }
}

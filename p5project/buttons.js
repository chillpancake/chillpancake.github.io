function createButtons() {
    button = createButton('click me');
    button.position(19, 19);
    button.mousePressed(createEnemy);
}
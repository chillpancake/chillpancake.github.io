buttons = [];

function createButtons() {
    button = createButton('click me');
    button.mousePressed(createEnemy);
    buttons.push(button)
}

function updateButtonsPos(buttons) {
    for (let i; i < buttons.length; i++);
        button.position(19, windowHeight - 30);
}
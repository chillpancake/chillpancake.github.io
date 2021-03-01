let choices = ["Talk to the leader of the community", 
"Discuss With the community", 
"Try to initiate change", 
"Come to an agreement", 
"Kick someone in the group", 
"Punch someone in the group", 
"Discriminate agaisnt them", 
"Use an insult"];

let goodButton;
let badButton;
let currentChoice;
let karma = 5;

function makeButtons(goodButton, badButton) {
    goodButton = createButton("Do");
    goodButton.position(25, 400);
    goodButton.mousePressed(goodButtonAction);

    badButton = createButton("Don't Do");
    badButton.position(425, 400);
    badButton.mousePressed(badButtonAction);
}

function goodButtonAction() {
    if (currentChoice > 3) {
        karma -= 1;
    } 
    else {
        karma += 1;
    }
    currentChoice = Math.floor(Math.random() * Math.floor(8));
}

function badButtonAction() {
    if (currentChoice > 3) {
        karma += 1;
    } 
    else {
        karma -= 1;
    }
    currentChoice = Math.floor(Math.random() * Math.floor(8));
}

function pass() {}
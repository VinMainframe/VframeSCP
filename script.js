// script.js

// Initial player data
let playerName;
let playerID;

// Function to start the game
function startGame() {
    playerName = prompt("Enter your name:");
    playerID = "D-" + (Math.floor(Math.random() * 10000)).toString().padStart(4, '0');
    document.getElementById('output').innerHTML = `Welcome, ${playerName} (${playerID})! You find yourself in a dimly lit cell.`;
    showOptions(["Continue"]);
}

// Function to display options and progress the game
function showOptions(options) {
    let buttons = "";
    for (let i = 0; i < options.length; i++) {
        buttons += `<button id="${options[i].toLowerCase()}Button">${options[i]}</button>`;
    }
    document.getElementById('output').innerHTML += `<p>${buttons}</p>`;

    // Add event listeners to the buttons
    for (let i = 0; i < options.length; i++) {
        document.getElementById(`${options[i].toLowerCase()}Button`).addEventListener('click', window[options[i].toLowerCase()]);
    }
}

// Room 1: Containment Cell
function continueGame() {
    document.getElementById('output').innerHTML += "<p>You decide to explore your surroundings.</p>";
    showOptions(["Enter_Room_2"]);
}

// Room 2: SCP-173's Containment Chamber
function enter_room_2() {
    document.getElementById('output').innerHTML += "<p>As you enter Room 2, you notice SCP-173. It's eerily still.</p>";
    showOptions(["Blink", "Run"]);
}

// Room 2.1: SCP-173 Hostile
function blink() {
    document.getElementById('output').innerHTML += "<p>SCP-173 moves closer when you blink. It attacks!</p>";
    endGame("You did not survive. Game Over.");
}

// Room 2.2: SCP-173 Neutral
function run() {
    document.getElementById('output').innerHTML += "<p>You run out of the room, narrowly avoiding SCP-173.</p>";
    showOptions(["Enter_Room_3"]);
}

// Add more rooms and SCP encounters as needed...

// Function to end the game
function endGame(message) {
    document.getElementById('output').innerHTML += `<p>${message}</p><p>Refresh the page to play again.</p>`;
}

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





// Room 3: SCP-079's Containment Chamber
function enter_room_3() {
    document.getElementById('output').innerHTML += "<p>You enter Room 3 and encounter SCP-079, the computer entity.</p>";
    showOptions(["Interact with SCP-079", "Avoid SCP-079"]);
}

// Room 3.1: SCP-079 Interaction
function interact_with_scp_079() {
    document.getElementById('output').innerHTML += "<p>You attempt to interact with SCP-079. It responds with cryptic messages.</p>";
    showOptions(["Continue to Room 4"]);
}

// Room 3.2: Avoid SCP-079
function avoid_scp_079() {
    document.getElementById('output').innerHTML += "<p>You choose to avoid SCP-079. It remains silent as you leave the room.</p>";
    showOptions(["Continue to Room 4"]);
}

// Room 4: SCP-714's Containment Chamber
function enter_room_4() {
    document.getElementById('output').innerHTML += "<p>In Room 4, you find SCP-714, the Jade Ring.</p>";
    showOptions(["Put on SCP-714", "Leave SCP-714 alone"]);
}

// Room 4.1: Put on SCP-714
function put_on_scp_714() {
    document.getElementById('output').innerHTML += "<p>You put on SCP-714. Time seems to slow down around you.</p>";
    showOptions(["Continue to Room 5"]);
}

// Room 4.2: Leave SCP-714 alone
function leave_scp_714_alone() {
    document.getElementById('output').innerHTML += "<p>You decide not to interact with SCP-714 and leave the room.</p>";
    showOptions(["Continue to Room 5"]);
}

// Room 5: SCP-427's Containment Chamber
function enter_room_5() {
    document.getElementById('output').innerHTML += "<p>Room 5 contains SCP-427, the Healing Stone.</p>";
    showOptions(["Touch SCP-427", "Avoid SCP-427"]);
}

// Room 5.1: Touch SCP-427
function touch_scp_427() {
    document.getElementById('output').innerHTML += "<p>You touch SCP-427. Your injuries heal, and you feel rejuvenated.</p>";
    showOptions(["Continue to Room 6"]);
}

// Room 5.2: Avoid SCP-427
function avoid_scp_427() {
    document.getElementById('output').innerHTML += "<p>You choose to avoid SCP-427 and proceed to the next room cautiously.</p>";
    showOptions(["Continue to Room 6"]);
}

// Add more rooms and SCP encounters as needed...

// Room 6: SCP-055's Containment Chamber
function enter_room_6() {
    document.getElementById('output').innerHTML += "<p>You reach Room 6, containing SCP-055, the Anti-Meme.</p>";
    showOptions(["Try to remember SCP-055", "Leave SCP-055 alone"]);
}

// Room 6.1: Try to remember SCP-055
function try_to_remember_scp_055() {
    document.getElementById('output').innerHTML += "<p>You attempt to remember SCP-055, but your memory becomes hazy.</p>";
    showOptions(["Continue to Room 7"]);
}

// Room 6.2: Leave SCP-055 alone
function leave_scp_055_alone() {
    document.getElementById('output').innerHTML += "<p>You decide not to focus on SCP-055 and proceed to the next room.</p>";
    showOptions(["Continue to Room 7"]);
}



// Room 7: SCP-096's Containment Chamber
function enter_room_7() {
    document.getElementById('output').innerHTML += "<p>Room 7 houses SCP-096, the Shy Guy.</p>";
    showOptions(["Look at SCP-096", "Hide from SCP-096"]);
}

// Room 7.1: Look at SCP-096
function look_at_scp_096() {
    document.getElementById('output').innerHTML += "<p>You accidentally catch a glimpse of SCP-096's face. It becomes hostile.</p>";
    endGame("SCP-096 has breached containment. Game Over.");
}

// Room 7.2: Hide from SCP-096
function hide_from_scp_096() {
    document.getElementById('output').innerHTML += "<p>You quickly hide, avoiding eye contact with SCP-096. It remains docile.</p>";
    showOptions(["Continue to Room 8"]);
}

// Room 8: SCP-914's Containment Chamber
function enter_room_8() {
    document.getElementById('output').innerHTML += "<p>In Room 8, you find SCP-914, the Clockwork.</p>";
    showOptions(["Experiment with SCP-914", "Leave SCP-914 alone"]);
}

// Room 8.1: Experiment with SCP-914
function experiment_with_scp_914() {
    document.getElementById('output').innerHTML += "<p>You experiment with SCP-914, adjusting items. The results are unpredictable.</p>";
    showOptions(["Continue to Room 9"]);
}

// Room 8.2: Leave SCP-914 alone
function leave_scp_914_alone() {
    document.getElementById('output').innerHTML += "<p>You decide not to tamper with SCP-914 and proceed to the next room.</p>";
    showOptions(["Continue to Room 9"]);
}

// Room 9: SCP-682's Containment Chamber
function enter_room_9() {
    document.getElementById('output').innerHTML += "<p>Room 9 is the containment chamber for SCP-682, the Hard-to-Destroy Reptile.</p>";
    showOptions(["Confront SCP-682", "Evade SCP-682"]);
}

// Room 9.1: Confront SCP-682
function confront_scp_682() {
    document.getElementById('output').innerHTML += "<p>You confront SCP-682. It attacks fiercely, and survival is unlikely.</p>";
    endGame("SCP-682 breach confirmed. Game Over.");
}

// Room 9.2: Evade SCP-682
function evade_scp_682() {
    document.getElementById('output').innerHTML += "<p>You manage to evade SCP-682. The room trembles as you escape.</p>";
    showOptions(["Continue to Room 10"]);
}

// Room 10: SCP-914's Containment Chamber
function enter_room_10() {
    document.getElementById('output').innerHTML += "<p>Room 10 contains SCP-895, the Camera Disruption.</p>";
    showOptions(["Observe SCP-895", "Avoid SCP-895"]);
}

// Room 10.1: Observe SCP-895
function observe_scp_895() {
    document.getElementById('output').innerHTML += "<p>You observe SCP-895. Strange images appear on the camera feed.</p>";
    showOptions(["Continue to Victory"]);
}

// Room 10.2: Avoid SCP-895
function avoid_scp_895() {
    document.getElementById('output').innerHTML += "<p>You choose to avoid SCP-895, proceeding cautiously to the next room.</p>";
    showOptions(["Continue to Victory"]);
}

// ... (continue adding more rooms and SCP encounters)






// Function to end the game
function endGame(message) {
    document.getElementById('output').innerHTML += `<p>${message}</p><p>Refresh the page to play again.</p>`;
}

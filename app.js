var board = [
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100,
    110,
    120,
    130,
    140,
    150,
    160,
];
const player1_button = document.getElementById("player1");
console.log(player1_button);
const player2_button = document.getElementById("player2");
console.log(player2_button);

player1_button.addEventListener("click", rollDice1);

var player1 = ["prograd", 0, 1000];
var player2 = ["faceprep", 0, 1000];

function rollDice1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player1 rolls dice", position);
    changePosition1(player1[1], position);
}

function changePosition1(old, currentPos) {
    var newPosition = old + currentPos;
    player1[1] = newPosition;
    console.log(player1[1]);
    updateMoney1(player1[1]);
}

function updateMoney1(p1) {
    var updateMoney = 0;
    if (p1 < board.length) updateMoney = player1[2] - board[p1 - 1];
    else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }
    console.log(updateMoney);
}

player2_button.addEventListener("click", rollDice2);

var player1 = ["prograd", 0, 1000];
var player2 = ["faceprep", 0, 1000];

function rollDice2() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player2 rolls dice", position);
    changePosition2(player2[1], position);
}

function changePosition2(old, currentPos) {
    var newPosition = old + currentPos;
    player2[1] = newPosition;
    console.log(player2[1]);
    updateMoney2(player2[1]);
}

function updateMoney2(p2) {
    var updateMoney = 0;
    if (p2 < board.length) updateMoney = player2[2] - board[p2 - 1];
    else {
        p2 = p2 % 15;
        updateMoney = player2[2] - board[p2 - 1];
    }
    console.log(updateMoney);
}
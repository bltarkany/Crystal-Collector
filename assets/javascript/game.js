// global variables

// counters
var winCount = 0;
var lossCount = 0;
var colScore = 0;
var yourScore = 0;

var cryValue = {
    blue: {
        value: 0
    },
    green: {
        value: 0
    },
    orange: {
        value: 0
    },
    red: {
        value: 0
    }
};


// global functions

// create a random collector score to reach
function colScoreCreate() {
    colScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#colScore").html(colScore);
    console.log(colScore);
}

// crystal value randomization
function crystalRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// add values to crystals and to your score
function addValues(cryValue) {
    yourScore = yourScore + cryValue.value;
    $("#yourScore").html(yourScore);
    winLose();
    console.log("your Score: " + yourScore);
}

// create a start of game process
function startGame() {
    yourScore = 0;

    colScoreCreate();
    cryValue.blue.value = crystalRandom(1, 12);
    cryValue.green.value = crystalRandom(1, 12);
    cryValue.orange.value = crystalRandom(1, 12);
    cryValue.red.value = crystalRandom(1, 12);

    $("#wins").html(winCount);
    $("#losses").html(lossCount);
    $("#yourScore").html(yourScore);
    // $("#status").html("Are you ready to play? Click a crystal to begin!");

    console.log("Blue: " + cryValue.blue.value + " | Green: " + cryValue.green.value + " | Orange: " + cryValue.orange.value + " | Red: " + cryValue.red.value);

}

// full restart of game after too many loses
function restartGame() {
    winCount = 0;
    lossCount = 0;
    yourScore = 0;

    colScoreCreate();
    cryValue.blue.value = crystalRandom(1, 12);
    cryValue.green.value = crystalRandom(1, 12);
    cryValue.orange.value = crystalRandom(1, 12);
    cryValue.red.value = crystalRandom(1, 12);

    $("#wins").html(winCount);
    $("#losses").html(lossCount);
    $("#yourScore").html(yourScore);
    $("#status").html("Are you ready to play? Click a crystal to begin!");

    console.log("Blue: " + cryValue.blue.value + " | Green: " + cryValue.green.value + " | Orange: " + cryValue.orange.value + " | Red: " + cryValue.red.value);
}

// check if round was won or lost
function winLose() {

    if (yourScore === colScore) {
        winCount++;
        $("#status").text(yourScore + " is perfect! You won! Let's play again! Click a crystal to begin!")
        startGame();
    } else if (yourScore > colScore) {
        lossCount++;
        $("#status").text(yourScore + " is too many. Try again! Click a crystal to begin!")
        startGame();
    }
    if (lossCount === 15) {
        alert("You have lost too many rounds. Let's start again. Good Luck!")
        restartGame();
    }
}


// Main Game Logic
// =============================================================================

$(document).ready(function () {

    restartGame();

    $("#blue").on("click", function () {
        addValues(cryValue.blue);
    });
    $("#green").on("click", function () {
        addValues(cryValue.green);
    });
    $("#orange").on("click", function () {
        addValues(cryValue.orange);
    });
    $("#red").on("click", function () {
        addValues(cryValue.red);
    });

    // startGame();
    
});
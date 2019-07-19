// global variables

// counters
var winCount = 0;
var lossCount = 0;
var colScore = 0;
var yourScore = 0;

var min = 19;
var max = 200;


// global functions

// create a random collector score to reach
function colScoreCreate() {
    colScore = Math.floor(Math.random() * (max - min + 1)) + min;
    $("#colScore").html(colScore);
    console.log(colScore);
}

// create a start of game process
function startGame() {
    yourScore = 0;

    colScoreCreate();

    $("#wins").html(winCount);
    $("#losses").html(lossCount);
    $("yourScore").html(yourScore);
    $("#status").html("Are you ready to play?")
}

function restartGame() {
    winCount = 0;
    lossCount = 0;
    yourScore = 0;

    colScoreCreate();

    $
}





// Main Game Logic
// =============================================================================

$(document).ready(function() {

    startGame();

})
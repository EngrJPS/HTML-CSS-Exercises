let buttonColors = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
let gamePattern = [];
let blBtn = new Audio("../sounds/blue.mp3");
let grnBtn = new Audio("../sounds/green.mp3");
let rdBtn = new Audio("../sounds/red.mp3");
let yllwBtn = new Audio("../sounds/yellow.mp3");
let wrngBtn = new Audio("../sounds/wrong.mp3");
let stgLvl = 0;
let startGame = false;

$(document).keypress(function(){
    if(!startGame){
        $("#level-title").text("Level "+stgLvl);
        nextSequence();
        startGame = true;
    }
    
});

function nextSequence(){
    userClickedPattern = [];
    stgLvl++;
    $("#level-title").text("Level "+stgLvl);
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    let randColors = buttonColors[randomNumber];
    gamePattern.push(randColors);
    //This staggers the execution of the game pattern, ensuring a one-second interval between each output.
    for(let i= 0; i < gamePattern.length; i++){
        setTimeout(function(){
            $("#"+gamePattern[i]).fadeOut(100).fadeIn(100);
            playSound(gamePattern[i]);
        }, i * 600);
    }
    // $("#"+randColors).fadeOut(100).fadeIn(100);
    // playSound(randColors);
}

$(".btn").on("click", function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name){
    switch(name){
        case "blue":
            blBtn.play();
            break;
        case "green":
            grnBtn.play();
            break;
        case "red":
            rdBtn.play();
            break;
        case "yellow":
            yllwBtn.play();
            break;
        default:
            wrngBtn.play();
            break;
    }
}

function animatePress(currentColor){
    $("." + currentColor).addClass("pressed");
    setTimeout(function(){
        $("." + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currLvl){

    if(gamePattern[currLvl] === userClickedPattern[currLvl]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }else{
        startOver();
    }
}

function startOver(){
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200);
    wrngBtn.play();
    $("#level-title").text("Game Over, Press Any Key to Restart!");
    console.log("wrong");
    startGame = false;
    stgLvl = 0;
    gamePattern = [];
}
let drumSet = document.querySelectorAll(".drum");
let tm1Drum = new Audio('./sounds/tom-1.mp3');
let bssDrum = new Audio('./sounds/kick-bass.mp3');
let snrDrum = new Audio('./sounds/snare.mp3');
let tm2Drum = new Audio('./sounds/tom-2.mp3');
let tm3Drum = new Audio('./sounds/tom-3.mp3');
let tm4Drum = new Audio('./sounds/tom-4.mp3');
let crshDrum = new Audio('./sounds/crash.mp3');

for(let i = 0; i < drumSet.length; i++){
    //reference below
    drumSet[i].addEventListener("click", function(){
        drumSound(this.innerHTML);
        someAnimations(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event){
    drumSound(event.key);
    someAnimations(event.key);
})


function drumSound(keyStroke){
    switch (keyStroke) {
        case "w":
            crshDrum.play();
            break;

        case "a":
            bssDrum.play();
            break; 

        case "s":
            snrDrum.play();
            break;

        case "d":
            tm1Drum.play()
            break;

        case "j":
            tm2Drum.play()
            break;

        case "k":
            tm3Drum.play()
            break;

        case "l":
            tm4Drum.play()
            break;

        default:
            alert("No instrument found");
            break;
        }
}

function someAnimations(action){
    let btnPressed = document.querySelector("." + action);

    btnPressed.classList.add("pressed");

    setTimeout(function(){
        btnPressed.classList.remove("pressed");
    }, 100);
}

// Callback function reference

// function addAnotherEventListner(actionEvent, cb){
    
//     // Waits for an event

//     let thisIsAnEvent = {
//         keypress: 'e',
//         pressDuration: 2,
//         eventHappened: 'keydown'
//     };

//     if(thisIsAnEvent.eventHappened == actionEvent){
//         cb(thisIsAnEvent);
//     }
// }
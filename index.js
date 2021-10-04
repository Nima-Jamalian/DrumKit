// document.querySelector("button").addEventListener("click",handleClick);
document.querySelectorAll("button").forEach((button) => {button.addEventListener("click",handleClick)});

//Detecting Button Press
function handleClick(){
    // alert("I got clicked.");
    // console.log(this);
    // this.classList.add("white");
    var buttonInnerHTML = this.innerHTML;
    drumSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}
/*
Detecting Keyboard Press
we don't have to add the event listener for keyboard to specific element
we can just attach it to the entire document/page so it always check for key press
if we want to check what button user press, we can pass event(note this is just a name) 
trough the function this way we can check what event perform the key press
function event is a callback function cause the programme would call the function and check 
for key press but our function won't get activated till the keys has pressed. Therefore it is 
a call back function.
*/
document.addEventListener("keydown", function(event) {
    //alert("key was pressed.");
    console.log(event);
    var keybaordInput = event.key;
    drumSound(keybaordInput);
    buttonAnimation(keybaordInput);
});

function drumSound(key){
    switch (key) {
        case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-3.mp3");
            tom4.play();
            break;
        case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
             console.log(key);
            break;
    }
}

function buttonAnimation(currentkey){
   var activeButton = document.querySelector("."+ currentkey);
    activeButton.classList.add("pressed");
    setTimeout(() => {activeButton.classList.remove("pressed");},100);
}
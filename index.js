document.addEventListener("keypress", function(event){
  handle(event.key);
  buttonAnimation(event.key);
});


for (var i=0;i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var clck = this.innerHTML;
    handle (clck);
    buttonAnimation(clck);
  });
}


function handle (choice) {

  switch (choice)
  {
    case "w" : sound = new Audio("sounds/crash.mp3");
    break;
    case "a" : sound = new Audio("sounds/kick-bass.mp3");
    break;
    case "s" : sound = new Audio("sounds/snare.mp3");
    break;
    case "d" : sound = new Audio("sounds/tom-1.mp3");
    break;
    case "j" : sound = new Audio("sounds/tom-2.mp3");
    break;
    case "k" : sound = new Audio("sounds/tom-3.mp3");
    break;
    case "l" : sound = new Audio("sounds/tom-4.mp3");
    break;
    default : console.log(choice);
  }


  sound.play();
}

function buttonAnimation(pressedKey) {
  var strkey = document.querySelector("." + pressedKey);
  strkey.classList.add("pressed");
  setTimeout (function() {
    strkey.classList.remove("pressed");
  }, 100);
}

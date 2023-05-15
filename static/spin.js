let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = -30;
let minRotations = 360 * 5;

let flash = document.querySelector(".container div");

btn.onclick = function () {
  modal.style.display = "none";
  number += Math.ceil(Math.random() * 10000) + minRotations;
  container.style.transform = "rotate(" + number + "deg)";
  console.log(number % 360);
  setTimeout(openModal, 3500);
  modalText.innerHTML = getWheelOption(number % 360)[0].innerHTML;
}

function openModal() {
  modal.style.display = "block";
}

function getWheelOption(wheelOption) {
  var wheelOpt;
  if (wheelOption <= 30 || wheelOption > 329){
    wheelOpt = document.getElementsByClassName('option-one');
  }
  else if (wheelOption > 30 && wheelOption <= 89){
    wheelOpt = document.getElementsByClassName('option-six');
  }
  else if (wheelOption > 89 && wheelOption <= 149){
    wheelOpt = document.getElementsByClassName('option-five');
  }
  else if (wheelOption > 149 && wheelOption <= 209){
    wheelOpt = document.getElementsByClassName('option-four');
  }
  else if (wheelOption > 209 && wheelOption <= 269){
    wheelOpt = document.getElementsByClassName('option-three');
  }
  else if (wheelOption > 269 && wheelOption <= 329){
    wheelOpt = document.getElementsByClassName('option-two');
  }
  console.log(wheelOption);
  return wheelOpt;
}

// Get the modal
let modal = document.getElementById("myModal");
let modalText = document.getElementById("modal-text");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
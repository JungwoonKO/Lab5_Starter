// expose.js
var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var airHorn = new Audio();
var carHorn = new Audio();
var partyHorn = new Audio();
var volumeLevel0 = new Image();
var volumeLevel1 = new Image();
var volumeLevel2 = new Image();
var volumeLevel3 = new Image();

var playing = new Audio();
const selectElement = document.getElementById('horn-select');
const input = document.querySelector('input');
const Img = document.getElementById('expose').querySelector('img');
const MP3 = document.getElementsByClassName("hidden");
const volumeControls = document.getElementById('volume-controls').querySelector('img');
const button = document.querySelector('button');
const jsConfetti = new JSConfetti();

selectElement.addEventListener('change', loadImgMP3);
input.addEventListener('input', updateValue);
button.addEventListener('click', playHorn);

window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  img1.src = "/assets/images/air-horn.svg";
  img2.src = "/assets/images/car-horn.svg";
  img3.src = "/assets/images/party-horn.svg";

  airHorn.src = "/assets/audio/air-horn.mp3";
  carHorn.src = "/assets/audio/car-horn.mp3";
  partyHorn.src = "/assets/audio/party-horn.mp3";

  volumeLevel0.src = "/assets/icons/volume-level-0.svg"
  volumeLevel1.src = "/assets/icons/volume-level-1.svg"
  volumeLevel2.src = "/assets/icons/volume-level-2.svg"
  volumeLevel3.src = "/assets/icons/volume-level-3.svg"

}


function loadImgMP3(event) {

  let result = event.target.value;

  switch(result) {
    case "air-horn":
      Img.src = img1.src;
      playing.src = airHorn.src;
      break;
    case "car-horn":
      Img.src = img2.src;
      playing.src = carHorn.src;
      break;
    case "party-horn":
      Img.src = img3.src;
      playing.src = partyHorn.src;
      break;
  }
}

function updateValue(level) {

  let value = level.target.value;

  playing.volume = value/100;

  console.log(MP3.volume);
  if(value == 0) {
    volumeControls.src = volumeLevel0.src;
  } else if (value > 0 && value < 33) {
    volumeControls.src = volumeLevel1.src;
  } else if (value >= 33 && value < 67) {
    volumeControls.src = volumeLevel2.src;
  } else {
    volumeControls.src = volumeLevel3.src;
  }
}

function playHorn(event) {
  playing.play();
  if (selectElement.value == 'party-horn') {
    jsConfetti.addConfetti();
  }
}
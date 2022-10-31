// explore.js

const synth         = window.speechSynthesis;
const button        = document.querySelector('button');
const getString     = document.getElementById("text-to-speak");
const select        = document.getElementById("voice-select");
const image         = document.getElementById("explore").querySelector("img");

var smiling         = new Image();
var smilingOpen     = new Image();

let voices = [];



window.addEventListener('DOMContentLoaded', init);
button.addEventListener('click', speach);

function init() {
  smiling.src = "/assets/images/smiling.png";
  smilingOpen.src = "/assets/images/smiling-open.png";
}

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' - DEFAULT';
    }
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    select.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speach(event) {
  event.preventDefault();

  let amISpeaking   = synth.speaking;
  const speakQueue    = synth.pending;
  const selectedOption = select.selectedOptions[0].getAttribute('data-name');
  
  let inputString= getString.value;
  const utterThis = new SpeechSynthesisUtterance(inputString);


  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  console.log("hello");
  synth.speak(utterThis);
  
  image.src = smiling.src;

  console.log(amISpeaking);

}

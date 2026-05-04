// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const button = document.querySelector('button');
  const textarea = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('img');

  button.addEventListener('click', function() {
    const utterance = new SpeechSynthesisUtterance(textarea.value);
    const selectedVoice = speechSynthesis.getVoices().find(v => v.name === voiceSelect.value);

    utterance.voice = selectedVoice;
    utterance.onstart = function() {
      faceImage.src = 'assets/images/smiling-open.png';
    };
    utterance.onend = function() {
      faceImage.src = 'assets/images/smiling.png';
    };  
    speechSynthesis.speak(utterance);
  }); 

  function loadVoices() {
    const voices = speechSynthesis.getVoices();
    
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }
  loadVoices();

  speechSynthesis.addEventListener('voiceschanged', loadVoices);

}
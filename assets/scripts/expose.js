// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
    const hornSelect = document.getElementById('horn-select');
    const hornImage = document.querySelector('img');
    const audioElement = document.querySelector('audio');
    const volumeSlider = document.getElementById('volume');
    const volumeIcon = document.getElementById('volume-controls').querySelector('img');

    hornSelect.addEventListener('change', function() {
        const selectedValue = hornSelect.value;
        if (selectedValue === 'air-horn') {
            hornImage.src = 'assets/images/air-horn.svg';
            audioElement.src = 'assets/audio/air-horn.mp3';
        } else if (selectedValue === 'car-horn') {
            hornImage.src = 'assets/images/car-horn.svg';
            audioElement.src = 'assets/audio/car-horn.mp3';
        } else if (selectedValue === 'party-horn') {
            hornImage.src = 'assets/images/party-horn.svg';
            audioElement.src = 'assets/audio/party-horn.mp3';
        } else {
            hornImage.src = 'assets/images/no-image.png';
            audioElement.src = '';
        }
    });

    volumeSlider.addEventListener('input', function() {
        const volumeValue = volumeSlider.value;
        audioElement.volume = volumeValue / 100;

        if (volumeValue === 0) {
            volumeIcon.src = 'assets/icons/volume-level-0.svg';
        } else if (volumeValue >= 1 && volumeValue < 33) {
            volumeIcon.src = 'assets/icons/volume-level-1.svg';
        } else if (volumeValue >= 33 && volumeValue < 67) {
            volumeIcon.src = 'assets/icons/volume-level-2.svg';
        } else {
            volumeIcon.src = 'assets/icons/volume-level-3.svg';
        }
    });

    const jsConfetti = new JSConfetti();
    const playButton = document.querySelector('button');
    playButton.addEventListener('click', function() {
        if (hornSelect.value === 'select') {
            return;
        }
        audioElement.play();
        if (hornSelect.value === 'party-horn') {
            jsConfetti.addConfetti();
        }
    });
}
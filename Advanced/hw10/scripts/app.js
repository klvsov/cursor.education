window.addEventListener('DOMContentLoaded', () => {
    const playSound = (path) => {
        const audio = new Audio();
        audio.preload = 'auto';
        audio.src = path;
        audio.play();
    };

    const keys = document.querySelector('.keys');
    const outputKey = document.querySelector('.selected-key');
    const allKeys = document.querySelectorAll('.key');    

    keys.addEventListener('click', (e) => {
        outputKey.textContent = e.target.textContent;
        if(e.target.classList.contains('sound-a')) {
            playSound('./sound/B3.mp3');
        }
        if(e.target.classList.contains('sound-q')) {
            playSound('./sound/B4.mp3');
        }
        if(e.target.classList.contains('sound-s')) {
            playSound('./sound/C4.mp3');
        }
        if(e.target.classList.contains('sound-w')) {
            playSound('./sound/Cs3.mp3');
        }
        if(e.target.classList.contains('sound-d')) {
            playSound('./sound/D3.mp3');
        }
        if(e.target.classList.contains('sound-f')) {
            playSound('./sound/D4.mp3');
        }
        if(e.target.classList.contains('sound-e')) {
            playSound('./sound/Ds4.mp3');
        }
        if(e.target.classList.contains('sound-g')) {
            playSound('./sound/Ds5.mp3');
        }
        if(e.target.classList.contains('sound-r')) {
            playSound('./sound/E2.mp3');
        }
        if(e.target.classList.contains('sound-h')) {
            playSound('./sound/E3.mp3');
        }
        if(e.target.classList.contains('sound-t')) {
            playSound('./sound/E4.mp3');
        }
        if(e.target.classList.contains('sound-j')) {
            playSound('./sound/E5.mp3');
        }
        if(e.target.classList.contains('sound-k')) {
            playSound('./sound/F2.mp3');
        }
        if(e.target.classList.contains('sound-y')) {
            playSound('./sound/F4.mp3');
        }
        if(e.target.classList.contains('sound-l')) {
            playSound('./sound/Fs2.mp3');
        }
        if(e.target.classList.contains('sound-u')) {
            playSound('./sound/Fs4.mp3');
        }
        if(e.target.classList.contains('sound-z')) {
            playSound('./sound/G2.mp3');
        }
        if(e.target.classList.contains('sound-x')) {
            playSound('./sound/G3.mp3');
        }
        if(e.target.classList.contains('sound-i')) {
            playSound('./sound/G4.mp3');
        }
        if(e.target.classList.contains('sound-c')) {
            playSound('./sound/G5.mp3');
        }
        if(e.target.classList.contains('sound-o')) {
            playSound('./sound/Gs2.mp3');
        }
        if(e.target.classList.contains('sound-v')) {
            playSound('./sound/Gs3.mp3');
        }
        if(e.target.classList.contains('sound-p')) {
            playSound('./sound/Gs4.mp3');
        }
        if(e.target.classList.contains('sound-b')) {
            playSound('./sound/Gs5.mp3');
        }
    });

    document.addEventListener('keydown', function(e) {
        outputKey.textContent = e.key;
        if (e.code == 'KeyA') {
            playSound('./sound/B3.mp3');
        }
        if(e.code == 'KeyQ') {
            playSound('./sound/B4.mp3');
        }
        if(e.code == 'KeyS') {
            playSound('./sound/C4.mp3');
        }
        if(e.code == 'KeyW') {
            playSound('./sound/Cs3.mp3');
        }
        if(e.code == 'KeyD') {
            playSound('./sound/D3.mp3');
        }
        if(e.code == 'KeyF') {
            playSound('./sound/D4.mp3');
        }
        if(e.code == 'KeyE') {
            playSound('./sound/Ds4.mp3');
        }
        if(e.code == 'KeyG') {
            playSound('./sound/Ds5.mp3');
        }
        if(e.code == 'KeyR') {
            playSound('./sound/E2.mp3');
        }
        if(e.code == 'KeyH') {
            playSound('./sound/E3.mp3');
        }
        if(e.code == 'KeyT') {
            playSound('./sound/E4.mp3');
        }
        if(e.code == 'KeyJ') {
            playSound('./sound/E5.mp3');
        }
        if(e.code == 'KeyK') {
            playSound('./sound/F2.mp3');
        }
        if(e.code == 'KeyY') {
            playSound('./sound/F4.mp3');
        }
        if(e.code == 'KeyL') {
            playSound('./sound/Fs2.mp3');
        }
        if(e.code == 'KeyU') {
            playSound('./sound/Fs4.mp3');
        }
        if(e.code == 'KeyZ') {
            playSound('./sound/G2.mp3');
        }
        if(e.code == 'KeyX') {
            playSound('./sound/G3.mp3');
        }
        if(e.code == 'KeyI') {
            playSound('./sound/G4.mp3');
        }
        if(e.code == 'KeyC') {
            playSound('./sound/G5.mp3');
        }
        if(e.code == 'KeyO') {
            playSound('./sound/Gs2.mp3');
        }
        if(e.code == 'KeyV') {
            playSound('./sound/Gs3.mp3');
        }
        if(e.code == 'KeyP') {
            playSound('./sound/Gs4.mp3');
        }
        if(e.code == 'KeyB') {
            playSound('./sound/Gs5.mp3');
        }
    });
});
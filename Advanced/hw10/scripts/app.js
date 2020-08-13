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
        switch(e.code){
            case 'KeyA':
                playSound('./sound/B3.mp3');
                break;
            case 'KeyQ':
                playSound('./sound/B4.mp3');
                break;
            case 'KeyS':
                playSound('./sound/C4.mp3');
                break;
            case 'KeyW':
                playSound('./sound/Cs3.mp3');
                break;
            case 'KeyD':
                playSound('./sound/D3.mp3');
                break;
            case 'KeyF':
                playSound('./sound/D4.mp3');
                break;
            case 'KeyE':
                playSound('./sound/Ds4.mp3');
                break;
            case 'KeyG':
                playSound('./sound/Ds5.mp3');
                break;
            case 'KeyR':
                playSound('./sound/E2.mp3');
                break;
            case 'KeyH':
                playSound('./sound/E3.mp3');
                break;
            case 'KeyT':
                playSound('./sound/E4.mp3');
                break;
            case 'KeyJ':
                playSound('./sound/E5.mp3');
                break;
            case 'KeyK':
                playSound('./sound/F2.mp3');
                break;
            case 'KeyY':
                playSound('./sound/F4.mp3');
                break;
            case 'KeyL':
                playSound('./sound/Fs2.mp3');
                break;
            case 'KeyU':
                playSound('./sound/Fs4.mp3');
                break;
            case 'KeyZ':
                playSound('./sound/G2.mp3');
                break;
            case 'KeyX':
                playSound('./sound/G3.mp3');
                break;
            case 'KeyI':
                playSound('./sound/G4.mp3');
                break;
            case 'KeyC':
                playSound('./sound/G5.mp3');
                break;
            case 'KeyO':
                playSound('./sound/Gs2.mp3');
                break;
            case 'KeyV':
                playSound('./sound/Gs3.mp3');
                break;
            case 'KeyP':
                playSound('./sound/Gs4.mp3');
                break;
            case 'KeyB':
                playSound('./sound/Gs5.mp3');
                break;
        }
    });
});
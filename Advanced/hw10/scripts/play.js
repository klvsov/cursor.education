export const playSound = (path) => {
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = path;
    audio.play();
};
window.addEventListener('DOMContentLoaded', () => {
    const startGenerateBlocks = document.querySelector('.generate-blocks');
    const setRandomColor = document.querySelector('.set-random-color');
    const blocksWrapper = document.querySelector('.wrapper');
    const stop = document.querySelector('.stop-generate-color');
    const getRandNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

    const generateBlocks = domEl => {
        if(!blocksWrapper.children.length) {
            for (let i = 0; i < 25; i++) { // 25 - не магічна константа, а вимога умови домашнього завдання
                domEl.innerHTML += `
                <div class="block"></div>
            `
            }
        }
    };

    let intervalId;

    const generateBlocksInterval = () => {
        generateBlocks(blocksWrapper);
        const blocks = document.querySelectorAll('.block');
        blocks.forEach(block => {
            block.style.backgroundColor = `rgb(${getRandNumber(0, 255)}, ${getRandNumber(0, 255)}, ${getRandNumber(0, 255)})`
        })
    };

    startGenerateBlocks.addEventListener('click', (e) => {
        e.target.setAttribute('disabled', 'disabled');
        generateBlocks(blocksWrapper);
    });

    setRandomColor.addEventListener('click', (e) => {
        e.target.setAttribute('disabled', 'disabled');
        intervalId = setInterval(generateBlocksInterval, 1000);
    });

    stop.addEventListener('click', () => {
        setRandomColor.removeAttribute('disabled');
        clearInterval(intervalId);
    });
});
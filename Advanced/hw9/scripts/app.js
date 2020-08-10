window.addEventListener('DOMContentLoaded', () => {
    const startGenerateBlocks = document.querySelector('.generate-blocks');
    const setRandomColor = document.querySelector('.set-random-color');
    const blocksWrapper = document.querySelector('.wrapper');

    const getRandNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

    const generateBlocks = domEl => {
        for (let i = 0; i < 25; i++) { // 25 - не магічна константа, а вимога умови домашнього завдання
            domEl.innerHTML += `
                <div class="block"></div>
            `
        }
    };

    const generateBlocksInterval = () => {
        if(!blocksWrapper.children.length){
            generateBlocks(blocksWrapper);
        }
        const blocks = document.querySelectorAll('.block');
        blocks.forEach(block => {
            block.style.backgroundColor = `rgb(${getRandNumber(0, 255)}, ${getRandNumber(0, 255)}, ${getRandNumber(0, 255)})`
        })
    };

    startGenerateBlocks.addEventListener('click', () => {
        if(!blocksWrapper.children.length){
            generateBlocks(blocksWrapper);
        }
    });

    setRandomColor.addEventListener('click', () => {
        setInterval(generateBlocksInterval, 1000)
    })

});
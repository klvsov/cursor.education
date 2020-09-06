export const generateBlocks = domEl => {
        for (let i = 0; i < 25; i++) { // 25 - не магічна константа, а вимога умови домашнього завдання
            domEl.innerHTML += `
            <div class="block"></div>
            `
        }
};
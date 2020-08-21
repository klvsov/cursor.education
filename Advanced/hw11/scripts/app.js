window.addEventListener('DOMContentLoaded', () => {

    const start = document.querySelector('.start');
    const val = document.querySelector('.val-1');
    const answer = document.querySelector('.res');

    const creating_char = 50;
    let res = '';

    const getRandomChar = char => String.fromCharCode(char);
    
    const getRandomChinese = length => {
        return new Promise((resolve) => {
            res = '';
            for(let i = 0; i < length; i++) {
                let time = parseInt(String(Date.now()).slice(-5));
                res += getRandomChar(time);
                console.log(time, getRandomChar(time));
            }
            setTimeout(() => {
                resolve()
            }, creating_char * length)
        });
    };
    
    start.addEventListener('click', () => {
        getRandomChinese(val.value).then(() => {
            answer.classList.remove('d-none');
            answer.textContent = res;
        });
    });
});
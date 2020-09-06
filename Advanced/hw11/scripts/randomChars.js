export const CREATING_CHAR = 50;

export const getRandomChar = char => String.fromCharCode(char);
export let res = '';
export const getRandomChinese = length => {
    return new Promise((resolve) => {
        res = '';
        let i = 0;
        let time = parseInt(String(Date.now()).slice(-5));
        while(i < length){
            time += CREATING_CHAR;
            res += getRandomChar(time);
            i++;
        }
        setTimeout(() => {
            resolve()
        }, CREATING_CHAR * length);
    });
};
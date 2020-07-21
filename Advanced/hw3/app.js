window.addEventListener('DOMContentLoaded', () => {

    const startValue1 = document.getElementById('fn1');
    const startValue2_1 = document.getElementById('fn2-1');
    const startValue2_2 = document.getElementById('fn2-2');
    const startValue3 = document.getElementById('fn3');
    const startValue4_1 = document.getElementById('fn4-1');
    const startValue4_2 = document.getElementById('fn4-2');
    const startValue5_1 = document.getElementById('fn5-1');
    const startValue5_2 = document.getElementById('fn5-2');
    const startValue6_1 = document.getElementById('fn6-1');
    const startValue6_2 = document.getElementById('fn6-2');
    const startValue7 = document.getElementById('fn7');
    const startValue8 = document.getElementById('fn8');
    const startValue9_1 = document.getElementById('fn9-1');
    const startValue9_2 = document.getElementById('fn9-2');
    const startValue10 = document.getElementById('fn10');
    const startValue11 = document.getElementById('fn11');
    const btn1 = document.querySelector('.start-fn-1');
    const btn2 = document.querySelector('.start-fn-2');
    const btn3 = document.querySelector('.start-fn-3');
    const btn4 = document.querySelector('.start-fn-4');
    const btn5 = document.querySelector('.start-fn-5');
    const btn6 = document.querySelector('.start-fn-6');
    const btn7 = document.querySelector('.start-fn-7');
    const btn8 = document.querySelector('.start-fn-8');
    const btn9 = document.querySelector('.start-fn-9');
    const btn10 = document.querySelector('.start-fn-10');
    const btn11 = document.querySelector('.start-fn-11');
    const ans1 = document.querySelector('.res-fn-1');
    const ans2 = document.querySelector('.res-fn-2');
    const ans3 = document.querySelector('.res-fn-3');
    const ans4 = document.querySelector('.res-fn-4');
    const ans5 = document.querySelector('.res-fn-5');
    const ans6 = document.querySelector('.res-fn-6');
    const ans7 = document.querySelector('.res-fn-7');
    const ans8 = document.querySelector('.res-fn-8');
    const ans9 = document.querySelector('.res-fn-9');
    const ans10 = document.querySelector('.res-fn-10');
    const ans11 = document.querySelector('.res-fn-11');

    // Function 1
    const getMaxDigit = (number) => {
        const arr = Array.from(String(number));
        let maxN = 0;
        for(let i = 0; i < arr.length; i++) {
            if(maxN < +arr[i]) {
                maxN = arr[i];
            }
        }
        return `Найбільша цифра - ${maxN}`;
    };

    // Function 2
    const getPowNumber = (base, power) => {
        let res = 1;
        for(let i = 0; i < power; i++) {
            res *= base
        }

        return `${startValue2_1.value} в ${startValue2_2.value} степені - ${res}`;
    };

    // Function 3
    const setNormalLookName = (name) => {
        let res = '';
        res = name[0].toUpperCase() + name.slice(1).toLowerCase(); 

        return `Форматоване ім'я - ${res}`;
    };

    // Function 4
    const getResSum = (startSum, tax) => {
        const resSum = startSum - (startSum * (tax / 100));

        return `Кінцева сума - ${resSum}`;
    };

    // Function 5
    const getRandNumber = (min, max) => {
        const res = Math.floor(min + Math.random() * (max + 1 - min));

        return res;
    };

    // Function 6
    const getCountLetter = (startLetter, startWord) => {
        let res = 0;
        let letter = startLetter.toLowerCase();
        let word = '';
        for( let i = 0; i < startWord.length; i++) {
            word += startWord[i].toLowerCase();
        }
        for(let i = 0; i < word.length; i++) {
            if(letter === word[i]) {
                res++;
            }
        }

        return res;
    };

    // Function 7
    const convertCurrency = (sum) => {
        let res = 0;
        const money = parseFloat(sum);

        if(sum.includes('$')) {
            res = `Конвертована сума - ${money * 25} грн`;
        } else if(sum.substr(-3, 3).toLowerCase() === 'uah') {
            res = `Конвертована сума - ${money / 25}$`;
        } else{
            res = 'Некоректне значення!';
        }

        return res;
    };

    // Function 8
    const getRandomPassword = (len = 8) => {
        let res = '';
        
        for(let i = 0; i < len; i++) {
            res += getRandNumber(0, 9);
        }

        return `Випадковий пароль - ${res}`;
    };

    // Function 9
    const deleteLetters = (letter, word) => {
        let res = '';
        
        for(let i = 0; i < word.length; i++) {
            if(letter !== word[i]) {
                res += word[i];
            }
        }

        return `Готове слово - ${res}`;
    };

    // Function 10
    const isPalyndrom = (word) => {
        let res = '';
        
        for(let i = 0; i < word.length; i++) {
            if(word[i] !== ' ') {
                res += word[i].toLowerCase();
            }
        }

        const reverseWord = res.split('').reverse().join('')

        if(reverseWord === res) {
            return 'Паліндром';
        } else {
            return 'Не паліндром';
        }
    };

    // Function 11
    const deleteDuplicateLetter = (firstWord) => {
        let answer = '';
        let word = '';

        for(let i = 0; i < firstWord.length; i++) {
            word += firstWord[i].toLowerCase();
        }

        for(let i = 0; i < word.length; i++) {
            if(getCountLetter(word[i], word) === 1) {
                answer += word[i]
            }
        }
        return answer;
    
    };

    // Function 1 starting work
    btn1.addEventListener('click', () => {
        if(startValue1.value !== '') {
            ans1.textContent = getMaxDigit(startValue1.value);
            ans1.classList.remove('d-none');
        }
    });

    // Function 2 starting work
    btn2.addEventListener('click', () => {
        if(startValue2_1.value !== '' && startValue2_2.value !== '') {
            ans2.textContent = getPowNumber(startValue2_1.value, startValue2_2.value);
            ans2.classList.remove('d-none');
        }
    });

    // Function 3 starting work
    btn3.addEventListener('click', () => {
        if(startValue3.value !== '') {
            ans3.textContent = setNormalLookName(startValue3.value);
            ans3.classList.remove('d-none');
        }
    });

    // Function 4 starting work
    btn4.addEventListener('click', () => {
        if(startValue4_1.value !== '' && startValue4_2.value !== '') {
            ans4.textContent = getResSum(startValue4_1.value, startValue4_2.value);
            ans4.classList.remove('d-none');
        }
    });

    // Function 5 starting work
    btn5.addEventListener('click', () => {
        if(startValue5_1.value !== '' && startValue5_2.value !== '') {
            ans5.textContent = `Випадкове число - ${getRandNumber(+startValue5_1.value, +startValue5_2.value)}`;
            ans5.classList.remove('d-none');
        }
    });

    // Function 6 starting work
    btn6.addEventListener('click', () => {
        if(startValue6_1.value !== '' && startValue6_2.value !== '') {
            ans6.textContent = `Кількість - ${getCountLetter(startValue6_1.value, startValue6_2.value)}`;
            ans6.classList.remove('d-none');
        }
    });

    // Function 7 starting work
    btn7.addEventListener('click', () => {
        if(startValue7.value !== '') {
            ans7.textContent = convertCurrency(startValue7.value);
            ans7.classList.remove('d-none');
        }
    });

    // Function 8 starting work
    btn8.addEventListener('click', () => {
        if(startValue8.value === '') {
            ans8.textContent = getRandomPassword();
            ans8.classList.remove('d-none');
        } else {
            ans8.textContent = getRandomPassword(startValue8.value);
            ans8.classList.remove('d-none');
        }
    });

    // Function 9 starting work
    btn9.addEventListener('click', () => {
        if(startValue9_1.value !== '' && startValue9_2.value !== '') {
            ans9.textContent = deleteLetters(startValue9_1.value, startValue9_2.value);
            ans9.classList.remove('d-none');
        }
    });

    // Function 10 starting work
    btn10.addEventListener('click', () => {
        if(startValue10.value !== '') {
            ans10.textContent = isPalyndrom(startValue10.value);
            ans10.classList.remove('d-none');
        }
    });

    btn11.addEventListener('click', () => {
        if(startValue11.value !== '') {
            ans11.textContent = `Унікальні букви - ${deleteDuplicateLetter(startValue11.value)}`;
            ans11.classList.remove('d-none');
        }
    });
});
const startValue = document.querySelectorAll('.fn');
const answers = document.querySelectorAll('.res-fn');

// Function 1
const getMaxDigit = number => Math.max(...Array.from(String(number)).map((item) => parseInt(item)));

// Function 2
const getPowNumber = (base, startPower) => {
    let res = 1;
    const power = Math.abs(startPower);
    for(let i = 0; i < power; i++) {
        res *= base
    }

    if(startPower > 0) {
        return `${startValue[1].value} в ${startValue[2].value} степені - ${res}`;
    } else if(startPower < 0) {
        return `${startValue[1].value} в ${startValue[2].value} степені - ${1 / res}`;
    } else{
        return `${startValue[1].value} в ${startValue[2].value} степені - 1`;
    }
};

// Function 3
const setNormalLookName = name => `Форматоване ім'я - ${name[0].toUpperCase() + name.slice(1).toLowerCase()}`;

// Function 4
const getResSum = (startSum, tax) => {
    const persent = 100;
    const resSum = startSum - (startSum * (tax / persent));

    return `Кінцева сума - ${resSum}`;
};

// Function 5
const getRandNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

// Function 6
const getCountLetter = (startLetter, startWord) => {
    let res = 0;
    const letter = startLetter.toLowerCase();
    const word = startWord.toLowerCase();

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
    const currencyCoefficient = 25;

    if(sum.includes('$')) {
        res = `Конвертована сума - ${money * currencyCoefficient} грн`;
    } else if(sum.substr(-3, 3).toLowerCase() === 'uah') {
        res = `Конвертована сума - ${money / currencyCoefficient}$`;
    } else{
        res = 'Некоректне значення!';
    }

    return res;
};

// Function 8
const getRandomPassword = (len = 8) => {
    let res = '';
    
    for(let i = 0; i < len; i++) {
        res += getRandNumber(0, 9); // Функція з завдання №5 повертає випадкову цифру - тому від 0 до 9 (використовую готову функцію, щоб не створювати ще раз подібну)
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
    const res = word.replace(/\s+/g, '').toLowerCase();
    const reverseWord = res.split('').reverse().join('').toLowerCase();

    return reverseWord === res ? 'Паліндром' : 'Не паліндром';
};

// Function 11
const deleteDuplicateLetter = (firstWord) => {
    let answer = '';
    const word = firstWord.toLowerCase();

    for(let i = 0; i < word.length; i++) {
        if(getCountLetter(word[i], word) === 1) {
            answer += word[i]
        }
    }
    return answer;

};

document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('start-fn-1')) {
        if(startValue[0].value !== '') {
            answers[0].textContent = `Найбільша цифра - ${getMaxDigit(startValue[0].value)}`;
            answers[0].classList.remove('d-none');
        }
    }

    if(event.target.classList.contains('start-fn-2')) {
        if(startValue[1].value !== '' && startValue[2].value !== '') {
            answers[1].textContent = getPowNumber(startValue[1].value, startValue[2].value);
            answers[1].classList.remove('d-none');
        }
    }

    if(event.target.classList.contains('start-fn-3')) {
        if(startValue[3].value !== '') {
            answers[2].textContent = setNormalLookName(startValue[3].value);
            answers[2].classList.remove('d-none');
        }
    }

    if(event.target.classList.contains('start-fn-4')) {
        if(startValue[4].value !== '' && startValue[5].value !== '') {
            answers[3].textContent = getResSum(startValue[4].value, startValue[5].value);
            answers[3].classList.remove('d-none');
        }
    }

    if(event.target.classList.contains('start-fn-5')) {
        if(startValue[6].value !== '' && startValue[7].value !== '') {
            answers[4].textContent = `Випадкове число - ${getRandNumber(+startValue[6].value, +startValue[7].value)}`;
            answers[4].classList.remove('d-none');
        }
    }

    if(event.target.classList.contains('start-fn-6')) {
        if(startValue[8].value !== '' && startValue[9].value !== '') {
            answers[5].textContent = `Кількість - ${getCountLetter(startValue[8].value, startValue[9].value)}`;
            answers[5].classList.remove('d-none');
        }
    }

    if(event.target.classList.contains('start-fn-7')) {
        if(startValue[10].value !== '') {
            answers[6].textContent = convertCurrency(startValue[10].value);
            answers[6].classList.remove('d-none');
        }
    }

    if(event.target.classList.contains('start-fn-8')) {
        if(startValue[11].value === '') {
            answers[7].textContent = getRandomPassword();
            answers[7].classList.remove('d-none');
        } else {
            answers[7].textContent = getRandomPassword(startValue[11].value);
            answers[7].classList.remove('d-none');
        }
    }

    if(event.target.classList.contains('start-fn-9')) {
        if(startValue[12].value !== '' && startValue[13].value !== '') {
            answers[8].textContent = deleteLetters(startValue[12].value, startValue[13].value);
            answers[8].classList.remove('d-none');
        }
    }

    if(event.target.classList.contains('start-fn-10')) {
        if(startValue[14].value !== '') {
            answers[9].textContent = isPalyndrom(startValue[14].value);
            answers[9].classList.remove('d-none');
        }
    }

    if(event.target.classList.contains('start-fn-11')) {
        if(startValue[15].value !== '') {
            answers[10].textContent = `Унікальні букви - ${deleteDuplicateLetter(startValue[15].value)}`;
            answers[10].classList.remove('d-none');
        }
    }
});

export default getMaxDigit;
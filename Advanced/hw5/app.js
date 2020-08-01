window.addEventListener('DOMContentLoaded', () => {
    const task1 = document.querySelectorAll('.fn-1');
    const answerTask1 = document.querySelector('.res-fn-1');
    
    const task2 = document.querySelector('.fn-2');
    const answerTask2 = document.querySelector('.res-fn-2');

    const task3 = document.querySelector('.fn-3');
    const answerTask3 = document.querySelector('.res-fn-3');

    const task4 = document.querySelector('.fn-4');
    const answerTask4 = document.querySelector('.res-fn-4');

    const task5 = document.querySelector('.fn-5');
    const answerTask5 = document.querySelector('.res-fn-5');

    const task6 = document.querySelector('.fn-6');
    const answerTask6 = document.querySelector('.res-fn-6');

    const task7 = document.querySelector('.fn-7');
    const answerTask7 = document.querySelector('.res-fn-7');
    
    const task8 = document.querySelector('.fn-8');
    const answerTask8 = document.querySelector('.res-fn-8');

    const task9 = document.querySelector('.fn-9');
    const answerTask9 = document.querySelector('.res-fn-9');

    const getRandNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
    const convertToInteger = (arr) => arr.filter(item => Number.isInteger(item));

    const getRandomArray = (length, min, max) => {
        const arr = [];
        for(let i = 0; i < length; i++) {
            arr.push(getRandNumber(min, max))}
        return arr;
    };

    const getModa = (...numbers) =>{
        return convertToInteger(numbers).sort((a,b) => numbers.filter(item => item === a).length - numbers
        .filter(item => item === b).length).pop();
    };

    const getAverage = (...numbers) => {
        const arr = convertToInteger(numbers);
        const total = arr.reduce((sum, current) => sum + current, 0);
        const averageN = total / arr.length;

        return averageN;
    };

    const getMedian = (...numbers) => {
        const arr = convertToInteger(numbers);
        if(arr.length % 2) {
            return arr[(arr.length - 1) / 2];
        } else{
            return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
        }
    };

    const filterEvenNumbers = (...numbers) => numbers.filter(item => item % 2).join(', ');

    const countPositiveNumbers = (...numbers) => numbers.filter(item => item > 0).length;

    const getDividedByFive = (...numbers) => numbers.filter(item => item % 5 === 0).join(', ');

    const replaceBadWords = (str) => {
        arr = str.split(' ');
        badWords = ['shit', 'fuck']
        const regexp = new RegExp(badWords.join('|'), 'gi');
        return arr.map(item => item.replace(regexp, '****')).join(' ')
    };

    const divideByThree = (word) => {
        const res = [];
        for(let i = 0; i < word.length; i+=3) {
            res.push(word.slice(i, i+3));
        }
        return res.join(', ');
    };

    document.querySelector('.start-fn-1').addEventListener('click', () => {
        answerTask1.textContent = `Масив випадкових чисел - ${getRandomArray(parseInt(task1[0].value), parseInt(task1[1].value), parseInt(task1[2].value))}`;     
        answerTask1.classList.remove('d-none');
    });

    document.querySelector('.start-fn-2').addEventListener('click', () => {
        const numbers = task2.value.split(', ');
        const arr = [];
        numbers.forEach(item => {
            arr.push(parseInt(item));
        });
        answerTask2.textContent = `Мода числового ряду - ${getModa(...arr)}`;     
        answerTask2.classList.remove('d-none');
    });

    document.querySelector('.start-fn-3').addEventListener('click', () => {
        const numbers = task3.value.split(', ');
        const arr = [];
        numbers.forEach(item => {
            arr.push(parseInt(item));
        });
        answerTask3.textContent = `Середнє значення числового ряду - ${getAverage(...arr)}`;  
        answerTask3.classList.remove('d-none');
    });

    document.querySelector('.start-fn-4').addEventListener('click', () => {
        const numbers = task4.value.split(', ');
        const arr = [];
        numbers.forEach(item => {
            arr.push(parseInt(item));
        });
        answerTask4.textContent = `Медіана числового ряду - ${getMedian(...arr)}`;  
        answerTask4.classList.remove('d-none');
    });

    document.querySelector('.start-fn-5').addEventListener('click', () => {
        const numbers = task5.value.split(', ');
        const arr = [];
        numbers.forEach(item => {
            arr.push(parseInt(item));
        });
        answerTask5.textContent = `Фільтровані числа - ${filterEvenNumbers(...arr)}`;  
        answerTask5.classList.remove('d-none');
    });

    document.querySelector('.start-fn-6').addEventListener('click', () => {
        const numbers = task6.value.split(', ');
        const arr = [];
        numbers.forEach(item => {
            arr.push(parseInt(item));
        });
        answerTask6.textContent = `Кількість додатніх чисел - ${countPositiveNumbers(...arr)}`;  
        answerTask6.classList.remove('d-none');
    });

    document.querySelector('.start-fn-7').addEventListener('click', () => {
        const numbers = task7.value.split(', ');
        const arr = [];
        numbers.forEach(item => {
            arr.push(parseInt(item));
        });
        answerTask7.textContent = `Числа, кратні 5 - ${getDividedByFive(...arr)}`;  
        answerTask7.classList.remove('d-none');
    });

    document.querySelector('.start-fn-8').addEventListener('click', () => {
        answerTask8.textContent = `Речення з цензурою - ${replaceBadWords(task8.value)}`;  
        answerTask8.classList.remove('d-none');
    });

    document.querySelector('.start-fn-9').addEventListener('click', () => {
        answerTask9.textContent = `Слово, розбите на склади - ${divideByThree(task9.value)}`;  
        answerTask9.classList.remove('d-none');
    });

    
});
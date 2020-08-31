import './style.css';
import {getMaxDigit} from '../../hw3/max';
import {getRandNumber} from '../../hw4/studentsPairs';
import {filterEvenNumbers} from '../../hw5/filterEvenNumber';
import {students, getStudentsNames} from '../../hw6/sortedStudents.Name';
import {ukraine, getMySalary} from '../../hw7/randomSalary';
import {Student} from '../../hw8/scripts/student';
import {generateBlocks} from '../../hw9/scripts/blocks';
import {playSound} from '../../hw10/scripts/play';
import {CREATING_CHAR, getRandomChar, res, getRandomChinese} from '../../hw11/scripts/randomChars';
import {pageForPlanets, planetsPage, getData, getPlanets} from '../../hw12/scripts/allPlanets';
// import {createIdGenerator, idGenerator} from '../../hw13/scripts/generator';

const fn1Data = document.querySelector('.all-digit');
const startFn1 = document.querySelector('.start-fn-1');
const resFn1 = document.querySelector('.res-fn-1');
const startFn2 = document.querySelector('.start-fn-2');
const resFn2 = document.querySelector('.res-fn-2');
const fn3Data = document.querySelector('.all-numbers');
const startFn3 = document.querySelector('.start-fn-3');
const resFn3 = document.querySelector('.res-fn-3');
const startFn4 = document.querySelector('.start-fn-4');
const resFn4 = document.querySelector('.res-fn-4');
const startFn5 = document.querySelector('.start-fn-5');
const resFn5 = document.querySelector('.res-fn-5');
const fn6Data = document.querySelectorAll('.fn-6');
const startFn6 = document.querySelector('.start-fn-6');
const resFn6 = document.querySelector('.res-fn-6');
const blocksWrapper = document.querySelector('.res-fn-7');
const startFn7 = document.querySelector('.start-fn-7');
const startFn8 = document.querySelector('.start-fn-8');
const countChars = document.querySelector('.count-chars');
const startFn9 = document.querySelector('.start-fn-9');
const resFn9 = document.querySelector('.res-fn-9');
const allPlanets = document.querySelector('.res-fn-10');
const startFn10 = document.querySelector('.start-fn-10');
const startFn11 = document.querySelector('.start-fn-11');
const resFn11 = document.querySelector('.res-fn-11');

const renderPlanets = planets => {
    allPlanets.innerHTML = `
        <ul class="list-group-item">
            ${planets}
        </ul>
    `;
}

startFn1.addEventListener('click', () => {
    if(fn1Data.value !== '' && Number.isInteger(+fn1Data.value)) {
        resFn1.textContent = `Max digit - ${getMaxDigit(fn1Data.value)}`;
        resFn1.classList.remove('d-none');
    }
});

startFn2.addEventListener('click', () => {
    resFn2.textContent = `Random mark - ${getRandNumber(1, 12)}`;
    resFn2.classList.remove('d-none');
});

startFn3.addEventListener('click', () => {
    if(fn3Data.value !== '') {
        const numbers = fn3Data.value.split(', ');
        const arr = [];
        numbers.forEach(item => {
            arr.push(parseInt(item));
        });
        resFn3.textContent = `Filtered numbers - ${filterEvenNumbers(...arr)}`;
        resFn3.classList.remove('d-none');
    }
});

startFn4.addEventListener('click', () => {
    resFn4.textContent = `Sorted names - ${getStudentsNames(students).join(', ')}`;
    resFn4.classList.remove('d-none');
});

startFn5.addEventListener('click', () => {
    resFn5.textContent = getMySalary(ukraine);
    resFn5.classList.remove('d-none');
    const timerIdUkr = setInterval(() => resFn5.textContent = (getMySalary(ukraine)), 10000);
});

startFn6.addEventListener('click', () => {
    if (fn6Data[0].value && fn6Data[1].value && fn6Data[2].value && fn6Data[1].value <= 5) {
        let student = new Student(fn6Data[0].value, fn6Data[1].value, fn6Data[2].value);
        resFn6.textContent = student.getInfo();
        resFn6.classList.remove('d-none');
    }
});

startFn7.addEventListener('click', () => {
    generateBlocks(blocksWrapper);
    startFn7.setAttribute('disabled', 'disabled');
    blocksWrapper.classList.remove('d-none')
});

startFn8.addEventListener('click', () => {
    playSound('../hw10/sound/B3.mp3');
});

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 65) {
        playSound('../hw10/sound/B3.mp3');
    }
});

startFn9.addEventListener('click', () => {
    getRandomChinese(countChars.value).then(() => {
        resFn9.classList.remove('d-none');
        resFn9.textContent = res;
    });
});

startFn10.addEventListener('click', () => {
    getPlanets(planetsPage).then(renderPlanets);
    allPlanets.classList.remove('d-none');
});

// startFn11.addEventListener('click', () => {
//     resFn11.textContent = `New identifier - ${idGenerator.next().value}`;
//     resFn11.classList.remove('d-none') 
// });
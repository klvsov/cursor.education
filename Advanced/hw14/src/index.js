import './style.css';
import img from './images/og-image.png';
import getMaxDigit from '../../hw3/app';
// import {students, printRes, getPairs, pairs} from '../../hw4/app';

const fn1 = document.querySelector('.all-digit');
const startFn1 = document.querySelector('.start-fn-1');
const resFn1 = document.querySelector('.res-fn-1');
const resFn2 = document.querySelector('.res-fn-2');

startFn1.addEventListener('click', () => {
    resFn1.textContent = `Max digit - ${getMaxDigit(fn1.value)}`;
    resFn1.classList.remove('d-none');
});

// console.log(students)
const listItem = document.querySelectorAll('.list-group');

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getRandNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));


const printRes = (arr, domEl) => {
    list = '';
    arr.forEach(item => {
        list+= `<li class="list-group-item">${item}</li>`
    });
    domEl.innerHTML = list;
    return domEl;
}

const getPairs = studentsArr => {
    let boys = [];
    let girls = [];
    let res = [];

    for(student of studentsArr){
        if(student.endsWith('а')) {
            girls.push(student);
        } else {
            boys.push(student);
        }
    }
    let len = studentsArr.length / 2 //Оскільки в кінцевий масив додаються одразу два студенти, потрібно проходити цикл тільки до половини
    for(let i = 0; i < len; i++) {
        res.push([`${boys[i]} і ${girls[i]}`]);
    }
    
    return res;
}

const getPairsAndThemes = (arr, sub) => {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        res.push([`${arr[i]}, ${sub[i]}`]);
    }
    return res;
}

const setMark = (arr, mark) => {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        res.push([`${arr[i]} - ${mark[i]}`])
    }
    return res;
}

const setRandMark = (arr) => {
    let res = [];
    for (item of arr) {
        res.push([`${item}, оцінка за проєкт - ${getRandNumber(1, 5)}`]); // випадкові оцінки в діапазоні від 1 до 5
    }

    return res;
}


const pairs = getPairs(students);
const pairsTheme = getPairsAndThemes(pairs, themes);
const studentsMarks = setMark(students, marks);
const studentsRandomMarks = setRandMark(pairsTheme)


printRes(pairs, listItem[0]);
printRes(pairsTheme, listItem[1]);
printRes(studentsMarks, listItem[2]);
printRes(studentsRandomMarks, listItem[3]);

console.group('Початкові дані:');
console.log(students);
console.log(themes);
console.log(marks);
console.groupEnd();

export {students, printRes, getPairs, pairs};
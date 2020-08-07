window.addEventListener('DOMContentLoaded', () => {

    const studentsData = document.querySelectorAll('.fn-1');
    const startFn1 = document.querySelector('.start-fn-1');
    const res1 = document.querySelector('.res-1');
    const studentsMarks = document.querySelector('.fn-2');
    const startFn2 = document.querySelector('.start-fn-2');
    const res2 = document.querySelector('.res-2');
    const studentsNewMark = document.querySelector('.fn-3');
    const startFn3 = document.querySelector('.start-fn-3');
    const res3 = document.querySelector('.res-3');
    const startFn4 = document.querySelector('.start-fn-4');
    const res4 = document.querySelector('.res-4');
    const startFn5 = document.querySelectorAll('.start-fn-5');
    const budgetStudentsData = document.querySelectorAll('.fn-6');
    const startFn6 = document.querySelector('.start-fn-6');
    const res6 = document.querySelector('.res-6');
    const budgetStudentsMarks = document.querySelector('.fn-7');
    const startFn7 = document.querySelector('.start-fn-7');
    const res7 = document.querySelector('.res-7');
    const startFn8 = document.querySelector('.start-fn-8');
    const res8 = document.querySelector('.res-8');
    const startFn9 = document.querySelector('.start-fn-9');
    const res9 = document.querySelector('.res-9');
    const startFn10 = document.querySelectorAll('.start-fn-10');

    class Student {

        constructor(university, course, fullName) {
            this.university = university;
            this.course = course;
            this.fullName = fullName;
            this.allMarks = [];
            this.averageMark = 0;
            this.isNormalStudent = true;
        }

        dismiss() {
            this.isNormalStudent = false;
        }

        recover() {
            this.isNormalStudent = true;
        }

        getInfo() {
            return `Студент ${this.course}-го курсу ${this.fullName}, університет - ${this.university}`
        }

        get marks() {
            if (this.isNormalStudent) {
                this.allMarks.push([studentsMarks.value].join(', ').split(' ').map(item => parseInt(item)));
                return this.allMarks;
            } else {
                return null
            }
        }

        set newMark(val) {
            if (this.isNormalStudent) {
                this.allMarks.push(parseInt(val));
                return this.allMarks;
            } else {
                return null
            }
        }

        getAverageMark() {
            if (this.isNormalStudent) {
                this.averageMark = this.allMarks.flat().reduce((sum, current) => sum + current, 0) / this.allMarks.flat().length;
                return parseFloat(this.averageMark.toFixed(1));
            } else {
                return null
            }
        }
    }

    class BudgetStudent extends Student {
        constructor(university, course, fullName) {
            super(university, course, fullName);
        }

        get marks() {
            if (this.isNormalStudent) {
                this.allMarks.push([budgetStudentsMarks.value].join(', ').split(' ').map(item => parseInt(item)));
                return this.allMarks;
            } else {
                return null
            }
        }

        getScholarship() {
            return `Ви отримали 1400 грн. стипендії. Можете ні в чому собі не відмовляти!`
        }
    }


    let student;
    let budgetStudent;

    startFn1.addEventListener('click', () => {
        if (studentsData[0].value && studentsData[1].value && studentsData[2].value && studentsData[1].value <= 5) {
            student = new Student(studentsData[0].value, studentsData[1].value, studentsData[2].value);
            res1.textContent = student.getInfo();
            res1.classList.remove('d-none');
        }
    });

    startFn2.addEventListener('click', () => {
        if (studentsMarks.value) {
            res2.classList.remove('d-none');
            res2.textContent = `Оцінки - ${student.marks}`;
        }
    });

    startFn3.addEventListener('click', () => {
        if (studentsNewMark.value) {
            res3.classList.remove('d-none');
            if (student.isNormalStudent) {
                student.newMark = studentsNewMark.value;
                res3.textContent = `Всі оцінки - ${student.allMarks}`;
            } else {
                res3.textContent = `Всі оцінки - ${null}`;
            }
        }
    });

    startFn4.addEventListener('click', () => {
        res4.classList.remove('d-none');
        res4.textContent = `Середній бал - ${student.getAverageMark()}`;
    });

    startFn5[0].addEventListener('click', () => {
        student.dismiss();
    });

    startFn5[1].addEventListener('click', () => {
        student.recover();
    });

    startFn6.addEventListener('click', () => {
        if (budgetStudentsData[0].value && budgetStudentsData[1].value && budgetStudentsData[2].value && budgetStudentsData[1].value <= 5) {
            budgetStudent = new BudgetStudent(budgetStudentsData[0].value, budgetStudentsData[1].value, budgetStudentsData[2].value);
            res6.textContent = budgetStudent.getInfo();
            res6.classList.remove('d-none');
        }
    });

    startFn7.addEventListener('click', () => {
        if (budgetStudentsMarks.value) {
            res7.classList.remove('d-none');
            res7.textContent = `Оцінки - ${budgetStudent.marks}`;
        }
    });

    startFn8.addEventListener('click', () => {
        res8.classList.remove('d-none');
        res8.textContent = `Середній бал - ${budgetStudent.getAverageMark()}`;
    });

    startFn9.addEventListener('click', () => {
        res9.classList.remove('d-none');
        const average = budgetStudent.getAverageMark();
        if (average >= 4) {
            res9.textContent = budgetStudent.getScholarship()
        } else {
            res9.textContent = `Стипендії немає. Потрібно краще вчитись!`
        }
    });

    startFn10[0].addEventListener('click', () => {
        budgetStudent.dismiss();
    });

    startFn10[1].addEventListener('click', () => {
        budgetStudent.recover();
    });

});
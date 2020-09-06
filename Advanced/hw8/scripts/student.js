export class Student {

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

    set mark(val) {
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
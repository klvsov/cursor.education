window.addEventListener('DOMContentLoaded', () =>{

    const students = [{
        name: "Tanya",
        course: 3,
        subjects: {
          math: [4, 4, 3, 4],
          algorithms: [3, 3, 3, 4, 4, 4],
          data_science: [5, 5, 3, 4]
        }
      }, {
        name: "Victor",
        course: 4,
        subjects: {
          physics: [5, 5, 5, 3],
          economics: [2, 3, 3, 3, 3, 5],
          geometry: [5, 5, 2, 3, 5]
        }
      }, {
        name: "Anton",
        course: 2,
        subjects: {
          statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
          english: [5, 3],
          cosmology: [5, 5, 5, 5]
        }
    }];
    
    const $task1 = document.querySelector('.row1');
    const $start_task1 = document.querySelector('.start-fn-1');
    const $task2 = document.querySelector('.row2');
    const $start_task2 = document.querySelector('.start-fn-2');
    const $task3 = document.querySelector('.row3');
    const $start_task3 = document.querySelector('.start-fn-3');
    const $task4 = document.querySelector('.row4');
    const $start_task4 = document.querySelector('.start-fn-4');
    const $task5 = document.querySelector('.row5');
    const $start_task5 = document.querySelector('.start-fn-5');
    const $task6 = document.querySelector('.fn-6');
    const $start_task6 = document.querySelector('.start-fn-6');
    const $res_task6 = document.querySelector('.res-fn-6')

    const getSubjects = (student) => {
      const subjects = Object.keys(student.subjects);
      return subjects.map(item => item.slice(0,1).toUpperCase()+item.toLowerCase().slice(1).replace(/_/g, ' '));
    };

    const getAverageMark = (student) => {
      const marks = Object.values(student.subjects).flat();
      const averageMark = marks.reduce((sum, current) => sum + current, 0) / marks.length;
      return averageMark.toFixed(2);
    };

    const getStudentInfo = (student) => {
      const name = student.name;
      const course = student.course;
      return `Name - ${name}, course - ${course}, average mark - ${getAverageMark(student)}`
    };

    const getStudentsNames = students => students.map(student => student.name).sort();

    const getBestStudent = (students) => {
      const names = students.map(student => student.name);
      const resMarks = [];
      for (let item of students) {
        resMarks.push(parseFloat(getAverageMark(item)));
      }
      return names[resMarks.indexOf(Math.max(...resMarks))];
    };

    const calculateWordLetters = (word) => {
      const res = {};
      const lowerCaseWord = word.toLowerCase();
      for (const letter of lowerCaseWord) {
        if(res[letter]) {
          res[letter]++
        } else {
          res[letter] = 1
        }
      }

      return res;
    };

    const objToString = (object) => {
      let str = '';
      for (const k in object) {
        if (object.hasOwnProperty(k)) {
          str += `"${k}" - ${object[k]}, `
        }
      }
      return str;
    }

    $start_task1.addEventListener('click', () => {
      $task1.classList.toggle('d-none');
      if(!($task1.childNodes.length)) {
        for (let key of students){  
          $task1.innerHTML += `
            <div class="col-lg-4 col-sm-12">
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${key.name}</h5>
                  <p class="alert alert-success">
                    ${getSubjects(key).join(', ')}
                  </p>
                </div>
              </div>  
            </div>`;
        }
      }
    });

    $start_task2.addEventListener('click', () => {
      $task2.classList.toggle('d-none');
      if(!($task2.childNodes.length)) {
        for (let key of students){
          $task2.innerHTML += `
            <div class="col-lg-4 col-md-12">
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${key.name}</h5>
                  <p class="alert alert-success">
                    ${getAverageMark(key)}
                  </p>
                </div>
              </div> 
            </div>`;
        }
      }
    });

    $start_task3.addEventListener('click', () => {
      $task3.classList.toggle('d-none');
      if(!($task3.childNodes.length)) {
        for (let key of students){
          $task3.innerHTML += `
            <div class="col-lg-4 col-sm-12 fn-1">
              <p class="alert alert-success">${getStudentInfo(key)}</p>
            </div>
            </div>`;
        }
      }
    });

    $start_task4.addEventListener('click', () => {
      $task4.classList.toggle('d-none');
      $task4.innerHTML = `<div class="col"><p class="alert alert-success">${getStudentsNames(students).join(', ')}</p></div>`
    });

    $start_task5.addEventListener('click', () => {
      $task5.classList.toggle('d-none');
      $task5.innerHTML = `<div class="col"><p class="alert alert-success">${getBestStudent(students)}</p></div>`
    });

    $start_task6.addEventListener('click', () => {
      $task6.addEventListener('input', () => {
        $res_task6.classList.add('d-none')
      });
      if($task6.value) {
        $res_task6.textContent = objToString(calculateWordLetters($task6.value));
        $res_task6.classList.remove('d-none');
      }
    });
});
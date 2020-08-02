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

    const getSubjects = (student) => {
        const subjects = Object.keys(student.subjects);
        return subjects.map(item => item.slice(0,1).toUpperCase()+item.slice(1).replace(/_/g, ' '));
    };

    for (let key of students) {
        console.log(getSubjects(key));
    }

    document.querySelector('.start-fn-1').addEventListener('click', () => {
        const res1 = `
            for (let key of students){
                <div class="card col-lg-3 col-sm-12 mr-auto ml-auto" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${key.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Кількісь предметів</h6>
                  <ul class="list-group">
                      <li class="list-group-item">Математика</li>
                      <li class="list-group-item">Українська</li>
                      <li class="list-group-item">Історія</li>
                  </ul>
                </div>
            </div>  
            }
        `;
        document.querySelector('.row1').innerHTML(res1);
    });
/*
    for (let key of students) {
        console.log(key.name);
        console.log(key.course);
        let obj = key.subjects
        for (let k in obj){
            console.log(k);
        }
        
    }
        Tanya
        3
        math
        algorithms
        data_science
        Victor
        4
        physics
        economics
        geometry
        Anton
        2
        statistics
        english
        cosmology
*/

    
});
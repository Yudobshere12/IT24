class StudentList {
    constructor(dataUrl) {
        this.students = []; 
        this.loadStudents(dataUrl);
    }

    async loadStudents(dataUrl) {
        const response = await fetch(dataUrl);
        this.students = await response.json();
        this.renderStudentList(this.students);
        this.bindSearchEvent();
    }

    renderStudentList(students, container) {
        container.innerHTML = students.map(student => 
            `<button class="btn btn-primary" style="margin-top:15px; width:25rem">
                ${student.student_name} | ${student.student_program}
            </button><br>`
        ).join('');
    }

    bindSearchEvent() {
        const studentSearchBar = document.getElementById('studentSearchBar');
        const studentSearchListContainer = document.getElementById('studentSearchList');
        studentSearchBar.addEventListener('input', () => {
            this.filterStudents(studentSearchBar.value, studentSearchListContainer);
        });
    }

    filterStudents(query, searchListContainer) {
        const filteredStudents = this.students.filter(student => {
            const fullName = `${student.student_name} ${student.student_program}`;
            return fullName.toLowerCase().includes(query.toLowerCase());
        });
        this.renderStudentList(filteredStudents, searchListContainer);
    }
}


const studentList = new StudentList('applet-4.json');

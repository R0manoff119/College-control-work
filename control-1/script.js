
let students = JSON.parse(localStorage.getItem("students")) || [];

let studentForm = document.getElementById("studentForm");
let studentList = document.getElementById("studentList");
let search = document.getElementById("search");

let editIndex = -1;

function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

function showStudents() {
    studentList.innerHTML = "";

    let searchText = search.value.toLowerCase();

    students.forEach((student, index) => {
        if (
            student.name.toLowerCase().includes(searchText)
        ) {
            let studentDiv = document.createElement("div");
            studentDiv.className = "student";

            studentDiv.innerHTML = `
                <div>
                    <strong>${student.name} ${student.surname}</strong>
                    <p>Группа: ${student.group}</p>
                </div>

                <div class="actions">
                    <button class="edit" onclick="editStudent(${index})">Изменить</button>
                    <button class="delete" onclick="deleteStudent(${index})">Удалить</button>
                </div>
            `;

            studentList.appendChild(studentDiv);
        }
    });
}

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let group = document.getElementById("group").value;

    let student = {
        name: name,
        surname: surname,
        group: group
    };

    if (editIndex === -1) {
        students.push(student);
    } else {
        students[editIndex] = student;
        editIndex = -1;
        document.getElementById("saveButton").textContent = "Добавить студента";
    }

    saveStudents();
    showStudents();
    studentForm.reset();
});

function editStudent(index) {
    let student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("surname").value = student.surname;
    document.getElementById("group").value = student.group;

    editIndex = index;

    document.getElementById("saveButton").textContent = "Сохранить изменения";
}

function deleteStudent(index) {
    students.splice(index, 1);

    saveStudents();
    showStudents();
}

search.addEventListener("input", showStudents);

showStudents();

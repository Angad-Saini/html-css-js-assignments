// Student Management System
const API_URL = "https://jsonplaceholder.typicode.com/users";

// getting elements from the html page
const studentForm = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const courseInput = document.getElementById("course");
const ageInput = document.getElementById("age");
const searchInput = document.getElementById("searchInput");
const studentList = document.getElementById("studentList");
const totalStudents = document.getElementById("totalStudents");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

// this array stores all the students
let students = [];


// ---------- GET: fetch all students ----------
async function getStudents() {
    loading.style.display = "block";
    error.textContent = "";

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch students");
        }

        const users = await response.json();

        // The API users don't have course and age,
        // so we make them from the data we have
        students = users.map(function (user) {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                course: user.company.name,
                age: 18 + user.id
            };
        });

        showStudents(students);
    } catch (err) {
        error.textContent = "Error: " + err.message;
    }

    loading.style.display = "none";
}


// ---------- show students on the page ----------
function showStudents(list) {
    studentList.innerHTML = "";

    // update total students count
    totalStudents.textContent = "Total Students: " + list.length;

    if (list.length === 0) {
        studentList.innerHTML = "<p>No students found</p>";
        return;
    }

    // loop through every student and create a card
    for (let i = 0; i < list.length; i++) {
        const student = list[i];

        const card = document.createElement("div");
        card.className = "student-card";

        card.innerHTML = `
            <p><b>ID:</b> ${student.id}</p>
            <p><b>Name:</b> ${student.name}</p>
            <p><b>Email:</b> ${student.email}</p>
            <p><b>Course:</b> ${student.course}</p>
            <p><b>Age:</b> ${student.age}</p>
            <button onclick="deleteStudent(${student.id})">Delete</button>
        `;

        studentList.appendChild(card);
    }
}


// ---------- check if the form is filled properly ----------
function validateForm() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const course = courseInput.value.trim();
    const age = ageInput.value;

    if (name === "" || email === "" || course === "" || age === "") {
        error.textContent = "Please fill all the fields";
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        error.textContent = "Please enter a valid email";
        return false;
    }

    if (age <= 0 || age > 100) {
        error.textContent = "Age must be between 1 and 100";
        return false;
    }

    error.textContent = "";
    return true;
}


// ---------- POST: add a new student ----------
async function addStudent(event) {
    event.preventDefault(); // stop page from refreshing

    // stop if the form is not valid
    if (!validateForm()) {
        return;
    }

    const newStudent = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        course: courseInput.value.trim(),
        age: Number(ageInput.value)
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStudent)
        });

        if (!response.ok) {
            throw new Error("Failed to add student");
        }

        const addedStudent = await response.json();

        // The fake API always gives id 11, so we make our own unique id
        let newId = 1;
        for (let i = 0; i < students.length; i++) {
            if (students[i].id >= newId) {
                newId = students[i].id + 1;
            }
        }
        addedStudent.id = newId;

        // add the new student to our array and show it
        students.push(addedStudent);
        searchStudents(); // shows list (keeps search text working)

        studentForm.reset();
    } catch (err) {
        error.textContent = "Error: " + err.message;
    }
}


// ---------- DELETE: remove a student ----------
async function deleteStudent(id) {
    try {
        const response = await fetch(API_URL + "/" + id, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Failed to delete student");
        }

        // remove the student from our array
        students = students.filter(function (student) {
            return student.id != id;
        });

        searchStudents(); // update the screen
    } catch (err) {
        error.textContent = "Error: " + err.message;
    }
}


// ---------- search by name or course ----------
function searchStudents() {
    const text = searchInput.value.toLowerCase();

    const result = students.filter(function (student) {
        return (
            student.name.toLowerCase().includes(text) ||
            student.course.toLowerCase().includes(text)
        );
    });

    showStudents(result);
}


// ---------- events ----------
studentForm.addEventListener("submit", addStudent);
searchInput.addEventListener("input", searchStudents);

// load the students when page opens
getStudents();
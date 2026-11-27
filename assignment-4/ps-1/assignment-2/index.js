const students = [
    { id: 1, name: "Rahul", age: 20, marks: 85, course: "JavaScript" },
    { id: 2, name: "Priya", age: 21, marks: 72, course: "Python" },
    { id: 3, name: "Amit", age: 19, marks: 91, course: "Java" },
    { id: 4, name: "Sneha", age: 22, marks: 65, course: "JavaScript" },
    { id: 5, name: "Rohan", age: 20, marks: 45, course: "Python" }
];

// PART A - BASIC ARRAY OPERATIONS

// Display all student details.
console.log(students);

// Display the total number of students.
console.log(students.length);

// Add a new student at the end of the array.
students.push({
    id: 6, name: "Angad", age: 18, marks: 100, course: "C++"
});
console.log(students);

// Add a new student at the beginning of the array.
students.unshift({
    id: 7, name: "Tayyab", age: 18, marks: 12, course: "Python"
});
console.log(students);

// Remove the first student from the array.
students.shift();
console.log(students);

// Remove the last student from the array.
students.pop()
console.log(students);

// Find the index of a student using the student's name.
for (let i = 0; i < students.length; i++) {
    if (students[i].name === "Amit") {
        console.log(i);
        break;
    }
}

// Check whether a student named "Amit" exists in the array.
for (let i = 0; i < students.length; i++) {
    if (students[i].name === "Amit") {
        console.log(`Student Exists`);
        break;
    }
}

// PART B - USING map()

// Create a new array containing only student names.
let studentNames = students.map((student)=> {
    return student.name
});
console.log(studentNames);

// Create a new array by adding 5 bonus marks to every student.
let studentWithBonus = students.map((student)=> {
    return {
        id: student.id,
        name: student.name,
        age: student.age,
        marks: student.marks + 5,
        course: student.course
    };
})
console.log(studentWithBonus)

// Convert all student names into uppercase.
let studentNamesUpper = students.map((student)=> {
    return {
        id: student.id,
        name: student.name.toUpperCase(),
        age: student.age,
        marks: student.marks,
        course: student.course
    };
});
console.log(studentNamesUpper)

// PART C - Using filter()

// Display students who scored above 80 marks.
console.log(
    students.filter((student)=> {
        if (student.marks > 80) {
            return student;
        }
    })
);

// Display students who failed (marks below 50).
console.log(
    students.filter((student)=> {
        if (student.marks < 50) {
            return student;
        }
    })
);

// Display students enrolled in the JavaScript course.
console.log(
    students.filter((student)=> {
        if (student.course === "JavaScript") {
            return student;
        }
    })
);

// PART D - Using find()

// Find the first student whose marks are greater than 90.
console.log(
    students.find((student)=> {
        if (student.marks > 90) {
            return student;
        }
    })
)

// Find the student whose ID is 3.
console.log(
    students.find((student)=> {
        if (student.id === 3) {
            return student;
        }
    })
)

// PART E - Using reduce()

// Calculate the total marks of all students.
const studentsTotalMarks = students.reduce((total, student)=> {
    return total + student.marks;
}, 0);
console.log(studentsTotalMarks)

// Calculate the average marks of all students.
console.log(
    students.reduce((total, student)=> {
        return  studentsTotalMarks / students.length;
    }, 0)
);

// Find the highest marks scored.
console.log(
    students.reduce((highest, student)=> {
        if (student.marks > highest) {
            highest = student.marks
        }
        return highest
    }, 0)
)

// Find the lowest marks scored.
console.log(
    students.reduce((lowest, student)=> {
        if (student.marks < lowest) {
            lowest = student.marks
        }
        return lowest
    }, students[0].marks)
)

// Part F – Using some() and every()

// Check whether at least one student scored above 90.
console.log(
    students.some((student)=> {
        if (student.marks > 90) {
            return student
        }
    })
)

// Check whether all students passed (marks greater than or equal to 35).
console.log(
    students.every((student)=> {
        if (student.marks >= 35) {
            return student
        }
    })
)

// PART G - Using sort()

// Sort students by marks in ascending order.
console.log(
    students.sort((a, b)=> {
        return a.marks - b.marks
    })
)

// Sort students by marks in descending order.
console.log(
    students.sort((a, b)=> {
        return b.marks - a.marks
    })
)

// Sort students alphabetically by name.
console.log(
    students.sort((a, b)=> {
        return a.name.localeCompare(b.name)
    })
)

// Part H – Using slice() and splice()

// Display the first three students using slice().
console.log(
    students.slice(0, 3)
)

// Remove one student from the middle of the array using splice().
console.log(
    students.splice(2, 1)
)

// Insert a new student at the second position using splice().
students.splice(1, 0, {
    id: 6, name: "Angad", age: 18, marks: 100, course: "C++" 
})
console.log(students)

// Part I – Challenge Tasks

// Find the topper of the class.
console.log(
    students.reduce((highest, student)=> {
        if (student.marks > highest.marks) {
            return student
        }
        else {
            return highest
        }
    }, students[0])
)

// Calculate the average age of students.
let totalMarks = 0
for (let i = 0; i < students.length; i++) {
    totalMarks += students[i].marks;
}
console.log(
    students.reduce((total, student)=> {
        return totalMarks / students.length
    }, 0)
)

// Count the number of students enrolled in each course.
console.log(
    students.reduce((count, students)=> {
        if (students.course === "JavaScript") {
            count.JavaScript++;
        }
        else if (students.course === "Java") {
            count.Java++;
        }
        else if (students.course === "Python") {
            count.Python++;
        }

        return count
    }, {
        JavaScript: 0,
        Java: 0,
        Python: 0
    })
)

// Display only the names of students who scored more than the average marks.
let avgMarks = totalMarks / students.length

console.log(
    students.map((student)=> {
        if (student.marks > avgMarks) {
            return student;
        }
    })
)

// Create a new array containing only the names and courses of students.
let namesAndCourse = students.map((student)=> {

    return {
        name: student.name,
        course: student.course
    }
})
console.log(namesAndCourse)

// Reverse the student array.
console.log(
    students.reverse()
)

// Join all student names into a single string separated by commas.
console.log(
    students.map((student)=> {
        return student.name
    }).join(',')
)

// Remove duplicate course names and display only unique courses.
console.log(
    
)

// Display students whose names start with the letter "R".
console.log(
    students.filter((student)=> {
        return student.name.startsWith("R")
    })
)

// Generate a student report containing:
console.log(`Total Students: ${students.length}`)

const totalStudentsPassed = students.filter((student)=> {
    if (student.marks > 35) {
        return student
    }
})
console.log(`Students that passed: ${totalStudentsPassed.length}`);

const studentsFailed = students.filter((student)=> {
    if (student.marks < 35) {
        return student
    }
})
console.log(`Students that failed: ${studentsFailed.length}`)

const highestMarks = students.reduce((highest, student)=> {
    if (student.marks > highest) {
        highest = student.marks
    }
    return highest
}, students[0].marks)
console.log(`Highest marks: ${highestMarks}`)

const lowestMarks = students.reduce((lowest, student)=> {
    if (student.marks < lowest) {
        lowest = student.marks
    }
    return lowest
}, students[0].marks)
console.log(`Lowest marks: ${lowestMarks}`)

console.log(`Average marks: ${avgMarks}`)

const topperName = students.reduce((highest, student)=> {
    if (student.marks > highest) {
        highest = student.marks
    }
    
}, students[0].marks)
console.log(topperName)
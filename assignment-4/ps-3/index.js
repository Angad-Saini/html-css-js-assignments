// ==============================
// Part A – Creating and Accessing Objects
// ==============================

// Q1. Create a Student Object
console.log("Q1. Create a Student Object");

const student = {
    name: "Rahul",
    age: 20,
    course: "JavaScript",
    marks: 85
};

console.log(student);

// Q2. Access Object Properties (dot notation)
console.log("Q2. Access Object Properties");

console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("Student Course:", student.course);
console.log("Student Marks:", student.marks);

// Q3. Access Properties Using Bracket Notation
console.log("Q3. Access Properties Using Bracket Notation");

const employee = {
    name: "Amit",
    age: 25,
    department: "IT",
    salary: 35000
};

console.log(employee["name"]);
console.log(employee["department"]);
console.log(employee["salary"]);

// Q4. Create a Product Object
console.log("Q4. Create a Product Object");

const product = {
    productName: "Laptop",
    brand: "Dell",
    price: 55000,
    stock: 10
};

console.log(product);

// ==============================
// Part B – Adding, Updating and Deleting Properties
// ==============================

// Q5. Add New Properties
console.log("Q5. Add New Properties");

const studentPriya = {
    name: "Priya",
    age: 21
};

console.log(studentPriya);

studentPriya.course = "Python";
studentPriya.marks = 90;
studentPriya.city = "Mumbai";

console.log(studentPriya);

// Q6. Update Object Properties
console.log("Q6. Update Object Properties");

const car = {
    brand: "Honda",
    model: "City",
    color: "White",
    price: 1200000
};

console.log(car);

car.color = "Black";
car.price = 1300000;
car.model = "Amaze";

console.log(car);

// Q7. Delete Object Properties
console.log("Q7. Delete Object Properties");

const user = {
    name: "Rahul",
    age: 22,
    email: "rahul@gmail.com",
    password: "rahul123"
};

console.log(user);

delete user.password;

console.log(user);

// ==============================
// Part C – Object Properties
// ==============================

// Q8. Check Whether a Property Exists
console.log("Q8. Check Whether a Property Exists");

const mobile = {
    brand: "Samsung",
    model: "S24",
    price: 75000
};

console.log("brand" in mobile);
console.log("camera" in mobile);
console.log("price" in mobile);

// Q9. Display All Object Keys
console.log("Q9. Display All Object Keys");

const book = {
    title: "JavaScript Basics",
    author: "John",
    price: 500,
    pages: 250
};

console.log(Object.keys(book));

// Q10. Display All Object Values
console.log("Q10. Display All Object Values");

console.log(Object.values(book));

// Q11. Display Object Entries
console.log("Q11. Display Object Entries");

for (const [key, value] of Object.entries(book)) {
    console.log(`${key}: ${value}`);
}

// ==============================
// Part D – Object Methods
// ==============================

// Q12. Create a Calculator Object
console.log("Q12. Create a Calculator Object");

const calculator = {
    num1: 20,
    num2: 10,

    add() {
        return this.num1 + this.num2;
    },

    subtract() {
        return this.num1 - this.num2;
    },

    multiply() {
        return this.num1 * this.num2;
    },

    divide() {
        return this.num1 / this.num2;
    }
};

console.log("Addition:", calculator.add());
console.log("Subtraction:", calculator.subtract());
console.log("Multiplication:", calculator.multiply());
console.log("Division:", calculator.divide());

// Q13. Student Introduction
console.log("Q13. Student Introduction");

const studentRahul = {
    name: "Rahul",
    age: 20,
    course: "B.Tech CSE",

    introduce() {
        console.log("Hello, my name is " + this.name + ".");
        console.log("I am " + this.age + " years old.");
        console.log("I am studying " + this.course + ".");
    }
};

studentRahul.introduce();

// ==============================
// Part E – Nested Objects and Destructuring
// ==============================

// Q14. Create a Nested Object
console.log("Q14. Create a Nested Object");

const collegeStudent = {
    name: "Amit",
    age: 21,
    course: "B.Tech",
    address: {
        city: "Mumbai",
        state: "Maharashtra",
        pincode: 410210
    }
};

console.log("Student Name:", collegeStudent.name);
console.log("Student City:", collegeStudent.address.city);
console.log("Student State:", collegeStudent.address.state);
console.log("Student Pincode:", collegeStudent.address.pincode);

// Q15. Object Destructuring
console.log("Q15. Object Destructuring");

const laptop = {
    brand: "HP",
    model: "Pavilion",
    price: 65000,
    processor: "Intel i5"
};

const { brand, model, price } = laptop;

console.log("Brand:", brand);
console.log("Model:", model);
console.log("Price:", price);
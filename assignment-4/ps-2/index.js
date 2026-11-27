console.log("Part A – Function Declaration and Calling");
console.log("Q1. Create Your First Function");

function greet() {
    console.log("Hello Students");
}

greet();

console.log("Q2. Call a Function Multiple Times");
function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();

console.log("Q3. Function with One Parameter");

function greetStudent(name) {
    console.log(`Welcome ${name}`);
}

greetStudent("Rahul");
greetStudent("Priya");

console.log("Q4. Function with Two Parameters");

function studentDetails(name, age) {
    console.log(`Student Name: ${name}`);
    console.log(`Student Age: ${age}`);
}

studentDetails("Rahul", 20);

console.log("Part B – Understanding Return");

console.log("Q5. Return a Number");

function getNumber() {
    return 100;
}

console.log(getNumber());


console.log("Q6. Add Two Numbers Using Return");

function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers(10, 20);
console.log(result);

console.log("Q7. Multiply Two Numbers");

function multiplyNumbers(a, b) {
    return a * b;
}

console.log(multiplyNumbers(5, 4));

console.log("Q8. Return a Student's Name")

function getStudentName(name) {
    return name;
}

let studentName = getStudentName("Amit");
console.log(studentName);

console.log("Part C – Understanding Function Behaviour");

console.log("Q9. Difference Between console.log() and return")

function showMessage() {
    console.log("Hello JavaScript");
}

function getMessage() {
    return "Hello JavaScript";
}

showMessage();
getMessage();

let result1 = showMessage();
let result2 = getMessage();

console.log(result1);
console.log(result2);

console.log("Q10. Function with a Condition");

function checkAge(age) {
  if (age >= 18) {
    return "Eligible to Vote";
  } else {
    return "Not Eligible to Vote";
  }
}

console.log(checkAge(20));
console.log(checkAge(15));

console.log("Part D – Arrow Functions");
console.log("Q11. Create an Arrow Function");

// Named greet1 because greet is already used in Q1
const greet1 = () => {
    console.log("Hello Students");
}

greet1();

console.log("Q12. Arrow Function with Return");


const subtract = (a, b) => {
    return a - b;
}

console.log(subtract(20, 10));
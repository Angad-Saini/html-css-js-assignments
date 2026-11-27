// Part A: Map()

// Q1. Given an array of numbers [2, 4, 6, 8, 10], create a new array containing the square of each number.

console.log("Q1. Given an array of numbers [2, 4, 6, 8, 10], create a new array containing the square of each number.");

let arr1 = [2, 4, 6, 8, 10];

console.log(
    arr1.map((elem) => {
        return elem**2;
    })
);

// Q2. Given an array of names ["rahul", "amit", "priya", "neha"], convert all names into uppercase.
console.log(`Q2. Given an array of names ["rahul", "amit", "priya", "neha"], convert all names into uppercase.`);

let arr2 = ["rahul", "amit", "priya", "neha"];

console.log(
    arr2.map((elem)=> {
        return elem.toUpperCase();
    })
);

// Q3. Given an array of prices [100, 200, 300, 400], increase every price by 10%.
console.log("Q3. Given an array of prices [100, 200, 300, 400], increase every price by 10%.");

let arr3 = [100, 200, 300, 400];

console.log(
    arr3.map((elem)=> {
        return elem + (elem * 10/100);
    })
);

// Part B: Filter()
// Q4. Given an array [12, 25, 8, 40, 15, 60], filter and display numbers greater than 20.
console.log("Q4. Given an array [12, 25, 8, 40, 15, 60], filter and display numbers greater than 20.");

let arr4 = [12, 25, 8, 40, 15, 60];

console.log(
    arr4.filter((elem) => {
        if (elem > 20) {
            return elem;
        }
    })
);

// Q5. Given an array of students: Filter and display students who scored more than 50 marks.
console.log("Q5. Given an array of students: Filter and display students who scored more than 50 marks.")

let students = [
    { name: "Rahul", marks: 85 },
    { name: "Amit", marks: 35 },
    { name: "Priya", marks: 90 },
    { name: "Neha", marks: 45 }
];

console.log(
    students.filter((student)=> {
        if (student.marks > 50) {
            return student;
        }
    })
);

// Q6. Given an array of products: Display products whose price is less than 20000.
console.log("Display products whose price is less than 20000.");

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 15000 },
    { name: "Headphones", price: 2000 },
    { name: "Tablet", price: 25000 }
];

console.log(
    products.filter((product)=> {
        if (product.price < 20000) {
            return product;
        }
    })
);

// Part C: Reduce()
// Q7. Given an array [10, 20, 30, 40, 50], calculate the total sum using reduce().

console.log("Q7. Given an array [10, 20, 30, 40, 50], calculate the total sum using reduce().");

let arr5 = [10, 20, 30, 40, 50];

console.log(
    arr5.reduce((elem, sum) => {
        return elem + sum;
    })
);

// Q8. Given an array of prices [100, 200, 300, 400], calculate the total shopping amount.

let arr6 = [100, 200, 300, 400];

console.log( "Total Shopping cart:",
    arr6.reduce((elem, sum) => {
        return elem + sum;
    })
);

// Q9. Given an array [10, 25, 30, 45, 50, 60], calculate how many numbers are greater than 30 using reduce().
console.log("Q9. Given an array [10, 25, 30, 45, 50, 60], calculate how many numbers are greater than 30 using reduce().");

let arr7 = [10, 25, 30, 45, 50, 60];

console.log( `Count:`,
    arr7.reduce((a, b) => {
        if (b > 30) {
            return a + 1;
        }
        else {
            return a;
        }
    }, 0)
);

// Part D: Mixed Practice
// Q10. Given an array [2, 5, 8, 10, 15, 20]:
// Filter numbers greater than 5.
// Multiply each selected number by 2 using map().
// Calculate their total using reduce().

console.log("Q10. Given an array [2, 5, 8, 10, 15, 20]:");

let arr8 = [2, 5, 8, 10, 15, 20];

console.log(
    arr8.filter((elem) => {
        if (elem > 5) {
            return elem;
        }
    })
);

console.log(
    arr8.map((elem) => {
        return elem * 2;
    })
);

console.log(
    arr8.reduce((prev, curr) => {
        return prev + curr;
    }, 0)
);

// Q11. Given the following student data:
// let students = [
//     { name: "Rahul", marks: 80 },
//     { name: "Amit", marks: 35 },
//     { name: "Priya", marks: 90 },
//     { name: "Neha", marks: 60 }
// ];
// Filter students who scored 60 or above.
// Display only their names using map().
// Calculate the total marks of these selected students using reduce().
console.log("Q11. Given the following student data");

let students1 = [
    { name: "Rahul", marks: 80 },
    { name: "Amit", marks: 35 },
    { name: "Priya", marks: 90 },
    { name: "Neha", marks: 60 }
];

// Filter students who scored 60 or above.
let selectedStudents = students1.filter((student) => {
    return student.marks >= 60;
});

// Display only their names using map().
console.log(
    selectedStudents.map((student) => {
        return student.name;
    })
);

// Calculate the total marks of these selected students using reduce().
console.log(
    selectedStudents.reduce((total, student) => {
        return total + student.marks;
    }, 0)
);

// Q12. Given the following cart:
// let cart = [
//     { name: "Laptop", price: 50000, quantity: 1 },
//     { name: "Mouse", price: 500, quantity: 2 },
//     { name: "Keyboard", price: 1500, quantity: 1 }
// ];
// Calculate the final shopping bill using reduce(), considering both price and quantity.

// Q12. Given the following cart
console.log("Q12. Given the following cart");

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 }
];

// Calculate the final shopping bill using reduce(), considering both price and quantity
console.log( `Total Shopping Bill:`,
    cart.reduce((total, cart) => {
        return total + (cart.price * cart.quantity);
    }, 0)
);
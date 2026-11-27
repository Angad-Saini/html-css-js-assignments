// QUESTION 1

function myPromise() {
    return new Promise((resolve, reject) => { 
        resolve("Hello Students")
     });
}

myPromise().then((message) => {
    console.log(message);
});

// QUESTION 2

function num10(x) {
    return new Promise((resolve, reject) => {
        if (x == 10) {
            resolve("Success")
        }
        else {
            reject("Something went wrong")
        }
    });
}

num10(10).then((message) => {
    console.log(message)
});

num10(12).then((message) => {
    console.log(message)
});

// QUESTION 3

function checkAge(age) {
    return new Promise((resolve, reject) => { 
        if (age >= 18) {
            resolve("You can vote")
        }
        else {
            reject("You cannot vote")
        }
     });
}

checkAge(18).then((message) => {
    console.log(message)
});

checkAge(12).then((message) => {
    console.log(message)
});

// QUESTION 4

function addNumbers(a, b) {
    return new Promise((resolve, reject) => {
        resolve(`${a} + ${b} = ${a+b}`)
    });
}

addNumbers(2, 2).then((message) => {
    console.log(message)
});

// QUESTION 5
async function greet() {
    return "Welcome to JavaScript";
}

greet().then((message)=> {
    console.log(message)
})

// QUESTION 6

function getData() {
    return new Promise((resolve, reject) => {
        resolve("Data recieved successfully")
    });
}

async function showData() {
    const result = await getData();
    console.log(result)
}

showData();


// QUESTION 7

function calculateSum(a, b) {
    return new Promise((resolve, reject) => { 
        resolve(`${a} + ${b} = ${a+b}`)
     });
}

async function getSum() {
    const sum = await calculateSum(2, 4);
    console.log(sum);
}

getSum();


// QUESTION 8

function checkResult(marks) {
    return new Promise((resolve, reject) => { 
        if (marks >= 40) {
            resolve("Pass")
        }
        else {
            reject("Fail")
        }
     });
}

async function showResult(marks) {
    try {
        const result = await checkResult(marks);
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

showResult(75);
showResult(30);
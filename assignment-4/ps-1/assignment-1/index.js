const fruits = [
    "Apple", "Banana", "Orange", "Mango", "Pineapple",
    "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"
];

function rearrangefruits(fruits) {
    for (let i = 0; i < 4; i++) {
        const last = fruits.pop();
        fruits.splice(0, 0, last);
    }

    return fruits;
}

console.log(rearrangefruits(fruits));
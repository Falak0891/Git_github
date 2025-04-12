console.log("Learning about git");
console.log("Lets learn more");
// map function with an array of objects
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const userNames = users.map(user => user.name);
console.log(userNames); // ["Alice", "Bob", "Charlie"]

// map function with an array of numbers
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]
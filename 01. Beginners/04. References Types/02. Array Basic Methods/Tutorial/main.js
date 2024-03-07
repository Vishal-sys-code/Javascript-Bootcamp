/* 
push() -> Add item at the end of the array
pop() -> Remove item at the end of the array
shift() -> Remove from the start
unshift() -> Add to start
concat() -> Combining Arrays
*/

const fruits = [
    "apples",
    "pomegranate",
    "mango",
    "strawberries",
    "pineapple",
    "grapefruit"
];

console.log(fruits);
fruits.push("banana");
fruits.pop();
fruits.shift();
fruits.unshift("orange");

/*
---- CONCATENATION ----
const fruits = ["apples", "pomegrante", "mango"];
let moreFruits = ["strawberries", "pineapple", "grapefruit"];
let totalFruits = fruits.concat(moreFruits);
*/

console.log(fruits);
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

/*
join() -> creates a string from the array
reverse() -> reverse an array
slice() -> copy portion of an array
sort() -> sorts an array
*/

let programmingLanguages = ["JavaScript", "GoLang", "Python", "Php"];
let numbers = [1,2,3,4,5];

console.log(programmingLanguages);
console.log(programmingLanguages.includes("GoLang"));
console.log(programmingLanguages.join("-"));
console.log(programmingLanguages.reverse());
console.log(programmingLanguages.slice(0,3));
console.log(programmingLanguages.sort());
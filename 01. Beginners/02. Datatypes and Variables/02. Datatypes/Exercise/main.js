// --------------------------------------------------------------------------------
/* NUMBERS */
console.log("--------- NUMBERS ASSIGNMENTS ---------");
let firstFavNum = 3;
let secondFavNum = 29;
let addNum = firstFavNum + secondFavNum;
let subNum = firstFavNum - secondFavNum;
let mulNum = firstFavNum * secondFavNum;
let divNum = firstFavNum / secondFavNum;
let checkNum = firstFavNum % secondFavNum;
let power = firstFavNum ** secondFavNum;

console.log(`Addition: ${addNum}`);
console.log(`Substraction: ${subNum}`);
console.log(`Multiplication: ${mulNum}`);
console.log(`Division: ${divNum}`);
console.log(`Mod Division: ${checkNum}`);
console.log(`Power: ${power}`);

// --------------------------------------------------------------------------------
/* BOOLEANS */
console.log("--------- BOOLEAN ASSIGNMENTS ---------");
let isJsProgrammingLanguage = true;
let isJsHard = false;
let favNumb = 3;

console.log(isJsProgrammingLanguage);
console.log(isJsHard);
console.log(favNumb + undefined);

// --------------------------------------------------------------------------------
/* COMPARISON OPERATORS */
console.log("--------- COMPARISON OPERATORS ASSIGNMENTS ---------");

firstFavNum = 3;
secondFavNum = 29;

console.log(`${firstFavNum > secondFavNum}`);
console.log(`${firstFavNum < secondFavNum}`);
console.log(`${firstFavNum >= secondFavNum}`);
console.log(`${firstFavNum <= secondFavNum}`);
console.log(`${firstFavNum === secondFavNum}`);
console.log(`${firstFavNum == secondFavNum}`);
console.log(`${firstFavNum !== secondFavNum}`);
console.log(`${firstFavNum != secondFavNum}`);

// --------------------------------------------------------------------------------
/* STRING */
console.log("--------- STRING ASSIGNMENTS ---------");
let favActorFirstName = "Vishal";
let favActorLastName = "Pandey";
// let fullName = (`FullName: ${favActorFirstName + favActorLastName}`);
fullName = favActorFirstName + " " + favActorLastName;
let upperCase = fullName.toUpperCase();
let message = (`My favorite Actor is ${upperCase} & He is a good man &`);
message += " his best show is Silicon Valley";
console.log(message);
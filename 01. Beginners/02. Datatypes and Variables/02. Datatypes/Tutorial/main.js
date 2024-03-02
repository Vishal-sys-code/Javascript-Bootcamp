// -----------------------------------------------------------------------------------------------------------------
/* NUMBERS */

// Javascript has one number type: Positive, Negative, Whole, Decimal
const randomNumber = 10200;
const favNumber = 21;
let num = 2;

// Basic Maths
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);
console.log(num++);
console.log(num--);
console.log(++num);
console.log(--num);

// -----------------------------------------------------------------------------------------------------------------
/* BOOLEANS */
let isCodingFun = true;
let isDebuggingNeedsAlways = false;

console.log(isCodingFun);
console.log(isDebuggingNeedsAlways);

// -----------------------------------------------------------------------------------------------------------------
/* RELATIONAL OPERATORS */

/* 
1. Greater than: >
2. Less than: <
3. Greater Than or equal to: >=
4. Less Than or equal to: <=
*/

console.log(10 > 10);
console.log(10 < 10);
console.log(10 >= 10);
console.log(10 <= 10);

/* EQUALITY OPERATORS */
/* 
1. === : strict equality (Type + Value)
2. !== : strict non-equality (Type + Value)
3. ==  : Lose equality (values)
4. !=  : Lose equality (values)
*/

console.log(10 === 10);
console.log(10 !== 10);
console.log(10 == 10);
console.log(10 != 10);

// -----------------------------------------------------------------------------------------------------------------
/* STRINGS */

let firstName = "Vishal";
let lastName = "Pandey";
// let fullName = firstName + lastName;
// console.log(`Name: ${fullName}`);

// STRING CONCATENATION
let fullName_Concatenated1 = firstName + " " + lastName;
let fullName_Concatenated2 = firstName.concat(lastName);
console.log(`Full Name Concatenation 1: ${fullName_Concatenated1}`);
console.log(`Full Name Concatenation 2: ${fullName_Concatenated2}`);

/* STRING METHODS */

// Concatenation
let fullName = firstName.concat(" ", lastName);
console.log("Full Name:", fullName); // Output: Full Name: Vishal Pandey

// Length
console.log("Length of firstName:", firstName.length); // Output: Length of firstName: 6

// indexOf
console.log("Index of 'h' in firstName:", firstName.indexOf('h')); // Output: Index of 'h' in firstName: 2

// charAt
console.log("Character at index 3 in lastName:", lastName.charAt(3)); // Output: Character at index 3 in lastName: d

// slice
console.log("Substring from index 2 to 5 in lastName:", lastName.slice(2, 5)); // Output: Substring from index 2 to 5 in lastName: nde

// toUpperCase
console.log("Uppercase firstName:", firstName.toUpperCase()); // Output: Uppercase firstName: VISHAL

// toLowerCase
console.log("Lowercase lastName:", lastName.toLowerCase()); // Output: Lowercase lastName: pandey

// split
let lastNameArray = lastName.split('');
console.log("lastName split into an array:", lastNameArray); // Output: lastName split into an array: [ 'P', 'a', 'n', 'd', 'e', 'y' ]

// -----------------------------------------------------------------------------------------------------------------

/* TYPE CONVERSION */

let amount = 100;
let money = "100";
let floatValue = "99.5";

// Convert string to number
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);

// Convert number to string
money = money.toString();
money = String(money);

// Change string to decimal
floatValue = parseFloat(floatValue);
console.log(floatValue);

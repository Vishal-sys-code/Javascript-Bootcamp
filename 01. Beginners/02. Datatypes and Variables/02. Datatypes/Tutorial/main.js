// --------------------------------------------
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

// --------------------------------------------
/* BOOLEANS */
let isCodingFun = true;
let isDebuggingNeedsAlways = false;

console.log(isCodingFun);
console.log(isDebuggingNeedsAlways);

// --------------------------------------------
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

// --------------------------------------------
/* STRINGS */

let firstName = "Vishal";
let lastName = "Pandey";
let fullName = firstName + lastName;
console.log(`Name: ${fullName}`);

// STRING CONCATENATION
let fullName_Concatenated1 = firstName + " " + lastName;
let fullName_Concatenated2 = firstName.concat(lastName);
console.log(`Full Name Concatenation 1: ${fullName_Concatenated1}`);
console.log(`Full Name Concatenation 2: ${fullName_Concatenated2}`);


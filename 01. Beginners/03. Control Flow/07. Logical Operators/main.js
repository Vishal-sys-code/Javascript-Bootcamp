// ------------------------------------------------------
/* LOGICAL AND (&&) */
// TRUE if both the operands/boolean values are true, else evaluates to FALSE

const a = true;
const b = false;
const c = 4;

console.log(` --- LOGICAL AND OPERATOR --- `);
console.log("TRUE && TRUE: ", a && a);
console.log("TRUE && FALSE: ", a && b);
console.log("FALSE && TRUE: ", b && a);
console.log("FALSE && FALSE: ", b && b);

console.log(c>2 && c<2);

console.log(`-------------------------------`);

// ------------------------------------------------------
/* LOGICAL OR (||) */
// TRUE if either of the operands/booleans values are true. Evaluates to FALSE if both are FALSE.

console.log(` --- LOGICAL OR OPERATOR --- `);
console.log("TRUE && TRUE: ", a || a);
console.log("TRUE && FALSE: ", a || b);
console.log("FALSE && TRUE: ", b || a);
console.log("FALSE && FALSE: ", b || b);

console.log(c>2 || c<2);

console.log(`-------------------------------`);

// ------------------------------------------------------
/* LOGICAL NOT OPERATOR (!) */
// TRUE if the operand is FALSE, and vice-versa

console.log(` --- LOGICAL NOT OPERATOR --- `);
let password = "Vishal@2001";
if(password.length >= 8 && password.includes("sha")){
    console.log("VALID PASSWORD");
}
else{
    console.log("INVALID PASSWORD");
}

console.log(`-------------------------------`);
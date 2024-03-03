/* 
if (condition_1) {...}
else if(condition_2) {...}
else {...}
*/

let a = 10;
let b = 20;
if(a > b){
    console.log(`${a} is greater than ${b}`);
}
else if(b > a){
    console.log(`${a} is lesser than ${b}`);
}
else{
    console.log(`${a} is equal to ${b}`);
}
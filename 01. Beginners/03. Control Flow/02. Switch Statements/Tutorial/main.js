// SYNTAX OF SWITCH STATEMENTS
/*
switch(expression){
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
        // code block
}
*/

// -------------------------------------------------------------------------------------

// let x = "0";
let x = 0;
switch(x){
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}

// -------------------------------------------------------------------------------------

let day = "Monday";
switch(day){
    case "Monday":
        console.log(`Today is Monday`);
        break;
    case "Tuesday":
        console.log(`Today is Tuesday`);
        break;
    case "Wednesday":
        console.log(`Today is Wednesday`);
        break;
    case "Thursday":
        console.log(`Today is Thrusday`);
        break;
    case "Friday":
        console.log(`Today is Friday`);
        break;
    case "Saturday":
        console.log(`Today is Saturday`);
        break;
    case "Sunday":
        console.log(`Today is Sunday`);
        break;
    default:
        console.log(`Today is invalid day`);
}
function calulateTax(price) {
//    let price = 10.00;
   price *= 1.0625;
//    console.log(`The price after tax: ${price}`); 
    return price;
}

// console.log(calculateTax());

// let previousOrder = 60.00;
// let dailyTotal = previousOrder + calculateTax();
// console.log(`the daily total is ${dailyTotal}`);

// --------------------------------- Period 2

// var DEFAULT_RATE = 0.1; //this means that this variable is no going to change
// var rate =0.5;

// function getRate() {
    // if(!rate) {
        // let rate = DEFAULT_RATE;
    // }
    // return rate;
// }

// console.log(`Your rate is: ${getRate()}`);

// ------------------Period 3

// console.log( calculateTax(5) );


function calculateArea (length, width) {
    return length * width;
}

// console.log ( calculateArea( 5, 2) );

// let userLength = Number(prompt('what is the length'));
// let userWidth = Number(prompt('What is the width'));

// console.log (calculateArea(userLength, userWidth));

// ---------------------------------

function adding(length, additional){
    return length + additional;
}
console.log (adding (5,23 ));
// ----------------------------------

function subtraction (length, subtract){
    return length - subtract;
}
console.log (subtraction (77,77));

// ---------------------------------

function multiples(length, doubled){
    return length + doubled;
}
console.log (multiples (5,2 ));

// ---------------------------------

function loveMathProblems(name, myLoveOfMath){
    return name + myLoveOfMath;
}
let userName = prompt('what is your name');
let myLoveOfMath = ', i love doing math problems'
console.log (loveMathProblems (userName, myLoveOfMath ));

// -------------------------------------

// function multiplyTwoParameters ()
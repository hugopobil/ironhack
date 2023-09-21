// NUMBERS

// numbers can be represented as integers or floating-point
let age = 44 // integer
const price = 12.99 // float

// we can perform operations directly in the console log
console.log("Operators: ", 2+2);
// use of advance operators
console.log("Exponential: " , 2**3);

/*
module operator
can be used to check for even and odd numbers
 */
console.log("Module: ", 10 % 2);
console.log("Check Module: ", 10 % 2 === 0);

// advance assignment operators
let myAge_2 = 25
myAge_2 += 5
console.log(myAge_2);

// expressions
const result = 1 + 1
console.log(result)

// multiple expressions
let result_multiple = (7 + 5) / 3 - 8;
console.log(result_multiple);

// CHECK OFR UNDERSTANDING
// Exercise 1
const expressionOne = ((2 * 2) + 5) * 6;
console.log(expressionOne);

const expressionTwo = ((2* 2) + (5 * 3)) - 5;
console.log(expressionTwo);

const expressionThree = (5 * 5) / (5 * 5);
console.log(expressionThree);

const expressionFour = 5 * 5 - 5 * 4;
console.log(expressionFour);

// Exercise 2
const cheeseCalories = 200;
const eggsRequired = 4;
const caloriesPerEgg = 75;
let eggsCalories;
let num_servings = 2

eggsCalories = eggsRequired * caloriesPerEgg
console.log("Total egg calories: ", eggsCalories)

let omeletteCalories = eggsCalories + cheeseCalories
console.log("Omelette Calories: ", omeletteCalories)

console.log("Calories per serving: ", omeletteCalories / num_servings)


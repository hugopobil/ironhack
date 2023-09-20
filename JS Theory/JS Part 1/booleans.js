
// BOOLEANS

/*
Boolean data type can have one of two possible values: true or false.
Booleans are used to represent two states, such as if a light is ON or OFF,
or to indicate if something is true or false.
 */

// Example of booleans
let powerOn = true;
let isRaining = false;

/*
Comparison operators are used to check if two values or variables are equal or different.
A boolean expression is simply an expression that returns either true or false.
 */
console.log(1 === 1) // true
console.log('ab' !== 'ba') // true
console.log(1 > 8) // false

/*
Logical operators are used for combining two or more boolean expressions
(expressions that return true or false) into one large expression that returns true or false.
 */

// AND
// Returns true only if both operands are true:
console.log((1 === 1) || ('a' !== 'a')); // true
console.log((1 === 1) && ('a' !== 'b')); // true
console.log((1 === 1) && ('a' !== 'a')); // false
console.log((1 === 1) || ('a' !== 'b')); // true

// CHECK FOR UNDERSTANDING
console.log(true && false); // false
console.log(11 % 3 === 2); // true
console.log(false || true); // true
console.log(!true || false); // false
console.log(17 == '17'); // true // check for the same value with "=="
console.log(123 === '123'); // false
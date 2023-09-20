

// This is a test script for JavaScript (Iron Hack)
console.log("Hello World");
console.log("Test");

/*
VARIABLES
· A variable is a named container (space in the memory) that stores some value.
· A variable declaration is when you create a variable and give it a name.
 */

// Declaring a variable
let age;

// Variable initialization consists of giving the variable some value
age = 25

// We can also declare multiple variables
let last_name, email, course;

// undefined variable
let favoriteFood;
console.log(favoriteFood);

/*
const is used to declare a variable that will remain constant and whose value can’t be reassigned.
const variables must be assigned and initialized at the same line
 */
const name = "Hugo"
console.log(name)

/*
Variable Naming Rules

Variable names must begin with a letter, a dollar sign $ , or an underscore _ .
Variable names can contain letters (uppercase and lowercase), numbers, and the symbols _ and $.
Variable names must not contain spaces.
Variable names are case-sensitive (Name, name, and NAME are all different variables)
Reserved keywords cannot be used as variable names.
 */

/*
DATA TYPES
· Primitive data types (string, number, boolean, undefined, null, bigInt*****, and symbol*****)
· Non-Primitive data types (object, array)
 */

// we can store the value undefined in a variable
let undefined_tst = undefined;

let student = {name:"Ana", age:40};
let numbers = [7, 23, 31, 45, 60];
console.log(student, numbers)

// to find out the type of data
console.log(typeof student)
console.log(typeof age)

// CHECK FOR UNDERSTANDING
let myAge;
myAge = 0
myAge = 25
const myName = "Hugo"
console.log(myName, myAge)
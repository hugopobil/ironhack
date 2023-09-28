// VARIABLE LET Y CONST

let name = "Juan";
let age = 29;
age = 31;

let student;
student = "Carlos";

let Student = "Pedro";
let chineseGreeting = "NI HAO!";

/*

console.log("Esto es un console.log de name + age -> ", name, age);
console.log("Esto es solo name ->", name);
console.log("Esto es solo age ->", age);
console.log("--------------------");
console.log(student);
console.log(chineseGreeting);
console.log("--------------------");
console.log(typeof age);

const classStudentsNum = 12;
const classStudentsAge = 28;

//  classStudentsNum = 50  ->>>  suspenso
console.log(classStudentsNum);

console.log("--------- NUMBERS -----------");

console.log(age - 1);
console.log(age + 2);
console.log(age - 2);
console.log(age * 2);
console.log(age / 2);
console.log(age ** 2);

console.log(4 % 2);
console.log(16 % 3);

console.log("--------------------");

age = age * 2;

console.log(age);
age *= 2;
age += 5; // age = age + 5;
age++; // age += 1;

console.log(age);


const totalClassAge = classStudentsNum * classStudentsAge;
console.log(totalClassAge);
*/

console.log("-------- STRINGS --------");

const surname = "Díaz";
const father = 'Pedrito más conocido como "Peter"';
const mom = `Ana`;

// Juan Diaz, hijo de Pedrito más conocido como "Peter" y Ana.

console.log(`${name} ${surname}, hijo de ${father} y ${mom}`); // se pueden incluir saltos de linea

const strES5 = name + " " + surname + ", hijo de " + father + " y " + mom;
console.log(strES5);

console.log("-------- STRING PROPERTIES / METHODS --------");

console.log(typeof "Hola".length, "Hola".length - 1);

let emptyContainer = "";
emptyContainer = emptyContainer + "Hello, World!";

console.log(emptyContainer.length);
console.log(emptyContainer.charAt(5)); // --> ","
console.log(emptyContainer[1]); // "E"
console.log(emptyContainer[-1]); // undefined
console.log(emptyContainer[100]); // undefined

console.log(emptyContainer.indexOf("h")); // -> 0;
console.log(emptyContainer.indexOf("l")); // -> 2
console.log(emptyContainer.lastIndexOf("l")); // -> 10

console.log(emptyContainer.repeat(3));
console.log("a".repeat(3));
console.log(emptyContainer.substring(1, 3));
console.log(emptyContainer.slice(2, 5));

console.log("barcelona".localeCompare("miami")); // -1  --> TODO
console.log("miami".localeCompare("barcelona")); // 1
console.log("Miami".localeCompare("miami")); // 1

console.log("MIAMI".toLowerCase());
console.log("CarLoSdElaToRrEDIAZ@gmail.com".toLowerCase());

const myName = "rodolfo";
console.log(myName);

const capitalLetter = myName[0].toUpperCase(); //  --> P
const lowerCasedSubStr = myName.slice(1, myName.length); // --> ablo
const finalName = capitalLetter + lowerCasedSubStr;

console.log(capitalLetter, lowerCasedSubStr, finalName);

const str = "To be, or not to be, that is the question.";

console.log(str.startsWith("To be")); // true
console.log(str.startsWith("not to be")); // false
console.log(str.startsWith("not to be", 10)); // true

console.log(str.includes("CACA"));

console.log(true);
console.log(false);

// !

// ||

// &&

// >=, <=, <, >

if (name && age > 30 && 1) {
  console.log("Esto es true y eres un viejoven");
}

if (age >= 30 || 0) {
  console.log("Esto es true y eres un viejoven");
}

console.log("negacion de numero", !!0);
console.log(!0);
console.log(!false);

// comentario

/*
 comentario
 de tipo
 bloque
*/

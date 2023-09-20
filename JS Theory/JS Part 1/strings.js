// STRINGS

/*
A string is a sequence of characters (text).
A string can contain any character: letter, number, punctuation, or even new lines and tabs.
 */

const country1 = "France";
const country2 = 'Mexico';
const country3 = `Brazil`;
console.log(country1);
console.log(country2);
console.log(country3);

// string interpolation
const name = "Hugo";
const surname = "Pobil";
const greeting = `Hello, my name is ${name} ${surname}!!`;
console.log(greeting);

// multi line string
const campuses = `Multiline string:
- Madrid
- Barcelona
- Miami
- Mexico City
- Paris
- Berlin
- Amsterdam
- Sao Paulo
- Lisbon`;
console.log(campuses);

// concatenation of strings
let greetings = "";
greetings += "Hello there.";
console.log(greetings);

greetings += " Welcome to Ironhack!"
console.log(greetings);

// concatenating strings and numbers
const year = 2024;
const birthday = "My birthday is on Feb 21st ";
const result = birthday + year;
console.log(result);
console.log(typeof result);

// string length
const fact = "I love IronSkydive Dev!";
console.log(fact.length);
console.log(`"${fact}" is ${fact.length} characters long.`);

// accessing a character in a string
const string_example = "Hugo"
console.log(string_example[0]) // should print the letter H

/*
indexOf():
A substring is a sequence of characters within a string.
 */
const phrase = "My name is Hugo"
console.log(phrase.indexOf("Hugo"))

// extracting a substring
const phrase_2 = "I would like to play"
const substring_2 = phrase_2.slice(0, 7)
console.log(substring_2)

// uppercase method
const string_3 = "Programming is fun!"
console.log(string_3.toUpperCase().slice(0, 12)) // like Python, you can add methods

// CHECK FOR UNDERSTANDING
// Exercise 1
const turtle1 = 'Leonardo';
const turtle2 = 'Raphael';
const turtle3 = 'Donatello';
const turtle4 = 'Michelangelo';

let allTurtles = '';

allTurtles = turtle1 + ' ' + turtle2 + ' ' + turtle3 + ' ' + turtle4
console.log(allTurtles)

// Exercise 2
const southParkCharacters = 'Stan Kyle Eric Kenny';
// console.log(southParkCharacters.length)
middle = southParkCharacters.length/2

pair1 = southParkCharacters.slice(0, middle)
pair2 = southParkCharacters.slice(middle, middle*2)
// console.log(pair1, pair2)

// Exercise 3
const fruit = 'Apple Banana Cherry Mango';
// console.log(fruit.indexOf('Cherry'))

startIndex = fruit.indexOf('Cherry')
favourite_fruit = fruit.slice(startIndex, startIndex + 6 )
// console.log(favourite_fruit)

// Exercise 4
const message = 'important announcement!';
let upper_case_message = message.toUpperCase()
console.log(upper_case_message)

// Exercise 5
const name_1 = "ava";
const surname_1 = "scott";

let name_formatted = name_1[0].toUpperCase() + name_1.slice(1, name_1.length)
let surname_formatted = surname_1[0].toUpperCase() + surname_1.slice(1, surname_1.length)

console.log(`${name_formatted} ${surname_formatted}`)


// LOOPS
/*
A loop repeatedly runs some code or a set of instructions until a certain
condition is met.
 */

let count = 0;

while (count < 5) {
  count++;
  // console.log(count);
}

/*
Types of loops:
- For
- while
- do...while
- for...in
- for...of
 */

//
// THE WHILE LOOP
//
// while (/* condition */) {
//   // code to execute repeatedly while the condition is true
//
//   // condition update
// }

// Example 1
let counter = 1;
while (counter <= 10) {
  // console.log(counter)
  counter += 1
}

// backwards counter
let counter_2 = 10;
while (counter_2 >= 0){
  console.log(counter_2)
  counter_2 -= 1
}

// print each of the characters in a string
const phrase = "Hello my name is Hugo"
let count_3 = 0
while (count_3 <= phrase.length){
  console.log(phrase[count_3])
  count_3 += 1
}

//
// FOR LOOP
//
// for (/* initialization */; /* condition */; /* update expression */){
//     // code to execute
// }

// loop that counts to 10
for (let i = 1; i <= 10; i++){
    console.log(i);
}

// cunt backwards
for (let i = 5; i >= 0; i--){
    console.log(i);
}

// go through a phrase
const lastIndex = phrase.length -1
for (let i = 0; i>=lastIndex; i++) {
  console.log(phrase[i])
}

// reverse order
for (let i = phrase.length -1;
     i>=0;
     i--){
  console.log(phrase[i])
}

// no list comprehension in JavaScript

// CFU
//
// Exercise 1
// let count = 0

while (count<=10){
  console.log(count)
  count++
}

// Exercise 2
let count_2 = 20
while (count_2 >= 0){
  console.log(count_2)
  count_2 --
}

// Exercise 3
let bootcamp = "IRONHACK";

let last_Index_Ex3 = bootcamp.length + 1

for (let i = 0; i<=last_Index_Ex3; i++){
  console.log(bootcamp[i])
}

// Exercise 4
let word = "TRAMS";

for (let i = word.length - 1; i >= 0; i--){
  console.log(word[i])
}

// Exercise 5
// same as exercise 4, reversed string













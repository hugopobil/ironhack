
// CONDITIONALS AND LOOPS

// print the tenth of a 100th counter
for (let i = 1; i <= 100; i++) {
  if (i % 10 === 0) {
    console.log(i)
  }
}

// count how many times a string is repeated in a phrase
let aCount = 0;
let iCount = 0;
const phrase = "Mary had a little lamb";

for (let i = 0; i < phrase.length; i++ ) {
  const char = phrase[i];

  if (char === "a") {
    aCount++;
  } else if (char === "i") {
    iCount++;
  }
}

console.log(`The string contains: a x ${aCount}, i x ${iCount}.`);

// check smile faces
const smileys = ":) :) ;) ;) :) ;) ;)  8) :) 8)";
let count = 0;

for (let i = 0; i < smileys.length; i++) {
  const twoChars = smileys[i] + smileys[i + 1];

  if ( twoChars === ":)" ) {
    count++;
  }
}

// break statement to end the loop when a condition is meet
const password = "$123abc.456789$";

for (let i = 0; i < password.length; i++) {
  const char = password[i];

  if (char === ".") {
    console.log("Character not '.' is not allowed!")
    break;
  }
}

const lastNumber = 50;

for (let i = 1; i <= lastNumber; i++) {

  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

//
// Check for Understanding
//
// Exercise 1
for (let i = 1; i <=3; i++){
  console.log("+------+")
  for (let i = 1; i <=3; i++){
    console.log("| o o |")
  }
}

// Exercise 2
for (let i = 1; i <=4; i++){
  console.log("+-+-+-+-+-+-+")
  for (let i = 1; i <=2; i++){
    console.log("| 0 0 0 0 0 |")
  }
}

// Exercise 3
for (let i = 1; i>=50; i++){
  if (i % 5 === 0){
    console.log(i)
  }
}

// Exercise 4
let count_4 = 0;
const text = "[] <> {} [] << [] <> {} [] << {} >> [] <> {} << {} >> [] <> {}";

for (let i = 0; i<text.length; i++){
  const twoChar = text[i] + text[i+1]

  if (twoChar === "<>"){
    count_4++;
  }
}

console.log("count: ", count_4);

// Exercise 5
for (let i = 15; i>=0; i--){
  console.log(i)
  if (i === 11){
    console.log("Final countdown")
  }
  if(i === 0){
    console.log("Take Off!")
  }


}

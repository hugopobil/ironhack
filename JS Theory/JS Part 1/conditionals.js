
// CONDITIONAL STATEMENT

// video example
grade = 6

if (grade > 8) { // main condition
    console.log("Excellent")
}
else if ((grade > 5) && (grade <=8)){
    console.log("Nice One")
}
else { // alternative condition
    console.log("Fucking Bad")
}

if (grade > 9) {
    if (grade > 8) {
        // ...
    }
}

// switch statement
// use it as alternative, easier to ready
// represents the same as above
switch (grade) {

    case 6: // add as many cases as you want
        console.log("You have a 6");
        break

    default: // works the same as the conditional else
        console.log("I have another grade")
        break
}

// multiple conditionals
// this code:
let fruit = "blueberry";

if (fruit === "pear" || fruit === "apple") {
  type = "pome";
} else if (fruit === "peach" || fruit === "coconut") {
  type = "drupe";
} else if (fruit === "strawberry" || fruit === "blueberry" || fruit === "blackberry") {
  type = "berry";
} else {
  type = "other";
}
console.log(`${fruit} is type of: ${type}.`);

// equals the same to:
// let fruit = 'apple';
// let type = '';
//
// switch (fruit) {
//   case 'apple':
//   case 'pear':
//     type = 'pome';
//     break;
//   case 'peach':
//   case 'coconut':
//     type = 'drupe';
//     break;
//   case 'strawberry':
//   case 'blueberry':
//   case 'blackberry':
//     type = 'berry';
//     break;
//   default:
//     type = 'other';
//     break;
// }
// console.log(`${fruit} is type of: ${type}.`);

// CHECK YOUR KNOWLEDGE
// Exercise 1
const jobRole = "Frontend Developer";
// const jobRole = "Backend Developer";

if (jobRole === "Frontend Developer") {
    console.log("Tech Stack: HTML&CSS, CSS, JS, React")
}
if (jobRole === "Backend Developer"){
    console.log("Tech Stack: JS, NodeJS, Express, MongoDB, SQL")
}

// Exercise 2
const cartTotal = 50;
// const cartTotal = 101;
if (cartTotal > 50) {
    console.log("You got free shipping!")
}
if (cartTotal <= 50) {
    console.log("Free shipping available for orders above 50$")
}

// Exercise 3
const tax = 21;
// let price;
price = 36;

if (tax === undefined) {
    console.log("Can't add tax if price is undefined!")
}
else {
    console.log(price + (price*tax))
}

// Exercise 4
const didAllExercise = true
if (didAllExercise) {
    console.log("Way to go!")
}
else {
    console.log("Practice makes perfect. Try finnish all exercises!")
}

// Exercise 5
const department = "shoes"
switch (department) {
    case "shoes":
    case "clothes":
        floor = "1st Floor"
        break;

    case "electronics":
        floor = "2nd Floor"
        break;

    case "gardering":
        floor = "3rd Floor"
        break;

    default:
        floor = "Ground Floor"
}
console.log(`Your are in the ${floor}`)

// Exercise 7
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

// these two variables will be changed to test the conditional
let firstPlayerChoice = rock
let secondPlayerChoice = paper

secondPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;
thirdPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;
fourthPossibility = secondPlayerChoice === rock && firstPlayerChoice === scissors;
fifthPossibility = secondPlayerChoice === scissors && firstPlayerChoice === paper;
sixthPossibility = secondPlayerChoice === paper && firstPlayerChoice === rock;
seventhPossibility = firstPlayerChoice === secondPlayerChoice;

if (firstPossibility || secondPossibility || thirdPossibility) {
  console.log(`first player won!`);
} else if (fourthPossibility || fifthPossibility || sixthPossibility) {
  console.log(`second player won!`);
} else if (seventhPossibility) {
  console.log('there is a tie! pick again');
} else {
  console.log('something went wrong!');
}

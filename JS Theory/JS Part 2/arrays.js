//
// Arrays
//

/*
Array is a data type that allows us to store a collection of elements together in one variable.
 */

const animalsArray = ['dog', 'cat', 'snake'];

// print the length of the array
console.log(animalsArray.length)

// Accessing elements in array
// to access the first element animalsArray[0]
console.log(animalsArray[0])

// to access the last element
last_animal = animalsArray[animalsArray.length - 1]
console.log(last_animal)

// adding new elements (python = append)
animalsArray.push("elephant")
console.log(animalsArray)

// add element at the beginning
animalsArray.unshift("cocodrile")
console.log(animalsArray)

// remove element at the end
animalsArray.pop()
console.log(animalsArray)

// remove the first array element
animalsArray.shift()
console.log(animalsArray)

//
// removing and adding elements in any position
//
const students = ['Amy', 'Bob', 'Chloe', 'Dan', 'Eva'];
console.log("Original:", students);

// Start at the first element and remove 1 element going forward
students.splice(0, 1);
console.log("After removing 1:", students);

// Start at the third element and remove 2 elements going forward
students.splice(2, 2);
console.log("After removing 2:", students);

// Start at the second element (don't remove any element) and add the string
// provided as the third argument
students.splice(1, 0, "Sarah");
console.log("After adding:", students);

//
// Looping arrays
//
for (let i=0;i < students.length;i++){
    const element = students[i]
    console.log(element)
}

// using the while loop
// const students = ['Amy', 'Bob', 'Chloe', 'Dan', 'Eva'];

let i = 0;
while (i < students.length){
  const element = students[i];
  console.log(element);
  i++;
}

//
// CFU
//

// Exercise 1
const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0;

for (let i=0; i < prices.length; i++){
    sum += prices[i]
}
console.log(Math.round(sum));


// Exercise 2
const myArray =[1,2,3,4,5]

last_element = myArray[myArray.length -1]
first_element = myArray[0]
myArray.push(last_element)
myArray.unshift(first_element)

// Exercise 3
let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];
seriesPending.push("Suits")

for (let i = 0;i < seriesPending.length;i++){
    series = seriesPending[i]
    console.log(series)
    if (series === "Boolean 99"){
        console.log("Found it")
    }
}

let seriesWatching = []
seriesWatching.push(seriesPending.shift())
console.log(seriesWatching)

for (let i = 0;i < 4;i++){
    seriesWatching.push(seriesPending.shift())
}

// console.log(seriesWatching)



























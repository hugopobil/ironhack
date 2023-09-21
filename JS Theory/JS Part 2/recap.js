
// Recap of all the modules

// Lopping through and array using forEach

const someArr = ['max', 34, true, { name: 'sandra', student: true }, ['javascript', 'mongodb', 'react']];
// console.log(someArr);

// Print each element
someArr.forEach(elem => {
    // console.log(elem)
})

// Time to practice
const mixedArray = [123, 'abc', true, { a: 1 }, ['js', 'node', 'react'], undefined];

function function_recap (array){
    array.forEach(elem => {
        // console.log(`The type of ${elem} is ${typeof elem}`)
    })
}
// apply the function
function_recap(mixedArray)

// Is for sale function

function forsale (info){
    if (info.isForSale) {
        return console.log(`The owner, ${info.owner.firstName} ${info.owner.lastName} put the home for sale! The property has ${info.amenities.length} amenities.`)
    }
    else {
        return console.log(`The home in ${info.address.street} no. ${info.address.number} is not for sale `)
    }
}

// let property = {
//   owner: {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 44
//   },
//   isForSale: true,
//   sqrm: 120,
//   address: {
//     street: 'Happy St',
//     number: 123,
//     city: 'Miami',
//     state: 'FL',
//     country: 'US'
//   },
//   amenities: ['pool', 'tennis court', 'private parking', 'yard']
// };

forsale(property)

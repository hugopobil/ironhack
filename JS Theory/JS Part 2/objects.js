//
// Objects
//

// also known as dictionaries

// Create an empty object
const objectName = {
    myText:"abc",
    myNum:123
};

const student1 = {
  name: "Bob Hill",
  age: 29,
  course: "Data Analytics",
  hasPriorExp: false,
  goals: ["career change", "new skills"],
};

// console.log(student1);

// call each of the elements using the dot(.) notation
// console.log(student1.goals)

// another example
const account1 = {
  accountNumber: "000-1234567-890",
  holder: "Oliver Juggins",
  active: true,
  balance: {
    total: 30000,
    currency: "GBP"
  }
}

// console.log(account1.balance)
// console.log(account1.balance.total) // access tje key of a key

// add new elements to the dict
account1.lastName = "Pobil"
// console.log(account1)

// update property
account1.lastName = "Pasqual del Pobil"

// removing properties
delete account1.lastName
// console.log(account1)

// list object keys
const allKeys = Object.keys(account1)
// console.log(allKeys)

// list object values
const allValues = Object.values(account1)
// console.log(allValues)

// check if a key exists in an object
// console.log('balance' in account1)
// console.log('shit' in account1)

//
// CFU
//

// Exercise 1
const product = {
  brand: 'Apple',
  model: 'MacBook Air',
  available: false,
  price: 3467,
  tags: ['apple', 'laptop', 'mac']
};

product.year = 2019
product.available = true
delete product.tags

// console.log(product)

// create a conditional to check if the price is higher than 1000 and
// add a percentage discount of 10
if (product.price > 1000){
  product.discountPercentage = 0.30
}

product.price = product.price * (1 - product.discountPercentage)
console.log(product.price)

// check if the discountPercentage exists
if ("discountPercentage" in product){
  console.log(`We got a ${product.model} on sale for just $${Math.round(product.price)}, 
  That's ${product.discountPercentage * 100}% off`)
}


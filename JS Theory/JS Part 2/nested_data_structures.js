//
// Nested data structures
//

// Objects in an arrays
const books = [
  {
    title: 'Eloquent JavaScript',
    author: ['Marijn Haverbeke', 'Hugo Pobil']
  },
  {
    title: 'Secrets of the JavaScript Ninja',
    author1: 'John Resig',
    author2: 'Bear Bibeault'
  }
];

// console.log(books[0])

let jsDesignPatterns = {
  title: 'Learning JavaScript Design Patterns',
  author1: 'Addy Osmani'
};

books.push(jsDesignPatterns);
// console.log(books);

// we can also include arrays inside objects
// console.log(books[0].author[1])

// objects inside other objects
let currentGroup = {
  course: 'IronSkydive Development',
  type: 'full-time',
  squadName: 'squad-307',
  city: 'Miami',
  teacher: {
    name: 'Nick',
    age: 27
  },
  classroom: {
    floor: 3,
    seats: 30,
    available: true
  }
};

// arrays with two dimensions
const books_2 = [
  ['Eloquent JavaScript', 'Secrets of the JavaScript Ninja'],
  ['Learn Python the hard way', 'Real Python Course'],
  ['Effective Java', 'Java Generics and Collections']
];
// console.log(books_2[0])

//
// time to practice
//
let products = [
  {
    name: 'iPhone',
    price: 799.99
  },
  {
    name: 'Samsung Galaxy S10',
    price: 900.0
  }
];

for (let i= 0; i < products.length; i++){
    console.log(products[i].name)
}
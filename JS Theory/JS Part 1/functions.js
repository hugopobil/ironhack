// FUNCTIONS

// CFU
// Exercise 1
function convertDogYears (dogYears){
    return dogYears * 7
}
console.log(convertDogYears(7))

// Exercise 2
function convertDollarsToEuros (Dollar){
    return Dollar * 0.92
}

// Exercise 3

let myName = "hugo pobil"

function rephrase (name){
    name[0] = name[0].toUpperCase()
    index_surname = name.indexOf(' ')
    index_surname += 1
    name[index_surname] = name[index_surname].toUpperCase()

    return name
}

console.log(rephrase(myName))
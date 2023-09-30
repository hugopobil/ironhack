// Iteration 1: Names and Input
let hacker1 = "Hugo"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Jacobo"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seams that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both has equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// exercise 1
let formatedName = ''

for (let i = 0; i < hacker1.length; i++) {
    const char = hacker1[i].toUpperCase()
    formatedName += char + ' '
}
console.log(formatedName)

// exercise 2
let reverseName = ''
for (let i= hacker2.length -1; i >= 0; i--) {
    reverseName += hacker2[i]
}
console.log(reverseName)

// exercise 3
// utilizacion del localeCompare (ordena las letras y compara cual es mayor)
if (hacker1.localeCompare(hacker2) > 0) {
    console.log("The driver's name goes first")
} else if (hacker2.localeCompare(hacker1) < 0) {
    console.log("Yo, the navigator goes first, definetly")
} else {
    console.log("What?! You both have the same name?")
}

// bonus 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad " +
    "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea " +
    "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse " +
    "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non " +
    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

// count the number of words
longText = longText.replace(/[^a-zA-Z ]/g, "")
// console.log(longText)

let words = longText.split(" ")
console.log("Numer of words in phrase", words.length)




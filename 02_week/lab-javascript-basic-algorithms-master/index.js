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
if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first")
} else if (hacker2[0] < hacker1[0]) {
    console.log("Yo, the navigator goes first, definetly")
} else {
    console.log("What?! You both have the same name?")
}

// bonus 1

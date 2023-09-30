
// operations with conditions
// if (2 === 2){
//     console.log(true)
// }

let myName = "hugo"
const age = 23
const agestr = "23"

console.log("1", age === agestr) // no se pueden comparar strings y numeros
console.log("2", [] === []) // un array vacio apunta a un lugar distinto de memoria ===> false
console.log("3", 23 == agestr) // se usa para comparar el tipo
console.log("4", !23 === !"23") // true porque ambos son el reversod e thruthy

console.log("5", myName[5] == undefined) // true porque no existe la quinta posicion
console.log("6", "Hugo".toLowerCase() == myName) // es lo mismo, a lower case

// ------------ LOOPS ------------
let j = 0
while (j <= 10){
    console.log(j)
    j++;
}

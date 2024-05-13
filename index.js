console.log("Hello World")

// 1er TYPE de variable : les chaînes de caractères, STRING
var presentation = "Je m'appelle "
var myName = `Paul`

//myName = myName + "Doazan"
myName += "Doazan"

var myAge = "36 ans"

// Afficher dans la console du navigateur la variable myName
// console.log(myName)

// Afficher dans la console "Paul Doazan, 36 ans."
var result = presentation + myName + ", " + myAge + "."
var resultWithBacktick = `${presentation}${myName}, ${myAge}. Je suis formateur à la Piscine.`

const myTown = "Talence"
// console.log(resultWithBacktick)
//myTown += ", 33400"

// console.log(myTown)

let myCountry = "France"
myCountry += ", Europe"

// console.log(myCountry)

// 2è TYPE de variable: les nombres, NUMBER 
let myNumber = 20
// incrémentation
myNumber += 30

// décrémenter pour obtenir 42
myNumber = 2
myNumber *= 3 + 2 * 5 - 8
// myNumber /= 2

// myNumber += 5

// result = myNumber % 3

let myIdentity = "Paul"
let age = 36
let year = "ans"

const res = `${myIdentity}, j'ai ${age} ${year}`
console.log(res)
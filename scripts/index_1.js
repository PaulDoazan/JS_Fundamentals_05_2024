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


// 3è type de variable : les booléens, BOOLEAN
let majority = 21 // false
let age2 = 20

// if (age2 > majority) {
//     console.log("Vous êtes autorisé")
// } else {
//     console.log("Vous n'êtes pas autorisé")
// }

// opérateurs de comparaison : <, >, <=, >=, ==, ===, !=, !==
if (age2 !== majority) {
    // console.log("Vous avez " + majority + " ans")
    console.log(`Vous n'avez pas ${majority} ans`)
} else {
    console.log("types de variable différents")
}

// 4è type de variable (variable complexe) : les tableaux, ARRAY
const myArray = [3, 5, 1, 13, 94]

// longueur du tableau, càd le nombre d'éléments dans le tableau
console.log(myArray.length, myArray[myArray.length - 1])

const roundedIndex = Math.floor(myArray.length / 2)
/* 
Outil de manipulation des nombres en JS: 
Math.round() =>  arrondi au-dessus à partir de 0.5 
Math.floor() =>  arrondi en-dessous
Math.ceil() => arrondi au-dessus
*/

console.log(myArray[roundedIndex])
// Afficher dans la console l'élément placé au milieu du tableau

// 5è type de variable : les objets, OBJECT
const myObj = {
    firstname: "Paul",
    lastname: "Doazan",
    age: 22,
    town: "Talence",
    hobbies: ["Guitare", "Escalade", "Soul music"]
}

// Afficher dans la console à l'aide de myObj, "Bonjour, je m'appelle Paul Doazan et j'habite Talence. Je suis majeur"
let result2 = `Bonjour, je m'appelle ${myObj.firstname} ${myObj.lastname} et j'habite ${myObj.town}.`

if (myObj.age >= 18) {
    result2 += " Je suis majeur."
}

// let myStr = "Salut"
// myStr += " tout"
// myStr += " le"
// myStr += " monde"

// On ajoute à la phrase à l'aide de la propriété hobbies: "J'aime le piano."

// Difficulté supplémentaire, si le tableau hobbies est vide, on écrit "Je n'ai aucun hobby".

// On teste un nombre qui se traduit en booléen
/*
 0 => false
 "" => false
 undefined => false
 null => false
 NaN => false
*/
if (myObj.hobbies.length) {
    result2 += ` J'aime la ${myObj.hobbies[myObj.hobbies.length - 1]}.`
} else {
    result2 += " Je n'ai aucun hobby."
}

console.log(result2)

// i++ === i+=1

const limit = 10
for (let i = 0; i < limit; i++) {
    // On affiche que les "hello" avec les nombres impairs
    // if (i % 2 === 1) {
    //     console.log("hello : " + i)
    // }

    // On affiche tous les "hello **", sauf le dernier
    if (i < limit - 3) {
        // console.log("hello : " + i)
    }
}

// console.log("hello : 0")
// console.log("hello : 1")
// console.log("hello : 2")
// console.log("hello : 3")
// console.log("hello : 4")


const allowed = true

// La portée des variables

// if (allowed) {
//     const myName3 = "Stéphane"
// }

// console.log(myName3)

let string1 = "Bonjour"
let string2 = " tout le monde"
string1 += string2

let nb3 = 16

console.log(nb3 % 5)

let arr3 = ["Paul", "Pierre", "Mathilde", "Paul", "Pierre", "Mathilde", "Paul", "Pierre", "Mathilde", "Paul", "Pierre", "Mathilde", "Paul", "Pierre", "Mathilde", "Paul", "Pierre", "Mathilde", "Paul", "Pierre", "Mathilde", "Paul", "Pierre", "Mathilde", "Paul", "Pierre", "Mathilde", "Paul", "Pierre", "Mathilde", "Paul", "Pierre", "Mathilde", "Paul", "Pierre", "Mathilde"]

console.log(arr3[arr3.length - 3])

const car = {
    brand: "Citroen",
    model: "Berlingo",
    year: 2014,
    electric: false,
    price: 15000,
    accessories: ["barres sur toit", "ailerons"]
}

const car2 = {
    brand: "Citroen",
    model: "Berlingo",
    year: 2021,
    electric: true,
    price: 40000,
    accessories: ["barres sur toit", "ailerons", "néon sous le châssis"]
}

if (car2.accessories.length > 2) {
    console.log("Cette voiture a plus de 2 accessoires")
} 
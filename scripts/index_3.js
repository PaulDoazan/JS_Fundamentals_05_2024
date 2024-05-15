console.log("Start day 3")

// for (let i = 0; i <= 20; i += 3) {
//     console.log(i * 10)
// }

let passwords = [
    "password1",
    "qwerty123",
    "dragon",
    "1234",
    "baseball",
    "iloveyou",
    "trustno1",
    "sunshine",
    "princess",
    "football",
    "welcome",
    "shadow",
    "superman",
    "michael",
    "ninja",
    "mustang",
    "jessica",
    "charlie",
    "ashley",
    "bailey",
    "passw0rd",
    "master"
]

// Afficher dans la console tous les mots de passe, avec une boucle for
// for (let i = 0; i < passwords.length; i++) {
//     console.log(passwords[i])
// }

// Afficher tous les mdp qui ont moins de 6 caractères
// for (let i = 0; i < passwords.length; i++) {
//     if (passwords[i].length < 6) {
//         console.log(passwords[i])
//     }
// }

// Afficher tous les mdp qui commencent par "p", string[0]
// for (let i = 0; i < passwords.length; i++) {
//     const element = passwords[i]
//     const firstCharacter = element[0]
//     // const thirdCharacter = element[2]

//     if (firstCharacter === "p") {
//         console.log(passwords[i])
//     }
// }

// Ecrire une fonction qui prend en paramètre une lettre et qui me retourne un tableau des mots de passe qui commencent par cette lettre

const resArray = getPasswordsWithFirstChar(passwords, "z")
console.log(resArray)

function getPasswordsWithFirstChar(arr, char) {
    let filteredPasswords = []

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        const firstCharacter = element[0]
        // const thirdCharacter = element[2]

        if (firstCharacter === char) {
            filteredPasswords.push(element)
        }
    }

    return filteredPasswords
}

const specialCharacters = ['&', '#', '{', '_', '*', '/', '!', '$', '°']
// Ecrire une fonction qui ajoute à chacun des mots de passe des caracères spéciaux en fin de mdp, avec pour paramètres le tableau de mdp et le nombre de caractères à ajouter. Math.random() ==> nombre entre 0 et 1




const res = complexOperation(43, 12)
const res2 = complexOperation(12, 12)
const res3 = complexOperation(14, 12)
console.log(res, res2, res3)

function complexOperation(a, b) {
    const result = Math.floor((a + b) * (a - b) / Math.pow(b, 2) - a)
    return result
}

// Ecrire une fonction qui me retourne le carré d'un nombre et qui m'affiche "Le carré du nombre 'param' est 'result'"

const square1 = squareNumber(8)
const square2 = squareNumber(12)
const square3 = squareNumber(42)

function squareNumber(nb) {
    // const sqrNumber = nb * nb
    const sqrNumber = Math.pow(nb, 2)
    console.log(`Le carré du nombre ${nb} est ${sqrNumber}`)
    return sqrNumber
}

// Ecrire une fonction qui soustrait un 2è paramètre à un 1er paramètre
const minusResult = substractNumber(10, 3)
const minusResult2 = substractNumber(873, 241)
console.log(minusResult, minusResult2)
// 7 
function substractNumber(nb1, nb2) {
    const result = nb1 - nb2
    return result
}

const multiplication = multiplyNumbers(3, 4, 5)

function multiplyNumbers(a, b, c) {
    const result = a * b * c
    return result
}



const person1 = {
    firstname: "Paul",
    lastname: "Doazan",
    age: 36,
    town: "Talence"
}

const person2 = {
    firstname: "Pierre",
    lastname: "Dupont",
    age: 20,
    town: "Marseille"
}

// écrire une fonction qui prend un objet en paramètre, et qui retourne une chaîne de caractère : "Bonjour Paul Doazan !"

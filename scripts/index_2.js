const limit = 50

const arrNames = ["Simon", "Stéphanie", "Jamie", "Hannah", "Stéphanie", "Jamie", "Hannah"]

// for (let i = 0; i < arrNames.length; i++) {
//     console.log(arrNames[i])
// }

// 1ere étape, afficher tous les objets du tableau people
// for (let ind = 0; ind < people.length; ind++) {
//     console.log(people[ind])
// }

// 2è étape, afficher tous les noms des objets du tableau people
// for (let ind = 0; ind < people.length; ind++) {
//     console.log(people[ind].name)
// }

// Ecrire la boucle for avec une condition dans la boucle pour afficher les noms de toutes les filles

const people = [
    { name: "Simon", gender: "male" },
    { name: "Stéphane", gender: "male" },
    { name: "Paul", gender: "male" },
    { name: "Mathilde", gender: "female" },
    { name: "Marianne", gender: "female" },
    { name: "Marion", gender: "female" },
    { name: "Louis", gender: "male" },
]

// for (let n = 0; n < people.length; n++) {
//     if (people[n].gender === "female" && people[n].name.length <= 6 || people[n].gender === "male" && people[n].name.length > 6) {
//         console.log(people[n].name)
//     }
// }

const habitants = [
    {
        name: "Jacques",
        year: 25,
        town: "Paris"
    },
    {
        name: "Simon",
        year: 70,
        town: "Paris"
    },
    {
        name: "Jeanne",
        year: 12,
        town: "Paris"
    },
    {
        name: "Marianne",
        year: 38,
        town: "Paris"
    },
    {
        name: "Marianne",
        year: 43,
        town: "Bordeaux"
    },
    {
        name: "Paul",
        year: 65,
        town: "Bordeaux"
    },
    {
        name: "Pierre",
        year: 91,
        town: "Bordeaux"
    },
]

// people["name"] === people.name

// Ecrire la boucle qui affiche uniquement les habitants de Paris
// for (let i = 0; i < habitants.length; i++) {
//     if (habitants[i].town === "Paris") {
//         console.log(habitants[i].name)
//     }
// }

// Ecrire la boucle qui affiche uniquement les personnes ayant plus de 60 ans
// for (let i = 0; i < habitants.length; i++) {
//     if (habitants[i].year > 60) {
//         console.log(habitants[i].name)
//     }
// }

// Ecrire la boucle qui affiche uniquement les personnes ayant plus de 60 ans à Paris
// for (let i = 0; i < habitants.length; i++) {
//     if (habitants[i].year > 60 && habitants[i].town === "Paris") {
//         console.log(habitants[i].name)
//     }
// }

// BONUS
// Afficher le nombre de personnes qui ont moins de 40 ans
let peopleUnder40 = 0

for (let i = 0; i < habitants.length; i++) {
    if (habitants[i].year < 40) {
        peopleUnder40++
    }
}

// console.log(peopleUnder40)

// Stocker dans un nouveau tableau les noms des personnes qui ont moins de 40 ans
let arr = []
for (let i = 0; i < habitants.length; i++) {
    if (habitants[i].year < 40) {
        arr.push(habitants[i])
    }
}
// console.log(arr)

// Calculer l'âge moyen des habitants de Bordeaux
// Moyenne = somme de tous les âges / nb d'habitants

let ageTotal = 0
let nbHabBx = 0

for (let i = 0; i < habitants.length; i++) {
    if (habitants[i].town === "Bordeaux") {
        ageTotal += habitants[i].year
        nbHabBx++
    }
}

const avg = ageTotal / nbHabBx
// console.log(Math.round(avg))

// Retourne un tableau des habitants de Paris dont l'âge est inférieur à la moyenne de l'âge des habitants de Paris
let habParis = []
let total = 0
for (let i = 0; i < habitants.length; i++) {
    if (habitants[i].town === "Paris") {
        habParis.push(habitants[i])
        total += habitants[i].year
    }
}

let average = total / habParis.length
let resultArr = []
for (let i = 0; i < habParis.length; i++) {
    if (habParis[i].year < average) {
        resultArr.push(habParis[i])
    }
}

// console.log(resultArr)


/**
 * LES FONCTIONS
 */

let str1 = "Bonjour tout le monde"
let str2 = "J'habite à Talence"
let str3 = "Je pratique la pelote basque"

function getNbCharacters(maChaineDeCaractere) {
    const nbChars = maChaineDeCaractere.length
    const sentence = `Il y a ${nbChars} caractères dans cette phrase.`
    console.log(sentence)
}

getNbCharacters(str1)
getNbCharacters(str2)
getNbCharacters(str3)

// const nbChars1 = str1.length
// const sentence1 = `Il y a ${nbChars1} lettres dans cette phrase.`
// console.log(sentence1)
// const nbChars2 = str2.length
// const sentence2 = `Il y a ${nbChars2} lettres dans cette phrase.`
// console.log(sentence2)
// const nbChars3 = str3.length
// const sentence3 = `Il y a ${nbChars3} lettres dans cette phrase.`
// console.log(sentence3)
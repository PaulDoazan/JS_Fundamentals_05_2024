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

for (let n = 0; n < people.length; n++) {
    if (people[n].gender === "female" && people[n].name.length <= 6 || people[n].gender === "male" && people[n].name.length > 6) {
        console.log(people[n].name)
    }
}



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
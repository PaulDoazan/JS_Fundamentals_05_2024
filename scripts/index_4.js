console.log('dans le fichier 4')

const pers1 = {
    firstname: "Antoine",
    lastname: "Dupont",
    age: 30,
    town: "Toulouse",
    size: 1.75,
    weight: 75
}

const pers2 = {
    firstname: "Stéphane",
    lastname: "Durand",
    age: 40,
    town: "Nantes",
    size: 1.90,
    weight: 80
}

const pers3 = {
    firstname: "Nicole",
    lastname: "Boulby",
    age: 50,
    town: "Strasbourg",
    size: 1.80,
    weight: 70
}

// let helloSentence = sayHello(pers3)
// helloSentence += " ?"
// console.log(helloSentence)
// Bonjour Stéphane Durand, fait-il beau à Nantes ?

// Intégrer les 3 personnes dans un tableau people, boucler sur le tableau pour exécuter la fonction autant de fois qu'il y a d'éléments dans le tableau

const people = [pers1, pers2, pers3]

for (let i = 0; i < people.length; i++) {
    let helloSentence = sayHello(people[i])
    helloSentence += " ?"
    console.log(helloSentence)
}

function sayHello(obj) {
    return `Bonjour ${obj.firstname} ${obj.lastname}, fait-il beau à ${obj.town}`
}


// écrire une fonction qui prend en paramètre une personne et qui retourne son IMC
// imc =>  poids / taille²

for (let i = 0; i < people.length; i++) {
    const bmiPers = bmi(people[i])
    console.log(bmiPers)
}


// Implémenter la boucle for() pour calculer toutes les IMC
// Arrondir à 2 chiffres après la virgule le résultat, Math.round()
function bmi(obj) {
    const result = obj.weight / Math.pow(obj.size, 2)
    // return Math.round(result * 100) / 100
    return result.toFixed(2)
}
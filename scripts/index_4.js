console.log('dans le fichier 4')

const pers1 = {
    firstname: "Antoine",
    lastname: "Dupont",
    age: 30,
    town: "Toulouse"
}

const pers2 = {
    firstname: "Stéphane",
    lastname: "Durand",
    age: 40,
    town: "Nantes"
}

const pers3 = {
    firstname: "Nicole",
    lastname: "Boulby",
    age: 50,
    town: "Strasbourg"
}

let helloSentence = sayHello(pers3)
helloSentence += " ?"
console.log(helloSentence)
// Bonjour Stéphane Durand, fait-il beau à Nantes ?

// Intégrer les 3 personnes dans un tableau people, boucler sur le tableau pour exécuter la fonction autant de fois qu'il y a d'éléments dans le tableau

function sayHello(obj) {
    return `Bonjour ${obj.firstname} ${obj.lastname}, fait-il beau à ${obj.town}`
}


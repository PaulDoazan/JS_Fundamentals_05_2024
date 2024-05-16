const pizzas = [
    {
        name: 'Margherita',
        price: 11.50,
        ingredients: ['mozzarella', 'tomate', 'basilic ', "huile d'olive"],
        baseTomate: true
    },
    {
        name: 'Regina',
        price: 12,
        ingredients: ['mozzarella', 'tomate', 'origan', 'jambon', 'champignons'],
        baseTomate: true
    },
    {
        name: '4 saisons',
        price: 15,
        ingredients: ['artichaut', 'courgette', 'poivron', 'mozzarella', 'oignon rouge'],
        baseTomate: true
    },
    {
        name: 'Napolitaine',
        price: 14,
        ingredients: ['tomate', 'mozzarella', 'anchois', 'olives noires', 'origan'],
        baseTomate: true
    },
    {
        name: '4 fromages',
        price: 16,
        ingredients: ['tomate', 'mozzarella', 'emmental', 'comté', 'roquefort'],
        baseTomate: true
    },
    {
        name: 'Montagnarde',
        price: 19,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: 'Chèvre-miel',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel'],
        baseTomate: false
    },
    {
        name: 'Hawaïenne',
        price: 17,
        ingredients: ['mozzarella', 'tomate', 'jambon', 'ananas'],
        baseTomate: true
    }
]

const pizzas2 = [
    {
        name: '8 fromages',
        price: 10,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: '12 fromages',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel'],
        baseTomate: false
    },
]

// écrire une fonction qui prend en parametre un tableau, cette fonction retourne tous les .name des elements du tableau dans un tableau names[]
// console.log(getAllNames(pizzas2))

function getAllNames(tab) {
    let pizzaNames = [];

    for (let i = 0; i < tab.length; i++) {
        pizzaNames.push(tab[i].name)
    }
    return pizzaNames;
}

// # 2. Ecrire une fonction qui prend en parametre le tableau pizzas et qui retourne le prix moyen des pizzas
// console.log(getAveragePrice(pizzas2));

function getAveragePrice(arr) {
    let totalPrice = 0;

    for (let i = 0; i < arr.length; i++) {
        totalPrice += arr[i].price;
    }
    return (totalPrice / arr.length).toFixed(2)
}

// # 3. Ecrire une fonction qui prend en parametre un nom de pizza et qui retourne un tableau des ingredients de cette pizza

// console.log(getIngredientsByPizzaName('Montagnarde', pizzas));

function getIngredientsByPizzaName(name, arr) {
    let targetPizza

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            targetPizza = arr[i];
            break;
        }
    }

    let result = []
    if (targetPizza) {
        console.log(targetPizza)
        result = targetPizza.ingredients
    }

    return result
}
// # 4. Ecrire une fonction qui prend en parametre un tableau de pizzas et qui retourne un tableau de tous les ingredients, en evitant les elements dupliques
// const result = getAllIngredients(pizzas)
// // console.log(result);
// function getAllIngredients(tableau) {
//     let allIngredients = [];

//     for (let i = 0; i < tableau.length; i++) {
//         const currentPizza = tableau[i];
//         for (let j = 0; j < currentPizza.ingredients.length; j++) {
//             if (!allIngredients.includes(currentPizza.ingredients[j])) {
//                 allIngredients.push(currentPizza.ingredients[j])
//             }
//         }
//     }

//     return allIngredients;
// }

// # 5. Ecrire une fonction qui prend en parametre un ingredient et un tableau de pizzas, la fonction retourne un tableau des noms des pizzas qui ont cet ingredient

const result = getPizzasByIngredientName(pizzas2, 'tomate');
console.log(result);

function getPizzasByIngredientName(arr, ingredientName) {
    let pizzaNames = []

    for (let i = 0; i < arr.length; i++) {
        const currentPizza = arr[i]
        if (currentPizza.ingredients.includes(ingredientName)) {
            pizzaNames.push(currentPizza.name)
        }
    }

    return pizzaNames
}
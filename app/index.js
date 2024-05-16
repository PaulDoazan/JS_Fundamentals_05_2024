const btn = document.querySelector(".btn-change")
const body = document.querySelector("body")
const numbers = document.querySelectorAll('.to-modify')
const result = document.querySelector(".result-addition")

let total = 0
for (let i = 0; i < numbers.length; i++) {
    const randomNb = Math.round(Math.random() * 20)
    total += randomNb
    numbers[i].textContent = randomNb
}

// 3. assigner à result la valeur de la somme totale
result.textContent = total

// btn.addEventListener("click", changeColor)

function changeColor() {
    body.style.backgroundColor = getRandomColor()
}

function getRandomColor() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue})`
}
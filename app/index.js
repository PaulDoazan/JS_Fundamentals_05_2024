const btn = document.querySelector(".btn-change")
const body = document.querySelector("body")
// récupérer les .to-modify
// récupérer le .result-addition

// implémenter une boucle pour remettre les 3 nombres à 0 à la première lecture du script

btn.addEventListener("click", changeColor)

function changeColor() {
    body.style.backgroundColor = getRandomColor()
}

function getRandomColor() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue})`
}
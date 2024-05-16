console.log('ma web-app')

const btn = document.querySelector(".btn-change")
const body = document.querySelector("body")

btn.addEventListener("click", changeColor)

function changeColor() {
    console.log("click")
    body.style.backgroundColor = getRandomColor()
    // on change de façon aléatoire la couleur du body, Math.random()
}

function getRandomColor() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue})`
}
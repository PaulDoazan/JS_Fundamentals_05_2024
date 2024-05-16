console.log('ma web-app')

// querySelector -> button
// querySelector -> body

const btn = document.querySelector(".btn-change")
const body = document.querySelector("body")

btn.addEventListener("click", changeColor)

function changeColor() {
    console.log("click")
    body.style.backgroundColor = `rgb(0,0,0)`
    // on change de façon aléatoire la couleur du body
}
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'blue', 'green', 'yellow', 'pink','black']


body.style.backgroundColor = 'brown'
button.addEventListener('click', changeBackground)

function changeBackground(){
    const colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
}
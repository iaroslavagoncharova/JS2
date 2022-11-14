let kohde = document.querySelector('#kohde')
function dice () {
    let roll = Math.floor(Math.random()*6 + 1)
    return roll
}
let number
let html = '<ul>'
do {
    number = dice()
    html += '<li>'
    html += number
    html += '</li>'
    kohde.innerHTML = html
} while (number != 6)
html += '</ul>'




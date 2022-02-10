// "use strict"

// core javascript
// console.log(document.getElementById('msg'))
// let h = document.getElementById('msg').innerHTML
// let t = document.getElementById('msg').innerText
// console.log(h)
// console.log(t)

function check() {
    alert('premuto')
    let h = document.querySelector('h1') // first element selected by h1
    // let u = document.getElementById('user')
    u = document.getElementById('user')
    if (u.value == 'Emanuele') {
        let p = document.getElementById('pass')
        if (p.value == 'Rizzolo') {
            h.innerHTML = 'Welcome ' + u.value + ' ' + p.value
        } else {
            h.innerHTML = 'Wrong username or password. Try again...'
        }
    } else {
        h.innerHTML = 'Wrong username. Try again...'
    }
}

function showText() {
    console.log("showText()")
    let e = document.getElementById('text')
    document.getElementById('textHTML').innerText = e.innerHTML
    document.getElementById('textText').innerText = e.innerText
    document.getElementById('textValue').innerText = e.value
}

function enable() {
    document.querySelector('button').disabled = false
}
function disable() {
    document.querySelector('button').disabled = true
}
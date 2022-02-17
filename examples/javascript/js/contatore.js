// "use strict"

let method = 'globals'  // just for the example

// Variabili globali: storia dell'applicazione
let numClicks = 0

// gestione azione utente
function cliccato() {
    // get method for example purposes
    method = document.querySelector('input[name="method"]:checked').value
    // get history
    let numberOfClicks = getNumberOfClicks()
    // update history
    setNumberOfClicks(numberOfClicks + 1)
    // show current status
    showStatus()

    let s = document.querySelector('p#msg span')
    s.innerText = numClicks
    let i = document.querySelector('img')
    i.src = "../images/" + numClicks + ".png"
}


function getNumberOfClicks() {
    if (method == 'globals') {
        // nel caso di variabile globale
        return numClicks
    } else {
        // devo "decodificare" l'elemento contenente il dato
        return decodeNumClicks()
    }
}


function setNumberOfClicks(newvalue) {
    if (method == 'globals') {
        // nel caso di variabile globale
        numClicks = newvalue
    } else {
        // devo "codificare" l'elemento contenente il dato
        encodeNumClicks(newvalue)
    }
}

function decodeNumClicks() {
    // real difference is here !!!
    // simple case: a text element
    // return parseInt(document.getElementById('simple').innerText)
    // complex case: a series of image elements
    // how do I get the number shown by the images ???
    // something like this ...
    let images = document.querySelectorAll('#complex img')
    let value = 0
    for (let i = 0; i < images.length; ++i) {
        let source = images[i].src
        let position = source.length - 5 // path/?.png where ? is the digit !!!
        let cifra = parseInt(source.substring(position, position + 1))
        value = value * 10 + cifra
    }
    return value
}

function encodeNumClicks(value) {
    // no difference here
    // simple case: a text element
    document.getElementById('simple').innerText = value
    // complex case: a series of image elements
    let images = ''
    do {
        let cifra = value % 10
        images = '<img src="../images/' + cifra + '.png" alt="' + cifra + '">' + images
        value = (value - cifra) / 10
    } while (value != 0)
    document.getElementById('complex').innerHTML = images
}

function showStatus() {
    // no difference here
    encodeNumClicks(getNumberOfClicks())
}

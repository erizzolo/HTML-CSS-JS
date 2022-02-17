"use strict"

// supply correct values here ...
const minMale = 25, maxMale = 30
const minFemale = 20, maxFemale = 25

// gestione azione utente
function calcola() {
    // get inputs
    let genere = getSelectedRadioValue('genere')
    let massa = getNumberById('mass')
    let statura = getNumberById('height')
    // check inputs
    let message = checkInputs(genere, massa, statura)
    if (message == null) {   // no error
        // process inputs
        let imc = computeIMC(massa, statura / 100)
        if (genere == 'male') {
            message = checkRange(imc, minMale, maxMale)
        } else {
            message = checkRange(imc, minFemale, maxFemale)
        }
    }
    // show current status
    showStatus(message)
}

function checkInputs(genere, massa, statura) {
    let result = null
    if (genere == null) {
        result = 'Scegli uomo o donna'
    } else if (isNaN(massa)) {
        result = 'Immetti una massa valida'
    } else if (isNaN(statura)) {
        result = 'Immetti una statura valida'
    }
    return result
}

function computeIMC(massa, statura) {
    return massa / statura / statura
}

function getSelectedRadioValue(name) {
    let result = null
    let radio = document.querySelector('input[name="' + name + '"]:checked')
    if (radio != null) {
        result = radio.value
    }
    return result
}

function getNumberById(id) {
    let result = NaN
    let input = document.getElementById(id)
    if (input != null) {
        result = input.valueAsNumber
    }
    return result
}

function checkRange(value, min, max) {
    let result
    if (value < min) {
        result = 'sottopeso'
    } else if (value > max) {
        result = 'sovrappeso'
    } else {
        result = 'normopeso'
    }
    return result
}

function showStatus(message) {
    document.getElementById('result').innerHTML = message
}

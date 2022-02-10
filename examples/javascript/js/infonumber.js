function showInput() {
    showInfoFor('number')
    showInfoFor('range')
}

function showInfoFor(what) {
    let p = document.getElementById(what)
    document.getElementById(what + 'HTML').innerText = p.innerHTML
    document.getElementById(what + 'Text').innerText = p.innerText
    document.getElementById(what + 'Value').innerText = p.value
    document.getElementById(what + 'AsNumber').innerText = p.valueAsNumber
}

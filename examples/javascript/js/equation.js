function risolvi() {
    let a = getNumberById('a')
    let b = getNumberById('b')
    let c = getNumberById('c')
    console.log('a = ' + a + ' b = ' + b + ' c = ' + c)
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        error('bad input')
    } else if (a == 0) {
        error('non secondo grado')
    } else {
        // let delta = b ** 2 - 4 * a * c
        let delta = b * b - 4 * a * c
        console.log('delta = ' + delta)
        let numRadiciDistinte
        let x1, x2
        if (delta == 0) {
            numRadiciDistinte = 1
            x1 = x2 = - b / (2 * a)
        } else if (delta < 0) {
            numRadiciDistinte = 0
            x1 = x2 = NaN
        } else {
            numRadiciDistinte = 2
            x1 = (- b + Math.sqrt(delta)) / (2 * a)
            x2 = (- b - Math.sqrt(delta)) / (2 * a)
        }
        console.log('x1 = ' + x1 + ', x2 = ' + x2)
        showResult(numRadiciDistinte, x1, x2)
        if (numRadiciDistinte != 0) {
            verifica(a, b, c, x1, x2)
        }
    }
}

function verifica(a, b, c, x1, x2) {
    let v1 = ((a * x1) + b) * x1 + c
    let v2 = ((a * x2) + b) * x2 + c
    document.getElementById('result').innerHTML += '<br>v<sub>1</sub> = ' + v1 + ', v<sub>2</sub> = ' + v2

}

function showResult(numRadiciDistinte, x1, x2) {
    let message
    if (numRadiciDistinte == 0) {
        message = 'Nessuna soluzione reale'
    } else if (numRadiciDistinte == 1) {
        message = 'Due radici coincidenti: x<sub>1</sub> = x<sub>2</sub> = ' + x1
    } else {
        message = 'Due radici distinte: x<sub>1</sub> = ' + x1 + ', x<sub>2</sub> = ' + x2
    }
    document.getElementById('result').innerHTML = message
}

function error(msg) {
    document.getElementById('result').innerHTML = msg
    // alert(msg)
}

function getNumberById(id) {
    let result = NaN
    let input = document.getElementById(id)
    if (input != null) {
        result = input.valueAsNumber
    }
    return result
}

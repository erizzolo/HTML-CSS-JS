function verifica() {
    let a = getNumberById('a')
    let b = getNumberById('b')
    let c = getNumberById('c')
    show('triangolo', '')
    show('rettangolo', '')
    let t = document.querySelector('input[name="tipo"]:checked')
    if(t != null) {
        t.checked = false
    }
    console.log('a = ' + a + ' b = ' + b + ' c = ' + c)
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        show('triangolo', 'Valori non numerici')
    } else if (a <= 0 || b <= 0 || c <= 0) {
        show('triangolo', 'Valori non positivi')
    } else {
        console.log('a = ' + a + ' b = ' + b + ' c = ' + c)
        // controlli
        let triangle = (a + b + c == 180)
        if (triangle) {
            show('triangolo', 'Le misure sono possibili angoli di un triangolo')
            let rectangle = false, tipo = "sconosciuto"
            if (a == b && a == c) {
                tipo = "equilatero"
            } else if (a == b || a == c || b == c) {
                tipo = "isoscele"
                rectangle = testRettangolo(a, b, c)
            } else {
                tipo = "scaleno"
                rectangle = testRettangolo(a, b, c)
            }
            document.querySelector('input[value="' + tipo + '"]').checked = true
            if (rectangle) {
                tipo += ' e rettangolo'
            }
            show('rettangolo', 'Il triangolo è ' + tipo)
        } else {
            show('triangolo', 'Le misure NON sono possibili angoli di un triangolo')
        }
    }
}

function show(id, what) {
    // document.getElementById(id).innerHTML = what
    setHTML(document.getElementById(id), what)
}

function setHTML(element, html) {
    element.innerHTML = html
}

function getNumberById(id) {
    let result = NaN
    let input = document.getElementById(id)
    if (input != null) {
        result = input.valueAsNumber
    }
    return result
}

function testRettangolo(a, b, c) {
    return a == 90 || b == 90 || c == 90
}
const SPEED = 20
let dx = [], dy = []

function genera() {
    let dim = getNumberById('spostamenti')
    if (isNaN(dim)) {
        error('bad input')
    } else if (dim <= 0) {
        error('valore non positivo')
    } else {
        dx.length = dy.length = dim
        for (let index = 0; index < dim; index++) {
            dx[index] = Math.random() * 2 * SPEED - SPEED
            dy[index] = Math.random() * 2 * SPEED - SPEED
        }
        console.log(dx)
        console.log(dy)
        mostra(dx, dy)
    }
}

function mostra(dx, dy) {
    let x = getNumberById('xinit')
    let y = getNumberById('yinit')
    {
        let html = ''
        html += htmlRow(0, x, y)
        for (let index = 0; index < dx.length; index++) {
            x += dx[index]
            y += dy[index]
            html += htmlRow(index + 1, x, y)
        }
        let body = document.querySelector('tbody')
        body.innerHTML = html
    }
    // {
    //     let html = ''
    //     for (let riga = 0; riga < dx.length; riga++) {
    //         html += '<tr>'
    //         html += '<th>' + (riga + 1) + '</th>'
    //         for (let colonna = 0; colonna <= riga; colonna++) {
    //             html += '<td>'
    //             html += (colonna + 1) * (riga + 1)
    //             html += '</td>'
    //         }
    //         html += '</tr>'
    //     }
    //     let body = document.querySelector('tbody')
    //     body.innerHTML = html
    // }
}

function htmlRow(i, x, y) {
    return '<tr><th>' + i + '</th><td>' + x + '</td><td>' + y + '</td><th>' + i + '</th></tr>'
}

function disegna() {
    let x = getNumberById('xinit')
    let y = getNumberById('yinit')
    const canvas = document.getElementById('tela')
    const ctx = canvas.getContext('2d')
    ctx.moveTo(x, y)
    ctx.beginPath()
    for (let index = 0; index < dx.length; index++) {
        x += dx[index]
        y += dy[index]
        ctx.lineTo(x, y)
    }
    ctx.stroke()
}



function error(msg) {
    document.getElementById('result').innerHTML = msg
}

function getNumberById(id) {
    let result = NaN
    let input = document.getElementById(id)
    if (input != null) {
        result = input.valueAsNumber
    }
    return result
}

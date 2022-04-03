let drawing = false

function setup() {
    let canvas = document.getElementById('tela')
    canvas.addEventListener('mousedown', startDrawing)  // button pressed
    canvas.addEventListener('mousemove', move)  // mouse moved
    canvas.addEventListener('mouseup', stopDrawing) // button released
}

function startDrawing() {
    drawing = true
}

function stopDrawing() {
    drawing = false
}

function move(evento) {
    // console.log(evento)
    const ctx = evento.target.getContext('2d')
    if (drawing) {
        ctx.lineTo(evento.offsetX, evento.offsetY)
        ctx.stroke()
    } else {
        ctx.strokeStyle = document.getElementById('colore').value
        ctx.beginPath()
        ctx.moveTo(evento.offsetX, evento.offsetY)
    }
}

function cancella() {
    let canvas = document.getElementById('tela')
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}
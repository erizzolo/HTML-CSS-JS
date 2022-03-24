function setup() {
    const canvas = document.getElementById('tela')
    const data = new Date()
    const h = data.getHours(), m = data.getMinutes(), s = data.getSeconds()
    disegna(canvas, h, m, s, 175, 75, 75)
    setInterval(setup, 1000)
}

function disegna(canvas, h, m, s, x, y, r) {
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.arc(x,y,r,0,2*Math.PI)
    ctx.stroke()
    ctx.fillStyle = 'white'
    ctx.fill()
    for (let hour = 0, angle = 0; hour < 12; hour++, angle += Math.PI / 6) {
        ctx.beginPath()
        ctx.moveTo(x + r * Math.cos(angle), y + r * Math.sin(angle))
        ctx.lineTo(x + 0.9 * r * Math.cos(angle), y + 0.9 * r * Math.sin(angle))
        ctx.stroke()
    }
    lancetta(ctx, x, y, r, 0.5, (h % 12) + m / 60, 'red', 3)
    lancetta(ctx, x, y, r, 0.7, m / 5, 'blue', 2)
    lancetta(ctx, x, y, r, 0.8, s / 5, 'green', 1)
    // const ah = Math.PI * ( 1 - ((h % 12) + m / 60) / 3 ) / 2
    // ctx.beginPath()
    // ctx.moveTo(x, y)
    // ctx.lineTo(x + 0.5 * r * Math.cos(ah), y - 0.5 * r * Math.sin(ah))
    // ctx.stroke()
    // const am = Math.PI * ( 1 - m / 15 ) / 2
    // ctx.beginPath()
    // ctx.moveTo(x, y)
    // ctx.lineTo(x + 0.7 * r * Math.cos(am), y - 0.7 * r * Math.sin(am))
    // ctx.stroke()
    // const as = Math.PI * ( 1 - s / 15 ) / 2
    // ctx.beginPath()
    // ctx.moveTo(x, y)
    // ctx.lineTo(x + 0.8 * r * Math.cos(as), y - 0.8 * r * Math.sin(as))
    // ctx.stroke()
}

function lancetta(ctx, x, y, r, percent, frazione, colore, width) {
    const angolo = Math.PI * ( 1 - frazione / 3 ) / 2
    ctx.strokeStyle = colore
    ctx.lineWidth = width
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + percent * r * Math.cos(angolo), y - percent * r * Math.sin(angolo))
    ctx.stroke()
}
let interval

function disegna() {
    let i = document.getElementById('a')
    i.valueAsNumber = i.valueAsNumber + 1
    if (i.valueAsNumber == 150) {
        clearInterval(interval)
    }
}


function risolvi() {
    let a = getNumberById('a')
    let b = getNumberById('b')
    let c = getNumberById('c')
    console.log('a = ' + a + ' b = ' + b + ' c = ' + c)
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        error('bad input')
    } else if (a <= 0 || b <= 0 || c <= 0) {
        error('valori non positivi')
    } else {
        let somma = a + b + c
        console.log('somma = ' + somma)
        let triangolo = somma == 180  // possibile triangolo
        let tipologia   // equilatero, scaleno, isoscele
        let rettangolo = a == 90 || b == 90 || c == 90
        if (triangolo) {
            if (a == b && a == c) {
                tipologia = 'equilatero'
            } else {
                if (a == b || b == c || a == c) {
                    tipologia = 'isoscele'
                } else {
                    tipologia = 'scaleno'
                }
            }
        }
        showResult(triangolo, tipologia, rettangolo, a, b, c)
    }
    // interval = setInterval(disegna, 500)
}

function showResult(triangolo, tipologia, rettangolo, alfa, beta, gamma) {
    let r = document.getElementById('result')
    let t = document.getElementById('tipo')
    r.innerHTML = ''
    t.innerHTML = ''
    const canvas = document.getElementById('tela')
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (triangolo) {
        r.innerHTML = 'Gli angoli possono essere quelli di un triangolo'
        t.innerHTML = 'Il triangolo è ' + tipologia
        if (rettangolo) {
            t.innerHTML += ' e rettangolo'
        }
        // Disegniamo il triangolo:
        // Angoli alfa, beta, gamma nei vertici A, B, C
        //             C (xc, yc)
        //                /\
        //               /  \
        //              /    \
        //             /      \
        //            /        \
        //           /          \
        //   A (0,0)______________ B (1,0)
        //
        // equazione generica retta:
        //      a x + b y + c = 0
        // (qui a, b e c sono coefficienti, non gli angoli)
        // Moltiplicando tutto per k != 0 otteniamo la stessa retta
        // con a' = k a, b' = k b, c' = k c.
        // Per i coefficienti useremo un vettore [a, b, c] per ciascuna retta
        // La retta contenente AB è l'asse x, di equazione:
        //      0 x + 1 y + 0 = 0, cioè y = 0
        // quindi a = c = 0, b = 1
        let AB = [0, 1, 0]
        // La retta contenente AC è inclinata di alfa rispetto all'asse x
        // e passa per l'origine (A).
        // Quindi, se alfa != 90°, ha equazione:
        //      y = tan(alfa) x ovvero a = -tan(alfa), b = 1, c = 0
        // Se invece alfa = 90°, ha equazione:
        //      x = 0 ovvero a = 1, b = 0, c = 0
        let AC = alfa == 90 ? [1, 0, 0] : [-Math.tan(alfa * Math.PI / 180), 1, 0]
        // La retta contenente BC è inclinata di delta = 180° - beta rispetto all'asse x
        // e passa per B (1,0).
        // Quindi, se delta != 90°, ha equazione:
        //      y = tan(delta) x - tan(delta) ovvero a = -tan(delta), b = 1, c = tan(delta)
        // Se invece delta = 90°, ha equazione:
        //      x = 1 ovvero a = 1, b = 0, c = -1
        let delta = 180 - beta
        let BC = delta == 90 ? [1, 0, -1] : [-Math.tan(delta * Math.PI / 180), 1, Math.tan(delta * Math.PI / 180)]
        // Per le coordinate dei vertici useremo un vettore [x, y]
        let A = [0, 0], B = [1, 0], C = intersezione(AC, BC)
        // Se la x di C è negativa, trasliamo tutti i punti a destra
        if (C[0] < 0) {
            A[0] -= C[0]
            B[0] -= C[0]
            C[0] = 0
        }
        // determiniamo l'ampiezza del rettangolo contenente il triangolo
        let width = Math.max(B[0], C[0]), height = C[1]
        // determiniamo i fattori di scala per occupare il canvas
        // lasciando 20 pixel lungo ciascun lato
        let xscale = (canvas.width - 40) / width
        let yscale = (canvas.height - 40) / height
        // manteniamo le proporzioni senza deformare il triangolo
        let scale = Math.min(xscale, yscale)
        // adattiamo le coordinate
        transform(A, scale, 20)
        transform(B, scale, 20)
        transform(C, scale, 20)
        // disegno ...
        ctx.strokeStyle = 'blue'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(A[0], A[1])
        ctx.lineTo(B[0], B[1])
        ctx.lineTo(C[0], C[1])
        // ctx.lineTo(A[0], A[1])
        ctx.closePath()
        ctx.stroke()
        ctx.strokeStyle = 'red'
        ctx.font = '15px serif';
        ctx.strokeText(tipologia, 0, 20);

    } else {
        r.innerHTML = 'Gli angoli NON possono essere quelli di un triangolo'
    }
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

// calcolo punto di intersezione di due rette non parallele, non coincidenti
function intersezione(r1, r2) {
    let delta = r1[0] * r2[1] - r1[1] * r2[0]
    let dx = r1[2] * r2[1] - r1[1] * r2[2]
    let dy = r1[0] * r2[2] - r1[2] * r2[0]
    return [-dx / delta, -dy / delta]
}
// moltiplica ogni elemento del vettore per scale e somma delta
function transform(P, scale, delta) {
    for (let index = 0; index < P.length; index++) {
        P[index] = P[index] * scale + delta;
    }
}
function showInput() {
    let p = document.getElementById('range')
    let celle = document.querySelectorAll('td')
    let imgHTML = ''
    for(let c = 0; c < celle.length; ++c) {
        imgHTML += celle[c].innerHTML
        celle[c].innerHTML = ''
    }
    console.log(imgHTML)
    let c = Math.floor(p.valueAsNumber / 10)
    celle[c].innerHTML = imgHTML
    p.valueAsNumber % 10
}

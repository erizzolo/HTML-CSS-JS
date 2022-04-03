const students = []
// students = ["pippo", 1, null]

function aggiungi() {
    let name = document.getElementById('nome').value
    let surname = document.getElementById('cognome').value
    let birthdate = document.getElementById('nascita').value
    console.log(name + ' ' + surname + ' ' + birthdate)
    // struct { 
    //  string nome,
    //  string cognome,
    //  data nascita
    // } studente;
    let nuovo = { nome: name, cognome: surname, nascita: birthdate, voti: [] }
    // students.push(nuovo)
    students[students.length] = nuovo
    console.log(nuovo.nome)
    console.log(students)
    mostra(students)
    // window.print()
    // alert('finito di stampare')
}

function mostra(studenti) {
    let html = ''
    for (let index = 0; index < studenti.length; index++) {
        html += htmlRow(index, studenti[index])
    }
    let body = document.querySelector('tbody')
    body.innerHTML = html
}

function voto(v, i) {
    students[i].voti.push(v)
    mostra(students)
}
function htmlRow(i, s) {
    let row = '<tr>'
    row += '<td>' + s.nome + '</td>'
    row += '<td>' + s.cognome + '</td>'
    row += '<td>' + s.nascita + '</td>'
    row += '<td>' + s.voti + '</td>'
    row += '<td>' + '<button onclick="voto(6,' + i + ')">6</button>' + '</td>'
    row += '</tr>'
    return row
}

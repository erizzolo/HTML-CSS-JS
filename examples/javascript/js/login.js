const user = 'admin', pass = 'admin'

function checkLogin() {
    let u = getTextInput('user')
    let p = getTextInput('pass')
    let answer = doCheck(u, p)
    showAnswer(answer)
}

function showAnswer(answer) {
    document.getElementById('message').innerHTML = answer
}

function getTextInput(id) {
    let text = ''
    let i = document.getElementById(id)
    if(i != null) {
        text = i.value
    }
    return text
}

function doCheck(username, password) {
    let answer
    if(username == user) {
        if(password == pass) {
            answer = 'Welcome, ' + username
        } else {
            answer = 'Forgotten password?'
        }
    } else {
        answer = 'User unknown, please register'
    }
    return answer
}

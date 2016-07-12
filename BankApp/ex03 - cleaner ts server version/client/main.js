const req = new XMLHttpRequest()
let session = ""

req.onreadystatechange = () => {
    if (req.readyState === 4 && req.status === 200) {
        const response = JSON.parse(req.responseText)
        console.log(response)
        if (response.token) {
            session = response.token
        }
    }
}

function register(data) {
    console.log("Sending register request...")
    req.open('POST', '/register', true)
    req.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
    req.send(JSON.stringify(data))
}

function login(data) {
    console.log("Sending login request...")
    req.open('POST', '/login', true)
    req.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
    req.send(JSON.stringify(data))
}

function getBalance(data) {
    console.log("Sending balance request...")
    req.open('POST', '/account', true)
    req.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
    req.send(JSON.stringify(data))
}

function deposit(data) {
    console.log("Sending balance request...")
    req.open('POST', '/deposit', true)
    req.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
    req.send(JSON.stringify(data))
}

function withdraw(data) {
    console.log("Sending balance request...")
    req.open('POST', '/withdraw', true)
    req.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
    req.send(JSON.stringify(data))
}
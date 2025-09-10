let users = [];
let pass = [];
let user
let password

function login() {
    user = document.querySelector("#user").value;
    password = document.querySelector("#password").value;

    if (users.includes(user)) {
        if (pass[users.indexOf(user)] === password) {
            window.location.href = './dashboard.html'
        } else {
            alert('Usuário ou senha incorreto');
        }
    } else {
        alert('Usuário ou senha incorreto');
    }
}

function register() {
    user = document.querySelector("#user").value;
    password = document.querySelector("#password").value;

    if (password.length < 6) {
        alert('Insira uma senha de no mínimo 6 digitos');
    } else if (user in users) {
        alert('Usuário já registrado');
    } else {
        users.push(user);
        pass.push(password);
    }
}
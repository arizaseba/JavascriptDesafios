class Usuario {
    constructor(name, surname, username, password) {
        this.name = name
        this.surname = surname
        this.username = username
        this.password = password
    }
}

const usuariosLS = JSON.parse(localStorage.getItem("Usuarios"))
const usuarios = []

if (usuariosLS != null) {
    for (const usu of usuariosLS) {
        usuarios.push(new Usuario(usu.name, usu.surname, usu.username, usu.password))
    }
}

console.log("Usuarios en Local Storage:\n", usuarios)


document.getElementById("createForm").style.display = "none"
document.getElementById("labelResult").style.display = "none"

function MessageBox(mensaje, error) {
    if (error) {
        document.getElementById("labelResult").style.borderColor = "red"
        document.getElementById("labelResult").style.color = "red"
    }
    else {
        document.getElementById("labelResult").style.borderColor = "green"
        document.getElementById("labelResult").style.color = "green"
    }
    document.getElementById("labelResult").style.display = "initial"
    document.getElementById("labelResult").textContent = mensaje
}

function crearCuenta() {
    let name = document.getElementById("createName").value
    let surname = document.getElementById("createSurname").value
    let user = document.getElementById("createUsername").value
    let pass = document.getElementById("createPassword").value

    if (name == "" || surname == "" || user == "" || pass == "") {
        MessageBox("Complete los campos", true)
        return
    }

    if (!usuarios.some(u => u.username == user)) {
        usuarios.push(new Usuario(name, surname, user, pass));
        localStorage.setItem("Usuarios", JSON.stringify(usuarios))

        MessageBox("¡Cuenta creada exitosamente!", false)
        document.getElementById("createName").value = ""
        document.getElementById("createSurname").value = ""
        document.getElementById("createUsername").value = ""
        document.getElementById("createPassword").value = ""

        // mostrar array de usuarios
        console.log(usuarios)
    }
    else {
        MessageBox(`Ya existe el usuario ${user}`, true)
    }
}

function validarSesion() {
    let user = document.getElementById("loginUsername").value
    let pass = document.getElementById("loginPassword").value

    if (user == "" || pass == "") {
        MessageBox("Complete los campos", true)
        return
    }

    let usu = usuarios.find(u => u.username == user)
    if (usu != null) {
        if (user == user && pass == usu.password) {
            MessageBox("¡Sesión iniciada!", false)
        }
        else {
            MessageBox("Usuario o contraseña incorrectos. Intente nuevamente.", true)
        }
    }
    else {
        MessageBox(`Usuario inexistente ${user}`, true)
    }
}


const loginButton = document.getElementById("loginButton")
loginButton.addEventListener(("click"), event => {
    event.preventDefault()
    validarSesion()
})

const createButton = document.getElementById("createButton")
createButton.addEventListener(("click"), event => {
    event.preventDefault()
    crearCuenta()
})

const labelLogin = document.getElementById("labelLogin")
labelLogin.addEventListener(("click"), event => {
    if (document.getElementById("createForm").style.display == "none") {
        event.preventDefault()
        document.getElementById("loginForm").style.display = "none"
        document.getElementById("createForm").style.display = "initial"
        document.getElementById("labelLogin").textContent = "Iniciar Sesión"
    }
    else {
        event.preventDefault()
        document.getElementById("loginForm").style.display = "initial"
        document.getElementById("createForm").style.display = "none"
        document.getElementById("labelLogin").textContent = "Crear Cuenta"
    }
    document.getElementById("loginUsername").value = ""
    document.getElementById("loginPassword").value = ""
    document.getElementById("createName").value = ""
    document.getElementById("createSurname").value = ""
    document.getElementById("createUsername").value = ""
    document.getElementById("createPassword").value = ""
    document.getElementById("labelResult").style.display = "none"
})
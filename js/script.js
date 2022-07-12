const Usuarios = []
let validarUser = false
let validarPass = false
let index = 0

class Usuario {
    constructor(username, password) {
        this.username = username
        this.password = password
    }
}

function Mensaje(msg) {
    alert(msg)
}

function ValidarUsuario(usuarioNombre) {
    // busco si el usuario existe en el array y lo valido
    if (Usuarios.some(u => u.username === usuarioNombre)) {
        // guardo el index para luego validar la contraseña
        index = Usuarios.findIndex(u => u.username === usuarioNombre)
        return true
    }
    else {
        Mensaje("⛔ Usuario incorrecto. Intente nuevamente.")
        return false
    }
}

function ValidarContrasena(usuarioContrasena) {
    // verifico si la contraseña coincide con el usuario del index
    if (Usuarios[index].password === usuarioContrasena) {
        return true
    }
    else {
        Mensaje("⛔ Contraseña incorrecta. Intente nuevamente.");
        return false
    }
}

do {
    let user = prompt("Registre su Usuario:").toLowerCase()
    // busco si el usuario existe en el array y lo agrego si no existe
    if (!Usuarios.some(u => u.username === user)) {
        let pass = prompt("Registre su Contraseña:")
        Usuarios.push(new Usuario(user, pass))
    }
    else {
        Mensaje("Usuario ya existente. Ingrese otro por favor.")
    }
} while (prompt("¿Desea agregar otro usuario? (S/N)").toLowerCase() === "s")

do {
    validarUser = ValidarUsuario(prompt("Usuario:").toLowerCase())
} while (!validarUser);

do {
    validarPass = ValidarContrasena(prompt("Contraseña:"))
} while (!validarPass);

Mensaje("✅ ¡Sesion iniciada!")

console.log(Usuarios)
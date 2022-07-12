const Usuarios = [];
let validarUser = false;
let validarPass = false;
let index = 0;

class Usuario {
    constructor(username, password) {
        this.Username = username;
        this.Password = password;
    }
}

function Mensaje(msg) {
    alert(msg);
}

do {
    let user = prompt("Registre su Usuario:").toLowerCase();
    // busco si el usuario existe en el array y lo agrego si no existe
    if (!Usuarios.some(u => u.Username === user)) {
        let pass = prompt("Registre su Contraseña:");
        Usuarios.push(new Usuario(user, pass));
    }
    else {
        Mensaje("Usuario ya existente. Ingrese otro por favor.")
    }
} while (prompt("¿Desea agregar otro usuario? (S/N)").toLowerCase() === "s");

do {
    if (!validarUser) {
        let str = prompt("Usuario:").toLowerCase();
        // busco si el usuario existe en el array y lo valido
        // guardando el index para luego validar la contraseña
        if (Usuarios.some(u => u.Username === str)) {
            validarUser = true;
            index = Usuarios.findIndex(u => u.Username === str);
        }
        else {
            Mensaje("⛔ Usuario incorrecto. Intente nuevamente.");
        }
    }
} while (!validarUser);

do {
    if (!validarPass) {
        let str = prompt("Contraseña:");
        // verifico si la contraseña coincide con el usuario del index
        if (Usuarios.at(index).Password == str) {
            validarPass = true;
        }
        else {
            Mensaje("⛔ Contraseña incorrecta. Intente nuevamente.");
        }
    }
} while (!validarPass);

Mensaje("✅ ¡Sesion iniciada!");

console.log(Usuarios)
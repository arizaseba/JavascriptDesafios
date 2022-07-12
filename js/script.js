let user = "";
let pass = "";
let validarUser = false;
let validarPass = false;

user = prompt("Registra tu nombre de Usuario:").toLowerCase();
pass = prompt("Registra una contraseña:");

function Mensaje(msg) {
    alert(msg);
}

do {
    if (!validarUser) {
        if (prompt("Usuario:").toLowerCase() === user) {
            validarUser = true;
        }
        else {
            Mensaje("⛔ Usuario incorrecto. Intente nuevamente.");
        }
    }
} while (!validarUser);

do{
    if (!validarPass) {
        if (prompt("Contraseña:") === pass) {
            validarPass = true;
        }
        else {
            Mensaje("⛔ Contraseña incorrecta. Intente nuevamente.");
        }
    }
} while (!validarPass);

Mensaje("✅ ¡Sesion iniciada!"); 
let user = "";
let pass = "";
let validarUser = false;
let validarPass = false;

user = prompt("Registra tu nombre de Usuario:").toLowerCase();
pass = prompt("Registra una contraseña:");

do {
    if (!validarUser) {
        if (prompt("Usuario:").toLowerCase() === user) {
            validarUser = true;
        }
        else {
            alert("⛔ Usuario incorrecto. Intente nuevamente.");
        }
    }
} while (!validarUser);

do{
    if (!validarPass) {
        if (prompt("Contraseña:") === user) {
            validarPass = true;
        }
        else {
            alert("⛔ Contraseña incorrecta. Intente nuevamente.");
        }
    }
} while (!validarPass);

alert("✅ ¡Sesion iniciada!");
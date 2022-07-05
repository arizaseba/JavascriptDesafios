let Username = null;
let Password = null;

function CrearCuenta()
{
    if (Username == null && Password == null)
    {
        if (document.getElementById("username").value != "" && document.getElementById("password").value != "")
        {
            Username = document.getElementById("username").value;
            Password = document.getElementById("password").value;
            Object.freeze(Username);
            Object.freeze(Password);
            alert("¡Cuenta creada exitosamente!");
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            document.getElementById("create").disabled = true;
        }
        else
        {
            alert("Complete los campos");
        }
    }
    else
    {
        alert(`Ya se ha creado la cuenta ${Username}`);
    }
}

let intentos = 3; // cantidad de intentos para iniciar sesion
function ValidarSesion()
{
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user == Username && pass == Password)
    {
        alert("¡Sesión iniciada!");
        //window.location = "#"; //dirige a una pagina despues de iniciar sesión
        return false;
    }
    else if (Username == null && Password == null)
    {
        alert("No existe ninguna cuenta creada");
    }
    else
    {
        intentos --;
        if (intentos == 0)
        {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
        alert("Tienes " + intentos + " intentos");
    }
}



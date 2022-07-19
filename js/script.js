const Usuarios = []

class Usuario {
    constructor (username, password) {
        this.username = username
        this.password = password
    }
}

document.getElementById("createForm").style.display = "none"
document.getElementById("labelResult").style.display = "none"

function MessageBox(mensaje, error) 
{
    if (error) 
    {
        document.getElementById("labelResult").style.borderColor = "red"
        document.getElementById("labelResult").style.color = "red"
    }
    else
    {
        document.getElementById("labelResult").style.borderColor = "green"
        document.getElementById("labelResult").style.color = "green"
    }
    document.getElementById("labelResult").style.display = "initial"
    document.getElementById("labelResult").textContent = mensaje
}

function CrearCuenta()
{
    let user = document.getElementById("createUsername").value
    let pass = document.getElementById("createPassword").value
 
    if (user == "" || pass == "")
    {
        MessageBox("Complete los campos", true)
        return
    }

    if (!Usuarios.some(u => u.username == user))
    {
        Usuarios.push(new Usuario(user, pass));

        MessageBox("¡Cuenta creada exitosamente!", false)
        document.getElementById("createUsername").value = ""
        document.getElementById("createPassword").value = ""

        // mostrar array de usuarios
        console.log(Usuarios)
    }
    else
    {
        MessageBox(`Ya se ha creado la cuenta ${user}`, true)
    }
}

function ValidarSesion()
{
    let user = document.getElementById("loginUsername").value
    let pass = document.getElementById("loginPassword").value
    const usu = Usuarios.find( u => u.username == user)

    if (user == "" || pass == "")
    {
        MessageBox("Complete los campos", true)
        return
    }
    if (usu != null)
    {
        if (user == user && pass == usu.password)
        {
            MessageBox("¡Sesión iniciada!", false)
        }
        else
        {
            MessageBox("Usuario o contraseña incorrectos.Intente nuevamente.", true)
            document.getElementById("loginUsername").value = ""
            document.getElementById("loginPassword").value = ""
        }
    }
    else
    {
        MessageBox(`No existe el usuario ${user}`, true)
    }
}


const loginButton = document.getElementById("loginButton")
loginButton.addEventListener(("click"), event => {
    event.preventDefault()
    document.getElementById("labelResult").style.display = "none"
    ValidarSesion()
})

const createButton = document.getElementById("createButton")
createButton.addEventListener(("click"), event => {
    event.preventDefault()
    document.getElementById("labelResult").style.display = "none"
    CrearCuenta()
})

const formCreate = document.getElementById("labelLogin")
formCreate.addEventListener(("click"), event => {
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
    document.getElementById("createUsername").value = ""
    document.getElementById("createPassword").value = ""
    document.getElementById("labelResult").style.display = "none"
})
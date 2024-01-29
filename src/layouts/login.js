const app = document.getElementById('app')

if (window.localStorage.getItem('displayApp')) {
    app.style.display = window.localStorage.getItem('displayApp')
} else {
    app.style.display = 'none'
}
const login = document.getElementById('login')
if (window.localStorage.getItem('displayLogin')) {
    login.style.display = window.localStorage.getItem('displayLogin')
} else {
    login.style.display = 'flex'
}


const bl = document.getElementById('bl')

const USER_ENV = "cys"
const PASSWORD_ENV = "cys2024"

bl.addEventListener('click', () => {
    const app = document.getElementById('app')
    const login = document.getElementById('login')
    
    const InputUser = document.getElementById('username').value
    const InputPassword = document.getElementById('password').value
    
    const userEmpty = document.getElementById('user-empty')
    
    const userFailed = document.getElementById('user-failed')
    
    if (InputUser == "" && InputPassword == "") {
        userEmpty.style.display = 'block'
    }
    if (InputUser != USER_ENV && InputPassword != PASSWORD_ENV && InputUser != "" && InputPassword != "") {
        userEmpty.style.display = 'none'
        userFailed.style.display = 'block'
    }
    if (InputUser == USER_ENV && InputPassword == PASSWORD_ENV){
        userFailed.style.display = 'none'
        userEmpty.style.display = 'none'
        
        localStorage.setItem('displayApp', 'grid')
        localStorage.setItem('displayLogin', 'none')
        console.log(localStorage.getItem('displayApp'))

        login.style.display = 'none'
        app.style.display = 'grid'

    } else {
        console.log("Error en Inicio de Sesion")
    }
})

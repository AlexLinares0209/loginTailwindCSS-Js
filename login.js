const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');
const boton = document.querySelector('button');

boton.addEventListener('click', () => {
    if (usuario.value == 'alexlinares0209@gmail.com' && contraseña.value == '12345') {
        alert('iniciaste sesión!');
    }
    else {
        alert('Usuario o contraseña incorrectos')
    }

})

const togglePassword = document.querySelector('.password-toggle')

togglePassword.addEventListener('click', () => {

    if (contraseña.type === 'password') {
        contraseña.type = 'text'
        togglePassword.classList.remove('fa-eye-slash')
        togglePassword.classList.add('fa-eye')
    }
    else {
        contraseña.type = 'password'
        togglePassword.classList.remove('fa-eye')
        togglePassword.classList.add('fa-eye-slash')
    }

})
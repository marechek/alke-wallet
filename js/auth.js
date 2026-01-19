$(document).ready(function () {

    $('#loginForm').on('submit', function (e) {
        e.preventDefault();

        const email = $('#email').val().trim();
        const password = $('#password').val().trim();

        if (email === '' || password === '') {
            showMessage('Todos los campos son obligatorios', 'danger');
            return;
        }

        // Datos para simulacion de login
        const userEmail = 'admin@alkewallet.cl';
        const userPassword = '1234';

        if (email === userEmail && password === userPassword) {
            showMessage('Login exitoso. Redirigiendo...', 'success');

            localStorage.setItem('loggedUser', email);
            if (!localStorage.getItem('balance')) {
                localStorage.setItem('balance', 0);
            }

            setTimeout(() => {
                window.location.href = 'menu.html';
            }, 1000);

        } else {
            showMessage('Credenciales incorrectas', 'danger');
        }
    });

    function showMessage(message, type) {
        $('#loginMessage').html(`
            <div class="alert alert-${type}" role="alert">
                ${message}
            </div>
        `);
    }

});
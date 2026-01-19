$(document).ready(function () {

    // Validar sesión
    const loggedUser = localStorage.getItem('loggedUser');

    if (!loggedUser) {
        window.location.href = 'login.html';
        return;
    }

    // Saldo simulado
    const balance = localStorage.getItem('balance') || 250000;
    $('#balance').text(balance.toLocaleString('es-CL'));

    // Logout
    $('#logoutBtn').on('click', function () {
        localStorage.clear();
        window.location.href = 'login.html';
    });

});

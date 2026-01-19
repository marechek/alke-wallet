$(document).ready(function () {

    const loggedUser = localStorage.getItem('loggedUser');

    if (!loggedUser) {
        window.location.href = 'login.html';
        return;
    }

    const balance = parseInt(localStorage.getItem('balance')) || 0;
    $('#balance').text(balance.toLocaleString('es-CL'));

    $('#logoutBtn').on('click', function () {
        localStorage.clear();
        window.location.href = 'login.html';
    });

});

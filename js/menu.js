$(document).ready(function () {

    const loggedUser = localStorage.getItem('loggedUser');

    if (!loggedUser) {
        window.location.href = 'login.html';
        return;
    }

    let balance = localStorage.getItem("balance");

    if (balance === null) {
        balance = 0;
        localStorage.setItem("balance", balance);
    }

    $("#balance").text(
        Number(balance).toLocaleString("es-CL")
    );

    $('#logoutBtn').on('click', function () {
        localStorage.clear();
        window.location.href = 'login.html';
    });

});

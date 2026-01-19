$(document).ready(function () {

    if (!localStorage.getItem('loggedUser')) {
        window.location.href = 'login.html';
        return;
    }

    function getBalance() {
        return parseInt(localStorage.getItem('balance')) || 0;
    }

    function setBalance(value) {
        localStorage.setItem('balance', value);
    }

    function showMessage(text, type) {
        $('#message').html(`
            <div class="alert alert-${type}">
                ${text}
            </div>
        `);
    }

    $('#depositBtn').on('click', function () {
        const amount = parseInt($('#amount').val());

        if (!amount || amount <= 0) {
            showMessage('Ingrese un monto válido', 'danger');
            return;
        }

        let balance = getBalance();
        balance += amount;
        setBalance(balance);

        showMessage('Depósito realizado correctamente', 'success');
        $('#amount').val('');
    });

    $('#withdrawBtn').on('click', function () {
        const amount = parseInt($('#amount').val());

        if (!amount || amount <= 0) {
            showMessage('Ingrese un monto válido', 'danger');
            return;
        }

        let balance = getBalance();

        if (amount > balance) {
            showMessage('Saldo insuficiente', 'danger');
            return;
        }

        balance -= amount;
        setBalance(balance);

        showMessage('Retiro realizado correctamente', 'success');
        $('#amount').val('');

        setTimeout(() => {
            window.location.href = "menu.html";
        }, 3000);
    });

});

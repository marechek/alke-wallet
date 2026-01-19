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
        const amount = parseInt($('#amount').val(), 10);

        if (!amount || amount <= 0) {
            showMessage('Ingrese un monto válido', 'danger');
            return;
        }

        let balance = getBalance();
        balance += amount;
        setBalance(balance);


        
        showMessage('Depósito realizado correctamente. Monto: $' + Number(amount).toLocaleString("es-CL"), 'success');
        $('#amount').val('');

        try {
            // Registra la transacción en el historial (definido en transactions-helper.js)
            addTransaction('deposit', amount, 'Depósito de saldo');
        } catch (e) {
            console.error('Error en addTransaction:', e);
        }

    $('#depositBtn, #withdrawBtn').prop('disabled', true);

        setTimeout(() => {
            window.location.href = 'menu.html';
        }, 1500);
    });

    $('#withdrawBtn').on('click', function () {
        const amount = parseInt($('#amount').val(), 10);

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

        

        showMessage('Retiro realizado correctamente. Monto: -$' + Number(amount).toLocaleString("es-CL"), 'success');
        $('#amount').val('');

        try {
            // Registra la transacción en el historial (definido en transactions-helper.js)
            addTransaction('withdraw', amount, 'Retiro de saldo');
        } catch (e) {
            console.error('Error en addTransaction:', e);
        }

        setTimeout(() => {
            window.location.href = "menu.html";
        }, 1500);
    });

});

document.getElementById('receiveFundsBtn').addEventListener('click', () => {
    const monto = 10000;

    let balance = Number(localStorage.getItem("balance")) || 0;
    balance += monto;

    localStorage.setItem("balance", balance);

    const balanceEl = document.getElementById("balance");
    if (balanceEl) {
        balanceEl.textContent = balance.toLocaleString("es-CL");
    }

    addTransaction('receive', monto, 'Fondos recibidos (simulación)');

    alert(`Se recibieron $${monto.toLocaleString("es-CL")}`);
});



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

    showPopup(`Se recibieron $${monto.toLocaleString("es-CL")}`, 'success', 2500);
});

function showPopup(message, type = 'success', duration = 2000) {
    const container = document.getElementById('menuMessage');
    if (!container) return;

    container.innerHTML = `
        <div class="alert alert-${type} text-center" role="alert">
            ${message}
        </div>
    `;

    setTimeout(() => {
        container.innerHTML = '';
    }, duration);
}



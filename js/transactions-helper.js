function formatFecha(fechaISO) {
    const fecha = new Date(fechaISO);

    const d = String(fecha.getDate()).padStart(2, '0');
    const m = String(fecha.getMonth() + 1).padStart(2, '0');
    const y = fecha.getFullYear();
    const h = String(fecha.getHours()).padStart(2, '0');
    const min = String(fecha.getMinutes()).padStart(2, '0');

    return `${d}-${m}-${y} ${h}:${min}`;
}

function addTransaction(type, amount, description) {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    transactions.unshift({
        type,
        amount,
        description,
        date: new Date().toISOString()
    });

    localStorage.setItem('transactions', JSON.stringify(transactions));
}


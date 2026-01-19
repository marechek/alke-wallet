document.addEventListener('DOMContentLoaded', () => {

    const tableBody = document.getElementById('transactionsTable');
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    if (transactions.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="4" class="text-center text-light py-4">
                    No hay movimientos registrados
                </td>
            </tr>
        `;
        return;
    }

    transactions.forEach((t, index) => {
        const isPositive = t.type === 'deposit' || t.type === 'receive';

        const row = document.createElement('tr');

        if (index % 2 === 0) {
            row.style.backgroundColor = '#1e1e2f';
        } else {
            row.style.backgroundColor = '#2a2a40';
        }

        row.innerHTML = `
            <td>${formatFecha(t.date)}</td>
            <td>${t.type === 'deposit' ? 'Depósito' : t.type === 'send' ? 'Envío' : 'Recibido'}</td>
            <td>${t.description}</td>
            <td class="text-end ${isPositive ? 'text-success' : 'text-danger'}">
                ${isPositive ? '+' : '-'}$${t.amount.toLocaleString('es-CL')}
            </td>
        `;

        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = '#3a3a5a';
        });
        row.addEventListener('mouseleave', () => {
            row.style.backgroundColor = index % 2 === 0 ? '#1e1e2f' : '#2a2a40';
        });

        tableBody.appendChild(row);
    });

});



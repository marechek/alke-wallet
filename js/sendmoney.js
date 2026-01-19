let contacts = JSON.parse(localStorage.getItem("contacts")) || [
    {
        nombre: "Juan Pérez",
        banco: "Banco Estado",
        tipo: "Cuenta Vista",
        cuenta: "12345678"
    },
    {
        nombre: "María López",
        banco: "Banco de Chile",
        tipo: "Cuenta Corriente",
        cuenta: "87654321"
    }
];

localStorage.setItem("contacts", JSON.stringify(contacts));

const tableBody = document.getElementById("contactsTable");
const destinatarioInput = document.getElementById("destinatario");
const searchInput = document.getElementById("searchContact");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("sendForm");

let saldo = Number(localStorage.getItem("balance"));
if (isNaN(saldo)) saldo = 0;

function showMessage(text, type = "success") {
    mensaje.innerHTML = `
        <div class="alert alert-${type} text-center">
            ${text}
        </div>
    `;
}

function addTransaction(type, amount, description) {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    transactions.unshift({
        type,
        amount,
        description,
        date: new Date().toLocaleString('es-CL')
    });

    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function renderContacts(filter = "") {
    tableBody.innerHTML = "";

    contacts
        .filter(c =>
            c.nombre.toLowerCase().includes(filter) ||
            c.banco.toLowerCase().includes(filter) ||
            c.cuenta.includes(filter)
        )
        .forEach(contact => {
            const row = document.createElement("tr");
            row.classList.add("table-secondary", "text-dark");

            row.innerHTML = `
                <td>${contact.nombre}</td>
                <td>${contact.tipo}</td>
                <td>${contact.cuenta}</td>
                <td>${contact.banco}</td>
                <td>
                    <button class="btn btn-sm btn-primary">Seleccionar</button>
                </td>
            `;

            row.querySelector("button").addEventListener("click", () => {
                destinatarioInput.value =
                    `${contact.nombre} - ${contact.banco} (${contact.tipo})`;
            });

            tableBody.appendChild(row);
        });
}

renderContacts();

searchInput.addEventListener("input", e => {
    renderContacts(e.target.value.toLowerCase());
});

form.addEventListener("submit", e => {
    e.preventDefault();

    const monto = parseInt(document.getElementById("monto").value);

    if (monto <= 0) {
        mensaje.innerHTML = `<div class="alert alert-warning">Monto inválido</div>`;
        return;
    }

    if (monto > saldo) {
        mensaje.innerHTML = `<div class="alert alert-danger">Saldo insuficiente</div>`;
        return;
    }

    saldo -= monto;
    localStorage.setItem("balance", saldo);

    showMessage("Envio de dinero realizado correctamente", "success");

    addTransaction('send', monto, `Envío a ${destinatarioInput.value}`);
    showMessage('Dinero enviado correctamente', 'success');

    setTimeout(() => {
        window.location.href = "menu.html";
    }, 1500);
});

document.getElementById("addContactForm").addEventListener("submit", e => {
    e.preventDefault();

    const nombre = document.getElementById("newNombre").value;
    const banco = document.getElementById("newBanco").value;
    const tipo = document.getElementById("newTipo").value;
    const cuenta = document.getElementById("newCuenta").value;

    contacts.push({ nombre, banco, tipo, cuenta });
    localStorage.setItem("contacts", JSON.stringify(contacts));

    renderContacts();

    document.getElementById("addContactForm").reset();
    bootstrap.Modal.getInstance(
        document.getElementById("addContactModal")
    ).hide();
});

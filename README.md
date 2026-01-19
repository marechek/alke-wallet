# 💳 Alke Wallet

## 📌 Descripción del Proyecto

**Alke Wallet** es un proyecto Front-End desarrollado como parte de un desafío académico / bootcamp de desarrollo. Consiste en una **billetera digital (wallet)** que permite a los usuarios gestionar sus activos financieros de manera **segura, simple y amigable**, simulando operaciones comunes como inicio de sesión, visualización de saldo, depósitos, retiros, envíos de dinero y consulta de transacciones.

El proyecto está construido con tecnologías web tradicionales (**HTML, CSS, JavaScript, Bootstrap y jQuery**), priorizando la **legibilidad del código**, una **buena experiencia de usuario** y una **estructura clara y mantenible**, acorde a un nivel estudiante pero siguiendo buenas prácticas.

---

## Objetivo

Desarrollar una aplicación de billetera digital que permita a los usuarios:

* Acceder mediante credenciales seguras
* Visualizar saldo disponible
* Realizar depósitos y retiros de dinero
* Enviar fondos a otros usuarios
* Recibir fondos (simulación)
* Consultar el historial de transacciones

Todo esto a través de una interfaz clara, funcional y fácil de usar.

---

## Tecnologías Utilizadas

* **HTML5** – Estructura de las pantallas
* **CSS3** – Estilos personalizados
* **Bootstrap 5** – Diseño responsive y componentes UI
* **JavaScript (ES6)** – Lógica de la aplicación
* **jQuery** – Manipulación del DOM y eventos
* **Git & GitHub** – Control de versiones

---

## Estructura del Proyecto

```
alke-wallet/
│
├── index.html          # Landing / entrada principal
├── login.html          # Inicio de sesión
├── menu.html           # Dashboard principal
├── sendmoney.html      # Envío de dinero
├── deposit.html        # Depósitos / Retiros
├── transactions.html  # Historial de transacciones
│
├── css/
│   └── styles.css      # Estilos generales
│
├── js/
│   ├── auth.js         # Login / manejo de sesión
│   ├── deposit.js      # Deposit / manejo de sesión
│   ├── data.js         # Datos simulados (usuarios, saldo, contactos)
│   ├── wallet.js       # Lógica de movimientos financieros
│   └── ui.js           # Renderizado de UI y helpers
│
├── assets/
│   └── img/            # Íconos e imágenes
│
└── README.md           # Documentación del proyecto
```

---

## 🧭 Flujo de Navegación

```
index.html
   ↓
login.html
   ↓ (login exitoso)
menu.html
   ├── sendmoney.html
   │       ↓
   │    menu.html
   │
   ├── deposit.html
   │       ↓
   │    menu.html
   │
   └── transactions.html
           ↓
        menu.html
```

El usuario siempre retorna al **menú principal** luego de completar una acción.

---

## ✨ Funcionalidades Principales

### 🔐 Autenticación

* Inicio de sesión con credenciales simuladas
* Validación básica de usuario

### 💰 Administración de Fondos

* Visualización de saldo disponible
* Depósitos de dinero
* Retiros de dinero

### 💸 Envío de Dinero

* Selección de contactos simulados
* Validación de saldo
* Registro de la transacción

### 📄 Historial de Transacciones

* Listado completo de movimientos
* Visualización dinámica

---

## 🎨 Diseño y UX

El diseño está inspirado en referencias de wallets modernas disponibles en Figma:

* [https://www.figma.com/es-la/comunidad/file/1192493585657573686/e-wallet](https://www.figma.com/es-la/comunidad/file/1192493585657573686/e-wallet)
* [https://www.figma.com/es-la/comunidad/file/1031127180407434844/wallet-app-ui](https://www.figma.com/es-la/comunidad/file/1031127180407434844/wallet-app-ui)

Se prioriza:

* Interfaz clara
* Navegación intuitiva
* Uso consistente de colores y componentes

---

## 📈 Criterios de Evaluación Considerados

### Aspectos Técnicos

* Código legible y organizado
* Separación de responsabilidades (JS, CSS, HTML)
* Buenas prácticas de programación

### Performance y UX

* Navegación fluida
* Interacciones claras
* Feedback visual al usuario

---

## 🔄 Control de Versiones

El proyecto se gestiona con **Git y GitHub**, realizando commits por cada funcionalidad o pantalla terminada.

* Rama principal: `master`
* Ramas por pantalla / funcionalidad

---

## 🚀 Cómo Ejecutar el Proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/alke-wallet.git
```

2. Abrir el proyecto en el navegador:

* Ejecutar `index.html` directamente
* No requiere servidor ni instalación adicional

---

## 👨‍💻 Autor

Proyecto desarrollado por **Marcos Elias** como parte de un desafío de desarrollo Front-End.

---

## 📌 Notas Finales

Este proyecto es una **simulación educativa**, no maneja dinero real ni conexiones a servicios financieros externos. Su objetivo es demostrar conocimientos de desarrollo Front-End, lógica en JavaScript y buenas prácticas de estructuración de proyectos web.

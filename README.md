# 💳 Alke Wallet

## 📌 Descripción del Proyecto

**Alke Wallet** es un proyecto Front-End desarrollado como parte de un desafío académico / bootcamp de desarrollo. Consiste en una **billetera digital (wallet)** que permite a los usuarios gestionar sus activos financieros de manera **segura, simple y amigable**, simulando operaciones comunes como inicio de sesión, visualización de saldo, depósitos, retiros, envíos de dinero y consulta de transacciones.

El proyecto está construido utilizando **HTML, CSS, JavaScript, Bootstrap y jQuery**, priorizando la **legibilidad del código**, una **estructura clara**, separación de responsabilidades y una **buena experiencia de usuario**, acorde a un nivel estudiante pero siguiendo buenas prácticas.

---

## 🎯 Objetivo

Desarrollar una aplicación de billetera digital que permita a los usuarios:

* Acceder mediante credenciales seguras (simuladas)
* Visualizar su saldo disponible
* Realizar depósitos y retiros de dinero
* Enviar fondos a otros usuarios dentro de la aplicación
* Consultar el historial de transacciones

Todo a través de una interfaz clara, funcional y fácil de usar.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5** – Estructura de las pantallas
* **CSS3** – Estilos personalizados
* **Bootstrap 5** – Diseño responsive y componentes UI
* **JavaScript (ES6)** – Lógica de la aplicación
* **jQuery** – Manipulación del DOM y eventos
* **Git & GitHub** – Control de versiones

---

## 📁 Estructura del Proyecto

```
ALKE-WALLET/
│
├── css/
│   └── styles.css              # Estilos generales de la aplicación
│
├── js/
│   ├── auth.js                 # Lógica de autenticación (login)
│   ├── menu.js                 # Lógica principal del menú / dashboard
│   ├── menu-helper.js          # Funciones auxiliares del menú
│   ├── deposit.js              # Lógica de depósitos y retiros
│   ├── sendmoney.js            # Lógica de envío de dinero
│   ├── transactions.js         # Lógica del historial de transacciones
│   └── transactions-helper.js  # Funciones auxiliares de transacciones
│
├── index.html                  # Landing / entrada principal
├── login.html                  # Inicio de sesión
├── menu.html                   # Menú principal / dashboard
├── deposit.html                # Depósitos y retiros
├── sendmoney.html              # Envío de dinero
├── transactions.html           # Historial de transacciones
│
└── README.md                   # Documentación del proyecto
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

* Inicio de sesión con validación básica
* Simulación de sesión activa

### 💰 Administración de Fondos

* Visualización de saldo disponible
* Depósitos de dinero
* Retiros de dinero

### 💸 Envío de Dinero

* Envío de fondos a usuarios simulados
* Validación de saldo disponible
* Registro del movimiento

### 📄 Historial de Transacciones

* Registro de todas las operaciones realizadas
* Visualización dinámica del historial

---

## 🎨 Diseño y Experiencia de Usuario

El diseño está inspirado en referencias de wallets modernas disponibles en Figma:

* [https://www.figma.com/es-la/comunidad/file/1192493585657573686/e-wallet](https://www.figma.com/es-la/comunidad/file/1192493585657573686/e-wallet)
* [https://www.figma.com/es-la/comunidad/file/1031127180407434844/wallet-app-ui](https://www.figma.com/es-la/comunidad/file/1031127180407434844/wallet-app-ui)

Se prioriza:

* Navegación intuitiva
* Interfaz limpia y clara
* Uso consistente de componentes visuales

---

## 📈 Criterios de Evaluación Considerados

### Aspectos Técnicos

* Código legible y organizado
* Separación clara entre HTML, CSS y JavaScript
* Uso de archivos JS por funcionalidad

### Performance y UX

* Flujo de navegación claro
* Respuestas visuales al usuario
* Interacciones simples y comprensibles

---

## 🔄 Control de Versiones

El proyecto se gestiona utilizando **Git y GitHub**, realizando commits por cada pantalla o funcionalidad terminada.

* Rama principal: `master`
* Desarrollo incremental por funcionalidad

---

## 🔐 Credenciales de Prueba

Para poder probar la aplicación, utiliza las siguientes credenciales **simuladas**:

* **Usuario:** [admin@alkewallet.cl]
* **Contraseña:** 1234

> Estas credenciales son solo para fines académicos y de demostración.

---

## 🧭 Guía Rápida de Navegación

1. Abrir el archivo `index.html`
2. Presionar **Iniciar Sesión**
3. Ingresar las credenciales de prueba
4. Acceder al menú principal (`menu.html`)
5. Desde el menú puedes:

   * Visualizar el saldo disponible
   * Realizar depósitos y retiros
   * Enviar dinero a otros usuarios y Recibir fondos (simulados automaticamente - Monto: $ 10.000)
   * Consultar el historial de transacciones

---

## 🚀 Cómo Ejecutar el Proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/marechek/alke-wallet.git
```

2. Abrir el proyecto:

* Abrir el archivo `index.html` en el navegador
* No requiere instalación de dependencias ni servidor

---

## 👨‍💻 Autor

Proyecto desarrollado por **Marcos Elias** como parte de un desafío de desarrollo Front-End.

---

## 📌 Notas Finales

Este proyecto es una **simulación educativa**. No maneja dinero real ni se conecta a servicios financieros externos. Su objetivo es demostrar conocimientos de desarrollo Front-End, lógica en JavaScript y buenas prácticas en la estructuración de proyectos web.

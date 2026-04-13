# 💰 Ahorraya - Aplicación de Control de Gastos

---

## 📌 Descripción

**Ahorraya** es una aplicación web full stack diseñada para gestionar de forma sencilla los ingresos y gastos personales. Permite a los usuarios registrarse, iniciar sesión de manera segura y llevar un control básico de su dinero mediante una interfaz moderna y amigable.

El objetivo principal es ofrecer una herramienta práctica para el aprendizaje de tecnologías como React, Node.js y MongoDB, integrando autenticación y manejo de estado.

---

## 🚀 Características principales

* 🔐 Autenticación de usuarios (registro e inicio de sesión)
* 🔑 Encriptación de contraseñas con bcrypt
* 🪪 Generación de tokens con JWT
* 📊 Registro de ingresos y gastos
* 🧮 Cálculo automático de balance financiero
* 🗑️ Eliminación de movimientos
* 🔒 Protección de rutas privadas
* 🚪 Cierre de sesión seguro
* ⚡ Interfaz rápida con Vite + React

---

## ⚙️ Instalación

---

### 2. Instalar dependencias

#### 🔹 Backend

```bash
cd backend
npm install
```

#### 🔹 Frontend

```bash
cd frontend
npm install
```

---

## ▶️ Ejecución del proyecto

### 🔹 Iniciar Backend

```bash
cd backend
node index.js
```

Servidor disponible en:

```
http://127.0.0.1:5000
```

---

### 🔹 Iniciar Frontend

```bash
cd frontend
npm run dev
```

Aplicación disponible en:

```
http://localhost:5173
```

---

## 🧰 Tecnologías utilizadas

### 🎨 Frontend

* React.js
* Vite
* Material UI (MUI)
* React Router DOM
* Axios

### ⚙️ Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* Bcrypt

---

## 🏗️ Arquitectura del proyecto

```bash
ahorraya/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── node_modules/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── front/
│   ├── node_modules/
│   ├── public/
│   │   └── img/
│   │       ├── gastos.PNG
│   │       ├── icon.png
│   │       ├── inicio.PNG
│   │       ├── login.PNG
│   │       ├── pwa-convertido-a-192x192.jpeg
│   │       └── pwa.png
│   │
│   ├── src/
│   │   ├── features/
│   │   │   ├── api/
│   │   │   │   └── components/
│   │   │   │       ├── ApiRyC_Axios.jsx
│   │   │   │       └── ApiRyC.jsx
│   │   │   │
│   │   │   ├── auth/
│   │   │   │   └── components/
│   │   │   │       ├── Login.jsx
│   │   │   │       └── Register.jsx
│   │   │   │
│   │   │   ├── layout/
│   │   │   │   └── components/
│   │   │   │       ├── Content.jsx
│   │   │   │       ├── Footer.jsx
│   │   │   │       └── Header.jsx
│   │   │   │
│   │   │   └── views/
│   │   │       ├── Acerca.jsx
│   │   │       ├── Estadisticas.jsx
│   │   │       ├── Gastos.jsx
│   │   │       ├── Home.jsx
│   │   │       └── Metas.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── Routes.jsx
│   ├── eslint.config.js
│   ├── index.css
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vercel.json
│   └── vite.config.js
│
├── .gitignore
├── README.md

---
```

## 🖼️ Interfaz gráfica

📸 Capturas de tu aplicación:

![Login](./front/public/img/loginn.PNG)
![Inicio](./front/public/img/inicio.PNG)
![Gastos](./front/public/img/gastos.PNG)

---

## 🔐 Autenticación y seguridad

* Contraseñas encriptadas con **bcrypt**
* Tokens JWT para validar sesiones
* Datos de usuario almacenados en MongoDB
* Uso de localStorage para persistencia de sesión
* Protección de rutas en frontend

---

## ⚡ Rendimiento y optimización

* Uso de **Vite** para carga rápida
* Renderizado eficiente de componentes
* Minimización de recargas innecesarias

---

## 📈 Posibles mejoras futuras

* 💾 Guardar gastos en base de datos
* 📊 Gráficas estadísticas (Chart.js)
* 🔐 Middleware de autenticación en backend
* 👥 Sistema multiusuario avanzado

---

## ⚠️ Consideraciones

* La base de datos es local (MongoDB)
* Proyecto enfocado a fines académicos

---

## 👨‍💻 Autor

**Nombre:** Sebastián Contreras
**Proyecto:** Aplicación Full Stack de Control de Gastos
**Tecnologías:** React, Node.js, MongoDB

---

## 📄 Licencia

Este proyecto es de uso académico y educativo. Puede ser reutilizado con fines de aprendizaje.

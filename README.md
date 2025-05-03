# Syncroniza - Sitio Web Oficial

Este repositorio contiene el código fuente del sitio web institucional de Syncroniza, una empresa chilena especializada en ofrecer soluciones tecnológicas para empresas constructoras.

## Estructura del Proyecto

El proyecto está organizado en dos carpetas principales:

- **frontend**: Aplicación de React que contiene la interfaz de usuario del sitio web.
- **backend**: API desarrollada con Node.js y Express que maneja la lógica del servidor, como el envío de formularios de contacto.

## Requisitos Previos

Para ejecutar este proyecto localmente, necesitarás:

- Node.js (v14.0.0 o superior)
- npm (v6.0.0 o superior)
- MongoDB (opcional, si deseas habilitar la persistencia en la base de datos)

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

### Configuración del Frontend

1. Navega al directorio del frontend:
   ```
   cd C:\Syncroniza_Web_Oficial\frontend
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```
   npm start
   ```

4. La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

### Configuración del Backend

1. Navega al directorio del backend:
   ```
   cd C:\Syncroniza_Web_Oficial\backend
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Crea un archivo `.env` en el directorio backend (ya existe un archivo de ejemplo):
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/syncroniza
   NODE_ENV=development
   EMAIL_USER=tu-email@gmail.com
   EMAIL_PASS=tu-contraseña-de-aplicacion
   ```

4. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```

5. El servidor estará disponible en [http://localhost:5000](http://localhost:5000)

## Características Principales

### Frontend
- Diseño responsive adaptado a todo tipo de dispositivos
- Animaciones fluidas con Framer Motion
- Estilos personalizados con Styled Components
- Navegación con React Router

### Backend
- API RESTful con Express
- Envío de emails a través de Nodemailer
- Estructura escalable para futuras funcionalidades

## Despliegue en Producción

### Frontend
Para construir la versión de producción del frontend:

```
cd C:\Syncroniza_Web_Oficial\frontend
npm run build
```

Esto generará una carpeta `build` con los archivos optimizados listos para desplegar en cualquier servidor web estático como Netlify, Vercel, o un servidor Apache/Nginx.

### Backend
Para el backend, se recomienda utilizar un servicio como Heroku, DigitalOcean, o AWS EC2:

1. Configura las variables de entorno en tu plataforma de despliegue
2. Despliega el código del backend
3. Asegúrate de actualizar la URL de la API en el frontend antes de construir la versión de producción

## Contacto

Para más información sobre este proyecto, contacta a:
- Email: contacto@syncroniza.cl
- Sitio web: [www.syncroniza.cl](https://www.syncroniza.cl)
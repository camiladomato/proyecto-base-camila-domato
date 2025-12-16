# 📱 Proyecto Base - Clon de WhatsApp

Realizado para el curso de Programador Web - UTN comision 999200928.

## 🌟 1. Descripción Breve

Este proyecto consiste en la maquetación (HTML y CSS) de una interfaz de usuario inspirada en la famosa aplicación de mensajería **WhatsApp**.

El objetivo principal fue replicar la vista de chat individual, incluyendo el *sidebar* con la lista de contactos y el panel principal de la conversación.

**Tecnologías Utilizadas:**
* HTML5 (Estructura Semántica)
* CSS3 (Estilizado y Layout)

## ✨ 2. Características y Componentes Maquetados

Se logró la implementación de los siguientes elementos clave para una experiencia de chat completa:

* **Diseño Responsivo:** La interfaz se adapta correctamente a dispositivos móviles (el sidebar se oculta).
* **Layout Profesional:** Utilizando y respetando las estructuras semanticas.
* **Burbujas de Chat:** Estilizado de mensajes recibidos y enviados.
* **Componentes Multimedia:** Implementación de mensajes avanzados, incluyendo:
    * Mensaje de **Audio** con reproductor y barra de progreso.
    * Mensaje de **GIF/Imagen** con hora superpuesta.
* **Fondo Fijo:** Uso de técnicas CSS para asegurar que el fondo del chat no se mueva al hacer *scroll* vertical.
* **Estructura de la Barra de Input:** Diseño moderno de la barra de texto (`textarea`) y los botones de acción (adjuntar y enviar).

## 📂 3. Estructura del Proyecto

La organización de archivos es limpia y sencilla:
/ ├── index.html              # Estructura principal de la aplicación. ├── style.css               # Todos los estilos CSS del proyecto. └── assets/                 # Contiene todas las imágenes, GIFs e íconos utilizados.

## 🚀 4. Cómo Visualizarlo

Para ver la interfaz en funcionamiento, simplemente:

1.  Clona o descarga este repositorio.
2.  Abre el archivo `index.html` en tu navegador web preferido (Chrome, Firefox, Edge, etc.).

*(No se requiere servidor web.)*

## 🎨 5. Decisiones de Diseño y Estilo

* **Tipografía:** Se utilizó la fuente personalizada `"Cause"`.
* **Paleta de Colores:** Se optó por una paleta de colores personalizada con tonos **Violeta (`--violet-300`, `--violet-500`)** como color de acento para los mensajes enviados y las acciones principales.
* **Layout Principal:** Se usó **CSS Grid** (`grid-template-columns: 320px 1fr;`) en el contenedor `.web-app` para dividir limpiamente el *sidebar* y el panel de chat.
* **Gestión del Scroll:** Dentro del panel de chat, se usó **Flexbox (`display: flex; flex-direction: column;`)** para apilar el *header*, el área scrolleable (`.messages` con `flex: 1` y `min-height: 0`), y el *footer*, asegurando que este último se mantenga siempre visible.
* **Estilos:** Todos los estilos están centralizados en `style.css` y utilizan **Variables CSS (`:root`)** para la gestión unificada de colores, facilitando el mantenimiento y cambio de tema.

## ⚙️ 6. Trabajo con Git

El historial del repositorio refleja un flujo de trabajo ágil, con *commits* frecuentes y descriptivos que documentan el avance de la maquetación paso a paso, incluyendo la implementación de cada nuevo componente (GIF, Audio) y las correcciones de bugs de layout.

---
<p align="center">
    Desarrollado con ❤️ Por Camila Domato.
</p>
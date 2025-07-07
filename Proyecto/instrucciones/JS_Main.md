# Practica 3: JavaScript. Añadiendo interactividad a nuestra Landing Page

## Enlace del archivo JavaScript

1.  Asegúrate de que tu archivo JavaScript (main.js) esté correctamente enlazado al final del <body> de tu archivo HTML, antes del cierre de la etiqueta </body>. Esto es crucial para que el script tenga acceso a todos los elementos del DOM. También debes incluir el script de Font Awesome para los iconos.

    ```html
    <script src="../javascript/main.js"></script>
    <script src="https://kit.fontawesome.com/8ceb30feb6.js" crossorigin="anonymous"></script>
    ```

## Lógica JavaScript (Archivo main.js)

1.  **Espera a que el DOM esté completamente cargado:** Encapsula todo tu código JavaScript dentro de un evento DOMContentLoaded. Esto asegura que el script se ejecute solo cuando el HTML de la página esté listo, evitando errores al intentar acceder a elementos que aún no existen.

    ```javascript
    document.addEventListener('DOMContentLoaded', function () {
        // Todo tu código JavaScript irá aquí dentro
    });
    ```

2.  **Funcionalidad del botón PLAY (Mostrar y Reproducir Video):**
    * *Obtener elementos:*
        * Crea una variable para seleccionar el botón Play. Usa `document.querySelector` para obtener el botón con la clase `.btn.play.`
        * Crea una variable para seleccionar el modal y otra para el video. Usa `getElementById` para obtener los elementos con los ids correspondientes (el modal y el video).
        * Obtén el elemento de video por su id (<pon el ID de tu video>) y guárdalo en una constante video.
    * *Añadir `EventListener` al botón PLAY:* Agrega un click event listener a btnPlay. Cuando se haga clic:
        * Cambia el estilo display del modal a 'block' para hacerlo visible.
        * Reinicia el tiempo de reproducción del video a 0 (`video.currentTime = 0`).
        * Reproduce el video (`video.play()`).

3.  **Funcionalidad para cerrar el modal al hacer clic fuera del video:**
    * **Añadir `EventListener` al modal:** Agrega un click event listener al modal mismo. Cuando se haga clic en cualquier parte del modal:
        * Verifica si el evento de clic (`target`) ocurrió directamente sobre el modal (es decir, no sobre el video o cualquier otro contenido dentro del `modal-content`).
        * Si el clic fue fuera del video:
            * Pausa el video (`video.pause()`).
            * Reinicia el tiempo de reproducción del video a 0.
            * Cambia el estilo display del modal a `none` para ocultarlo.

4.  **Animación y redirección en los iconos del footer:**
    * **Obtener elementos:** Selecciona todos los enlaces de los iconos sociales dentro del footer (`.footer .social-icons a`) y guárdalos en una constante "socialIcons" (será una NodeList) utilizando la propiedad `querySelectorAll`.
    * **Iterar sobre cada icono:** Usa un `forEach` para recorrer cada icon en la NodeList "socialIcons".
    * **Añadir 'EventListener' a cada icono:** Para cada icon, agrega un click event listener. Cuando se haga clic:
        * **Evitar acción por defecto:** Llama a `preventDefault()` para evitar que el navegador abra el enlace inmediatamente.
        * **Añadir clase para animación:** Agrega la clase `clicked` al icon. Esta clase debería contener los estilos CSS para la animación de clic (que ya definiste en tu `footer.css`).
        * **Eliminar clase y abrir enlace después de la animación:** Usa `setTimeout` para:
            * Remover la clase `clicked` del icon después de 300 milisegundos (para que la animación tenga tiempo de ejecutarse).
            * Abrir el enlace (`icon.href`) en una nueva pestaña (`_blank`) usando `window.open()`. El tiempo de espera (300) debe ser igual o ligeramente mayor a la duración de tu animación CSS.
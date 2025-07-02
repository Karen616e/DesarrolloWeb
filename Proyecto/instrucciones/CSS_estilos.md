# Practica 2: CSS. Implementando estilos a nuestra Landing Page
## Estructura `head`

1.  Asegúrate de que tus archivos CSS estén enlazados correctamente en la sección `<head>` de tu HTML. Recuerda que cada archivo CSS debe tener su propia etiqueta `<link>`.

## Estilos Globales (Archivo `estilos.css`)

1.  **Reinicia los estilos por defecto utilizando el simbolo * :** Para todos los elementos (`*`), establece `box-sizing` a `border-box`, elimina el `padding` y `margin` por defecto, define la fuente como Helvetica (o sans-serif si no está disponible) y el color del texto a blanco.
2.  **Estilos para el `body`:** Define el margen del `body` a 0 y el color de fondo a negro.
3.  **Estilos para la imagen de héroe (`.hero-image`):**
    * Establece el ancho al 100% y una altura mínima de `100vh` (viewport height).
    * Define un fondo con un degradado lineal (`linear-gradient`) de negro a un negro semitransparente, superpuesto sobre una imagen de fondo.
    ```CSS
    background: linear-gradient([DESPLAZAMIENTO_DEL_DEGRADADO], [COLOR_INICIAL]], [COLOR_FINAL])), url(UBICACION_Y_NOMBRE_DEL_ARCHIVO); /* aqui va la imagen de fondo*/
    ```
    * Asegúrate de que la imagen de fondo cubra todo el contenedor (`background-size: cover`) y esté centrada (`background-position: center`).
    * Organiza los elementos internos para que se muestren en columna (`flex-direction: column`).
4.  **Estilos para el modal (`.modal`):**
    * Inicialmente, debe estar oculto (`display: none`).
    * Posiciónalo de forma fija (`position: fixed`) para que cubra toda la ventana del navegador.
    * Define un `z-index` alto (`1000`) para que aparezca por encima de otros elementos.
    * Ajusta el margen izquierdo y superior a 0.
    * Establece su tamaño al 100% del ancho y alto de la pantalla.
    * Permite el desplazamiento si el contenido es demasiado grande (`overflow: auto`).
    * Dale un fondo negro semi-transparente para crear un efecto de superposición oscura (`background-color`).
5.  **Estilos para el contenido del modal (`.modal-content`):**
    * Posiciónalo de forma relativa .
    * Establece el margen al 5%.
    * Establece un ancho del 80% con un ancho máximo de `800px` (`max-width`).
    * Asegúrate de que su fondo sea totalmente transparente.
6.  **Estilo `hover` para el botón de cierre del modal (`.close:hover`):** Cuando el puntero del ratón esté sobre él, cambia su fondo a un color blanco semi-transparente.

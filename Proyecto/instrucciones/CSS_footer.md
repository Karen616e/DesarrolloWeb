## Estilos del Pie de Página (Archivo `footer.css`)

1.  **Estilos para el `.footer`:**      
    * Define un color de fondo oscuro para el fondo, color de texto gris, `padding` de 40px arriba/abajo  y 20px hacia los costados, tamaño de fuente de 13 px y alineación de texto hacia el centro.
    * Ajusta el margen superior a 5px.
2.  **Estilos para los iconos sociales (`.footer .social-icons`):**
    * Aplica un margen inferior de 20px.
    * Para cada enlace (`<a>`) (`.footer .social-icons a`), define el color a gris, margen hacia los costados de 10 px, tamaño de fuente de 18px, elimina la decoración de texto y añade transiciones suaves para todo durante 0.3s.
    * Establece un `padding` de 10px, `border-radius` (para hacerlos circulares) al 100%, fondo transparente y `display: inline-block`.
3.  **Efecto `hover` para los iconos sociales (`.footer .social-icons a:hover`):**
    * Al hacer `hover`, cambia el color del icono a blanco, el fondo a rojo Netflix #e50914, escala el icono 1.5 unidades (`transform: scale`) y añade una sombra brillante por la derecha de 10px y de color rojo . Para definir la sombra se realiza mediante la propiedad box-shadow
    ```CSS
     box-shadow: 0 0 10px #e50914;
    ```
4.  **Animación al hacer clic (`.clicked`):** Aplica una animación llamada `clickPop` al hacer clic en un icono social (`@keyframes clickPop`).
    * **Define la animación `clickPop`:** La animación debe hacer que el icono se escale en 1.6 unidades y rote brevemente (15 grados/ 15deg)en el 50% de la animación, volviendo a su estado original al final.
    Para hacer rotar al elmento se utiliza la propiedad transform: rotate
    ```CSS
         transform: scale(valor de escalado) rotate(valor de giro);
    ```
5.  **Estilos para los enlaces del pie de página (`.footer-links`):**
    * Usa Flexbox para distribuir los enlaces a lo largo de la fila, justificando el contenido al centro y permitiendo fluir a los elementos en varias lineas.
    * Aplica un margen inferior de 20px.
    * Para las listas (`<ul>`) (`footer-links ul`), elimina los puntos de lista y define márgenes (arriba/abajo 10px y hacia los lados de 30px), un `padding` de 0, alineación de texto a la izquierda y un ancho mínimo de 150px.
    * Aplica márgenes de 8px hacia arriba/abajo y 0px hacia los costados para los elementos de la lista (`<li>`) (`.footer-links li`).
    * Para los enlaces (`<a>`)  dentro de `.footer-links a`, define el color a gris, elimina la decoración y añade una transición para el color de 0.2s.
    * Al hacer `hover` sobre estos enlaces (`.footer-links a:hover`), cambia su color a blanco.
6.  **Estilos para el botón de código de servicio (`.service-code`):**
    * Define un fondo transparente, un borde de 1px solido y color gris, color de texto gris, un `padding` inferior/superior de 8px y un  `padding` hacia los costados de 20px, margen superior de 20px, cursor de puntero, tamaño de fuente de 13px y transiciones a todo por 0.2s de tipo `ease-in-out`.
    * Al hacer `hover` en `.service-code:hover`, cambia el color de fondo a un gris oscuro #222 , el color de texto a blanco y el color del borde a blanco.
7.  **Estilos para el párrafo de copyright (`.copyright`):**
    * Define un margen superior de 20px, color de texto gris oscuro y tamaño de fuente de 12px.


Finalmente, agrega cada uno de tus archivos CSS dentro de `head` en tu archivo `index.html` (Recuerda colocar las rutas de tus archivos de manera adecuada).
```HTML
<link rel="stylesheet" href="estilos.css">
    <link rel="stylesheet" href="header.css">
    <link rel="stylesheet" href="info-series.css">
    <link rel="stylesheet" href="/footer.css">
```
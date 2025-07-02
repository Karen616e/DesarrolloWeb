## Estilos del Encabezado (Archivo `header.css`)

1.  **Estilos para el contenedor del encabezado (`.header`):**
    * Usa Flexbox para distribuir y alinear los elementos (logo, navegación, barra de búsqueda) utilizando `display: flex`.
    * Justifica el contenido alrededor de tal forma que todos los elementos tengan el mismo espaciado entre ellos (`justify-content: space-around`) y alinéalos verticalmente al centro (`align-items: center`).
    * Permite la redistribución de elementos en caso de que la pantalla sea más chica (`flex-wrap:wrap`)
    * Define una altura del `15vh` y un margen inferior de 20px.
2.  **Estilos para el logo de Netflix (`.logo-letras`):**
    * Establece un ancho de `12em`.
    * Asegura que la imagen dentro de este contenedor ocupe el 100% de su ancho (con `.header .logo-letras img`).
3.  **Estilos para el contenedor de la barra de navegación (`.nav`):**
    * Define un ancho de `30rem`.
4.  **Estilos para la barra de navegación y el menú (`.nav .menu`):**
    * Usa Flexbox para distribuir y alinear los elementos.
    * Justifica el contenido alrededor para que el espacio entre los elementos sea el mismo(`justify-content: space-around`).
    * Elimina el estilo predeterminado de los marcadores de lista (`list-style: none`).
5.  **Estilos para los enlaces del menú (`.nav .menu a`):**
    * Elimina la decoración de texto (`text-decoration: none`) y establece un tamaño de fuente de `1.1rem`.
6.  **Estilo `hover` para los enlaces del menu (`.nav .menu:hover`):**
    * Al hacer `hover`, subraya el texto y ponlo en negrita. 
7.  **Estilos para el contenedor de la barra de búsqueda (`.bar`):**
    * Establece un ancho de `12rem` y posiciónala de forma relativa.
    * Usa Flexbox para alinear los elementos verticalmente al centro (`align-items: center`).
8.  **Estilos para el input de búsqueda (`.bar input`):**
    * Fondo transparente y bordes de color blanco semi-transparentes.
    * Establece el radio del borde a 5px.
    * Establece un ancho del 100%, una altura de `2rem` y un `padding` a la izquierda de 32px para el icono.
9.  **Estilos para el icono de búsqueda (`.bar .icon`):** Posiciona el icono de forma absoluta dentro del input , define su tamaño de fuente a 0.8 rem y muevelo  15px de izquierda a derecha;
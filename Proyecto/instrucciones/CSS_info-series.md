## Estilos de la Información de la Serie (Archivo `info-series.css`)

1.  **Estilos para la sección principal de héroe (`.principal-hero`):**
    * Define el `padding` de 10px arriba/abajo y  80px hacia los costados, los elementos deben de posicionarse en columnas`flex-direction:column` con un espacio igual entre cada uno de ellos y agregando un espacio entre cada elemento de 20x (`.principal-hero`).
2.  **Estilos para el logo "NETFLIX SERIES" (`.principal-hero .netflix-series`):**
    * Define una altura del 20%.
    * Muestra los elementos en fila (`flex-direction: row`) y alinéalos verticalmente al centro.


3. **Estilos para la imagen del logo de Netflix (`.principal-hero .netflix-series .netflix img`)**
    * Asegura que la imagen ocupe el 100% de su contenedor (`.principal-hero .netflix-series .netflix`). Este contenedor debera tener un
4.  **Estilos para el contenedor de la serie (`.principal-hero .netflix-series p`):**.
    *  Aumentar el espacio entre cada letra de un elemento de texto en 5px (`letter-spacing`).
5.  **Estilos para la clase serie (`.principal-hero .serie`):**
    * Usa Flexbox para alinear el contenido verticalmente (columna) y añade un espacio entre cada uno de los elementos de 20px (`gap=20px`).
6.  **Estilos para la información de la serie (`.principal-hero .serie .logo-serie`):**
    * Establece un ancho maximo de 26 rem
    * Establece un alto minimo de 10 rem
    * Utiliza flexbox para centrar los elementos verticalmente
7.  **Estilos para la imagen de la serie (`.principal-hero .serie .logo-serie img`):**
    * Asegura que la imagen ocupe el 100% de su contenedor.
8.  **Estilos para el párrafo de descripción (`.principal-hero .serie .logo-serie .info`):**
    * Utiliza Flexbox  y establece un gap de 20 px.
9. **Estilos para los items de la serie (`.principal-hero .serie .info .item`)**
    * Utiliza un espaciado para las letras de 2px y un color blanco con transparencia al 50%.
10. **Estilo para el boton de la clasificacion de la serie (`.principal-hero .serie .info .category button`)
    * Establece un ancho para el boton de 50px.
    * Establece un alto de 18px .
    * Un fondo de color rojo #e50914.
    * Establece un borde redondeado de 2px.
11. **Estilos para el parrafo descriptivo de tu serie(`.principal-hero .serie .descripcion-parrafo`)**
    * Establece un margen superior de 10px.
    * Establece el ancho al 60%.
    * Un espaciado de las letras de 2px.
    * Un interlineado de 1.4.

12. **Al contenedor de botones (`.buttons`)**
    * Establece un margen en la parte superior de 20px
    * Con flexbox alinea los elmentos en filas
 
13. **Estilos generales de los botones (`.buttons btn`)**
    * Establece un border-radius de 2px
    * Indica que el color de texto es blanco
    * Establece un width de 6.25 rem
    * Establece un alto de 2 rem
    * Quita el borde al boton (`border:none`)
    * Indica que el texto debe de estar centrado
    * Establece un tamaño de fuente de 1rem
    * Posiciona el elemento relativamente
    * Indica que todo elemento que salga de este boton se desborde (`overflow: hidden` )

14. **Estilos para las etiquetas span (`.buttons btn span`)**

    * Necesitamos colocar nuestro span por encima del boton para ello definimos la propiedad ('z-index=2');
    * Posicionar de forma relativa
    * Asegúrate de que el texto del `<span>` dentro del botón tenga un `z-index`
    mayor (2), posición relativa y una transición suave para todo, con temporización y
    una duracion de 0.3s.

15. * Al hacer `hover` sobre cualquier botón (`.btn`), el cursor debe cambiar a un
puntero (`.buttons .btn:hover`)

16. **Estilos para el botón de reproducción (`.play`):**
* Define un color de fondo rojo #e50914  y un margen a la derecha de 20px.
* Crea un pseudo-elemento (`.buttons .play::after`) con propiedades iniciales como el ancho y alto de `1px`, fondo `none`, posición absoluta, y un `z-index` de 1.
* Posiciona el pseudo-elemento creado anteriormente en el centro utilizando porcentajes
* Define un radio para el borde del pseudo-elemento del 100%.
* Define una transición para todas las propiedades del pseudoelemento, con una
duración de 0.5 segundos y una curva de velocidad `"ease-in-out"`.
* Al hacer `hover` sobre el botón `.play` (`.buttons .play:hover::after`), el
pseudo-elemento `::after` debe escalarse dramáticamente (`transform: scale(400)`) y
cambiar su fondo a blanco, creando un efecto de expansión.
* Al mismo tiempo, el `<span>` (`.buttons .play:hover span`) dentro del botón
`.play` debe cambiar su color a negro al hacer `hover`.

17. **Estilos para el botón de list (` .buttons .list`)**

* Define el fondo del elemento como transparente
* Agrega una transición para todas las propiedades del pseudoelemento, con una duración de 0.4s
y una curva de velocidad `"ease-in-out"`.
* Cuando se pase el cursor por el botón (` .buttons .list:hover`) deberá colocarse un borde de 4px color blanco y sólido

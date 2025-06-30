# Practica 1:  HTML. Maquetando nuestra landing Page

## Sección "Hero IMAGE"

1. Colocar una etiqueta `<div>` con la clase `"hero-image"`.

2. El `<div>` con la clase `"hero-image"` contendrá los siguientes apartados:

    * Un `<header>` con la clase `"header"`.
    * Una sección que organiza toda la información de la serie, así como los botones.  
      Esta sección deberá tener la clase `"principal-hero"`.


## Sección "HEADER" (Dentro de la etiqueta `<header>`)

1. Nuestro `<header>` se dividirá en **tres secciones**:

    * Una sección para las letras de Netflix con la clase `"logo-letras"`.
    * Una sección para la barra de navegación con la clase `"nav"` (se recomienda utilizar la etiqueta `<nav>`).
    * Una sección para la barra de búsqueda con la clase `"bar"`.

2. En la sección con la clase `"logo-letras"` se colocará la imagen correspondiente al logotipo de Netflix.  
   Esta imagen deberá estar dentro de una etiqueta `<span>`.

3. La sección con la clase `"nav"` será una **lista desordenada** (`<ul>`) con la clase `"menu"`,  
   en donde cada elemento (`<li>`) contendrá un enlace (`<a>`) que redirecciona a un destino genérico (símbolo `#`).

4. La sección con la clase `"bar"` incluirá los siguientes elementos:

    * Un `<input>` de tipo `"text"` con la clase `"input"` y un atributo `placeholder` con la leyenda `"Buscar"`.
    * El siguiente ícono para representar la búsqueda:

      ```html
      <i class="fa-solid fa-magnifying-glass icon"></i>
      ```


## Sección "PRINCIPAL-HERO"

1. Nuestra sección con la clase `"principal-hero"` se dividirá en los siguientes apartados:

    * Un artículo con la clase `"netflix-series"` para colocar el logo "NETFLIX SERIES".
    * Un artículo con la clase `"serie"` para colocar todo lo relacionado con la serie (LOGO, INFORMACIÓN Y DESCRIPCIÓN).
    * Una sección de botones con la clase `"buttons"`.
    * Un contenedor `<div>` con la clase `"modal"` y un atributo `id`.

2. Dentro del artículo con la clase `"netflix-series"` se colocarán los siguientes elementos:

    * Una imagen con el logo de Netflix, encapsulada dentro de una etiqueta `<span>` con la clase `"netflix"`.
    * Un párrafo que contenga el texto `"SERIES"`.

3. Dentro del artículo con la clase `"serie"` se encontrarán los siguientes elementos:

    * Una imagen con el logo de la serie de Netflix, encapsulada en un `<span>` con la clase `"logo-serie"`.
    * Una sección con la clase `"info"` donde la información estará dividida en etiquetas `<span>` con la clase `"item"`.  
      Los símbolos de barra vertical (`|`) también deberán estar dentro de etiquetas `<span>`.  
      La estructura de cada elemento será la siguiente:

      ```html
      <span class="item">Información</span>
      ```

    * Un párrafo genérico con la clase `"descripción-parrafo"` que contenga una sinopsis o texto descriptivo.

4. Dentro de la sección con la clase `"buttons"` se colocarán los siguientes elementos:

    * Un botón con la clase `"play"` y, dentro de él, un `<span>` con el texto correspondiente.
    * Un botón con la clase `"list"` y, dentro de él, un `<span>` con su texto correspondiente.
    * Adicionalmente, **ambos botones** deben tener una segunda clase llamada `"btn"`.

5. Dentro del apartado con la clase `"modal"` se agregará un contenedor `<div>` con la clase `"modal-content"`.  
   Dentro de este contenedor se colocará un elemento `<video>` con el atributo `id="hibikeVideo"`.




## Sección "FOOTER"

1. Al final de la página se colocará una etiqueta `<footer>` con la clase `"footer"`.

2. Dentro del footer se agregarán los siguientes apartados:

    * Una sección con la clase `"social-icons"` que contendrá los enlaces a las redes sociales oficiales de Netflix.  
      Cada enlace será una etiqueta `<a>` con los siguientes atributos:
        - `href` apuntando a la red social correspondiente.
        - `target="_blank"` para abrir el enlace en una nueva pestaña.
        - `aria-label` para mejorar la accesibilidad describiendo la red social.
        - Dentro del enlace se colocará un `<i>` con la clase del ícono correspondiente.

      Los iconos de las redes sociales a colocar son:
        * Facebook – clase: `fab fa-facebook-f`
        * Instagram – clase: `fab fa-instagram`
        * Twitter (X) – clase: `fab fa-twitter`
        * YouTube – clase: `fab fa-youtube`

    * Una sección con la clase `"footer-links"` que contendrá **cuatro listas** `<ul>` independientes.  
      Cada lista tendrá varios elementos `<li>` con enlaces `<a>` que apuntan a un destino genérico `#` o a enlaces reales.  
      Los enlaces deben representar servicios e información institucional de Netflix, como se indica a continuación:

      **Primera lista:**
        - Audio descriptivo
        - Centro de ayuda
        - Tarjetas de regalo
        - Prensa

      **Segunda lista:**
        - Relaciones con inversionistas
        - Empleo
        - Tienda de Netflix
        - Términos de uso

      **Tercera lista:**
        - Privacidad
        - Avisos legales
        - Preferencias de cookies
        - Información corporativa

      **Cuarta lista:**
        - Contáctanos

    * Finalmente, colocar un párrafo `<p>` con la clase `"copyright"` que contenga el texto:

      ```
      © 1997–2025 Netflix, Inc.
      ```

    







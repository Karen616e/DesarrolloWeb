/* DOM: Document Object Model (Modelo de Objetos del Documento), 
es una interfaz de programación para documentos HTML y XML.

 El DOM se ve como un árbol en el que cada hoja o rama representa un elemento de HTML, facilitando así el acceso y la modificación de los elementos desde JavaScript.
 Gracias al DOM, los elementos de la web no son solo piezas estáticas de HTML; se convierten en nodos y objetos que pueden ser alterados mediante JavaScript para actualizar en tiempo real lo que ve el usuario.

*/

/*Obtener un elemento en base a mi ID*/
//Devuelve un elemento HTML
const cajas1 = document.getElementById("cajas1");
console.log(cajas1);



/*Obtener en base a la clase
*/
//Devuelve una colección de elementos HTML
const cajas = document.getElementsByClassName("caja"); // Devuelve todas las cajas
console.log(cajas); 


//Devuelve un elemento HTML
const primeraCaja = document.querySelector(".caja"); //devuelve el primer elemento que coincida
console.log(primeraCaja);


/*obtener elementos hijos elemento.children*/

console.log(cajas1.children);


/*obtener el elemento padre*/
console.log(primeraCaja.parentElement);



/*obtener elmentos por medio del metodo querySelector("selector")*/
//devuelve el primer elemento que coincida con el selector

cajaQuerySelector = document.querySelector(" .main .cajas2 .caja");
console.log(cajaQuerySelector);


/*obtener elementos por medio del método querySelectorAll("selector")*/
//devuelve todos los elementos coincidentes con el selector

cajasQuerySelector = document.querySelectorAll(".main .cajas2 .caja");
console.log(cajasQuerySelector);



/*
Diferencia principal: ¿Qué devuelven?
Método	                        ¿Qué devuelve?	                    Tipo de objeto	¿Único o varios?
getElementById("id")	        Primer elemento con ese ID	        HTMLElement	      Uno solo
getElementsByClassName("x")	    Todos los elementos con esa clase	HTMLCollection	  Varios
querySelector("selector")	    Primer elemento que coincida	    Element	          Uno solo
querySelectorAll("selector")    Todos los elementos que coincidan	NodeList	       Varios
*/


/*

Devuelve...	    ¿Tiene .forEach()?	                        ¿Se puede aplicar .style o .classList.add()?
HTMLElement	        No (no aplica)	                        Sí (es un solo elemento)
HTMLCollection	    No (hay que convertir con Array.from)	Sí, pero con loop
NodeList	        Sí	                                    Sí, pero con loop
Element	            No (no aplica)	                        Sí*/


/*
cajaQuerySelector = document.querySelector(" .main .cajas2 .caja");
console.log(cajaQuerySelector);*/
//agregando estilos a mi primer caja de mi contenedor cajas2
/*
cajaQuerySelector.style.backgroundColor = "orange";
cajaQuerySelector.style.color = "white";
cajaQuerySelector.style.padding = "10px";
cajaQuerySelector.style.borderRadius = "100%";
cajaQuerySelector.style.fontWeight = "bold";*/


//cajaQuerySelector.classList.add("caja-seleccionada");


//agregando un evenlo a la primer caja para que cuando se realice click sobre él  cambien sus estilos
const caja = document.querySelector(".cajas1 .caja");
let clicHecho = false;

caja.addEventListener("click", () => {
    if (!clicHecho) {
        // Primer clic: aplicar estilos
        caja.style.backgroundColor = "lightgreen";
        caja.style.color = "white";
        caja.style.padding = "10px";
        clicHecho = true;
    } else {
        // Segundo clic: quitar estilos (restaurar a valor original)
        caja.removeAttribute("style"); // Borra todos los estilos inline
        clicHecho = false;
    }
});





// Supongamos que todas las cajas tienen la clase "caja"

/*
allCajas = document.querySelectorAll('.caja');

allCajas.forEach((caja) => {
  let clicHecho = false; // Estado individual por caja (opcional, si quieres alternar)

  caja.addEventListener("click", (event) => {
    if (!clicHecho) {
      event.target.style.backgroundColor = "lightgreen";
      event.target.style.color = "white";
      event.target.style.padding = "10px";
      clicHecho = true;
    } else {
      event.target.removeAttribute("style");
      clicHecho = false;
    }
  });
});
*/




//agregar clase a un elemento

allCajas = document.querySelectorAll('.caja')

allCajas.forEach((caja) => {
  let clicHecho = false; // Estado individual por caja (opcional, si quieres alternar)

  caja.addEventListener("click", (event) => {
    if (!clicHecho) {
      caja.classList.add('caja-seleccionada');
      clicHecho = true;
    } else {
      caja.classList.remove('caja-seleccionada');
      clicHecho = false;
    }
  });
});
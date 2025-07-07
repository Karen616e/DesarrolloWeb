/*
    son bloques de código reutilizables
    responden a un evento
*/


// Forma #1

/*
function saludo(){
    console.log('Hola!');
}

//llamamos a la función
saludo(); 

*/


/* Forma #2. Asignando una funcion a una variable
 */

/*
const saludo = function(){
    console.log('Hola desde una variable');
}*/


/* Forma #3. Funciones de tipo flecha
si es solo una linea podemos eliminar los {}
*/

/*a una función se le pueden agregar parametros, estos parametros
 es información que puede ocupar la función para después
 estos parametros van dentro de los parentesis
 */
const saludo = (nombre = 'persona') => {
    console.log(`Hola ${nombre} desde una funcion de tipo flecha`);
}

saludo('Leonardo');


/* el alcance de una variable depende del lugar en donde sea definida*/


/*
var numero=10;//variable global
var nombre = 'leo';

var imprimirNumero = () =>{
   var numero=20; //variable local
   var nombre = 'ale'; 
   console.log('El numero es: '+ numero);

    imprimirNombre = () => {
        console.log('El nombre es ' + nombre)
    }
    imprimirNombre();
}

imprimirNumero();
*/


/* alcance de tipo bloque
podemos acceder a las variables dentro del bloque donde fueron definidas
por medio de const o let

un bloque es un pedazo de código englobado entre llaves

*/


var imprimirNumeroBloque = () =>{
    let numero=20; //variable de tipo bloque
    console.log('El numero desde un bloque de codigo es: '+ numero);
    console.log('El nombre desde un bloque de codigigo es: '+nombre);
    imprimirNombre = () => {
        let nombre = 'ale'; 
        console.log('El nombre desde un bloque de codigo anidado es ' + nombre)
    }
    imprimirNombre();
}

imprimirNumeroBloque();






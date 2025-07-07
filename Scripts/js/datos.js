/* dentro de las variables se pueden guardan diferentes tipos de datos

    string: Cadenas de texto representadas por ''
    number/numeric: Valores numericos
    boolean: Verdadero o falso (true/false)
    object: Objetos
    function: Funciones
    null: Valor nulo (el cero no es un valor nulo)

    undefined: valor no asignado. este valor se da cuando no se inicializa
    una variable
*/

//si queremos una cadena de texto con '' podemos colocar la cadena "" y la palabra necesaria con ''
let nombre = 'Leonardo Chagoya';
let parrafo = "Lorem 'ipsum'"

//valores numericos, enteros, con punto decimal/flotantes, negativos
let edad = 22;
let saldo = 230.90;
let calificacion =-4;

//boleanos false= 0, true = 1
let casado= false;

//arrays: permiten guardar multiples valores
//pueden guardar valores de diferentes tipos

let calificaciones = [10, 9, 7, 10, 8, 9];
let arrayVariado = [ 1, true, 'Esto es un post'];


//objetos
//tienen propiedades
//cada propiedad tiene un valor o varios valores
let persona = {
    nombre: 'Leonardo',
    edad : 22,
    casado:false
};

//valor nulo
let valorNulo = null;


document.writeln(nombre+'<br>');
document.writeln(parrafo+'<br>');
document.writeln(casado+'<br>');
document.writeln(calificaciones+'<br>');
document.writeln(arrayVariado+'<br>');

//podemos ver el valor de todo el objeto en consola
console.log(persona);

//podemos dar la clave al objeto persona para que nos devuelva el atributo
document.writeln(persona['nombre']);
document.writeln(persona.nombre+'<br>');

document.writeln(valorNulo);
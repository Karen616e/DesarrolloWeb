/*
variables: espacios de memoria en los cuales se va almacenar información 

tienen que empezar con una letra almenos y simbolos solo aceptan _ y $
las variables son únicas no es recomendable tener 2 variables con el mismo nombre
hay palabras reservadas como var switch o for, no podemos tener variables con estas palabras reservadas

*/



/*forma antigua 
Ámbito de función (function scope).
Se puede redeclarar y reasignar.

Esto quiere decir que podiamos acceder a nuestra variable desde cualquier lado
*/

var edad = 22;

/*forma actual

Ámbito de bloque (block scope).

Se puede reasignar, pero no redeclarar en el mismo bloque.
*/

let nombre = 'Leonardo Chagoya'; //se puede cambiar el valor
const correo = 'chagoya27.leo@gmail.com' //es una contante, no se puede cambiar el valor
nombre = 'Alejandra';
//correo = 'correo@gmail.com'; //esto no se puede hacer


document.writeln(edad + '<br>');
document.writeln(nombre + '<br>');
document.writeln(correo);
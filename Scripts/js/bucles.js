/* Ciclo for: Repite un bloque de código mientras se cumple una codición

    La estructura basica consta de 3 partes:

    Inicializador del contador; condicion; incremento/decremento del contador

    Inicializador: Se ejecuta al inicio de entrar al bloque
    Condición: Esta condición determina si entra o no al bloque
    Incremento/Decremento: Se aplica cada que termine de ejecutarse el bloque de código

    for(i=0;i<10;i++){
        se va a repetir 10 veces
    }

*/

//imprimiendo numeros del 0 al 9

//i toma el valor de 0
//se pregunta si i es menor que 10
//como i es menor que 10 entonces ejecuta la impresion del valor de i
//i se incrementa en 1
//se repite este algortimo mientras i sea menor que 10

for(i=0;i<10;i++){
        document.writeln(i+'<br>');
}


/*podemos imprimir un arreglo accediendo a su indice
calificaciones.length obtiene el numero de elementos de un arreglo
los arreglos empiezan por el indice 0
calificaciones[0] => 9
calificaciones[1] => 10
calificaciones[2] => 7
.....
calificaciones[5] => 9
*/

calificaciones=[9, 10, 7, 5, 10, 9];
document.writeln('Lista de calificaciones <br>')
for (i=0;i<calificaciones.length;i++){
    document.writeln(calificaciones[i]+'<br>');
}


document.writeln('Lista de calificaciones con foreach')
/*
    El ciclo forEach nos permite recorrer todos los elementos de un arreglo 
    sin necesidad de utilizar un índice manualmente (como con un for clásico).

    En este caso, usamos una función de flecha que se ejecuta una vez por cada 
    elemento del arreglo 'calificaciones'. Cada vez, la variable 'calificacion' 
    toma el valor del elemento actual.
*/

calificaciones.forEach(calificacion => {
    document.writeln(calificacion);
});


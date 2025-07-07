/*

condicional if

prueba si una condicion es verdadera accediento a su bloque de código

if(condicion){

    se ejecuta si la condición es verdadera
}

condicional if else

prueba si una condición es verdadera, en caso contrario accede al bloque de código dentro de else

if(condicion){

    se ejecuta si la condición es verdadera
}
else{

}
*/

let miEdad = 22;
let entrada;

if (miEdad>=18 && entrada==true){
    document.writeln('Adelante!!'); //si la condicion es true se ejecta este código
}
else{
    document.writeln('No puedes pasar, fuera de aquí!!!'); //si la condición es false se ejecuta este código
}

document.writeln('<br>');


//el operador ternario funciona como la estructura if else
resultado = (miEdad>=18 && entrada==true) ? 'Adelante' : 'No puedes pasar, fuera de aquí';
document.writeln(resultado);

document.writeln('<br>');

//la estructura if else puede anidarse agregando un mayor grado de complejidad
if(miEdad>=18){
    if(entrada==true){
        document.writeln('Adelante, tienes edad y entrada');
    }
    else{
        document.writeln('No tienes entrada, paga cover');
    }
}
else{
    document.writeln('No tienes edad para pasar, largo');
}








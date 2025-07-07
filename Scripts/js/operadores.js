//operadores aritmeticos: para realizar operaciones basicas

let numero1=10;
let numero2=5;

/*
    suma: 10+5
    resta: 10-5
    multiplicacion: 10*5
    exponentes: 5**2
    modulo: 10%5 = 0. Devuelve el residuo de la division entera
    incremento ++ .Aumenta en 1 el valor 
    decremento --. Disminuye en 1 el valor
*/
let resultado= 10;
let numero=1;
//numero= numero +1;
numero--;

document.writeln(resultado + '<br>');
document.writeln(numero + '<br>')


/* operadores de asignación

    += suma un numero al valor de una variable
    -= resta un numero al valor de una variable
    *= multiplica un numero al valor de una variable

    sirve para simplificar una expresion asi: numero = numero*3;
*/

numero1 = 7;;
numero1*=10;
document.writeln(numero1 + '<br>');


/* operadores de comparación

    mayor : numero1>numero2
    menor : numero1<numero2
    mayor, igual: numero1>=numero2
    menor,igual: numero1<=numero2
    igual: numero1 ==numero2
    igual en tipo y valor numero1 === numero2
    devuelven true en caso  de que la expresion sea verdadera
    devuelven false en caso de que la expresion sea falsa

*/


document.writeln( 10 === '10'); //realiza una conversion de tipos de forma implicita
document.writeln('<br>');

/*operador ternario
expresion ? valorVerdadero:ValorFalso
compara si la expresion es verdadera o falsa: si la expresion es verdadera  toma el primer valor
si la expresion es falsa toma el segundo valor
*/

miEdad = 15;
let cadena = miEdad > 18 ? 'Adelante eres mayor de 18 años' : 'Fuera de aqui';
document.writeln(cadena + '<br>');


/*operadores lógicos
&& AND. Ambas expresiones deben cumplirse
|| OR  . Basta con que una de las expresiones  se cumpla para que sea verdadero
! NOT. Cambia el valor de una variable booleana
!=. Indica que el valor debe de ser diferente
*/

miEdad = 18;
let entrada = false;
let resultadoEntrada = miEdad>=18 || entrada==true;
document.writeln(resultadoEntrada);

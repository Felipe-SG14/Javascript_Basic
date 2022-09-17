'use strict'

//PROBLEMA 8

//CALCULADORA

/*

- PIDA DOS NUMEROS POR PANTALLA
- SI METEMOS UNO MAL QUE NOS LO VUELVA A PEDIR
- MOSTRAR EN LA PAGINA EN UNA ALERTA Y POR LA CONSOLA EL RESULTADO DE
    SUMAR, RESTAR, MULTIPLICAR Y DIVIDIR ESAS DOS CIFRAS

*/

while (true) {
    
    //PEDIDA DE NUMEROS

    var numero1 = Number(prompt("Dame el primer numero: ", 0));

    if ( Number.isNaN(numero1)==true ) {
        console.log("El numero es invalido, intenta de nuevo");
    } else {
        break;
    }

}

while (true) {
    
    //PEDIDA DE NUMEROS

    var numero2 = Number(prompt("Dame el segundo numero: ", 0));

    if ( Number.isNaN(numero2)==true ) {
        console.log("El numero es invalido, intenta de nuevo");
    } else {
        break;
    }

}

//UNA VEZ CON LOS NUMERO VERIFICADOS SE ESCRIBEN TODAS LAS OPERACIONES

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multi = numero1 * numero2;
var divsion = numero1 / numero2;

//SE IMPRIME EN EL BODY
document.write("<h2> Calculadora </h2>");
document.write("<p> La suma es: "+ numero1 +" + "+ numero2 + " = " + suma + "</p>");
document.write("<p> La resta es: "+ numero1 +" - "+ numero2 + " = " + resta + "</p>");
document.write("<p> La multiplicacion es: "+ numero1 +" * "+ numero2 + " = " + multi + "</p>");
document.write("<p> La division es: "+ numero1 +" / "+ numero2 + " = " + divsion + "</p>");

//SE IMPRIME EN LA CONSOLA
console.log("Calculadora");
console.log("La suma es: "+ numero1 +" + "+ numero2 + " = " + suma);
console.log("La resta es: "+ numero1 +" - "+ numero2 + " = " + resta);
console.log("La multiplicacion es: "+ numero1 +" * "+ numero2 + " = " + multi);
console.log("La division es: "+ numero1 +" / "+ numero2 + " = " + divsion);

//ALERT
alert( "Calculadora" + "\n" +
        "La suma es: "+ numero1 +" + "+ numero2 + " = " + suma + "\n" +
        "La resta es: "+ numero1 +" - "+ numero2 + " = " + resta + "\n" +
        "La multiplicacion es: "+ numero1 +" * "+ numero2 + " = " + multi + "\n" +
        "La division es: "+ numero1 +" / "+ numero2 + " = " + divsion

)
 

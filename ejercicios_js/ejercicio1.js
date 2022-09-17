'use strict'

/* PROGRAMA QUE PIDA DOS NUMEROS Y QUE NOS DIGA CUAL ES EL MAYOR, EL MENOR Y SI SON IGUALES  */


/* PLUS , si los numeros no son un numero o son menores o iguales a 0, nos vuelta a pedir que introduzcamos los datos */

//PIDIENDO NUMEROS

var correcto = true;

while (correcto == true) {
    var numero1 = Number(prompt("Dame tu primer numero:"));
    var numero2 = Number(prompt("Dame tu segundo numero:"));

    if ( (numero1 > numero2) && (numero1>0 && numero2>0)) {
        console.log("El numero 1 es mayor que el numero 2");
        correcto=false;
    } else if ( (numero1 < numero2) && (numero1>0 && numero2>0)) {
        console.log("El numero 2 es mayor que el numero 1");
        correcto=false;
    } else if ( (numero1 == numero2) && (numero1>0 && numero2>0) ) {
        console.log("Los numeros son iguales");
        correcto=false;
    } else {
        console.log("Introduce numeros correctos");
    }
    
}
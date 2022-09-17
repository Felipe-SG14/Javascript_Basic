'use strict'

//EJERCICIO 6

// HACER UN PROGRAMA QUE DIGA SI EL NUMERO ES PAR O IMPAR
// 1. Ventana Prompt
// 2. Comprobar si el numero es valido


while (true) {
    
    var numero = Number(prompt("Dame el numero a verificar: ", 0));

    if ( Number.isNaN(numero)==true || Number.isInteger(numero)==false ) {
        console.log("El numero es invalido, intenta de nuevo");
        
    } else {

        //LO QUE ENTRE AQUI YA ES NUMERO
        numero = parseInt(numero);
        if (numero == 0) {
            console.log("El numero es par");
            break;
        } else if (numero % 2 == 0) {
            console.log("El numero es par");
            break;
        } else {
            console.log("El numero es impar")
            break;
        }

    }

}

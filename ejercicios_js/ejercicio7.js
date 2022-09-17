'use strict'

//PROBLEMA 7

//GENERAR LA TABLDE MULTIPLICAR DE UN NUMERO INTRODUCIDO POR PANTALLA

var numero = Number(prompt("Dame el numero a verificar: ", 0));

if ( Number.isNaN(numero)==true || Number.isInteger(numero)==false ) {
    console.log("El numero es invalido, intenta de nuevo");
    
} else {

    //TODO LO QUE ENTRA AQUI YA ES NUMERO ENTERO
    numero = parseInt(numero);
    console.log("Tabla del numero: " + numero)

    document.write(" <h2>Tabla del numero: " + numero + " </h2> ")

    for (let index = 1; index <= 10; index++) {
        let mul = numero * index;
        console.log( numero + " x " + index + " = " + mul );
        document.write("<p>" + numero + " x " + index + " = " + mul + "</p>")
    
    }

}
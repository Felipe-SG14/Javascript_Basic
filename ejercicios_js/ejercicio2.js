'use strict'

//EJERCICIO 2

//UTILIZANDO UN BUCLE, SACAR LA MEDIA Y LA SUMA DE LOS NUMEROS INTRODUCIDOS HASTA QUE SEA UN NUMERO NEGATIVO PARAR Y MOSTRAR RESULTADOS

var iteracion=true;
var cantidad = 0;
var suma = 0;

while (iteracion==true) {
    let pedida = cantidad + 1;
    let numero = parseInt(prompt("Dame el "+pedida+" numero:"))

    if ( isNaN(numero)==false && (numero>=0) ) {
        cantidad = cantidad + 1;
        suma = suma + numero;
    } else if( isNaN(numero) == true) {
        console.log("No diste un numero valido");
    } else if(numero<0) {
        if (cantidad == 0) {
            console.log("No se dieron numeros aun");
        } else {
            let media = suma / cantidad ;
            console.log("La media del conjunto de numeros es: "+ media);
            console.log("La suma del conjunto de numeros es: " + suma);
            iteracion = false;
        }
    }
}
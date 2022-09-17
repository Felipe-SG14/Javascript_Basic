'use strict'

//EJERCICIO 5

//MOSTRAR TODO LOS NUMEROS DIVISORES DE UN NUMERO INTRODUCIDO EN UN PROMPT

var numero = parseInt(prompt("Dame el primer numero: "));

if (Number.isNaN(numero) == false) {
    console.log("Probando true")
}

for (let index = 1; index <= numero; index++) {
    if (numero % index == 0) {
        console.log(index);
    }
}

'use strict'

//EJERCICIO 4

//MOSTRAR TODOS LOS NUMEROS IMPARES QUE HAY ENTRE DOS NUMEROS INTRODUCIDOS POR EL USUARIO

var numero1 = parseInt(prompt("Dame el primer numero: "));
var numero2 = parseInt(prompt("Dame el segundo numero: "));
var dif = numero1 - numero2;

if (dif == 1  ||  dif == -1) {
    console.log("No hay numeros enteros entre los numeros dados");
} else if(numero1 < numero2) {
    for (let index = numero1+1; index<numero2 ; index++) {
        let modulo = index % 2 ;
        if (modulo != 0) {
            console.log(index);
        }
    }
} else if(numero1 > numero2) {
    for (let index = numero1-1; index>numero2 ; index--) {
        let modulo = index % 2 ;
        if (modulo != 0) {
            console.log(index);
        }
    }
} else if( numero1 == numero2 ){
    console.log("Los numeros son iguales");
} else {
    console.log("No diste numeros validos");
}


'use strict'


//EJERICIO 3

/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Dame el primer numero: "));
var numero2 = parseInt(prompt("Dame el segundo numero: "));
var dif = numero1 - numero2;

if (dif == 1  ||  dif == -1) {
    console.log("No hay numeros enteros entre los numeros dados");
} else if(numero1 < numero2) {
    for (let index = numero1+1; index<numero2 ; index++) {
        console.log(index);
    }
} else if(numero1 > numero2) {
    for (let index = numero1-1; index>numero2 ; index--) {
        console.log(index);
    }
} else if( numero1 == numero2 ){
    console.log("Los numeros son iguales");
} else {
    console.log("No diste numeros validos");
}
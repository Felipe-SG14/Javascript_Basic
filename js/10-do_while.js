'use strict'

//BUCLE DO WHILE, SE EJECUTA AL PRINCIPIO UNA VEZ POR DEFAULT

var years = 30;

do {
    console.log(years);
    years--;
    if (years==25) {
        console.log("Se entro al break");
        break;
    }

} while (years != 20);
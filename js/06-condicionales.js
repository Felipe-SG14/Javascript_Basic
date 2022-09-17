'use strict'

//CONDICIONAL IF

//COMPARAR ALGO

var edad1 = 20;
var edad2= 12;
//SI A ES IGUAL A B, ENTONCES HAZ ALGO

if (edad1 > edad2 ) {
    console.log("edad1 es mayor que edad2");
} else{
    console.log("La edad es inferior");
}

// COMPARACIONES
//  <   MENOR QUE
//  >   MAYOR QUE
//  <=  MENOR O IGUAL
//  >=  MAYOR O IGUAL
//  ==  IGUAL QUE
//  !=  DIFERENTE DE

//OPERADORES LOGICOS
//  &&  AND
//  ||  OR
//  !   NEGACION

//OPERADOR DE NEGACION

var year = 2017;

if (year != 2016) {
    console.log("El año no es 2016, realmente es: "+year);
}

//OPERADOR AND

if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual");
} else {
    console.log("No estamos en la era actual");
}

//OPERADOR OR

if (year == 2018 || year == 2020) {
    console.log("O es 2020 o es 2018");
} else {
    console.log("No es 2020 ni 2018");
}


//OPERADOR ELSE IF

if (edad1 > edad2 ) 
{
    if (edad1>25) {
        console.log("SUPERA A LA EDAD 2 Y TIENE MAS DE 25 ");
    } else if(edad1 != 20) {
        console.log("SUPERA A LA EDAD 2 PERO ES MENOR DE 25 Y NO TIENES 20");
    } else{
        console.log("SUPERA A LA EDAD 2 PERO ES MENOR DE 25 Y TIENES 20");
    }

    //ELSE IF
}
else
{
    console.log("La edad es inferior");
}

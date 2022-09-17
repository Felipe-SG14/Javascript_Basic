'use strict'

//PROBLEMA 21

//FUNCIONES ANONIMAS
//FUNCIONES QUE NO TIENE NOMBRE 

//LA FUNCION NO TIENE NOMBRE PERO SE ASOCIA A UNA VARIABLE
var pelicula = function (nombre) {
    return "La pelicula es: " + nombre;
}

console.log(pelicula("TENET"));

//CALL BACK ES UNA FUNCION DENTRO DE OTRA FUNCION COMO PARAMETRO
//ES POSIBLE PASAR FUNCIONES ANONIMAS COMO PARAMETROS DE UNA FUNCION
//DENTRO DE LA FUNCION SE DEBE ASIGNAR ARGUMENTOS A LAS FUNCIONES ANONIMAS 
//PARA QUE FUNCIONES

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos, pelis){
    var suma= numero1+numero2;
    sumaYmuestra(suma);
    sumaPorDos(suma);
    return suma;
}

sumame(5, 7, function (dato) {console.log("La suma es: ",dato);}, function (dato) {console.log("La suma por dos es: ", (dato*2));});

//FUNCIONES DE FLECHA
//LA MISMA LOGICA QUE LAS FUNCIONES DE CALLBACK PERO CON SINTAXIS DISTINTA

sumame(5, 7, (dato) => {console.log("La suma es: ",dato);}, dato => {console.log("La suma por dos es: ", (dato*2));});


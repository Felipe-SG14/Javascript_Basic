'use strict'

//PARAMETROS REST Y SPREAD


//EL PARAMETRO REST GUARDA PARAMETROS DE MAS QUE NO ESTEN DEFINIDOS
// PARAMETRO REST = ...nombre_del_array_que_guardara_los_parametros_sobrantes

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log(resto_de_frutas)
}

listadoFrutas("Naranja","Manzana","Sandia","Pera","Melon");

var frutas = ["Naranja","Manzana"];

//SPREAD REPARTE LOS VALORES DE UN ARRAY PARA QUE SEAN USADOS COMO PARAMETROS DE UNA FUNCION

listadoFrutas(...frutas)
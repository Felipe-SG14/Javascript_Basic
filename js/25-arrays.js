'use strict'

//ARRAYS BASICOS, ARREGLOS, MATRICES
//COLECCION DE TIPOS DE DATOS EN UN VARIABLE

var arreglo = ["Hola","como","estas"];

//FORMA DE CREAR ARREGLOS COMO OBJETO
var lenguajes = new Array("PHP","GO","JS","JAVA")

console.log(lenguajes);
console.log(arreglo[2]);

//LONGITUD DE UN ARRAY

console.log(lenguajes.length);


//ENTRANDO A UN ELEMENTO DE UN ARRAY
var elemento = prompt("Que elemento del array quieres: ");
elemento = parseInt(elemento);

//RECUERDA VERIFICAR EL TAMAÑO DEL ARRAY
if (elemento >= lenguajes.length) {
    console.log("Te pasaste del tamaño del array");
} else {
    alert(lenguajes[elemento]);
}

//MOSTRAR ELEMENTOS DE UN ARRAY, RECORRIENDO DESDE UN FOR(BUCLE)
document.write("<h1> Lenguajes de programacion </h1>");
for (let index = 0; index < lenguajes.length; index++) {
    document.write("<p>"+lenguajes[index]+"</p>");
}

//RECORRIENDO UN ARRAY CON FOR EACH
lenguajes.forEach(element => {
    document.write("<p>"+element+"</p>");
});







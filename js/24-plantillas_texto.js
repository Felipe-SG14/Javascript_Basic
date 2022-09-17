'use strict'

//PLANTILLAS DE TEXTO

var nombre = prompt("Dame tu nombre: ");
var apellido = prompt("Dame tu apellido");

//var texto = "Mi nombre es: " + nombre + "</br> Mis apellidos son: " + apellido; 

//CREACION DE LA PLANTILLA DE TEXTO
//PLANTILLA SE CREA CON COMILLA SIMPLE INVERTIDA
//ULTIMOS ESTANDARES
var texto = `

    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre} </h3>
    <h3>Mi apellido es: ${apellido} </h3>

`;

document.write(texto);
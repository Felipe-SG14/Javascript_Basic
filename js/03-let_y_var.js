'use strict'

//DIFERENCIA ENTRE LET Y VAR
//LET : PERIMITE DEFININIR VARIABLES LIMITANDO SU ALCANCA
//VAR : VARIABLE LOCAL O GLOBAL
//PRUEBAS LET Y VAR

//PRUEBA CON VAR
var numero = 40;
if (true) {
    numero = 50;
    console.log(numero);
}
console.log(numero)

//PRUEBA CON LET
//TE PERMITE CREAR VARIABLES PARA QUE SOLO EXISTAN EN UN BLOQUE
//TE PERMITE MODIFICAR UNA VARIABLE DENTRO DE UN BLOQUE PERO FUERA DE EL REGRESA A LA NORMALIDAD
var texto = "Curso JS";
console.log(texto);

if (true) {
    var texto = "Curso Laravel 5";
    console.log(texto); //LARAVEL 5
}

console.log(texto);
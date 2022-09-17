'use strict'


//NO ES POSIBLE LLAMAR VARIABLES DEFINIDAS DENTRO DE UNA FUNCION
//LAS VARIABLES TAMBIEN TIENE SUS PROPIOS METODOS

function holaMundo(texto) {
    console.log(texto);
    console.log(numero.toString());
}

var numero = 12
var texto = "Hola mundo soy una variable global"
holaMundo(texto);
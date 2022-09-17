'use strict'

//FUNCIONES

//GRUPO DE ORDENES AGRUPADAS

//DEFINICION DE LA FUNCION
function calculadora(){
    //CONJUNTO DE INSTRUCCIONES A REALIZAR
    return "Hola soy la calculadora";
}

//PARAMETROS OPCIONALES SE DEFINEN EN EL ARGUMENTO DE LA FUNCION CON UN VALOR PREDETERMINADO
function operaciones(numero1 , numero2, mostrar = false) {

    if (mostrar==false) {
        console.log("Suma: " + (numero1+numero2) );
        console.log("Resta: " + (numero1-numero2) );
        console.log("Multiplicacion: " + (numero1*numero2) );
        console.log("Division: " + (numero1/numero2) );
        console.log(mostrar);
        console.log("***********************");
    } else {
        console.log("Mostrando en el cuerpo de la pagina")
        document.write("Suma: " + (numero1+numero2) + "<br>");
        document.write("Resta: " + (numero1-numero2) + "<br>");
        document.write("Multiplicacion: " + (numero1*numero2) + "<br>");
        document.write("Division: " + (numero1/numero2) + "<br>");
        document.write(mostrar + "<br>");
        document.write("************************<br>");
    }

    return "Se han hechos los calculos";
}

//INVOCAR O LLAMAR A LA FUNCION
console.log(calculadora());

//NO HAY NECESIDAD DE IMPRIMIRLO

for (let index = 0; index <= 3; index++) {
    //NO ES NECESARIO MANDAR UN VALOR AL PARAMETRO OPCIONAL
    operaciones(index, 2,true);
}
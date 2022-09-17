'use strict'

/*

1.- HACER UN PROGRAMA QUE PIDA SEIS NUMERO POR PANTALLA Y METERLOS EN UN ARRAY   ////OK
2.- MOSTRAR EL ARRAY ENTERO EN EL CUERPO DE LA PAGINA Y EN LA CONSOLA     ////OK 
3.- ORDENARLO Y MOSTRARLO   ////OK
4.- INVERTIR SU ORDEN Y MOSTRAR ////OK
5.- MOSTRAR CUANTOS ELEMENTOS TIENE EL ARRAY  ////OK
6.- BUSQUEDA DE UN VALOR INTRODUCIDO POR EL USUARIO Y QUE NOS DIGA SI LO ENCUENTRA Y SU INDICE  ////OK


*/


//VARIABLES

var numeros = [];

//PRIMER PASO LA PEDIDA DE LOS 6 NUMEROS EN UN CICLO CON VERIFICIACION
//PUNTO 1
while (numeros.length<6) {
    
    let indice = numeros.length;
    let numero = Number(prompt("Dame el numero en el indice:" + indice + "======> "));

    if (isNaN(numero)==false) {
        //SE INGRESA EL NUMERO AL ARREGLO
        numeros.push(numero);
    } else {
        console.log("El dato introducido no es valido, intenta de nuevo");
    }

}

//PUNTO 2
//SE MOSTRAR EL ARRAY COMPLETO EN EL CUERPO DE LA PAGINA Y EN LA CONSOLA
//EN EL CUERPO DE LA PAGINA

//FORMA DE HACER UNA VERDADERA COPIA DE UN ARRAY
var numeros_clones = [...numeros];
var numeros_clones2 = [...numeros];

document.write("<h2>El arreglo es</h2>");

numeros.forEach(element => {
    document.write("<p>"+ element +"</p>");
});

//EN LA CONSOLA

console.log("El arreglo es");

numeros.forEach(element => {
    console.log(element);
});


//PUNTO 3
//ORDENAR EL ARREGLO Y MOSTRARLO

var arreglo_ordenado = numeros.sort( function (a,b) {
    return a-b;
} );

//EN EL CUERPO DE LA PAGINA

document.write("<h2>El arreglo ordenado es</h2>");

arreglo_ordenado.forEach(element => {
    document.write("<p>"+ element +"</p>");
});

//EN LA CONSOLA

console.log("El arreglo ordenado es");

arreglo_ordenado.forEach(element => {
    console.log(element);
});

//PUNTO 4 
//INVERTIR EL ARREGLO Y MOSTRARLO
console.log(numeros);
var arreglo_invertido = numeros_clones.reverse();

//EN EL CUERPO DE LA PAGINA

document.write("<h2>El arreglo invertido es</h2>");

arreglo_invertido.forEach(element => {
    document.write("<p>"+ element +"</p>");
});

//EN LA CONSOLA

console.log("El arreglo invertido es");

arreglo_invertido.forEach(element => {
    console.log(element);
});

//PUNTO 5
//MOSTRA LA LONGITUD DEL ARRAY

document.write("<h2>La longitud del array es: </h2>");
document.write("<p> "+ numeros_clones.length +" </p>");

console.log("La longitud del array es: " + numeros_clones.length);

//PUNTO 6


//PRIMERO SE PIDE EL NUMERO A BUSCAR
while (true) {
    
    let num_s = Number(prompt("Dame el numero a buscar: "));
    if (isNaN(num_s)==false) {
        
        //ES NUMERO

        var busqueda = numeros_clones2.some(function (numero) {
            return numero == num_s;
        });

        if (busqueda == true) {
            //EL NUMERO SE ENCONTRO
            var index_nb = numeros_clones2.findIndex(function (numero) {
                return numero == num_s;
            });

            //SE IMPRIME EL INDICE DEL NUMERO
            document.write("<h2> El indice en el arreglo original es: </h2>");
            document.write("<p>"+ index_nb +"</p>");
            console.log("El indice en el arreglo original es: "+ index_nb);

        } else {
            //EL NUMERO NO SE ENCONTRO
            document.write("<p> El numero a buscar no se encontro </p>");
            console.log("El numero a buscar no se encontro");
        }


        break;
    } else {
        console.log("El dato ingresado es invalido, intenta de nuevo");
    }
}

//


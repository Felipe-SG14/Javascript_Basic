'use strict'

//ARRAYS MULTIDIMENSIONALES
//ARREGLOS DENTRO DE OTROS ARREGLOS

var categorias = [[1,2,3,4,5],[1,2,20,4,5],[1,2,3,4,5]];

//PARA ACCEDER A UN ELEMENTO DE UN ARRAY MULTIDIMENSIONAL
//console.log(categorias)
//console.log(categorias[0][1]);


//OPERACIONES CON ARRAYS
//AÑADIR COSAS AL FINAL DEL ARRAY
categorias[0].push(6);
categorias[1].push(6);
categorias[2].push(6);
categorias.push([1,2,3,4,5,6]);

//QUITAR COSAS AL FINAL DEL ARRAY
categorias.pop();

//LOCALIZAR EL ELEMENTO
//SOLO PUEDE BUSCAR DENTRO DE ARREGLOS NATIVOS O PUROS
console.log(categorias[1].indexOf(20));
console.log(categorias);

//SPLICE BORRA EL ELEMENTO APARTIR DE UN INDICE Y UNA LONGITUD DE BORRADO
//SPLICE REGRESA EN FORMA DE ARREGLO LO QUE SE QUITA DE OTRO ARREGLO
console.log(categorias[0].splice(0,2));

var texto = ["Hola","como","estas"];

//PARA CONVERTIR UN ARREGLO A UN STRING separa por comas
var string = texto.join();

//PARA REMPLAZAR TODOS LOS ELEMENTOS COINCIDENTES SE DECLARA DIFERENTE
//   /coincidencia/gi
string = string.replace(/,/gi," ");
console.log(string);


//COMO CONVERTIR UN STRING A UN ARRAY
var texto2 = "Hola yo me siento muy bien";

//EL ARGUMENTO DE SPLIT RECIBE EL SEPARADOR PARA FORMAR EL ARREGLO
console.log(texto2.split(" "));

//ORDERNAR ARREGLOS
//EL METODO SORT ORDENA DEPENDIENDO DE LA POSICION DEL UNICODE
//SI IMPORTA LAS MAYUSCULAS Y MINUSCULAS
//PORQUE SOLO TOMA EL PRIMER ELEMENTO PARA COMPARAR
//ES DECIR TAMBIEN SOLO TOMA EL PRIMER DIGITO DE UN NUMERO PARA ORDENAR
texto = ['hola','como','estas'];

console.log("Ordendo arreglos")
console.log(texto);

var texto_ordenado = texto.sort();


//PARA DAR LA VUELTA AL ARRAY
console.log(texto.reverse());
console.log(texto.sort());


//RECORRER UN ARRAY CON FOR IN

var arreglo_nombres = ["Probando","el","for","in"];

for (let elemento in arreglo_nombres) {
    document.write("<p>"+arreglo_nombres[elemento]+"</p>");
}


//BUSQUEDA DENTRO DE UN ARRAY
//ESTE METODO REGRESA EL MISMO NUMERO O ELEMENTO A BUSCAR SI LO ENCUENTRA
var busqueda = categorias[1].find(function (numero) {
    return numero == 20;
});

//ESTE METODO REGRESA EL INDICE DE LO QUE SE BUSCA
var busqueda_indice = categorias[1].findIndex(function (numero) {
    return numero == 20;
});

var busqueda2 = categorias[1].some(function (numero) {
    return numero > 3;
})

console.log(busqueda);
console.log(busqueda_indice);
console.log(busqueda2);
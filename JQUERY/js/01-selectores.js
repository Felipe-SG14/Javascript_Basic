
//LO PRIMERO QUE SE HACE ES VERIFICAR SI EL DOCUMENTO ESTA LISTO
//SIMBOLO DE DOLAR SIEMPRE SE REFIERE A UN OBJETO DE JQUERY

// SINTAXIS $(SELECTOR).METODO

$(document).ready(function(){

    //SELECTOR DE ID
    //MODIFICANDO PROPIEDADES DE CSS
    //SE PUEDEN ENCADENAR METODOS
    var rojo = $("#rojo").css("background","red")
                        .css("color","white");
    

    var amarillo = $("#amarillo").css("background","yellow")
                        .css("color","green");

    var verde = $("#verde").css("background","green")
                        .css("color","yellow");

    //SELECTORES DE CLASES
    var zebra = $(".zebra");

    //ZEBRA GUARDA VARIOS ELEMENTOS DE LA MISMA CLASE
    console.log(zebra);

    //PARA IMPRIMIR O SELECCIONAR CADA ELEMENTO ES DE LA SIGUIENTE MANERA

    console.log(zebra[0]); //COMO OBJETO
    console.log(zebra.eq(0)); //COMO OBJETO DE JQUERY

    //CAMBIANDO EL ESTILO DE LOS ELEMENTOS DE LA CLASE ZEBRA
    zebra.css("padding","20px")

    //METODO DE CLICK DE UNA CLASE
    $('.sin_borde').click(function(){
        $(this).addClass("zebra");
    });

    //SELECTORES POR ETIQUETA
    var parrafos = $("p").css('cursor','pointer');

    parrafos.click(function(){

        //SE OPTIMIZA SI SE GUARDA EL SELECTOR EN UNA VARIBALE
        var selector = $(this);
        
        if (selector.hasClass('grande')) {
            selector.removeClass('grande');     
        }else{
            selector.addClass('grande');
        }

    });


    //SELECTORES POR ATRIBUTO
    //PERMITEN SELECCIONAR ETIQUETAS DE HTML POR ATRIBUTOS PUESTOS
    
    //SELECCIONAR TODOS LOS ELEMENTOS QUE TENGAN DICHO ATRIBUTO
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Youtube"]').css('background', '#FAB');

    //OTROS
    //SE PUEDE SELECIONAR MAS DE UNA ETIQUETA A LA VEZ
    $('p, a').addClass('margen_superior');

    //PARA BUSCAR 
    //FIND BUSCA TODOS LOS ELEMENTOS CON ESA CLASE
    //FIND PUEDE VERSE COMO UN DIRECTORIO
    //PARA PODER SALIR DE ESE DIRECTORIO SE UTILIZA EL METODO PARENT
    var busqueda = $("#caja").find('.resaltado');

    console.log("")
    console.log(busqueda)

    //EJEMPLO DE PARENT
    var busqueda2 = $('#elemento2').parent().parent().find('.resaltado');
    console.log(busqueda2);
});

//EVENTOS EN JQUERY

$(document).ready(function(){
    //alert("Evento.js cargado")

    var caja = $("#caja");
    //INVESTIGAR MAS ACERCA DE LOS DIFERENTES EVENTOS EN JQUERY
    
    //EL EVENTO SE EJECUTA CUANDO EL MOUSE ENTRA EN LA CAJA
    //caja.mouseover(function(){
    function cambiaRojo(){
        $(this).css('background','red');
    }

    //EL EVENTO SE EJECUTA CUANDO EL MOUSE SALE DE LA CAJA
    function cambiaVerde(){
        $(this).css('background','yellow');
    }

    //HOVER EL EVENTO SE EJECUTA CUANDO EL MOUSE ESTA EN LA CAJA
    caja.hover(cambiaRojo, cambiaVerde);

    //EVENTO CLICK
    caja.click(function(){
        $(this).css('background','blue')
                .css('color','white');
    });

    //EVENTO DOBLECLICK
    caja.dblclick(function(){
        $(this).css('background','pink')
                .css('color','yellow');
    });

    //EVENTO FOCUS Y BLUR
    var nombre = $('#nombre');
    var datos = $('#datos');

    //CUANDO DAMOS CLICK EN LA CAJA DEL FORMULARIO
    nombre.focus(function() {
       nombre.css("border","2px solid yellow")
       .css("background",'green');
    });

    //CUANDO NOS SALIMOS DE LA CAJA DEL FORMULARIO
    nombre.blur(function() {
        nombre.css("border","2px solid pink")
        //PARA OBTENER DATOS
        datos.text($(this).val()).show();
     });

     //MOUSEUP Y MOUSEDOWN
     //CUANDO APRETAMOS CLICK Y CUANDO SOLTAMOS EL CLICK
     datos.mousedown(function(){
         datos.css("border","4px dashed red");
     });

     datos.mouseup(function(){
        datos.css("border","4px solid black");
    });

    //MOUSE MOVE CAPTURA LAS CORDENADAS DEL RATON
    $(document).mousemove(function(){

        //PARA OCULTAR EL MOUSE
        
        var x =event.clientX;
        var y =event.clientY;
        
        //SE IMPRIMEN LOS VALORES DE LA POSICION DEL MOUSE
        console.log("En X="+event.clientX);
        console.log("En Y="+event.clientY);

        //SE MODIFICA EL CSS PARA QUE EL ELEMENTO TE SIGA
        var sigueme = $('#sigueme');
        sigueme.css('left',event.clientX)
               .css('top',event.clientY)
        // .css('top',String(y))
        // .css('left',String(x))
        // .css('width','250px')
        // .css('height','250px')
        // .css('background','yellow')
    });
})
let datos = {
    depositos: 0,
    netwin: 0,
    retiros: 0
};


// Guardar datos
function guardar(){

    localStorage.setItem(
        "controlDatos",
        JSON.stringify(datos)
    );

}


// Cargar datos guardados
function cargar(){

    let guardado = localStorage.getItem("controlDatos");

    if(guardado){

        datos = JSON.parse(guardado);

    }

}


// Actualizar saldo
function actualizar(){

    let saldo = datos.depositos + datos.netwin - datos.retiros;

    if(document.getElementById("depositos")){
        document.getElementById("depositos").innerHTML =
        "$" + datos.depositos;
    }

    if(document.getElementById("netwin")){
        document.getElementById("netwin").innerHTML =
        "$" + datos.netwin;
    }

    if(document.getElementById("retiros")){
        document.getElementById("retiros").innerHTML =
        "$" + datos.retiros;
    }

    if(document.getElementById("saldo")){
        document.getElementById("saldo").innerHTML =
        "$" + saldo;
    }

}


// Iniciar sistema
cargar();
actualizar();

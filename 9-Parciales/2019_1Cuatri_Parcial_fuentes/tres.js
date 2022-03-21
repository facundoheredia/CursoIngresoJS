/* Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id. */

function mostrar()
{
    //Declaro las VARIABLES
    var precioIngresado;
    var porcentaje;
    var descuento;
    var precioConDescuento;
    var precioFinal;

    //Pido los datos de las VARIABLES por PROMPT
    precioIngresado = prompt("Por favor ingrese el precio a pagar","Ingrese el precio");
    porcentaje = prompt("Por favor ingrese el descuento que tiene", "Ingrese el descuento");

    //Parceo los datos ingresados con FLOAT para obtener los decimales para el precio
    precioIngresado = parseFloat(precioIngresado);
    porcentaje = parseFloat(porcentaje);

    //Calculo el descuento del precio
    descuento = precioIngresado * porcentaje / 100;

    //Calculo el precio con descuento
    precioConDescuento = precioIngresado - descuento;

    //Añado texto al resultado final
    precioFinal = "El precio final a pagar es de $" + precioConDescuento;

    //Muestro el mensaje " " por ID
    document.getElementById("elPrecioFinal").value = precioFinal;
}

//https://onlinegdb.com/yOKmyV79R

/*
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/

function mostrar()
{
    //Declaro las variables
    var precio;
    var porcentaje;
    var descuento;
    var precioFinal;

    //Pido los valores
    precio = prompt("Ingrese el precio","Precio");
    porcentaje = prompt("Ingrese el porcentaje","porcentaje");

    //Calculo el descuento
    descuento = precio * porcentaje / 100;
    precioFinal = precio - descuento;

    //Muestro por ID el resultado
    document.getElementById("elPrecioFinal").value = precioFinal;

}

// 2 min 42 seg
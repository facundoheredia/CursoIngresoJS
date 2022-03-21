/*
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.

*/

function mostrar()
{
    //Declaro las variables
    var precio;
    var precioParseado;
    var descuento;
    var descuentoParseado;
    var precioFinal;

    //Pido al Usuario los valores
    precio = prompt("Ingrese el precio","Precio");
    descuento = prompt("Ingrese el porcentaje de descuento","0 a 100");

    //Parseo los valores
    precioParseado = parseInt(precio);
    descuentoParseado = parseInt(descuento);

    //Calclulo el descuento
    precioFinal = precioParseado - precioParseado * descuentoParseado /100;

    //Muestro por cuadro de texto en l html
    document.getElementById("elPrecioFinal").value = precioFinal
}

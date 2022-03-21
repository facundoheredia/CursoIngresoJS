/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //Declaro las VARIABLES
	var primerprecio;
    var segundoprecio;
    var tercerprecio;
    var precioFinal;

    //Guardo la informacion de las cajas de texto segun su ID " " y lo guardo en las VARIABLES
    primerprecio = document.getElementById("txtIdPrecioUno").value;
    segundoprecio = document.getElementById("txtIdPrecioDos").value;
    tercerprecio = document.getElementById("txtIdPrecioTres").value;

    //Parseo con PASEFLOAT para que me tome los numeros decimales
    primerprecio = parseFloat(primerprecio);
    segundoprecio = parseFloat(segundoprecio);
    tercerprecio = parseFloat(tercerprecio);

    //Hago el calculo de la suma para pasar el precio final
    precioFinal = primerprecio + segundoprecio + tercerprecio;

    //Redondeo a 2 decimales con TOFIXED
    precioFinal = precioFinal.toFixed(2);

    //Muestro por ALERT el mensaje " " con el precio final
    alert("La suma es: $" + precioFinal);
}
function Promedio () 
{
    //Declaro las VARIABLES
    var primerprecio;
    var segundoprecio;
    var tercerprecio;
    var promedio;

    //Guardo la informacion de las cajas de texto segun su ID " " y lo guardo en las VARIABLES
    primerprecio = document.getElementById("txtIdPrecioUno").value;
    segundoprecio = document.getElementById("txtIdPrecioDos").value;
    tercerprecio = document.getElementById("txtIdPrecioTres").value;

    //Parseo con PASEFLOAT para que me tome los numeros decimales
    primerprecio = parseFloat(primerprecio);
    segundoprecio = parseFloat(segundoprecio);
    tercerprecio = parseFloat(tercerprecio);

    //Hago el calculo del promedio para pasar el precio final
    promedio = (primerprecio + segundoprecio + tercerprecio) / 3;

    //Redondeo a 2 decimales con TOFIXED
    promedio = promedio.toFixed(2);

    //Muestro por ALERT el mensaje " " con el precio final
    alert("El precio promedio es: $" + promedio);
}
function PrecioFinal () 
{
    //Declaro las VARIABLES y CONSTANTES
	var primerprecio;
    var segundoprecio;
    var tercerprecio;
    var precioFinal;
    const IVA = 1.21;

    //Guardo la informacion de las cajas de texto segun su ID " " y lo guardo en las VARIABLES
    primerprecio = document.getElementById("txtIdPrecioUno").value;
    segundoprecio = document.getElementById("txtIdPrecioDos").value;
    tercerprecio = document.getElementById("txtIdPrecioTres").value;

    //Parseo con PASEFLOAT para que me tome los numeros decimales
    primerprecio = parseFloat(primerprecio);
    segundoprecio = parseFloat(segundoprecio);
    tercerprecio = parseFloat(tercerprecio);

    //Hago el calculo de la suma para pasar el precio final con IVA
    precioFinal = (primerprecio + segundoprecio + tercerprecio) * IVA;

    //Redondeo a 2 decimales con TOFIXED
    precioFinal = precioFinal.toFixed(2);

    //Muestro por ALERT el mensaje " " con el precio final
    alert("El precio final mas IVA es: $" + precioFinal);
}

//https://onlinegdb.com/k5RtaCBuY
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerprecio;
    var segundoprecio;
    var tercerprecio;
    var suma;

    primerprecio = parseFloat(document.getElementById("txtIdPrecioUno").value);
    segundoprecio = parseFloat(document.getElementById("txtIdPrecioDos").value);
    tercerprecio = parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma = primerprecio + segundoprecio + tercerprecio;

    alert("La suma es: $" + suma.toFixed(2));
}
function Promedio () 
{
    var primerprecio;
    var segundoprecio;
    var tercerprecio;
    var promedio;

    primerprecio = parseFloat(document.getElementById("txtIdPrecioUno").value);
    segundoprecio = parseFloat(document.getElementById("txtIdPrecioDos").value);
    tercerprecio = parseFloat(document.getElementById("txtIdPrecioTres").value);
    promedio = (primerprecio + segundoprecio + tercerprecio) / 3;

    alert("El precio promedio es: $" + promedio.toFixed(2));
}
function PrecioFinal () 
{
	var primerprecio;
    var segundoprecio;
    var tercerprecio;
    var precioFinal;

    primerprecio = parseFloat(document.getElementById("txtIdPrecioUno").value);
    segundoprecio = parseFloat(document.getElementById("txtIdPrecioDos").value);
    tercerprecio = parseFloat(document.getElementById("txtIdPrecioTres").value);
    precioFinal = (primerprecio + segundoprecio + tercerprecio) * 1.21;

    alert("El precio final mas IVA es: $" + precioFinal.toFixed(2));
}
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let primerprecio=parseFloat(document.getElementById("txtIdPrecioUno").value);
    let segundoprecio=parseFloat(document.getElementById("txtIdPrecioDos").value);
    let tercerprecio=parseFloat(document.getElementById("txtIdPrecioTres").value);
    let suma=primerprecio+segundoprecio+tercerprecio;

    alert("La suma es: $"+suma);
}
function Promedio () 
{
    let primerprecio=parseFloat(document.getElementById("txtIdPrecioUno").value);
    let segundoprecio=parseFloat(document.getElementById("txtIdPrecioDos").value);
    let tercerprecio=parseFloat(document.getElementById("txtIdPrecioTres").value);
    let promedio=(primerprecio+segundoprecio+tercerprecio)/3;

    alert("El precio promedio es: $"+promedio.toFixed(2));
}
function PrecioFinal () 
{
	let primerprecio=parseFloat(document.getElementById("txtIdPrecioUno").value);
    let segundoprecio=parseFloat(document.getElementById("txtIdPrecioDos").value);
    let tercerprecio=parseFloat(document.getElementById("txtIdPrecioTres").value);
    let precioFinal=(primerprecio+segundoprecio+tercerprecio)*1.21;

    alert("El precio final mas IVA es: $"+precioFinal.toFixed(2));
}
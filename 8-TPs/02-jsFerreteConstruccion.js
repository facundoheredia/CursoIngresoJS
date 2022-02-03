/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var alambre;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    alambre = ((largo + ancho) * 2) * 3;

    alert("La cantidad de metros a comprar de alambre es de: " + alambre);
}
function Circulo () 
{
	var radio;
    var alambre;
    const PI = 3.14;

    radio = parseFloat(document.getElementById("txtIdRadio").value);
    alambre = (2 * PI * radio) * 3;
    alambre = alambre.toFixed(2);

    alert("La cantidad de metros a comprar de alambre es de: " + alambre);
}
function Materiales () 
{
	var largo;
    var ancho;
    var area;
    var bolsacemento;
    var bolsacal;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    area = largo * ancho;
    bolsacemento = area * 2;
    bolsacal = area * 3;

    alert("Se deben comprar " + bolsacemento + " bolsas de cemento y " + bolsacal + " boslas de cal");
}
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo=parseFloat(document.getElementById("txtIdLargo").value);
    let ancho=parseFloat(document.getElementById("txtIdAncho").value);
    let alambre=((largo+ancho)*2)*3;

    alert("El largo a comprar de alambre es de: "+alambre);
}
function Circulo () 
{
	let radio=parseFloat(document.getElementById("txtIdRadio").value);
    let alambre=(3.14*(radio*radio))*3;

    alert("El largo a comprar de alambre es de: "+alambre);
}
function Materiales () 
{
	let largo=parseFloat(document.getElementById("txtIdLargo").value);
    let ancho=parseFloat(document.getElementById("txtIdAncho").value);
    let area=largo*ancho;
    let bolsacemento=area*2;
    let bolsacal=area*3;

    alert("Se deben comprar "+bolsacemento+" bolsas de cemento y "+bolsacal+" boslas de cal");
}
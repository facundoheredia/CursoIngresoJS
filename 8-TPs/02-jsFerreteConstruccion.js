/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //Declaro las VARIABLES y CONSTANTES
    var largo;
    var ancho;
    var perimetro;
    var metrosDeAlambre;
    const VUELTAS_DE_ALAMBRE = 3;

    //Guardo la informacion de las cajas de texto segun su ID " " y lo guardo en las VARIABLES
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    //Parseo con PASEFLOAT para que me tome los numeros decimales
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    //Calculo el perimetro del rectangulo
    perimetro = (largo + ancho) * 2;

    //Calculo el total de alambre
    metrosDeAlambre = perimetro * VUELTAS_DE_ALAMBRE;

    //Redondeo a 2 decimales con TOFIXED
    metrosDeAlambre = metrosDeAlambre.toFixed(2);

    //Muestro por ALERT el mensaje " " con la cantidad de metros a comprar
    alert("La cantidad a comprar de alambre es de: " + metrosDeAlambre + " metros");
}
function Circulo () 
{
    //Declaro las VARIABLES y CONSTANTES
	var radio;
    var perimetro;
    var metrosDeAlambre;
    const PI = Math.PI;
    const VUELTAS_DE_ALAMBRE = 3;  

    //Guardo la informacion de las cajas de texto segun su ID " " y lo guardo en las VARIABLES
    radio = document.getElementById("txtIdRadio").value;

    //Parseo con PASEFLOAT para que me tome los numeros decimales
    radio = parseFloat(radio);

    //Calculo el perimetro del circulo
    perimetro = (2 * PI * radio);

    //Calculo el total de alambre
    metrosDeAlambre = perimetro * VUELTAS_DE_ALAMBRE;

    //Redondeo a 2 decimales con TOFIXED
    metrosDeAlambre = metrosDeAlambre.toFixed(2);

    //Muestro por ALERT el mensaje " " con la cantidad de metros a comprar
    alert("La cantidad a comprar de alambre es de: " + metrosDeAlambre + " metros");
}
function Materiales () 
{
    //Declaro las VARIABLES y CONSTANTES
	var largo;
    var ancho;
    var area;
    var bolsacemento;
    var bolsacal;
    const CANTIDAD_BOLSA_CEMENTO = 2;
    const CANTIDAD_BOLSA_CAL = 3;

    //Guardo la informacion de las cajas de texto segun su ID " " y lo guardo en las VARIABLES
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    //Parseo con PASEFLOAT para que me tome los numeros decimales
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    //Calculo el area
    area = largo * ancho;

    //Calculo cuantas volsas necesito de cal y cemento
    bolsacemento = area * CANTIDAD_BOLSA_CEMENTO;
    bolsacal = area * CANTIDAD_BOLSA_CAL;

    //Muestro por ALERT el mensaje " " con la cantidad de bolsas a comprar
    alert("Se deben comprar " + bolsacemento + " bolsas de cemento y " + bolsacal + " bolsas de cal");
}

//https://onlinegdb.com/VOol7JAXC
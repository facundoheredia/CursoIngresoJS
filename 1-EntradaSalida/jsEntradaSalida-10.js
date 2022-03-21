/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*function mostrarAumento()
{
	//Declaro las VARIABLES
	var importe;
	var importeConDescuento;

	//Obtengo la informacion introducida por el usuario en el cuadro de texto segun su ID y la guardo en la VARIABLE
	importe = document.getElementById("txtIdImporte").value;

	//Parseo la informacion usando PARSEFLOAT (ya que me permite ver despues de la coma si el sueldo es un numero decimal) y lo guardo en la VARIABLE
	importe = parseFloat(importe);

	//Calculo el descuento del importe y los guardo en la VARIABLE
	importeConDescuento = importe * 0.75;
	
	//Guardo la informacion obtenida en el calculo anteior y lo muestro por el cuadro de texto en la pagina segun su ID
	document.getElementById("txtIdResultado").value = importeConDescuento;
}

//https://onlinegdb.com/K0VaKIk7a


/* 10 BIS
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego pedir por prompt el descuento ingresado por el usuario
mostrar el importe ingresado, el porcentaje ingresado y el importe con el descuento efectuado
en el cuadro de texto "RESULTADO"*/

function mostrarAumento()
{
	//Declaro las VARIABLES
	var importe;
	var importeConDescuento;
	var descuento;
	var porcentaje;
	var importeFinal;

	//Obtengo la informacion introducida por el usuario en el cuadro de texto segun su ID y la guardo en la VARIABLE
	importe = document.getElementById("txtIdImporte").value;

	//Parseo la informacion usando PARSEFLOAT (ya que me permite ver despues de la coma si el sueldo es un numero decimal) y lo guardo en la VARIABLE
	importe = parseFloat(importe);

	//Pido por PROMPT el porcentaje que quiere introducir el usuario
	porcentaje = prompt("Ingrese el porcentaje de aumento","introduzca un porcentaje del 0 al 100");

	//Calculo el descuento del importe y los guardo en la VARIABLE
	descuento = importe * porcentaje / 100;

	//Calculo el importe final restandole el descuento obtenido
	importeConDescuento = importe - descuento;

	//Resto al importe el descuento obtenido de la operacion anterior y lo guardo en la VARIABLE
	importeFinal = "Su importe a pagar era de: $" + importe + " con un porcentaje de descuento de: " + porcentaje + "%, danto: $" + descuento + " de descuento y su importe final a pagar es de: $" + importeConDescuento;
	
	//Guardo la informacion obtenida en el calculo anteior y lo muestro por el cuadro de texto en la pagina segun su ID
	document.getElementById("txtIdResultado").value = importeFinal;
}

//https://onlinegdb.com/-nC9jYfju
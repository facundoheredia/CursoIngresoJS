/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaro las VARIABLES
	var primerNumero;
	var segundoNumero;
	var resultado;

	//Guardo la informacion ingresada por el usuario en las cajas de texto segun sus ID
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	//Parseo (paso a number) la informacion guardada en las VARIABLES
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	//Sumo las VARIABLES y guardo el resultado en la otra VARIABLE
	resultado = primerNumero + segundoNumero;

	//Muestro por ALERT el mensaje y la informacion guardada en la VARIABLE
	alert("El resultado es: " + resultado);
}

//https://onlinegdb.com/xscdLORuG
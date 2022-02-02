/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let primerNumero=parseInt(document.getElementById("txtIdNumeroUno").value);
	let segundoNumero=parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado=primerNumero+segundoNumero;
	alert("El resultado de la suma es: "+resultado);	
}

function restar()
{
	let primerNumero=parseInt(document.getElementById("txtIdNumeroUno").value);
	let segundoNumero=parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado=primerNumero-segundoNumero;
	alert("El resultado de la resta es: "+resultado);
}

function multiplicar()
{ 
	let primerNumero=parseInt(document.getElementById("txtIdNumeroUno").value);
	let segundoNumero=parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado=primerNumero*segundoNumero;
	alert("El resultado de la multiplicacion es: "+resultado);
}

function dividir()
{
	let primerNumero=parseInt(document.getElementById("txtIdNumeroUno").value);
	let segundoNumero=parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado=primerNumero/segundoNumero;
	alert("El resultado de la division es: "+resultado);
}


/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);
	segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = primerNumero + segundoNumero;

	alert("El resultado es: "+resultado);
}


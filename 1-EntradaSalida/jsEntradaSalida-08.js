/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resultado;

	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	dividendo = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	resultado = dividendo % divisor;

	alert("El resto es: "+resultado);
}

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//Declaro las VARIABLES
	var dividendo;
	var divisor;
	var resultado;

	//Obtengo la informacion introducida por el usuario en los cuadro de texto segun su ID y la guardo en la VARIABLE
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	//Parseo la informacion obtenida y la paso a numero entero
	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	//Hago el calculo del RESTO y lo guardo en la VARIABLE
	resultado = dividendo % divisor;

	//Muestro por ALERT el mensaje " " y la informacion guardada en la VARIABLE
	alert("El resto es: " + resultado);
}

//https://onlinegdb.com/ngmg978dx
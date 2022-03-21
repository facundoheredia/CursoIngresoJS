/*Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/

function mostrar()
{
	//Declaro la VARIABLE
	var numeroAleatorio;
	var numeroEntero;

	//Guardo en la VARIABLE el numero aleatorio entre 0 - 0.99
	numeroAleatorio = Math.random();

	//Multiplico el numero por 10 para tener un entero con decimales y luego le sumo 1 para que este dentro del rango de 1 - 10
	numeroEntero = (numeroAleatorio * 100) + 1;

	if (numeroEntero < 11)
	{	
		//Muestro por alert el numero seleccionado al azar
		alert(numeroEntero);
	}
}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/qklQ50FQC
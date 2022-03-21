/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	//Declaro las variables
	var numero;
	var acumuladorsuma;
	var i;
	var promedio;

	//Inicio las variables necesarias
	acumuladorsuma = 0;
	i = 0;

	//While para bucle de 5 iteraciones
	while (i < 5)
	{
		//Pido los numeros en cada iteracion
		numero = prompt("Inserte un numero");
		numero = parseInt(numero);

		//Sumo al acumulador los numeros a medida que pasan las iteraciones
		acumuladorsuma = acumuladorsuma + numero;
		
		//Sumo una vuelta en cada iteracion hasta que llegue a 5
		i = i + 1; // i++
	}

	//Saco el promedio desde el acumulador
	promedio = acumuladorsuma / i; // promedio = acumuladorsuma / 5;
	
	//Muestro por caja de texto los resultados obtenidos
	document.getElementById("txtIdSuma").value = acumuladorsuma;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN
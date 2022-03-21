/*
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/

function mostrar()
{
	//Declaro las variables
	var repeticiones;
	var repeticionesParseadas;
	var i;

	//Pido el valor al usuario
	repeticiones = prompt("Por favor ingrese el numero de repeticiones que quiere para el mensaje");
	repeticionesParseadas = parseInt(repeticiones);

	//Bucle FOR
	for (i = repeticiones ; i > 0 ; i--)
	{
		document.write("Hola UTN FRA <br>");
	}

}//FIN DE LA FUNCIÓN
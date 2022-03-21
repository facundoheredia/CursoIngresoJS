/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/

function mostrar()
{
	var claveIngresada;

	claveIngresada = prompt("ingrese la clave.");

	while (claveIngresada != "utn750")
	{
		alert("La clave es incorrecta");

		claveIngresada = prompt("Intente nuevamente");
	}

	alert ("La clave es correcta, ya puede ingresar");
	
}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/QBrVIWDigS
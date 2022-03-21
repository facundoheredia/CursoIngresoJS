/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	//Declaro las VARIABLES de datos pedidos al usuario
	var destinoIngresado;

	//Obtengo los valores del usuario
	destinoIngresado = document.getElementById("txtIdDestino").value;

	//Operacion SWITCH
	switch (destinoIngresado)
	{
		case "Bariloche":			
		case "Ushuaia":
			alert("Hace frio");
			break;

		default:
			alert("Hace calor");
			break;
	}
}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/peZfkyYv8
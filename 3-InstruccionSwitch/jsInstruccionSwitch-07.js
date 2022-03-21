/*
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
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
			alert("Esta al Oeste");
			break;
		
		case "Cataratas":
			alert("Esta al Norte");
			break;
		
		case "Mar del plata":
			alert("Esta al Este");
			break;

		case "Ushuaia":
			alert("Esta al Sur");
			break;
	}
}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/Q2lehayUTB
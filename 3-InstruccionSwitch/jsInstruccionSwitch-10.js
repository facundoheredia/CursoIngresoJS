/*
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar
- En Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
- En Verano: Se viaja a Mar del plata y Cataratas solamente
- En Otoño: Se viaja a todos los destinos.
- En Primavera: solo no se viaja a Bariloche
*/

function mostrar() {
	//Declaro las VARIABLES de datos pedidos al usuario
	var estacionIngresada;
	var destinoIngresado;

	//Obtengo los valores del usuario
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	//Operacion SWITCH
	switch (estacionIngresada) 
	{
		case "Invierno":
			switch (destinoIngresado) 
			{
				case "Bariloche":
					alert("Se viaja");
					break;

				default:
					alert("No se viaja");
					break;
			}
			break;

		case "Verano":
			switch (destinoIngresado) 
			{
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
					break;

				default:
					alert("No se viaja");
					break;
			}
			break;

		case "Primavera":
			switch (destinoIngresado) 
			{
				case "Bariloche":
					alert("No se viaja");
					break;

				default:
					alert("Se viaja");
					break;
			}
			break;

		default:
			alert("Se viaja");
			break;
	}
}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/sXlFFI_Yp
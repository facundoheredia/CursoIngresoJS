/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/

function mostrar()
{
	//Declaro las VARIABLES
	var hora;

	//Obtengo los valores del usuario
	hora = document.getElementById("txtIdHora").value;

	//Uso SWTCH para ver los casos
	switch (hora)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			alert("Es de mañana");
			break;

		default:
			alert("No es de mañana");
			break;
	}
}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/JRp9ot3mg
/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".
*/

function mostrar()
{
	//Declaro las VARIABLES de datos pedidos al usuario
	var hora;
	var horaParseada;

	//Obtengo los valores del usuario
	hora = document.getElementById("txtIdHora").value;

	//Parseo el valor obtenido
	horaParseada = parseInt(hora);

	//Operacion SWITCH
	switch (horaParseada)
	{
		case 7:							//Para horas de 7 a 11 hs
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;

		case 12:						//Para horas de 12 a 17 hs
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
			alert("Es de tarde");
			break;
	
		case 20:						//Para horas de 20 a 6 hs
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			alert("Es de noche");
			break;
	
		default:						//Para horas fuera de 0 a 24 hs
			alert("La hora no existe");
			break;
	}
}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/4b2qKBY2c
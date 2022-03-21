/*
Una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
- En Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
- En Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
- En Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	//Declaro las VARIABLES de datos pedidos al usuario
	var estacionIngresada;
	var destinoIngresado;
	var precioEstadia;
	var precioEstadiaFinal;
	var porcentaje;
	var aumentoDescuento;

	//Valores iniciales
	precioEstadia = 15000;
	porcentaje = 0;
	aumentoDescuento = 0;

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
					porcentaje = 20;
					aumentoDescuento = 0;
					break;
				
				case "Mar del plata":
					porcentaje = 20;
					aumentoDescuento = 1;
					break;
				
				default:
					porcentaje = 10;
					aumentoDescuento = 1;
					break;
			}
			break;

		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 20;
					aumentoDescuento = 1;
					break;
				
				case "Mar del plata":
					porcentaje = 20;
					aumentoDescuento = 0;
					break;

				default:
					porcentaje = 10;
					aumentoDescuento = 0;
					break;
			}
			break;

		default:
			switch (destinoIngresado)
			{
				case "Cordoba":
					porcentaje = 0;
					aumentoDescuento = 0;
					break;
				
				default:
					porcentaje = 10;
					aumentoDescuento = 0;
					break;
			}
			break;
	}

	//Calculo si tiene aumento o descuento
	switch (aumentoDescuento)
	{
		case 0:
			precioEstadiaFinal = precioEstadia + precioEstadia * porcentaje / 100;
			break;

		case 1:
			precioEstadiaFinal = precioEstadia - precioEstadia * porcentaje / 100;
			break;
	}
	
	//------------------ NO ESCRIBIR NADA DEBAJO DE ESTO ------------------
	alert("El precio final para ir a Bariloche en Invierno es de: $" + precioEstadiaFinal);
}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/Q_7ywnV_C









































/*
function mostrar()
{
	//Declaro las VARIABLES de datos pedidos al usuario
	var estacionIngresada;
	var destinoIngresado;
	var precioEstadia;
	var precioEstadiaFinal;
	var porcentaje;

	//Valores iniciales
	precioEstadia = 15000;
	porcentaje = 0;

	//Obtengo los valores del usuario
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	//Operacion SWITCH
	switch(estacionIngresada)
	{
		case "Invierno":
			if (destinoIngresado == "Bariloche")
			{
				porcentaje = 20;
			}
			else
			{
				if (destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba")
				{
					porcentaje = 10;
				}
				else
				{
					porcentaje = 20;
				} 
			} 
		break;

		case "Verano":
			if (destinoIngresado == "Bariloche")
			{
				porcentaje = 20;
			}
			else
			{
				if (destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba")
				{
					porcentaje = 10;
				}
				else
				{
					porcentaje = 20;
				} 
			} 
		break;

		case "Otoño":
		case "Primavera":
			if (destinoIngresado == "Cordoba")
			{
				porcentaje = 0;
			}
			else
			{
				porcentaje = 10;
			} 
		break;
	}

	//Calculo si tiene aumento o descuento
	if (porcentaje != 0)
	{
		precioEstadiaFinal = precioEstadia + precioEstadia * porcentaje / 100;
	}
	else
	{
		precioEstadiaFinal = precioEstadia - precioEstadia * porcentaje / 100;
	}

	alert("El precio final para ir a Bariloche en Invierno es de: $" + precioEstadiaFinal);
}//FIN DE LA FUNCIÓN
*/









/*
function mostrar()
{
	//Declaro las VARIABLES de datos pedidos al usuario
	var estacionIngresada;
	var destinoIngresado;
	var precioEstadiaBase;
	var precioFinalEstadia;

	//Declaro las VARIABLES usadas para operaciones
	//Invierno
	var barilocheAumentoInvierno;
	var cataratasDescuentoInvierno;
	var cordobaDescuentoInvierno;
	var marDelPlataDescuentoInvierno;
	
	//Verano
	var cataratasAumentoVerano;
	var cordobaAumentoVerano;
	var marDelPlataAumentoVerano;
	var barilocheDescuentoVerano;

	//Otoño y Primavera
	var barilocheAumentoOtonioPrimavera;
	var cataratasAumentoOtonioPrimavera;
	var marDelPlataAumentoOtonioPrimavera;

	//Porcentajes
	barilocheAumentoInvierno = 20;
	cataratasDescuentoInvierno = 10;
	cordobaDescuentoInvierno = 10;
	marDelPlataDescuentoInvierno = 20;
	cataratasAumentoVerano = 10;
	cordobaAumentoVerano = 10;
	marDelPlataAumentoVerano = 20;
	barilocheDescuentoVerano = 20;
	barilocheAumentoOtonioPrimavera = 10;
	cataratasAumentoOtonioPrimavera = 10;
	marDelPlataAumentoOtonioPrimavera = 10;

	//Valor de la estadia
	precioEstadiaBase = 15000;

	//Obtengo los valores del usuario
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	//Operacion SWITCH
	switch(estacionIngresada)
	{
		case "Invierno":
			if (destinoIngresado == "Bariloche")
			{
				precioFinalEstadia = precioEstadiaBase + (precioEstadiaBase * barilocheAumentoInvierno / 100);
				alert("El precio final para ir a Bariloche en Invierno es de: $" + precioFinalEstadia);
			}
			else if (destinoIngresado == "Cataratas")
			{
				precioFinalEstadia = precioEstadiaBase - (precioEstadiaBase * cataratasDescuentoInvierno / 100);
				alert("El precio final para ir a Cataratas en Invierno es de: $" + precioFinalEstadia);
			}
			else if (destinoIngresado == "Cordoba")
			{
				precioFinalEstadia = precioEstadiaBase - (precioEstadiaBase * cordobaDescuentoInvierno / 100);
				alert("El precio final para ir a Cordoba en Invierno es de: $" + precioFinalEstadia);
			}
			else
			{
				precioFinalEstadia = precioEstadiaBase - (precioEstadiaBase * marDelPlataDescuentoInvierno / 100);
				alert("El precio final para ir a Mar del plata en Invierno es de: $" + precioFinalEstadia);
			}
		break;

		case "Verano":
			if (destinoIngresado == "Bariloche")
			{
				precioFinalEstadia = precioEstadiaBase - (precioEstadiaBase * barilocheDescuentoVerano / 100);
				alert("El precio final para ir a Bariloche en Verano es de: $" + precioFinalEstadia);
			}
			else if (destinoIngresado == "Cataratas")
			{
				precioFinalEstadia = precioEstadiaBase + (precioEstadiaBase * cataratasAumentoVerano / 100);
				alert("El precio final para ir a Cataratas en Verano es de: $" + precioFinalEstadia);
			}
			else if (destinoIngresado == "Cordoba")
			{
				precioFinalEstadia = precioEstadiaBase + (precioEstadiaBase * cordobaAumentoVerano / 100);
				alert("El precio final para ir a Cordoba en Verano es de: $" + precioFinalEstadia);
			}
			else
			{
				precioFinalEstadia = precioEstadiaBase + (precioEstadiaBase * marDelPlataAumentoVerano / 100);
				alert("El precio final para ir a Mar del plata en Verano es de: $" + precioFinalEstadia);
			}
		break;

		case "Otoño":
		case "Primavera":
			if (destinoIngresado == "Bariloche")
			{
				precioFinalEstadia = precioEstadiaBase + (precioEstadiaBase * barilocheAumentoOtonioPrimavera / 100);
				alert("El precio final para ir a Bariloche en Verano es de: $" + precioFinalEstadia);
			}
			else if (destinoIngresado == "Cataratas")
			{
				precioFinalEstadia = precioEstadiaBase + (precioEstadiaBase * cataratasAumentoOtonioPrimavera / 100);
				alert("El precio final para ir a Cataratas en Verano es de: $" + precioFinalEstadia);
			}
			else if (destinoIngresado == "Cordoba")
			{
				precioFinalEstadia = precioEstadiaBase;
				alert("El precio final para ir a Cordoba en Verano es de: $" + precioFinalEstadia);
			}
			else
			{
				precioFinalEstadia = precioEstadiaBase + (precioEstadiaBase * marDelPlataAumentoOtonioPrimavera / 100);
				alert("El precio final para ir a Mar del plata en Verano es de: $" + precioFinalEstadia);
			}
		break;
	}
}//FIN DE LA FUNCIÓN
*/
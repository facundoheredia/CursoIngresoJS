/*
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/

function mostrar()
{
	//Declaro las variables
	var numero;
	var numeroParseado;

	//Bucle for
	for ( ; ; )
	{
		numero = prompt("Por favor ingrese un numero");
		numeroParseado = parseInt(numero);
		if (numero == 9)
		{
			alert("Usted ingreso el " + numeroParseado);
			break;
		}
	}


}//FIN DE LA FUNCIÓN
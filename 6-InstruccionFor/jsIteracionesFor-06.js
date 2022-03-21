/*
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar()
{
	//Declaro las variables
	var numero;
	var numeroParseado;

	numero = prompt("Por favor ingrese un numero","0");
	numeroParseado = parseInt(numero);

	for (i = numeroParseado; i > 1; i--)
	{
		if(numeroParseado % 2 == 0)
		{
			numeroPar = numeroPar + 1;
		}
	}


	document.write();


}//FIN DE LA FUNCIÓN
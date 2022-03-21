/*
Al presionar el botón pedir números hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/

function mostrar()
{	
	// declarar variables
	var numeros;
	var numerosParseados;
	var continuar;
	var numeroMaximo;
	var numeroMinimo;
	var flag;

	//Inicio las variables
	continuar = "si";
	flag = 0;

	while (continuar == "si") //Mientras la respuesta sea Si, el bucle sigue
	{
		numeros = prompt("Ingrese un numero"); //Pido numeros
		numerosParseados = parseInt(numeros);

		while (isNaN(numerosParseados)) //Verifico si lo ingresado es un numero o no
		{
			numeros = prompt("Error!, por favor ingrese un numero","0"); 
			numerosParseados = parseInt(numeros);
		}

		if (flag == 0) //Para ingresar la primera vez y que el maximo y minimo tengan un valor //un if o un while de una sola vuelta?
		{
			numeroMaximo = numerosParseados; //El numero maximo se guarda con el primer numero que ingresa
			numeroMinimo = numerosParseados; //El numero minimo se guarda con el primer numero que ingresa
			flag = 1; //Ya no vuelvo a entrar al if pero lo voy a tener que preguntar el if siempre que siga ingresando numeros
		}
		else
		{
			if (numerosParseados > numeroMaximo) //La primera vez se pregunta el mismo y luego en las otras vuelvas si el numero es mayor se guarda
			{ 
				numeroMaximo = numerosParseados;
			}
			else
			{
				if (numerosParseados < numeroMinimo) //Si no, verifico si es menor y lo guarda
				{
					numeroMinimo = numerosParseados;
				}
			}
		}
		continuar = prompt("¿Quiere ingresar otro numero?","si o no"); //Pregunto si quiere volver a ingresar un numero
	}

	// Muestro los resultados en las cajas de textos
	document.getElementById("txtIdMaximo").value = "El numero maximo ingresado es " + numeroMaximo;
	document.getElementById("txtIdMinimo").value = "El numero minimo ingresado es " + numeroMinimo;

}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/lrY_BrbHKi
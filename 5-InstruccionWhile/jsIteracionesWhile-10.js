/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
A) Suma de los negativos.
B) Suma de los positivos.
C) Cantidad de positivos.
D) Cantidad de negativos.
E) Cantidad de ceros.
F) Cantidad de números pares.
G) Promedio de positivos.
H) Promedio de negativos.
I) Diferencia entre positivos y negativos, (positvos-negativos). 
*/
function mostrar()
{
	// Declaro las variables	//Variable necesaria?
	var numeros;				// SI, usada para el ingreso de los numeros
	var numerosParseados;		// SI, tengo el numero parseado
	var respuesta;				// SI, usada para cerrar el bucle principal de pedido de numeros
	var cantidadPositivos;		// SI, cuento el numero de positivos ingresados (PUNTO C)
	var sumaPositivos;			// SI, sumo los numeros positivos (PUNTO B)
	var cantidadNegativos;		// SI, cuento el numero de negativos ingresados (PUNTO D)
	var sumaNegativos;			// SI, sumo los numeros negativos (PUNTO A)
	var cantidadCeros;			// SI, cuento el numero de ceros ingreados (PUNTO E)
	var cantidadPares;			// SI, cuento la cantidad de pares ingresados (PUNTO F)
	var promedioPositivos;		// SI, saco el promedio de los positivos (PUNTO G)
	var promedioNegativos;		// SI, saco el promedio de los negativos (PUNTO H)
	var resta;					// SI, usada para la resta de positivos y negativos (PUNTO I)
	var mensaje;				// SI, usada para el mensaje final concatenado
	var flag					// SI, si uso un flag para la inicializacion de variables

	// Inicio la variables		//Necesario inicializarla aca? Si no uso flag si, y se inician solo 1 vez
	respuesta = "si";			// SI, para entrar al bucle por primera vez // o usar un do while (todavia no visto) y sacarla de aca
	flag = 0;					// SI, si uso el flag para uniciar las otras

	// Bucle while mientras quiera seguir insertando numeros
	while (respuesta == "si")
	{
		// Pido numero y lo parseo
		numeros = prompt ("Ingrese un numero","0");
		numerosParseados = parseInt(numeros);

		while (isNaN(numerosParseados)) //valido si lo ingresado es un numero
		{
			numeros = prompt ("Error!, por favor ingrese un numero","0");
			numerosParseados = parseInt(numeros);
		}

		if (flag == 0)					//Si esta dentro del while preguntara en cada vuelta del while si flag es 0 o 1, mientras que el while de mas de 1 vuelta
		{
			cantidadPositivos = 0;		// SI, para que al final si no ingreso un numero positivo no haya problema con el promedio
			cantidadNegativos = 0;		// SI, para que al final si no ingreso un numero negativo no haya problema con el promedio
			cantidadCeros = 0;			// SI, por que si no ingresa ningun cero sale "undefined" en el mensaje final
			cantidadPares = 0;			// SI, por que si no ingresa ningun par sale "undefined" en el mensaje final
			sumaPositivos = 0;			// SI, por lo mismo anterior si no existe ningun positivo ingresado
			sumaNegativos = 0;			// SI, por lo mismo anterior si no existe ningun negativo ingresado
			promedioNegativos = 0;		// SI, idem anterior
			promedioPositivos = 0		// SI, idem anterior
			flag = 1;
		}

		if (numerosParseados > 0) // Ingreso si es positivo
		{
			sumaPositivos = sumaPositivos + numerosParseados; 		// PUNTO B
			cantidadPositivos = cantidadPositivos + 1; 				// PUNTO C
		}
		else // Ingreso si no es positivo
		{
			if (numerosParseados == 0) // Ingreso si es 0
			{
				cantidadCeros = cantidadCeros + 1; 					// PUNTO E
			}
			else 
			{
				sumaNegativos = sumaNegativos + numerosParseados; 	// PUNTO A
				cantidadNegativos = cantidadNegativos + 1; 			// PUNTO D
			}
		}
		
		// Cantidad de numeros pares
		if (numerosParseados % 2 == 0)
		{
			cantidadPares = cantidadPares + 1;						// PUNTO F
		}
		// Vuelvo a preguntar si quiere otro numero
		respuesta = prompt("¿Desea ingresar otro numero?", "si o no");

		while (respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("Por favor responda por si o por no para agregar mas numeros", "si o no");
		}
	}
	
	// Promedio de positivos 
	if (cantidadPositivos != 0)  //Si no se ingreso ningun numero positivo no deberia de sacar promedio para que no de un resultado indefinido 0/0
	{
		promedioPositivos = sumaPositivos / cantidadPositivos; 		// PUNTO G
	}
	
	// Promedio de negativos
	if (cantidadNegativos != 0) //Si no se ingreso ningun numero negativo no deberia de sacar promedio para que no de un resultado indefinido 0/0
	{
		promedioNegativos = sumaNegativos / cantidadNegativos;		// PUNTO H
	}

	//Resta
	resta = sumaPositivos + sumaNegativos;							// PUNTO I
	
	//MENSAJES A MOSTRAR
	// Mensaje de suma positivos y negativos
	mensaje = "La suma de los positivos es de: " + sumaPositivos + ", y la suma de los negativos es de: " + sumaNegativos + ". <br>";
	// Mensaje de cantidades de positivos y negativos
	mensaje = mensaje + "La cantidad de positivos es de: " + cantidadPositivos + ", y la cantidad de negativos es de: " + cantidadNegativos + ". <br>";
	// Mensaje de Cantidad de 0
	mensaje = mensaje + "La cantidad de ceros ingresados es de: " + cantidadCeros + ". <br>";
	// Mensaje de cantidad de pares
	mensaje = mensaje + "La cantidad de pares es de: " + cantidadPares + ". <br>";
	// Mensaje de promedios
	mensaje = mensaje + "El promedio de los positivos es de: " + promedioPositivos + ", y el promedio de los negativos es de: " + promedioNegativos + ". <br>";
	//Mensaje de Resta
	mensaje = mensaje + "Y la resta de los positivos y negativos es de: " + resta + ". <br>";
	
	//Muestro el mensaje final
	document.write(mensaje);

}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/ksxDBxOvZ
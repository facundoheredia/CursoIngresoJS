/*
Al presionar el botón pedir números hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/

function mostrar()
{
	var numeros;
	var numerosParseados;
	var continuar;
	var numerosPositivos;
	var numerosNegativos;
	var flag;

	continuar = "si";
	numerosPositivos = 0; // Del 0 inclusive son positivos
	numerosNegativos = 1; // Tiene que ser 1 ya que todo numero multiplicado por 0 da 0
	flag = 0; //Si no ingresan negativos me muestra 0 de cantidad al final

	while (continuar == "si") //Mientras la respuesta sea Si, el buble sigue
	{
		numeros = prompt("Ingrese un numero"); //Pido numeros
		numerosParseados = parseInt(numeros);

		while(isNaN(numerosParseados)) //Bucle while para saber si el valor ingresado no es un numero para volver a preguntar e ingrese un numero
		{
			numeros = prompt("Error!, por favor ingrese un numero","0"); //Pido numeros
			numerosParseados = parseInt(numeros);
		}

		if (numerosParseados >= 0) //Si es mayor a 0 (positivo) los suma y los acumula en numeros positivos
		{
			numerosPositivos = numerosPositivos + numerosParseados;
		}
		else //Si no, son negativos, los multiplica y los acumula en numeros negativos
		{
			numerosNegativos = numerosNegativos * numerosParseados;
			flag = 1;
		}
		continuar = prompt("¿Quiere ingresar otro numero?","si o no"); //Pregunto si quiere volver a ingresar un numero
	}

	if (flag == 0) // Verifico si pase o no un numero negativo para que no salga 1 como respuesta si el usuario no inserto un numero negativo
	{
		numerosNegativos = 0;
	}

	// Muestro los resultados en las cajas de textos
	document.getElementById("txtIdSuma").value = numerosPositivos;
	document.getElementById("txtIdProducto").value = numerosNegativos;

}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/T4OOLl-O7














/*
function mostrar()
{
	var numeros;
	var numerosParseados;
	var continuar;
	var numerosPositivos;
	var numerosNegativos;
	var flag;

	continuar = "si";
	numerosPositivos = 0; // Del 0 inclusive son positivos
	numerosNegativos = 1; // Tiene que ser 1 ya que todo numero multiplicado por 0 da 0

	while (continuar == "si") //Mientras la respuesta sea Si, el buble sigue
	{
		numeros = prompt("Ingrese un numero"); //Pido numeros
		numerosParseados = parseInt(numeros);

		if (numerosParseados >= 0) //Si es mayor a 0 (positivo) los suma y los acumula en numeros positivos
		{
			numerosPositivos = numerosPositivos + numerosParseados;
		}
		else //Si no, son negativos, los multiplica y los acumula en numeros negativos
		{
			numerosNegativos = numerosNegativos * numerosParseados;
			flag = 1;
		}

		continuar = prompt("¿Quiere ingresar otro numero?","si o no"); //Pregunto si quiere volver a ingresar un numero
	}

	if (flag == 0) // Verifico si pase o no un numero negativo para que no salga 1 como respuesta si el usuario no inserto un numero negativo
	{
		numerosNegativos = 0;
	}

	// Muestro los resultados en las cajas de textos
	document.getElementById("txtIdSuma").value = numerosPositivos;
	document.getElementById("txtIdProducto").value = numerosNegativos;

}//FIN DE LA FUNCIÓN
*/

/*
function mostrar()
{
	//Declaro las variables
	var nombre;
	var edad;
	var edadParseada;
	var edadAlumnoPrimeroFiebre;
	var sexo;
	var sexoMayorCantidad;
	var acumuladorSexoF;
	var acumuladorSexoM;
	var acumuladorSexoNB;
	var altura;
	var alturaParseada;
	var alturaAcumulador;
	var alturaPromedio;
	var acumuladorFemeninoAlturaMayor;
	var alturaMasAlta;
	var alturaMasAltaAlumno;
	var alturaAprobadosAcumulador;
	var temperatura;
	var temperaturaParseada;
	var temperaturaAlumnoPrimeroFiebre;
	var nota;
	var notaParseada;
	var notaContadorAprobados;
	var i;
	var flag;
	var flagPrimerAlumnoFiebre;
	var flagHombrePrimerDesaprobado;
	var hombrePrimerDesaprobado;
	var	flagHombrePrimerMasAltoDoscientos;
	var	notaPrimerHombreMasAltoDoscientos;
	var	nombrePrimerHombreMasAltoDoscientos;
	var porcentajeFiebreMayorCincuenta;
	var porcentajeFiebreMayorCincuentaTotalAlumnos;
	var contadorFiebreMayorCincuenta;
	var contadorFiebreAlumnos;
	var mensaje;

	//Inicio contador para 5 iteraciones
	i = 0;
	flag = 0;

	//Bucle while
	while (i < 5)
	{	//PUNTO 6
		nombre = prompt("Ingrese el nombre del estudiante"); 
		//PUNTO 2
		edad = prompt("Ingrese la edad de " + nombre); 
		edadParseada = parseInt(edad);
		while (isNaN(edadParseada) || edadParseada < 17)
		{
			edad = prompt("Por favor ingrese un numero para la edad y mayor a 18 de " + nombre);
			edadParseada = parseInt(edad);
		}
		//PUNTO 4
		sexo = prompt("Por favor ingresar el sexo (f - m - nb) de " + nombre);
		while (sexo != "f" && sexo != "m" && sexo != "nb")
		{
			sexo = prompt("Por favor ingresar el sexo (f - m - nb) de " + nombre);
		}
		//PUNTO 1
		altura = prompt("Por favor ingresar la altura en cm de " + nombre);		
		alturaParseada = parseInt(altura);
		while (isNaN(alturaParseada) || alturaParseada < 0 || alturaParseada > 250)
		{
			altura = prompt("Por favor ingresar la altura en cm (entre 0 a 250) de " + nombre);
			alturaParseada = parseInt(altura);
		}
		//PUNTO 3
		temperatura = prompt("Por favor ingresar la temperatura de " + nombre);	
		temperaturaParseada = parseInt(temperatura);
		while (isNaN(temperaturaParseada) || temperaturaParseada < 35 || temperaturaParseada > 42)
		{
			temperatura = prompt("Por favor ingresar un numero entre 35° a 42° para la temperatura de " + nombre);
			temperaturaParseada = parseInt(temperatura);
		}
		//PUNTO 5
		nota = prompt("Por favor ingresar la nota de " + nombre);	
		notaParseada = parseInt(nota);
		while(isNaN(notaParseada) || notaParseada < 1 || notaParseada > 10)
		{
			nota = prompt("Por favor ingresar un numero (0 a 10) para la nota de " + nombre);	
			notaParseada = parseInt(nota);
		}

		if (flag == 0)
		{
			alturaAcumulador = 0;
			acumuladorSexoF = 0;
			acumuladorSexoM = 0;
			acumuladorSexoNB = 0;
			notaContadorAprobados = 0;
			acumuladorFemeninoAlturaMayor = 0;
			alturaMasAlta = alturaParseada;
			alturaMasAltaAlumno = nombre;
			flagPrimerAlumnoFiebre = 0;
			notaPrimerMujerAprobada = "No hay mujeres aprobadas";
			flagnotaPrimerMujerAprobada = 0;
			hombrePrimerDesaprobado = "No hay hombres desaprobados";
			flagHombrePrimerDesaprobado = 0;
			alturaAprobadosAcumulador = 0;
			porcentajeAprobados = "Ningun alumno aprobo";
			flagHombrePrimerMasAltoDoscientos = 0;
			notaPrimerHombreMasAltoDoscientos = "No hay ninguna nota";
			nombrePrimerHombreMasAltoDoscientos = "Ninguno supera los 200 cm de altura";
			porcentajeFiebreMayorCincuenta = "No hay ningun mayor a 50 años con fiebre";
			porcentajeFiebreMayorCincuentaTotalAlumnos = "No hay ningun mayor a 50 años con fiebre";
			contadorFiebreMayorCincuenta = 0;
			contadorFiebreAlumnos = 0;
			flag = 1;
		}

		//PUNTO B - cantidad de personas de cada sexo
		switch (sexo)						
		{
			case "f":
				acumuladorSexoF = acumuladorSexoF + 1;
				//PUNTO D - La cantidad de mujeres que su altura supere los 190 centímetros.
				if (alturaParseada > 190)	
				{
					acumuladorFemeninoAlturaMayor = acumuladorFemeninoAlturaMayor + 1;
				}
				//PUNTO H - El nombre de la primer mujer aprobada
				if (flagnotaPrimerMujerAprobada == 0 && nota >= 6)
				{
					flagnotaPrimerMujerAprobada = 1;
					notaPrimerMujerAprobada = nombre;
				}
			break;
				
			case "m":
				acumuladorSexoM = acumuladorSexoM + 1;
				//PUNTO J - El nombre del primer hombre, que mide menos de 160 cm y  esta  desaprobado.
				if (flagHombrePrimerDesaprobado == 0 && alturaParseada > 160 && notaParseada <= 6)
				{
					hombrePrimerDesaprobado = nombre;
					flagHombrePrimerDesaprobado = 1;
				}
				//PUNTO L - La nota y el nombre  del primer varón más alto de 200cm 
				if (flagHombrePrimerMasAltoDoscientos == 0 && alturaParseada > 200)
				{
					notaPrimerHombreMasAltoDoscientos = notaParseada;
					nombrePrimerHombreMasAltoDoscientos = nombre;
					flagHombrePrimerMasAltoDoscientos = 1;
				}
			break;
					
			case "nb":
				acumuladorSexoNB = acumuladorSexoNB + 1;
			break;
		}
					
		//PUNTO C - cantidad de notas mayores a 6
		if (notaParseada > 6)				
		{
			notaContadorAprobados = notaContadorAprobados + 1;
			alturaAprobadosAcumulador = alturaAprobadosAcumulador + alturaParseada; 	//PUNTO I - La altura promedio de los aprobados
		}
		
		//PUNTO F - El nombre de la persona más alta 
		if (alturaParseada > alturaMasAlta)
		{
			alturaMasAlta = alturaParseada;
			alturaMasAltaAlumno = nombre;
		}
		
		
		if (temperaturaParseada >= 37)
		{
			contadorFiebreAlumnos = contadorFiebreAlumnos + 1;

			if (flagPrimerAlumnoFiebre == 0) //PUNTO G - Edad del primero con fiebre (mas de 37)
			{
				temperaturaAlumnoPrimeroFiebre = temperaturaParseada;
				edadAlumnoPrimeroFiebre = edadParseada;
				flagPrimerAlumnoFiebre = 1;
			}
			if (edadParseada >= 50)			//PUNTO M - cantidad mayores a 50 con fiebre
			{
				contadorFiebreMayorCincuenta = contadorFiebreMayorCincuenta + 1;					
			}
		}

		//Acumulador alturas
		alturaAcumulador = alturaAcumulador + alturaParseada;

		//Cantidad iteracion
		i = i + 1;
		
		//Para que salga un cartel entre alumnos y no en el ultimo
		if (i < 5)
		{
			alert("Por favor ingrese el siguiente estudiante");
		}
	}
	
	//PUNTO A - Promedio alturas
	alturaPromedio = alturaAcumulador / i;
	
	//PUNTO I - La altura promedio de los aprobados
	if (notaContadorAprobados != 0)
	{
		alturaPromedioAprobados = alturaAprobadosAcumulador / notaContadorAprobados;
		porcentajeAprobados = notaContadorAprobados * 100 / i; 		//PUNTO K - Qué porcentaje de aprobados hay sobre el total de alumnos
	}
	//PUNTO M - Qué porcentaje hay de personas con fiebre mayores a 50 años, sobre los que tienen fiebre y también sobre el total de Alumnos.	
	if (contadorFiebreMayorCincuenta != 0)
	{
		porcentajeFiebreMayorCincuenta = contadorFiebreMayorCincuenta * 100 / contadorFiebreAlumnos;
		porcentajeFiebreMayorCincuentaTotalAlumnos = contadorFiebreMayorCincuenta * 100 / i;
	}

	//PUNTO E - Que sexo tiene mas alumnos
	if (acumuladorSexoF > acumuladorSexoM)
	{
		if (acumuladorSexoF > acumuladorSexoNB)
		{
			sexoMayorCantidad = sexo;
		}
		else
		{
			sexoMayorCantidad = sexo;
		}
	}
	else
	{
		if (acumuladorSexoM > acumuladorSexoNB)
		{
			sexoMayorCantidad = sexo;
		}
		else
		{
			sexoMayorCantidad = sexo;
		}
	}
	
	----------------------MENSAJES----------------------
	//PUNTO A
	mensaje = "A) El promedio de las alturas totales de los 5 alumnos es de: " + alturaPromedio + " cm. \n";
	//PUNTO B
	mensaje = mensaje + "B) Las personas de sexo femenino son: " + acumuladorSexoF + ". \n";
	mensaje = mensaje + "Los de sexo masculino son: " + acumuladorSexoM + ". \n";
	mensaje = mensaje + "Los de sexo no binario son: " + acumuladorSexoNB + ". \n"; 
	//PUNTO C
	mensaje = mensaje + "C) La cantidad de notas que superan el 6 es de: " + notaContadorAprobados + ".\n";
	//PUNTO D
	mensaje = mensaje + "D) La cantidad de mujeres que superan los 190 cm es de: " + acumuladorFemeninoAlturaMayor + ". \n";
	//PUNTO E
	mensaje = mensaje + "E) El sexo con mayor alumnos es el sexo " + sexoMayorCantidad + ". \n";
	//PUNTO F
	mensaje = mensaje + "F) El alumno mas alto se llama " + alturaMasAltaAlumno + " con: " + alturaMasAlta + " cm. \n";
	//PUNTO G
	mensaje = mensaje + "G) El primer alumno ingresado con fiebre tiene " + temperaturaAlumnoPrimeroFiebre + " °C y una edad de " + edadAlumnoPrimeroFiebre + " años. \n";
	//PUNTO H
	mensaje = mensaje + "H) La primer mujer aprobada es " + notaPrimerMujerAprobada + ". \n";
	//PUNTO I
	mensaje = mensaje + "I) La altura promedio de los aprobados es " + alturaPromedioAprobados + " cm. \n";
	//PUNTO J
	mensaje = mensaje + "J) El primer hombre desaprobado y menor a 160 cm es: " + hombrePrimerDesaprobado + ". \n";
	//PUNTO K
	mensaje = mensaje + "K) El porcentaje de alumnos aprobados es de: " + porcentajeAprobados + "%. \n";
	//PUNTO L
	mensaje = mensaje + "L) El primer hombre con altura de mas de 200 cm es: " + nombrePrimerHombreMasAltoDoscientos + " y tiene una nota de: " + notaPrimerHombreMasAltoDoscientos + ". \n";
	//PUNTO M
	mensaje = mensaje + "M) El porcentaje de mayores de 50 años con fiebre es de: " + porcentajeFiebreMayorCincuenta + "% sobre los que tienen fiebre. \n";
	mensaje = mensaje + "Y un porcentaje de: " + porcentajeFiebreMayorCincuentaTotalAlumnos + "% sobre el total de alumnos"; 
	//MENSAJE FINAL
	alert(mensaje);

}----------------------FIN DE LA FUNCION----------------------

//https://onlinegdb.com/OkCkYb9Wn
*/
/*
Nos dedicamos a la venta exclusiva de Discos rigidos. Debemos realizar la carga de 5 (cinco) productos, de cada uno debemos obtener los siguientes datos:
- Tipo (validar) : "HDD", "SSD", "SSDM2"
- precio (validar): $5000 a $18000
- Cantidad de unidades (no puede  ser 0 o negativo y no debe superar las 50 unidades)
- Marca (validar): "SEAGATE", "WESTERN DIGITAL", "KINGSTON"
- Capacidad (validar): 250GB, 500GB, 1TB, 2TB
- Se debe informar al usuario lo siguiente:
A) Del mas barato de los SSD, la cantidad de unidades y marca.
B) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades.
C) Cuantas unidades de HDD hay en total
*/
function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadProducto;
	var marcaProducto;
	var capacidadProducto;
	var contador;
	var flagPrecioMasBarato;
	var precioProductoMasBarato;
	var cantidadProductoMasBarato;
	var marcaProductoMasBarato;
	var precioProductoMasCaro;
	var capacidadProductoMasCaro;
	var cantidadProductoMasCaro;
	var flagPrecioMasCaro;
	var contadorHDD; 
	var mensaje;
	var contadorSSD;


	contador = 0;
	flagPrecioMasBarato = 0;
	flagPrecioMasCaro = 0;
	contadorHDD = 0;
	contadorSSD = 0;

	while (contador < 5)
	{
		tipoProducto = prompt("Ingrese el tipo de disco: HDD - SSD - SSDM2");
		tipoProducto = tipoProducto.toUpperCase();
		while (tipoProducto == "" && tipoProducto != "HDD" && tipoProducto != "SSD" && tipoProducto != "SSDM2")
		{
			tipoProducto = prompt("ERROR! Ingrese el tipo de disco: HDD - SSD - SSDM2");
			tipoProducto = tipoProducto.toUpperCase();
		}

		precioProducto = prompt("Ingrese el precio de " + tipoProducto);
		precioProducto = parseInt(precioProducto);
		while(precioProducto < 1 && precioProducto > 50)
		{
			precioProducto = prompt("ERROR! Ingrese el precio de " + tipoProducto + " entre $1 y $50");
			precioProducto = parseInt(precioProducto);
		}

		cantidadProducto = prompt("Ingrese el precio de " + tipoProducto + " entre $5000 y $18000");
		cantidadProducto = parseInt(cantidadProducto);
		while(cantidadProducto < 1 && cantidadProducto > 50)
		{
			cantidadProducto = prompt("ERROR! Ingrese el precio de " + tipoProducto + " entre $5000 y $18000");
			cantidadProducto = parseInt(cantidadProducto);
		}

		marcaProducto = prompt("Ingrese la marca del " + tipoProducto + ": SEAGATE - WESTERN DIGITAL - KINGSTON");
		marcaProducto = marcaProducto.toUpperCase();
		while(marcaProducto == "" && marcaProducto != "SEAGATE" && marcaProducto != "WESTERN DIGITAL" && marcaProducto != "KINGSTON")
		{
			marcaProducto = prompt("ERROR! Ingrese la marca del " + tipoProducto + ": SEAGATE - WESTERN DIGITAL - KINGSTON");
			marcaProducto = marcaProducto.toUpperCase();
		}

		capacidadProducto = prompt("Ingrese la capacidad del " + tipoProducto + ": 250GB - 500GB - 1TB - 2TB");
		capacidadProducto = capacidadProducto.toUpperCase();
		while(capacidadProducto != "250GB" && capacidadProducto != "500GB" && capacidadProducto != "1TB" && capacidadProducto != "2TB")
		{
			capacidadProducto = prompt("ERROR! Ingrese la capacidad del " + tipoProducto + ": 250GB - 500GB - 1TB - 2TB");
			capacidadProducto = capacidadProducto.toUpperCase();
		}

		
		switch (tipoProducto)
		{
			case "HDD":
				contadorHDD = contadorHDD + 1;
				if(flagPrecioMasCaro == 0 || precioProducto > precioProductoMasCaro)
				{
					precioProductoMasCaro = precioProducto;
					capacidadProductoMasCaro = capacidadProducto;
					cantidadProductoMasCaro = cantidadProducto;
				}
				break;

			case "SSD":
				contadorSSD = contadorSSD + 1;
				if(flagPrecioMasBarato == 0 || precioProducto < precioProductoMasBarato)
				{
					precioProductoMasBarato = precioProducto;
					cantidadProductoMasBarato = cantidadProducto;
					marcaProductoMasBarato = marcaProducto;
				}
				break;

			case "SSDM2":

				break;
		}



		contador = contador + 1;
	}

	//MENSAJE
	mensaje = "PUNTO A \n";
	if(contadorSSD == 0)
	{
		mensaje = mensaje + "- No se compraron discos SSD";
	}
	mensaje = mensaje + "- El SSD mas barato es de la marca " + marcaProductoMasBarato + " y hay " + cantidadProductoMasBarato + " de unidades. \n";
	mensaje = mensaje + "PUNTO B \n";
	if(contadorHDD == 0)
	{
		mensaje = mensaje + "- No se compraron discos HDD";
	}
	else
	{
		mensaje = mensaje + "- El HDD de mayor precio tiene una capacidad de almacenamiento de " + capacidadProductoMasCaro + " y hay " + cantidadProductoMasCaro + " de unidades \n";
	}
	mensaje = mensaje + "PUNTO C \n";
	if(contadorHDD == 0)
	{
		mensaje = mensaje + "- No se compraron discos HDD";
	}
	else
	{
		mensaje = mensaje + "- La cantidad de HDD que hay es de " + contadorHDD;
	}
}

































































/*
DIV H - Clase sabado 3 - Heredia Facundo 				26-02-2022
MEET - Gianni-Eze
Ejercicio While 07 V1
Realizar el algoritmo que permita 
	el ingreso por prompt de
	1-alturas en centimetros (validar entre 0 y 250),
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre
	de estudiantes de la UTN hasta que el usuario quiera, 
	
	1ERA PARTE
	A) Cuántas mujeres hay.
	B) Cuántos con fiebre y cuantos sin fiebre.
	C) El promedio de edad por sexo.
	2DA PARTE
	D) El primer alumno aprobado
	E) El nombre y edad la máxima temperatura 
	F) La altura y nota del no binario mas joven
	3RA PARTE
	G) El nombre de la mujer más alta de las que aprobó
	H) El porcentaje de  personas que desaprobaron sobre el total
	I) El nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.

*/
/*
function mostrar()
{
	//variables validaciones y bucle principal
	var altura;
	var edad;
	var temperatura;
	var sexo;
	var nota;
	var nombre;
	var respuesta;
	//1era parte
	var contadorMujeres;
	var contadorConFiebre;
	var contadorSinFiebre;
	var contadorHombres;
	var contadorNB;
	var acumuladorEdadMujeres;
	var acumuladorEdadHombres;
	var acumuladorEdadNB;
	//2DA parte
	var primerAprobado;
	var flagPrimerAprobado;
	var mayorTemperatura;
	var nombreMayorTemperatura;
	var edadMayorTemperatura;
	var flagMayorTemperatura;
	var flagEdadMasJovenNB;
	var edadMasJovenNB;
	var alturaEdadMasJovenNB;
	var notaEdadMasJovenNB;
	//3RA parte
	var alturaMujerMasAlta;
	var nombreMujerMasAlta;
	var flagMujerMasAlta;
	var contadorNotaDesaprobada;
	var contadorAlumnos;
	var porcentajeDesaprobados;
	var flagPrimerHombreDesaprobadoMenosDeUnoSesenta;
	var nombrePrimerHombreDesaprobadoMenosDeUnoSesenta;

	//mensaje
	var mensaje;

	//Inicializacion contador
	contadorConFiebre = 0;
	contadorSinFiebre = 0;
	contadorMujeres = 0;
	contadorHombres = 0;
	contadorNB = 0;
	acumuladorEdadMujeres = 0;
	acumuladorEdadHombres = 0;
	acumuladorEdadNB = 0;
	flagPrimerAprobado = 0;
	flagMayorTemperatura = 0;
	flagEdadMasJovenNB = 0; 
	flagMujerMasAlta = 0;
	contadorNotaDesaprobada = 0;
	contadorAlumnos = 0;
	flagPrimerHombreDesaprobadoMenosDeUnoSesenta = 0;

	do
	{	//NOMBRE
		nombre = prompt("Ingrese el nombre del alumno");
		nombre = nombre.toUpperCase();
		while(nombre == "")
		{
			nombre = prompt("ERROR! Ingrese un nombre para el alumno");
			nombre = nombre.toUpperCase();
		}
		//EDAD
		edad = prompt("Ingrese la edad de " + nombre);
		edad = parseInt(edad);
		while (isNaN(edad) || edad < 18)
		{
			edad = prompt("ERROR! Ingrese un numero para la edad y mayor a 18 de " + nombre);
			edad = parseInt(edad);
		}
		//SEXO
		sexo = prompt("Ingrese el sexo (F - M - NB) de " + nombre);
		sexo = sexo.toUpperCase();
		while(sexo != "F" && sexo != "M" && sexo != "NB")
		{
			sexo = prompt("ERROR! Ingrese un sexo valido (F - M - NB) para " + nombre);
			sexo = sexo.toUpperCase();
		}
		//ALTURA
		altura = prompt("Ingrese la altura en cm de " + nombre);
		altura = parseInt(altura);
		while(isNaN(altura) || altura < 0 || altura > 250)
		{
			altura = prompt("ERROR! Ingrese una altura en cm valida (0 a 250) para " + nombre);
			altura = parseInt(altura);
		}
		//TEMPERATURA
		temperatura = prompt("Ingrese la temperatura de " + nombre);
		temperatura = parseInt(temperatura);
		while(isNaN(temperatura) || temperatura < 30 || temperatura > 45)
		{
			temperatura = prompt("ERROR! Ingrese una temperatura valida (30°C a 45°C) para " + nombre);
			temperatura = parseInt(temperatura);	
		}
		//NOTA
		nota = prompt("Ingrese la nota (1 a 10) de " + nombre);
		nota = parseInt(nota);
		while(isNaN(nota) || nota < 1 || nota > 10)
		{
			nota = prompt("Ingrese la nota (1 a 10) de " + nombre);
			nota = parseInt(nota);
		} 
		//CONTADORES Y ACUMULADORES SEXO Y EDADES
		switch (sexo)
		{
			case "F":											
				contadorMujeres = contadorMujeres + 1;
				acumuladorEdadMujeres = acumuladorEdadMujeres + edad;
				if (flagMujerMasAlta == 0 || (nota > 6 && altura > alturaMujerMasAlta))
				{
					alturaMujerMasAlta = altura;
					nombreMujerMasAlta = nombre;
					flagMujerMasAlta = 1;
				}
				break;
			case "M":
				contadorHombres = contadorHombres + 1;
				acumuladorEdadHombres = acumuladorEdadHombres + edad;
				if (flagPrimerHombreDesaprobadoMenosDeUnoSesenta == 0 && altura < 160 && nota < 6)
				{
					nombrePrimerHombreDesaprobadoMenosDeUnoSesenta = nombre;
					flagPrimerHombreDesaprobadoMenosDeUnoSesenta = 1;
				}
				break;
			
			case "NB":
				contadorNB = contadorNB + 1;
				acumuladorEdadNB = acumuladorEdadNB + edad;
				if (flagEdadMasJovenNB == 0 || edad < edadMasJovenNB)
				{
					edadMasJovenNB = edad;
					alturaEdadMasJovenNB = altura;
					notaEdadMasJovenNB = nota;
					flagEdadMasJovenNB = 1;
				}
				break;
		}
		//TEMPERATURA MAXIMA
		if (flagMayorTemperatura == 0 || temperatura > mayorTemperatura)
		{
			mayorTemperatura = temperatura;
			nombreMayorTemperatura = nombre;
			edadMayorTemperatura = edad;
			flagMayorTemperatura = 1;
		}
		//TEMPERATURA CON Y SIN FIEBRE
		if(temperatura > 37)
		{
			contadorConFiebre = contadorConFiebre + 1;
		}
		else
		{
			contadorSinFiebre = contadorSinFiebre + 1;
		}
		//PRIMER APROBADO
		if (flagPrimerAprobado == 0 && nota > 6)
		{
			primerAprobado = nombre;
			flagPrimerAprobado = 1;
		}
		//DESAPROBADOS
		if (nota < 6)
		{
			contadorNotaDesaprobada = contadorNotaDesaprobada + 1;
		}

		contadorAlumnos = contadorAlumnos + 1;
		//REPETIR BUCLE?
		respuesta = confirm("¿Desea agregar mas alumnos?");
	} while (respuesta == true);

	//PROMEDIO EDADES
	promedioEdadMujeres = acumuladorEdadMujeres / contadorMujeres;
	promedioEdadHombres = acumuladorEdadHombres / contadorHombres;
	promedioEdadNB = acumuladorEdadNB / contadorNB;

	//PORCENTAJE DE DESAPROBADOS
	porcentajeDesaprobados = contadorNotaDesaprobada * 100 / contadorAlumnos;

	//-------------------------------MENSAJE-------------------------------//
	//PUNTO A
	mensaje = "PUNTO A \n";
	mensaje = mensaje + "- Hay " + contadorMujeres + " mujeres ingresadas. \n";
	//PUNTO B
	mensaje = mensaje + "PUNTO B \n";
	mensaje = mensaje + "- Hay " + contadorConFiebre + " alumnos con fiebre. \n";
	mensaje = mensaje + "- Hay " + contadorSinFiebre + " alumnos sin fiebre. \n";
	//PUNTO C
	mensaje = mensaje + "PUNTO C \n";
	//MENSAJE EDADES PROMEDIOS
	if(contadorMujeres != 0)
	{
		mensaje = mensaje + "- El promedio de edad de mujeres es de " + promedioEdadMujeres + "\n";
	}
	else
	{
		mensaje = mensaje + "- No hubo mujeres ingresadas \n";
	}
	if(contadorHombres != 0)
	{
		mensaje = mensaje + "- El promedio de edad de hombres es de " + promedioEdadHombres + "\n";
	}
	else
	{
		mensaje = mensaje + "- No hubo hombres ingresados \n";
	}
	if(contadorNB != 0)
	{
		mensaje = mensaje + "- El promedio de edad de no binarios es de " + promedioEdadNB + "\n";
	}
	else
	{
		mensaje = mensaje + "- No hubo no binarios ingresados \n";
	}
	//PUNTO D
	mensaje = mensaje + "PUNTO D \n";
	if (flagPrimerAprobado != 0)
	{
		mensaje = mensaje + "- El primer alumno aprobado es " + primerAprobado + "\n";
	}
	else
	{
		mensaje = mensaje + " - No hubo alumnos aprobados \n";
	}
	//PUNTO E
	mensaje = mensaje + "PUNTO E \n";
	mensaje = mensaje + "- La mayor temperatura es de " + mayorTemperatura + "°C y es de " + nombreMayorTemperatura + " que tiene " + edadMayorTemperatura + " años.\n";
	//PUNTO F
	mensaje = mensaje + "PUNTO F \n";
	if (flagEdadMasJovenNB != 0)
	{
		mensaje = mensaje + "El alumno no binario mas joven mide " + alturaEdadMasJovenNB + " cm y tiene una nota de " + notaEdadMasJovenNB + "\n";
	}
	else
	{
		mensaje = mensaje + "- No hubo no binarios ingresados \n";
	}
	//PUNTO G
	mensaje = mensaje + "PUNTO G \n";
	if (flagMujerMasAlta != 0)
	{
		mensaje = mensaje + "- La mujer mas alta que aprobo es " + nombreMujerMasAlta + " y mide " + alturaMujerMasAlta + " cm \n";
	}
	else
	{
		mensaje = mensaje + "- No hubo mujeres aprobadas\n";
	}
	//PUNTO H
	mensaje = mensaje + "PUNTO H \n";
	mensaje = mensaje + "- El porcentaje de desaprobados es de " + porcentajeDesaprobados + "% \n";
	//PUNTO I
	mensaje = mensaje + "PUNTO I \n";
	if (flagPrimerHombreDesaprobadoMenosDeUnoSesenta != 0)
	{
		mensaje = mensaje + "- El primer hombre desaprobado y que mide menos de 160 cm es " + nombrePrimerHombreDesaprobadoMenosDeUnoSesenta;
	}
	else
	{
		mensaje = mensaje + "No hubo hombres menores a 160 cm desaprobados";
	}

	//MENSAJE FINAL
	alert(mensaje);
}
*/


/*
function mostrar()
{
	

	iterar 5 veces
		//Entrada de datos y validaciones
		pido altura 
		valido altura (0-250)
		pido edad
		valido edad (mayor 17)
		pido temperatura
		valido temperatura (35-42)
		pido genero
		valido genero (f o m o nb)
		pido nota 
		valido nota (1-10)
		pido nombre

		Primara PARTE
		a) sumar las alturas 

		b) contar cuantas personas de cada genero (puedo usar un if-else o ¡¡¡switch!!!)
			d)Pregunto si es mujer y si tiene mas de 190 cm cuento
			h)Pregunto si es mujer y si es la primera y si esta aprobada y guardo el nombre
			j)Pregunto si es hombre evaluo si es el primero que mide menos de 160 t esta desaprobado
		c) pregunto si la nota es mayor que 6 y cuento cuantos aprobados hay
			h)tambien puedo preguntar si es mujer
			i) acumular la altura de los aprobados y contarlos
		Segunda PARTE
		f) busco la maxima altura y me guardo el nombre 
		g) para saber quien es la primera persona con fiebre levanto una bandera y guardo la edad
		   (la bandera tiene que estar abajo)

	termino de iterar

	calculo el promedio de las alturas del punto a 
	
	para el punto e: comparar los 3 contadores de genero para obtener el maximo de los 3
	
	calculo el promedio de las alturas de los aprobados del punto i
	
	mostrar cual es el mas grande
	mostrar la persona mas alta punto f
	mostrar edad de la primera persona con fiebre punto g
	mostrar el nombre de la primer mujer aprobada punto h
	mostrar contadores del punto b
	mostrar la cantidad de aprobados punto c
	mostrar la cantidad de mujeres de mas de 190 cm punto d
	mostrar el promedio de alturas de los aprobados punto i ****OJO****
	mostrar el nombre del primer hombre, que mide menos de 160 cm y  esta  desaprobado punto j

}//FIN DE LA FUNCIÓN
*/











































/*
Al presionar el botón pedir números hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

/*
function mostrar()
{
	//Declaro las variables
	var numero;
	var acumuladorSuma;
	var continuar;
	var promedio;
	var i;

	//Inicio la variable para la suma acumulada
	acumuladorSuma = 0;
	//continuar = "si"; //Si no la inicio antes del while no empieza
	i = 0;

	//Pido por prompt el primer numero al usuario y paseo el numero para hacer los calculos mas adelante
	numero = prompt("Ingrese un numero por favor","0");
	numero = parseInt(numero);

	//While para bucle que pida numeros mientras que el usuario quiera // tengo que ver si esta bien poner esta condicion
	while (continuar == "si")
	{
		//Vuelvo a pedir numero aca o abajo?
		numero = prompt("Ingrese un numero por favor","0");
		numero = parseInt(numero);	

		//Sumo los numeros que va ingresando el usuario en cada iteracion (esto dentro de bucle)
		acumuladorSuma = acumuladorSuma + numero;

		//Pregunto si quiere ingresar otro numero (se relaciona con la condicion del while)
		continuar = prompt("¿Desea ingresar otro numero?","si o no");
		i = i + 1;
	}

	//Calculo el promedio
	promedio = acumuladorSuma / i;

	//Muestro por caja de texto los resultados obtenidos
	document.getElementById("txtIdSuma").value = acumuladorSuma;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/1seaetULd
*/








































/*
function mostrar()
{
	//Declaro las variables
	var numero;
	var acumuladorSuma;
	var continuar;
	var promedio;
	var i;

	//Inicio la variable para la suma acumulada
	acumuladorSuma = 0;
	continuar = "si"; //Si no la inicio antes del while no empieza
	i = 0;

	//Pido por prompt el primer numero al usuario y paseo el numero para hacer los calculos mas adelante
	numero = prompt("Ingrese un numero por favor","0");
	numero = parseInt(numero);

	//While para bucle que pida numeros mientras que el usuario quiera // tengo que ver si esta bien poner esta condicion
	while (continuar == "si")
	{
		//Vuelvo a pedir numero aca o abajo?

		//Sumo los numeros que va ingresando el usuario en cada iteracion (esto dentro de bucle)
		acumuladorSuma = acumuladorSuma + numero;

		//Pregunto si quiere ingresar otro numero (se relaciona con la condicion del while)
		continuar = prompt("¿Desea ingresar otro numero?","si o no");
		i = i + 1;
	}

	//Calculo el promedio
	promedio = acumuladorSuma / i;

	//Muestro por caja de texto los resultados obtenidos
	document.getElementById("txtIdSuma").value = acumuladorSuma;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN
*/








































/*
function mostrar()
{
	//Declaro las variables
	var numero;
	var acumuladorSuma;
	var promedio;
	var respuesta;
	var cantidadNumeros;

	//Inicio las variables necesarias
	acumuladorSuma = 0;
	cantidadNumeros = 0;

	//Obtengo los valores ingresados por el usuario
	numero = prompt("Por favor ingrese un numero","0");
	numero = parseInt(numero);

	//While para bucle si quiere seguir agregando numeros
	while (respuesta == "si")
	{
		numero = prompt("Inserte un numero"); //los repito aca abajo?
		numero = parseInt(numero);

		//Sumo al acumulador los numeros a medida que pasan las iteraciones
		acumuladorSuma = acumuladorSuma + numero;
		
		//Sumo una vuelta en cada iteracion hasta que llegue responda que no
		cantidadNumeros = cantidadNumeros + 1; // cantidadNumero++

		//Puede poner cualquier otra letra que no sea S y sale igual
		respuesta = prompt("¿Quiere ingresar otro numero?","si o no");
	}

	//Saco el promedio
	promedio = acumuladorSuma / cantidadNumeros;

	//Muestro por caja de texto los resultados obtenidos
	document.getElementById("txtIdSuma").value = acumuladorSuma;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN
*/
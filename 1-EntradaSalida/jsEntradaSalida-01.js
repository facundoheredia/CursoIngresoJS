//EJERCICIO 1//
/*
function mostrar() 
{
	//VARIABLES
	var nombreProducto;
	var genero;
	var tipoVenta;
	var importe;
	var contador;
	var mensaje;
	var flagDiscos;
	var importeDiscoMasBarato;
	var nombreProductoDiscoMasBarato;
	var contadorMemoriasMenoresA850;
	var flagVentaMasCara;
	var nombreVentaMasCara;
	var tipoVentaMasCara;
	var importeVentaMasCara;
	
	//CONTADORES Y FLAGS
	contador = 0;
	flagDiscos = 0;
	contadorMemoriasMenoresA850 = 0;
	flagVentaMasCara = 0;

	while (contador < 5)
	{
		nombreProducto = prompt("Ingrese el nombre del producto");
		nombreProducto = nombreProducto.toUpperCase();
		while(nombreProducto == "")
		{
			nombreProducto = prompt("ERROR! Ingrese un nombre para el producto");
			nombreProducto = nombreProducto.toUpperCase();
		}

		genero = prompt("Ingrese el genero del " + nombreProducto + ": MEMORIAS - DISCOS - MOTHERBOARDS");
		genero = genero.toUpperCase();
		while (genero != "MEMORIAS" && genero != "DISCOS" && genero != "MOTHERBOARDS")
		{
			genero = prompt("ERROR! Ingrese el genero del " + nombreProducto + ": MEMORIAS - DISCOS - MOTHERBOARDS");
			genero = genero.toUpperCase();
		}

		tipoVenta = prompt("Ingrese el tipo de venta: ONLINE - LOCAL");
		tipoVenta = tipoVenta.toUpperCase();
		while (tipoVenta != "ONLINE" && tipoVenta != "LOCAL")
		{
			tipoVenta = prompt("ERROR! Ingrese el tipo de venta: ONLINE - LOCAL");
			tipoVenta = tipoVenta.toUpperCase();
		}

		importe = prompt("Ingrese el importe de " + nombreProducto);
		importe = parseInt(importe);
		while (isNaN(importe) || importe < 1 || importe > 30000)
		{
			importe = prompt("ERROR! Ingrese el importe de " + nombreProducto + ": entre $1 y $30000");
			importe = parseInt(importe);
		}

			
		switch(genero)
		{
			//A- El más barato de “Discos” con su importe.
			case "DISCOS":
				if(flagDiscos == 0 || importe < importeDiscoMasBarato)
				{
					importeDiscoMasBarato = importe;
					nombreProductoDiscoMasBarato = nombreProducto;
					flagDiscos = 1;
				}
				break;
			//C- La cantidad de ventas que sean de “Memorias” y cuesten menos de $850.
			case "MEMORIAS":
				if (importe < 850)
				{
					contadorMemoriasMenoresA850 = contadorMemoriasMenoresA850 + 1;
				}
				break;
		}

		//B- De la venta más cara, el nombre del producto y tipo.
		if(flagVentaMasCara == 0 || importe > importeVentaMasCara)
		{
			importeVentaMasCara = importe;
			nombreVentaMasCara = nombreProducto;
			tipoVentaMasCara = tipoVenta;
			flagVentaMasCara = 1;
		}

		contador = contador + 1;
	}


	//MENSAJE
	//PUNTO A
	mensaje = "PUNTO A \n";
	if (flagDiscos == 0)
	{
		mensaje = mensaje + "- No se ingreso ningun DISCO. \n";
	}
	else
	{
		mensaje = mensaje + "- El disco mas barato es " + nombreProductoDiscoMasBarato + " y sale $" + importeDiscoMasBarato + "\n";
	}
	//PUNTO B
	mensaje = mensaje + "PUNTO B \n";
	mensaje = mensaje + "- La venta mas cara fue por $" + importeVentaMasCara + " y es del producto " + nombreVentaMasCara + ", se realizo con el tipo de venta " + tipoVenta + "\n";
	//PUNTO C
	mensaje = mensaje + "PUNTO C \n";
	if (contadorMemoriasMenoresA850 == 0)
	{
		mensaje = mensaje + "- No se ingresaron MEMORIAS menores a $850"
	}
	else
	{
		mensaje = mensaje + "- La cantidad de MEMORIAS menores a $850 es de " + contadorMemoriasMenoresA850;
	}

	//MENSAJE FINAL
	alert(mensaje);
}
*/
//https://onlinegdb.com/YEUVATO27


//EJERCICIO 2//
/*
function mostrar() 
{
	//VARIABLES
	var division;
	var nombre;
	var legajo;
	var recursante;
	var nota;
	var respuesta;
	var mensaje;
	var contadorDivisionA;
	var contadorDivisionB;
	var contadorDivisionC;
	var divisionConMasAlumnnos;
	var flagNotaNorecursante;
	var notaMenorNoRecursante;
	var nombreNotaMenorNoRecursante;
	var flagNotaRecursante;
	var notaMayorRecursante;
	var nombreNotaMayorRecursante;

	contadorDivisionA = 0;
	contadorDivisionB = 0;
	contadorDivisionC = 0;
	flagNotaNorecursante = 0;
	flagNotaRecursante = 0;

	do
	{
		nombre = prompt("Ingrese el nombre del alumno");
		nombre = nombre.toUpperCase();
		while(nombre == "")
		{
			nombre = prompt("ERROR! Ingrese un nombre para el alumno");
			nombre = nombre.toUpperCase();
		}

		legajo = prompt("Ingrese el numero de legajo de " + nombre + " entre: 1 al 10000");
		legajo = parseInt(legajo);
		while(isNaN(legajo) || legajo < 1 || legajo > 10000)
		{
			legajo = prompt("ERROR! Ingrese el numero de legajo de " + nombre + " entre: 1 al 10000");
			legajo = parseInt(legajo);
		}

		division = prompt("Ingrese la division a la que pertenece el alumno " + nombre);
		division = division.toUpperCase();
		while (division != "A" && division != "B" && division != "C")
		{
			division = prompt("ERROR! Ingrese la division a la que pertenece el alumno " + nombre + ": A - B -C");
			division = division.toUpperCase();
		}

		nota = prompt("Ingrese la nota de " + nombre);
		nota = parseInt(nota);
		while (isNaN(nota) || nota < 1 || nota > 10)
		{
			nota = prompt("ERROR! Ingrese una nota valida de " + nombre + " entre 1 y 10");
			nota = parseInt(nota);
		}

		recursante = prompt("¿El alumno " + nombre + " es recursante? SI - NO");
		recursante = recursante.toUpperCase();
		while (recursante != "SI" && recursante != "NO")
		{
			recursante = prompt("ERROR! Responda SI o NO");
			recursante = recursante.toUpperCase();
		}

		//a)La división con más aspirantes.
		switch(division)
		{
			case "A":
				contadorDivisionA = contadorDivisionA + 1;
				break;
				
			case "B":
				contadorDivisionB = contadorDivisionB + 1;
				break;
			
			case "C":
				contadorDivisionC = contadorDivisionC + 1;
				break;
		}

	
		switch(recursante)
		{
			//c)el nombre del que No es recursante y tiene  la menor nota.
			case "NO":
				if(flagNotaNorecursante == 0 || nota < notaMenorNoRecursante)
				{
					notaMenorNoRecursante = nota;
					nombreNotaMenorNoRecursante = nombre;
					flagNotaNorecursante = 1;
				}
				break;
			//b)el nombre recursante con mayor nota
			case "SI":
				if(flagNotaRecursante == 0 || nota > notaMayorRecursante)
				{
					notaMayorRecursante = nota;
					nombreNotaMayorRecursante = nombre;
					flagNotaRecursante = 1;
				}
				break;
		}


		respuesta = confirm("¿Desea ingresar mas alumnos?");
	} while (respuesta == true);


	//MAYOR DIVISION
	if (contadorDivisionA > contadorDivisionB)
	{
		if (contadorDivisionA > contadorDivisionC)
		{
			divisionConMasAlumnnos = "DIVISION A";
		}
		else
		{
			divisionConMasAlumnnos = "DIVISION C";
		}
	}
	else
	{
		
		if (contadorDivisionB > contadorDivisionC)
		{
			divisionConMasAlumnnos = "DIVISION B";
		}
		else
		{
			divisionConMasAlumnnos = "DIVISION C";
		}
	}
	
	//MENSAJE
	//PUNTO A
	mensaje = "PUNTO A <br>";
	mensaje = mensaje + "- La division con mas aspirtantes es " + divisionConMasAlumnnos + "<br>";
	//PUNTO B
	mensaje = mensaje + "PUNTO B <br>";
	if (flagNotaRecursante == 0)
	{
		mensaje = mensaje + "- No se ingresaron RECURSANTES <br>";
	}
	else
	{
		mensaje = mensaje + "- La mayor nota de los RECURSANTES es " + notaMayorRecursante + " y pertenece a " + nombreNotaMayorRecursante + "<br>";
	}
	//PUNTO C
	mensaje = mensaje + "PUNTO C <br>";
	if(flagNotaNorecursante == 0)
	{
		mensaje = mensaje + "- No se ingresaron NO RECURSANTES";
	}
	else
	{
		mensaje = mensaje + "- La menor nota de los NO RECURSANTES es " + notaMenorNoRecursante + " y pertenece a " + nombreNotaMenorNoRecursante;
	}

	document.write(mensaje);
}
*/
//https://onlinegdb.com/MugX-Ske4

//EJERCICIO 3//

function mostrar() 
{
	//VARIABLES
	var nombre;
	var asiento;
	var importePasaje;
	var sexo;
	var edad;
	var contador;
	var ultimoAsientoIngresado;
	var nombreUltimoAsientoIngresado;
	var importeUltimoAsientoIngresado;
	var flagMaximoImporte;
	var importePasajeMaximo;
	var nombreImportePasajeMaximo;
	var importePasajeMinimo;
	var nombreImportePasajeMinimo;
	var flagImporteMinimo;
	var mensaje;
	var contadorMujeres;
	var acumuladorEdadMujeres;

	contador = 0;
	flagMaximoImporte = 0;
	flagImporteMinimo = 0;
	contadorMujeres = 0;
	acumuladorEdadMujeres = 0;

	while(contador < 5)
	{
		nombre = prompt("Ingrese el nombre del pasajero");
		nombre = nombre.toUpperCase();
		while (nombre == "")
		{
			nombre = prompt("ERROR! Ingrese un nombre para el pasajero");
			nombre = nombre.toUpperCase();
		}

		asiento = prompt("Ingrese el numero de asiento de " + nombre + " entre 1 a 100");
		asiento = parseInt(asiento);
		while (isNaN(asiento) || asiento < 1 || asiento > 100)
		{
			asiento = prompt("Ingrese el numero de asiento de " + nombre + " entre 1 a 100");
			asiento = parseInt(asiento);
		}

		importePasaje = prompt("Ingrese el importe del pasaje de " + nombre + " entre 0 a 300000");
		importePasaje = parseInt(importePasaje);
		while (isNaN(importePasaje) || importePasaje < 0 || importePasaje > 300000)
		{
			importePasaje = prompt("ERROR! Ingrese el importe del pasaje de " + nombre + " entre 0 a 300000");
			importePasaje = parseInt(importePasaje);
		}

		sexo = prompt("Ingrese el sexo (F - M - NB) del pasajero " + nombre);
		sexo = sexo.toUpperCase();
		while (sexo != "F" && sexo != "M" && sexo != "NB")
		{
			sexo = prompt("ERROR! Ingrese el sexo (F - M - NB) del pasajero " + nombre);
			sexo = sexo.toUpperCase();
		}

		edad = prompt("Ingrese la edad del pasajero " + nombre);
		edad = parseInt(edad);
		while (isNaN(edad) || edad < 1 || edad > 100)
		{
			edad = prompt("ERROR! Ingrese la edad (entre 1 y 100) del pasajero " + nombre);
			edad = parseInt(edad);
		}


		
		switch (sexo)
		{
			//c)el maximo importe ingresado por un pasaje de un pasajero sexo nb.
			case "NB":
				if (flagMaximoImporte == 0 || importePasaje > importePasajeMaximo)
				{
					importePasajeMaximo = importePasaje;
					nombreImportePasajeMaximo = nombre;
					flagMaximoImporte = 1;
				}
				break;
				//b)La edad promedio de las mujeres.	
				//d)el minimo importe ingresado por un pasaje de un pasajero sexo f.
				case "F":
					contadorMujeres = contadorMujeres + 1;
					acumuladorEdadMujeres = acumuladorEdadMujeres + edad;
					
				if (flagImporteMinimo == 0 || importePasaje < importePasajeMinimo)
				{
					importePasajeMinimo = importePasaje;
					nombreImportePasajeMinimo = nombre;
					flagImporteMinimo = 1;
				}
				break;
			}
			
			contador = contador + 1;

			//a)Informar el último asiento ingresado con el nombre  y su importe.
			if(contador == 5)
			{
				ultimoAsientoIngresado = asiento;
				nombreUltimoAsientoIngresado = nombre;
				importeUltimoAsientoIngresado = importePasaje;
			}
		}

	//PROMEDIO EDAD MUJERES
	edadPromedioMujeres = acumuladorEdadMujeres / contadorMujeres;

	//MENSAJE
	//PUNTO A
	mensaje = "PUNTO A <br>";
	mensaje = mensaje + "- El ultimo asiento ingresado es el N° " + ultimoAsientoIngresado + " a nombre de " + nombreUltimoAsientoIngresado + " con un importe de $" + importeUltimoAsientoIngresado + "<br>";
	//PUNTO B
	mensaje = mensaje + "PUNTO B <br>";
	if (contadorMujeres == 0)
	{
		mensaje = mensaje + "- No se ingresaron mujeres <br>";
	}
	else
	{
		mensaje = mensaje + "- El promedio de edad de las mujeres es de " + edadPromedioMujeres + "<br>";
	}
	//PUNTO C
	mensaje = mensaje + "PUNTO C <br>";
	if (flagMaximoImporte == 0)
	{
		mensaje = mensaje + "-No se ingresaron pasajeros del sexo NB <br>";
	}
	else
	{
		mensaje = mensaje + "- El importe Maximo de un pasajero de sexo NB es de $" + importePasajeMaximo + " y es de " + nombreImportePasajeMaximo + "<br>";
	}
	//PUNTO D
	mensaje = mensaje + "PUNTO D <br>";
	if (flagImporteMinimo == 0)
	{
		mensaje = mensaje + "- No se ingresaron pasajeros del sexo F";
	}
	else
	{
		mensaje = mensaje + "- El importe Minimo de un pasajero de sexo F es de $" + importePasajeMinimo + " y es de " + nombreImportePasajeMinimo;
	}
	

	//MENSAJE FINAL
	document.write(mensaje);
}

//https://onlinegdb.com/GEJ8A5ctS

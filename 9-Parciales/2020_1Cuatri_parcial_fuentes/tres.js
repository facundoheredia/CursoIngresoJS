/*
DIV H - Clase 12 - Heredia Facundo                    25-02-2022
Parcial 2020 - Ejercicio N°2
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo ("f" o "m"), estado civil ("soltero", "casado" o "viudo") y temperatura corporal.
A) El nombre de la persona con mas temperatura.
B) Cuantos mayores de edad estan viudos
C) La cantidad de hombres que hay solteros o viudos.
D) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
E) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta;
	var mensaje;
	var flagTemperatura;
	var contadorMayorEdadViudo;
	var contadorTerceraEdadMasTemperatura;
	var contadorSoltero;
	var contadorViudo;
	var promedioEdadSoltero;

	respuesta = true;
	flagTemperatura = 0;
	contadorMayorEdadViudo = 0;
	contadorTerceraEdadMasTemperatura = 0;
	contadorSoltero = 0;
	contadorViudo = 0;
	acumuladorEdadSoltero = 0;
	

	while(respuesta == true)
	{
		nombre = prompt("Ingrese el nombre del pasajero");
		nombre = nombre.toUpperCase();

		edad = prompt("Ingrese la edad del pasajero " + nombre);
		edad = parseInt(edad);
		while(isNaN(edad) || edad < 0)
		{
			edad = prompt("ERROR! Ingrese la edad del pasajero " + nombre);
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese el sexo del pasajero " + nombre);
		sexo = sexo.toUpperCase();
		while(sexo != "F" && sexo != "M")
		{
			sexo = prompt("Ingrese el sexo (F o M) del pasajero " + nombre);
			sexo = sexo.toUpperCase();
		}

		estadoCivil = prompt("Ingrese el estado civil del pasajero " + nombre);
		estadoCivil = estadoCivil.toUpperCase();
		while(estadoCivil != "SOLTERO" && estadoCivil != "CASADO" && estadoCivil != "VIUDO")
		{
			estadoCivil = prompt("ERROR! Ingrese el estado civil (SOLTERO - CASADO - VIUDO) del pasajero " + nombre);
			estadoCivil = estadoCivil.toUpperCase();
		}

		temperatura = prompt("Ingrese la temperatura de " + nombre);
		temperatura = parseInt(temperatura);
		while(isNaN(temperatura) || temperatura < 30 || temperatura > 45)
		{
			temperatura = prompt("ERROR! Ingrese la temperatura de " + nombre);
			temperatura = parseInt(temperatura);
		}

		//A) El nombre de la persona con mas temperatura.
		if (flagTemperatura == 0 || temperatura > temperaturaMayor)
		{
			temperaturaMayor = temperatura;
			nombreTemperaturaMayor = nombre;
			flagTemperatura = 1;
		}
		
		if (edad > 60 && temperatura > 38) //D) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		{
			contadorTerceraEdadMasTemperatura = contadorTerceraEdadMasTemperatura + 1;
		}

		switch (estadoCivil)
		{
			case "SOLTERO":
				contadorSoltero = contadorSoltero + 1;
				acumuladorEdadSoltero = acumuladorEdadSoltero + edad;
				break;
			case "VIUDO":
				contadorViudo = contadorViudo + 1;
				if (edad > 18)
				{
					contadorMayorEdadViudo = contadorMayorEdadViudo + 1;
				}
				break;

			default:
				break;
		}
		
		respuesta = confirm("¿Desea agregar mas pasajeros?");
	}

	//Promedio //E) El promedio de edad entre los hombres solteros.
	promedioEdadSoltero = acumuladorEdadSoltero / contadorSoltero;


	//C) La cantidad de hombres que hay solteros o viudos.
	cantidadhombresSolterosViudos = contadorSoltero + contadorViudo;

	//MENSAJE
	mensaje = "A) El pasajero con mayor temperatura es " + nombreTemperaturaMayor + " con " + temperaturaMayor + "°C. \n";
	mensaje = mensaje + "B) La cantidad de viudos de mayoria de edad son " + contadorMayorEdadViudo + "\n";
	mensaje = mensaje + "C) La cantidad de hombres solteros o viudos es de " + cantidadhombresSolterosViudos + "\n";
	mensaje = mensaje + "D) La cantidad de de personas de tercera edad y que tienen mas de 38°C de temperatura es de " + contadorTerceraEdadMasTemperatura + "\n";
	if(contadorSoltero != 0)
	{
		mensaje = mensaje + "E) No hay solteros ingresados"; 
	}
	else
	{
		mensaje = mensaje + "E) El promedio de edad de los solteros es de " + promedioEdadSoltero; 
	}


	alert (mensaje);
}


/*---------------------------------------------------------MATI TERMINE LOS 3 YA 22:23HS--------------------------------------------------*/
/*------------------------------------------------Y LOS PROBE... PARECERIAN FUNCIONAR CORECTAMENTE----------------------------------------*/
/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/

function mostrar()
{
	//Declaro la VARIABLE y las CONSTANTES
	var edad;
	var mayoriaDeEdad;
	var edadMinimaAdolescente;
	var edadMaximaAdolescente;

	mayoriaDeEdad = 18;
	edadMinimaAdolescente = 13;
	edadMaximaAdolescente = 17;
	
	//Obtengo la informacion ingresada por el usuario en el cuadro de texto segun su ID y la guardo en la VARIABLE
	edad = document.getElementById("txtIdEdad").value;

	//Parseo la edad introducida por el usuario por si introdujo un numero decimal
	edad = parseInt(edad);

	//Uso la instruccion IF para ver si la edad introducida es TRUE que es mayor o igual a 18
	if (edad >= mayoriaDeEdad)
	{
		//Muestra por ALERT el mensaje " " si la edad introducida es TRUE a la condicion
		alert("Eres mayor de edad");
	}
	
	//Uso la instruccion IF si el IF anterior es FALSE y para ver si la edad introducida es TRUE que es mayor o igual a 13 Y menor a 18
	if (edad >= edadMinimaAdolescente && edad <= edadMaximaAdolescente)
	{
		//Muestra por ALERT el mensaje " " si la edad introducida es TRUE a la condicion
		alert("Eres adolescente");
	}

	//Uso la instruccion ELSE si ambos anteriores son FALSE
	else
	{
		//Muestra por ALERT el mensaje " "
		alert("Eres un niño");
	}

}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/q-H8-8c2s
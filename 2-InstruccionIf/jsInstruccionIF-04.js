/*Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .*/

function mostrar()
{
	//Declaro la VARIABLE y CONSTANTES
	var edad;
	var edadMinimaAdolescente;
	var edadMaximaAdolescente;
	
	edadMinimaAdolescente = 13;
	edadMaximaAdolescente = 17;

	//Obtengo la informacion ingresada por el usuario en el cuadro de texto segun su ID y la guardo en la VARIABLE
	edad = document.getElementById("txtIdEdad").value;

	//Parseo la edad introducida por el usuario por si introdujo un numero decimal
	edad = parseInt(edad);

	//Uso la instruccion IF para ver si la edad introducida es TRUE que es mayor o igual a 13 Y menor o igual a 17
	if (edad >= edadMinimaAdolescente && edad <= edadMaximaAdolescente)
	{
		//Muestra por ALERT el mensaje " " si la edad introducida es TRUE a la condicion
		alert("Eres un adolescente");
	}

	//Si es FALSE el programa termina sin mostrar nada

}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/6ZUwfJhSq
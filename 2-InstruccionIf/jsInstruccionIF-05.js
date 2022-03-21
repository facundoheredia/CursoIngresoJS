/*Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/

function mostrar()
{
	//Declaro la VARIABLE y las CONSTANTES
	var edad;
	var edadMinimaAdolescente;
	var edadMaximaAdolescente;
	
	edadMinimaAdolescente = 13;
	edadMaximaAdolescente = 17;

	//Obtengo la informacion ingresada por el usuario en el cuadro de texto segun su ID y la guardo en la VARIABLE
	edad = document.getElementById("txtIdEdad").value;

	//Parseo la edad introducida por el usuario por si introdujo un numero decimal
	edad = parseInt(edad);

	//Uso la instruccion IF para ver si la edad introducida es TRUE que es menor o igual a 13 O mayor o igual a 17
	if (edad < edadMinimaAdolescente || edad > edadMaximaAdolescente)
	{
		//Muestra por ALERT el mensaje " " si la edad introducida es TRUE a la condicion
		alert("No eres un adolescente");
	}

	//Si es FALSE el programa termina sin mostrar nada
	
}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/YYD9pZQkBj
/*Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".*/

function mostrar()
{
	//Declaro la VARIABLE y CONSTANTE
	var edad;
	var edadAIgualar;
	
	edadAIgualar = 15;
	
	//Obtengo la informacion ingresada por el usuario en el cuadro de texto segun su ID y la guardo en la VARIABLE
	edad = document.getElementById("txtIdEdad").value;

	//Parseo la edad introducida por el usuario por si introdujo un numero decimal
	edad = parseInt(edad);

	//Uso la instruccion IF para ver si es TRUE que la edad introducida es igual a 15
	if (edad == edadAIgualar)
	{
		//Muestro por ALERT el mensaje " " si la edad introducida es TRUE a la condicion
		alert("Niña bonita");
	}

	//Si es FALSE que edad es igual a 15 el programa termina sin mostrar nada

}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/cW-yn87fA
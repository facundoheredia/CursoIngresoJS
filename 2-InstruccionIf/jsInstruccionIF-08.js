/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/

function mostrar()
{
	//Declaro las VARIABLES
	var edad;
	var estadoCivil;
	var mayoriaDeEdad;

	mayoriaDeEdad = 18;

	//Obtengo la informacion ingresada por el usuario en el cuadro de texto segun su ID y la guardo en la VARIABLE
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	//Parseo la edad introducida por el usuario por si introdujo un numero decimal
	edad = parseInt(edad);

	//Uso la instruccion IF para ver si la edad introducida es TRUE que es mayor a 18 Y si su estado civil es Soltero
	if (edad >= mayoriaDeEdad && estadoCivil == "Soltero")
	{
		//Muestra por ALERT el mensaje " " si la edad introducida es TRUE a la condicion
		alert("Es soltero y no es menor");
	}

	//Si es FALSE alguna de las condiciones anteriores el programa termina sin mostrar nada

}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/-PjI5FO0W
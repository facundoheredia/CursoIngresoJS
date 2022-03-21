/*Al ingresar una edad debemos informar solo si la persona es mayor de edad*/

function mostrar()
{
	//Declaro la VARIABLE
	var edad;
	var mayoriaDeEdad;
	
	mayoriaDeEdad = 18;
	
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
	
	//Si es FALSE que edad es mayor a 18 el programa termina sin mostrar nada

}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/OK92_lGnw
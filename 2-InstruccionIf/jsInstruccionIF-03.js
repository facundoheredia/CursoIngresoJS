/*Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.*/

function mostrar()
{
	//Declaro la VARIABLE y CONSTANTE
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

	//Si no es TRUE el IF anterior se ejecuta la instruccion ELSE
	else
	{
		//Muestro por ALERT el mensaje " " si es FALSE el IF anterior
		alert("Eres menor de edad");
	}

}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/toN477SJx
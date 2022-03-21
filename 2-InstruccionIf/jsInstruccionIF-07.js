/*
DIV H - Clase Sabado 12-02-2022 - Facundo Heredia
Ejercicio 07 BIS V1

A) Si es menor de 13 , mostrar el mensaje “feliz día”.

B) Si es adolescente el mensaje es “usted es adolescente”
   Si tiene 17 años además mostrar el mensaje “último año!!!”

C) Si es mayor de edad mostrar el mensaje “tenes edad de laburar”.
   Si tiene 33 años , además mostrar el mensaje “como cristo”
   Si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
   Si tiene 88, además mostrar el mensaje “lindo número''
D) Si la edad es par , además mostrar , “sos par!!”.

Además de los datos ya ingresados , solicitar el nombre.

E) Si se llama ‘Violeta’ y es adolescente , sumar el mensaje ‘como un color!!’

F) Si se llama ‘Ricardo’ y es un menor a 13 , sumar el mensaje ‘muy chiquito para ese nombre’

G) Si se llama ‘Alfredo’ y esta para jubilarse , sumar el mensaje ‘como el de QUEEN’.

H) Si no es menor de 13 y está casado , además mostrar el mensaje ‘casada quiere casa’.

I) Si sos soltero y mayor de edad y no tienes edad para jubilarse , sumar el mensaje ‘a salir ‘

J) Si sos divorciado y sos adolescente, además mostrar ‘toda una vida por delante’

*/

function mostrar()
{
	//Declaro las VARIABLES
	var edad;
	var estadoCivil;
	var mensaje;
	var resto;
	var nombre;

	//Obtengo la informacion ingresada por el usuario en el cuadro de texto segun su ID y la guardo en la VARIABLE
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;
	//Pido el nombre del usuario
	nombre = prompt("Ingrese su nombre");

	//Parseo la edad introducida
	edad = parseInt(edad);

	//Segun su edad mostrar los mensajes


	if (edad < 13) // Punto A
	{
		mensaje = "Feliz dia!";
		
		if (nombre == "Ricardo") // Punto F
		{
			mensaje = mensaje + " muy chiquito para ese nombre";
		}
	}
	else
	{
		if (edad < 18) // Punto B.1
		{
			mensaje = "usted es adolescente";

			if (nombre == "Violeta") // Punto E
			{
				mensaje = mensaje + ", te llamas como el color!";
			}
			if (edad == 17) // Punto B.2
			{
				mensaje = mensaje + ", y es el ultimo año!";
			}
			if (estadoCivil == "Divorciado") // Punto J
			{
				mensaje = mensaje + ", dale que tenes toda una vida por delante!";
			}
		}
		else
		{
			mensaje = "tenes que laburar"; // Punto C.1
			
			if (edad > 60)
			{
				mensaje = "a jubilarse"; //Punto C.3
	
				if (edad == 88) //Punto C.4
				{
					mensaje = mensaje + ", lindo numero";
				}
				if (nombre == "Alfredo") // Punto G
				{
					mensaje = mensaje + ", como el de QUEEN!";
				}
			}
			else
			{
				if (edad == 33)
				{
					mensaje = mensaje + ", tenes como Cristo!"; // Punto C.2
				}
				
				if (estadoCivil == "Soltero") // Punto I
				{
					mensaje = mensaje + " a salir!";
				}
			}
		}
		if (estadoCivil == "Casado") // Punto H
		{
			mensaje = mensaje + ", casada quiere casa";
		}
	}

	//Punto D
	resto = edad % 2;
	
	if (resto == 0)
	{
		mensaje = mensaje + ". Ademas sos par!";
	}

	//------------------ PUNTO FINAL
	//------------------ NO ESCRIBIR NADA DEBAJO DE ESTO ------------------
	alert(nombre + ", " + mensaje + ".");
}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/ZdpLBXL4e



/*
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

	//Uso la instruccion IF para ver si la edad introducida es TRUE que es menor a 18 Y si su estado civil es distinto a Soltero
	if (edad < mayoriaDeEdad && estadoCivil != "Soltero")
	{
		//Muestra por ALERT el mensaje " " si la edad introducida es TRUE a la condicion
		alert("Es muy pequeño para NO ser soltero");
	}

	//Si es FALSE que edad es menor a 18 Y es distinto de soltero el programa termina sin mostrar nada

}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/F952mdbE5
*/
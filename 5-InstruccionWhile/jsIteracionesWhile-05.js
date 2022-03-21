/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
*/
function mostrar()
{
	//Declaro las variables
	var sexo;

	//Tomo los valores ingresados por el usuario
	sexo = prompt("Por favor ingrese un sexo: f ó m");

	while (sexo != "f" && sexo != "m")
	{
		alert("Por favor ingrese un sexo correcto");

		sexo = prompt("Por favor intente nuevamente, ingrese f o m");
	}

	document.getElementById("txtIdSexo").value = "Su sexo ingresado es: " + sexo;

}//FIN DE LA FUNCIÓN
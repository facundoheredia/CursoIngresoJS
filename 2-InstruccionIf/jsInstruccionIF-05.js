function mostrar()
{
	var edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad <= 13 || edad >= 17)
	{
		alert("No eres un adolescente");
	}

}//FIN DE LA FUNCIÓN
function mostrar()
{
	var edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 13 && edad <= 17)
	{
		alert("Eres un adolescente");
	}

}//FIN DE LA FUNCIÓN
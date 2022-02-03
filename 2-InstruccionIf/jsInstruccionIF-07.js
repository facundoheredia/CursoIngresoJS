function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad < 18 && (estadoCivil == "Casado" || estadoCivil == "Divorciado"))
	{
		alert("Es muy pequeño para NO ser soltero")
	}

}//FIN DE LA FUNCIÓN
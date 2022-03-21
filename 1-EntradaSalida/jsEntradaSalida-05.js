/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//Declaro las VARIABLES
	var nombreInsertado; 
	var edadInsertada;

	//Guardo la informacion de las cajas de texto segun su ID " " y lo guardo en las VARIABLES
	nombreInsertado = document.getElementById("txtIdNombre").value;
	edadInsertada = document.getElementById("txtIdEdad").value;
	
	//Muestro por ALERT el mensaje " " y la informacion guardada en las VARIABLES
	alert("Usted se llama " + nombreInsertado + " y tiene " + edadInsertada + " años");

}

//https://www.onlinegdb.com/aFeAlg1IU
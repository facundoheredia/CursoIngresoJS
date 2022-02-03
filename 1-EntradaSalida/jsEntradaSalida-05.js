/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreInsertado; 
	var edadInsertada;

	nombreInsertado = document.getElementById("txtIdNombre").value;
	edadInsertada = document.getElementById("txtIdEdad").value;
	
	alert("Usted se llama "+nombreInsertado+" y tiene "+edadInsertada+" años");

	//alert(`Usted se llama ${nombreInserado} y tiene ${añosInsetados} años`)
}

//https://www.onlinegdb.com/aFeAlg1IU
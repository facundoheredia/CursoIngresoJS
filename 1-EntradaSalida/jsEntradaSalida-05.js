/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreInsertado=document.getElementById("txtIdNombre").value;
	let añosInsertados=document.getElementById("txtIdEdad").value;

	alert("Usted se llama "+nombreInsertado+" y tiene "+añosInsertados+" años");

	//alert(`Usted se llama ${nombreInserado} y tiene ${añosInsetados} años`)
}


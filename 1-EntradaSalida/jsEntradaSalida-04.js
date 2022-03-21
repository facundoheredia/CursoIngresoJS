/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'*/
function mostrar()
{
	//Declaro la VARIABLE
	var datoIngresado;

	//Pido por PROMPT informacion y la guardo en la VARIABLE
	datoIngresado = prompt("Ingrese su nombre","Su nombre");

	//Guardo la informacion de la VARIABLE y la caja de texto de ID " "
	document.getElementById("txtIdNombre").value = datoIngresado;

	//Muestro con un ALERT la informacion de la VARIABLE
	alert(datoIngresado);
}

//https://onlinegdb.com/FtaewRaMW
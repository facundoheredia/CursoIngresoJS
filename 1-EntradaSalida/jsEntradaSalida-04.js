/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'*/
function mostrar()
{
	var datoIngresado;

	datoIngresado = prompt("Ingrese su nombre","Su nombre");

	document.getElementById("txtIdNombre").value = datoIngresado;

	alert(datoIngresado);
}

//https://onlinegdb.com/FtaewRaMW
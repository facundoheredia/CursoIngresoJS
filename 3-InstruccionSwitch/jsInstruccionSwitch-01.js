/*
1) al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/

function mostrar()
{
	//Declaro las VARIABLES
	var mes;

	//Obtengo los valores del usuario
	mes = document.getElementById("txtIdMes").value;

	//Uso SWTCH para ver los casos
	switch (mes)
	{
		case "Enero":
			alert("Que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("A clases!!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("Felices Fiestas!!!");
			break;
	}
}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/NoS2ma14n
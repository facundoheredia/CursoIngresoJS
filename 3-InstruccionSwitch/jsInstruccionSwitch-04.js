/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
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
		case "Febrero":
			alert("Tiene 28 dias");
			break;

		case "Abril":
		case "Junio":				
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias");
			break;
			
		default:
			alert("Tiene 31 dias");
			break;
	}
}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/dsKsbyrnj
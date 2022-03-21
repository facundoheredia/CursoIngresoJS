/*
al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/

function mostrar()
{
	//Declaro las variables
	var i;

	for (i = 0 ; i < 10 ; i++)
	{
		document.write(i + "<br>");
		//Hacer algo con el break
		if(i == 7)
		{
			break;
		}
	}


}//FIN DE LA FUNCIÓN
/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
	//Declaro la VARIABLE
	var notaAleatoria;
	var notaFinal;

	//Guardo en la VARIABLE el numero aleatorio entre 0 - 0.99
	notaAleatoria = Math.random();

	//Multiplico el numero por 10 para tener un entero con decimales yluego le sumo 1 para que este dentro del rango de 1 - 10
	notaFinal = (notaAleatoria * 10) + 1;

	//Parseo la variable para que tome solo el numero entero
	notaFinal = parseInt(notaFinal);

	//Uso la instruccion IF para ver si la notaFinal es TRUE que es mayor o igual a 9
	if (notaFinal  > 4)
	{
		//Muestro el mensaje " " si cumple con el condicional
		alert("APROBASTE! Tu nota es un " + notaFinal);

		if (notaFinal > 8)
		//Muestro el mensaje " " si cumple con el condicional
		alert("EXCELENTE! Tu nota es un " + notaFinal);
	}
	
	//Si los dos IF son FALSE se ejecuta el ELSE para notaFinal menor a 4
	else
	{
		//Muestro el mensaje " " si no cumple ninguno de los condicionales anteriores
		alert("VAMOS! La proxima se puede, tu nota es un " + notaFinal);
	}	
}

//https://onlinegdb.com/ler2lLI0dw


/*function mostrar()
{
	//Declaro la VARIABLE
	var notaAleatoria;
	var notaFinal;

	//Guardo en la VARIABLE el numero aleatorio entre 0 - 0.99
	notaAleatoria = Math.random();

	//Multiplico el numero por 10 para tener un entero con decimales yluego le sumo 1 para que este dentro del rango de 1 - 10
	notaFinal = (notaAleatoria * 10) + 1;

	//Parseo la variable para que tome solo el numero entero
	notaFinal = parseInt(notaFinal);

	//Uso la instruccion IF para ver si la notaFinal es TRUE que es mayor o igual a 9
	if (notaFinal >= 9)
	{
		//Muestro el mensaje " " si cumple con el condicional
		alert("EXCELENTE! Tu nota es un " + notaFinal);
	}

	//Si el anterior IF es FALSE se ejecuta el ELSE IF y verifica si la VARIABLE es TRUE que es mayor a 4 y menor a 9
	if (notaFinal > 4 && notaFinal < 9)
	{
		//Muestro el mensaje " " si cumple con el condicional
		alert("APROBASTE! Tu nota es un " + notaFinal);
	}

	//Si los dos IF son FALSE se ejecuta el ELSE para notaFinal menor a 4
	else
	{
		//Muestro el mensaje " " si no cumple ninguno de los condicionales anteriores
		alert("VAMOS! La proxima se puede, tu nota es un " + notaFinal);
	}	
	
}//FIN DE LA FUNCIÓN*/


/*function mostrar()
{
	//Declaro la VARIABLE y doy valor a las CONSTANTES
	var numeroAleatorio;
	var numeroDecimal;
	var notaFinal;
	
	const NUMERO_MAXIMO = 10;
	const NUMERO_MINIMO = 1;

	//Guardo en la VARIABLE el numero aleatorio entre 0 - 0.99
	numeroAleatorio = Math.random();

	//Multiplico el numero aleatorio por los rangos maximo y minimo
	numeroDecimal = numeroAleatorio * (NUMERO_MAXIMO - NUMERO_MINIMO) + NUMERO_MINIMO;

	//Redondeo la VARIABLE para que tome se un numero entero
	notaFinal = Math.round(numeroDecimal);

	//Uso la instruccion IF para ver si la notaFinal es TRUE que es mayor o igual a 9
	if (notaFinal >= 9)
	{
		//Muestro el mensaje " " si cumple con el condicional
		alert("EXCELENTE! Tu nota es un " + notaFinal);
	}

	//Si el anterior IF es FALSE se ejecuta el ELSE IF y verifica si la VARIABLE es TRUE que es mayor a 4 y menor a 9
	else if (notaFinal > 4 && notaFinal < 9)
	{
		//Muestro el mensaje " " si cumple con el condicional
		alert("APROBASTE! Tu nota es un " + notaFinal);
	}

	//Si tanto el IF como el ELSE IF son FALSE se ejecuta el ELSE para notaFinal menor a 4
	else
	{
		//Muestro el mensaje " " si no cumple ninguno de los condicionales anteriores
		alert("VAMOS! La proxima se puede, tu nota es un " + notaFinal);
	}	

}//FIN DE LA FUNCIÓN*/


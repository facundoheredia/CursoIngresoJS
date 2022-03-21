/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//Declaro las VARIABLES
	var primerNumero;
	var segundoNumero;
	var resultado;

	//Obtengo la inforamcion obtenida en las cajas de textos segun su ID y las guardo en las VARIABLES
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	//Parseo la informacion obtenida y la paso a numero entero
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	//Hago la suma con la informacion guardada en las VARIABLES y lo guardo en la VARIABLE
	resultado = primerNumero + segundoNumero;

	//Muestro por ALERT el mensaje " " y muestro el resultado de la suma
	alert("El resultado de la suma es: " + resultado);	
}

function restar()
{
	//Declaro las VARIABLES
	var primerNumero;
	var segundoNumero;
	var resultado;

	//Obtengo la inforamcion obtenida en las cajas de textos segun su ID y las guardo en las VARIABLES
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	//Parseo la informacion obtenida y la paso a numero entero
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	//Hago la resta con la informacion guardada en las VARIABLES y lo guardo en la VARIABLE
	resultado = primerNumero - segundoNumero;

	//Muestro por ALERT el mensaje " " y muestro el resultado de la resta
	alert("El resultado de la resta es: " + resultado);
}

function multiplicar()
{ 
	//Declaro las VARIABLES
	var primerNumero;
	var segundoNumero;
	var resultado;

	//Obtengo la inforamcion obtenida en las cajas de textos segun su ID y las guardo en las VARIABLES
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	//Parseo la informacion obtenida y la paso a numero entero
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	//Hago la multiplicacion con la informacion guardada en las VARIABLES y lo guardo en la VARIABLE
	resultado = primerNumero * segundoNumero;

	//Muestro por ALERT el mensaje " " y muestro el resultado de la multiplicacion
	alert("El resultado de la multiplicacion es: " + resultado);
}

function dividir()
{
	//Declaro las VARIABLES
	var primerNumero;
	var segundoNumero;
	var resultado;

	//Obtengo la inforamcion obtenida en las cajas de textos segun su ID y las guardo en las VARIABLES
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	//Parseo la informacion obtenida y la paso a numero entero
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	//Hago la division con la informacion guardada en las VARIABLES y lo guardo en la VARIABLE
	resultado = primerNumero / segundoNumero;

	//Muestro por ALERT el mensaje " " y muestro el resultado de la division
	alert("El resultado de la division es: " + resultado);
}

//https://onlinegdb.com/5S9Ek7oox
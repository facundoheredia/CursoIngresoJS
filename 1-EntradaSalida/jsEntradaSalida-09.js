/*
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar el sueldo con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*function mostrarAumento()
{
	//Declaro las VARIABLES
	var sueldo;
	var nuevoSueldo;
	var aumento;
	
	//Obtengo la informacion introducida por el usuario en el cuadro de texto segun su ID y la guardo en la VARIABLE
	sueldo = document.getElementById("txtIdSueldo").value;

	//Parseo la informacion usando PARSEFLOAT (ya que me permite ver despues de la coma si el sueldo es un numero decimal) y lo guardo en la VARIABLE
	sueldo = parseFloat(sueldo); 

	//Calculo el aumento del sueldo y los guardo en la VARIABLE
	aumento = sueldo * 10 / 100;
	
	//Sumo al sueldo el aumento obtenido de la operacion anterior y lo guardo en la VARIABLE
	nuevoSueldo = aumento + sueldo;
	
	//Guardo la informacion obtenida en el calculo anteior y lo muestro por el cuadro de texto en la pagina segun su ID
	document.getElementById("txtIdResultado").value = nuevoSueldo;
}

//https://onlinegdb.com/TfDyQ_Uztg




/* 9 BIS
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego pedir por PROMPT el porcentaje de aumento
mostrar el sueldo con el porcentaje de aumento y el total
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
	//Declaro las VARIABLES
	var sueldo;
	var porcentaje;
	var nuevoSueldo;
	var aumento;
	var sueldoFinal;
	
	//Obtengo la informacion introducida por el usuario en el cuadro de texto segun su ID y la guardo en la VARIABLE
	sueldo = document.getElementById("txtIdSueldo").value;

	//Parseo la informacion usando PARSEFLOAT (ya que me permite ver despues de la coma si el sueldo es un numero decimal) y lo guardo en la VARIABLE
	sueldo = parseFloat(sueldo); 

	//Pido por PROMPT el porcentaje que quiere introducir el usuario
	porcentaje = prompt("Ingrese el porcentaje de aumento","introduzca un porcentaje del 0 al 100");

	//Parseo la informacion usando PARSEFLOAT (ya que me permite ver despues de la coma si el sueldo es un numero decimal) y lo guardo en la VARIABLE
	porcentaje = parseFloat(porcentaje);

	//Calculo el aumento del sueldo y los guardo en la VARIABLE
	aumento = sueldo * porcentaje / 100;

	//Calculo el nuevo sueldo con el aumento agregado
	nuevoSueldo = sueldo + aumento;
	
	//Sumo al sueldo el aumento obtenido de la operacion anterior y lo guardo en la VARIABLE
	sueldoFinal = "Su sueldo anterior era de: $" + sueldo + " con un porcentaje de aumento de: " + porcentaje + "%, danto: $" + aumento + " de aumento y su sueldo total es de: $" + nuevoSueldo;
	
	//Guardo la informacion obtenida en el calculo anteior y lo muestro por el cuadro de texto en la pagina segun su ID
	document.getElementById("txtIdResultado").value = sueldoFinal;
}

//https://onlinegdb.com/sekSjVvkv
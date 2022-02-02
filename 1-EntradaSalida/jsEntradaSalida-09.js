/*
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar el sueldo con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo=parseFloat(document.getElementById("txtIdSueldo").value); //Se usa PARSEFLOAT ya que me permite ver despues de la coma si el sueldo es un numero con coma
	let nuevoSueldo=(sueldo*10/100)+sueldo;
	
	document.getElementById("txtIdResultado").value = nuevoSueldo;
}

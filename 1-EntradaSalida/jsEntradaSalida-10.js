/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe=parseFloat(document.getElementById("txtIdImporte").value); //Se usa PARSEFLOAT ya que me permite ver despues de la coma si el sueldo es un numero con coma
	let importeConDescuento=importe*0.75;
	
	document.getElementById("txtIdResultado").value = importeConDescuento;
}

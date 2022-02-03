/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var importeConDescuento;

	//Se usa PARSEFLOAT ya que me permite ver despues de la coma si el sueldo es un numero con coma
	importe = parseFloat(document.getElementById("txtIdImporte").value); 
	importeConDescuento = importe*0.75;
	
	document.getElementById("txtIdResultado").value = importeConDescuento;
}

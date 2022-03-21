/*
Ejercicio 1

El laboratorio Rossi necesita desarrollar un programa que permita obtener algunos datos estadísticos sobre las muestras de sangre que recibe el sector de "Derivaciones", 
se sabe que dicho sector recibe:
Tipo de muestra: "Sangre", "Orina", y "Otros" (validar)
Cantidad de tubos, (validar, no pueden ser menos de 3 tubos y no más de 7 tubos de muestras)
Procedencia de las muestras: Argerich, Duran, Fernández, Rapela (validar)
Precio de la prestación: (validar valor mínimo 10.000 y valor máximo 55.000)
Se necesita saber:
1) Del primer ingreso: tipo de muestra, precio y su procedencia
2) Del quinto ingreso de muestra (si existe) solo el precio y la cantidad de tubos
3) El promedio de dinero ganado en total
4) Del mayor precio de prestación: la cantidad de tubos, su procedencia y el tipo de muestras
5) Si el total de dinero recaudado supera los 500.000 pesos AFIP hace de las suyas y toca pagar ingresos brutos del 25% y si supera los 750.000 es 40%

ACLARACION: En ningún momento sabemos cuántos ingresos de muestras pueden ingresar
*/

function mostrar()
{
	var tipoMuestra;
	var cantidadTubos;
	var procedencia;
	var precio;
	var respuesta;
	var mensaje;
	var contador;

	var tipoMuestraPrimerIngreso;
	var precioPrimerIngreso;
	var procedenciaPrimerIngreso;

	var precioQuintoIngreso;
	var cantidadTubosQuintoIngreso;

	var acumuladorPrecio;
	var promedioPrecio;

	var cantidadTubosMayorPrestacion;
	var	procedenciaMayorPrestacion;
	var	tipoMuestraMayorPrestacion;
	var flagPrestacion;

	var IngresosBrutos;
	var porcentajeIngresosBrutos;

	contador = 0;
	acumuladorPrecio = 0;
	flagPrestacion = 0;

	do
	{
		tipoMuestra = prompt("Ingrese el tipo de muestra: SANGRE - ORINA - OTROS");
		tipoMuestra = tipoMuestra.toUpperCase();
		while (tipoMuestra == "" && tipoMuestra != "SANGRE" && tipoMuestra != "ORINA" && tipoMuestra != "OTROS")
		{
			tipoMuestra = prompt("ERROR! Ingrese el tipo de muestra: SANGRE - ORINA - OTROS");
			tipoMuestra = tipoMuestra.toUpperCase();
		}

		cantidadTubos = prompt("Ingrese la cantidad de tubos para " + tipoMuestra);
		cantidadTubos = parseInt(cantidadTubos);
		while (isNaN(cantidadTubos) && (cantidadTubos < 3 || cantidadTubos > 7))
		{
			cantidadTubos = prompt("ERROR! Ingrese la cantidad de tubos para " + tipoMuestra + " entre 3 y 7 muestras");
			cantidadTubos = parseInt(cantidadTubos);
		}

		procedencia = prompt("Ingrese la procedencia de la muestra " + tipoMuestra);
		procedencia = procedencia.toUpperCase();
		while (procedencia == "" && procedencia != "ARGERICH"  && procedencia != "DURAN" && procedencia != "FERNANDEZ" && procedencia != "RAPELA")
		{
			procedencia = prompt("ERROR! Ingrese la procedencia de la muestra " + tipoMuestra + " entre: ARGERICH - DURAN - FERNANDEZ - RAPELA");
			procedencia = procedencia.toUpperCase();
		}

		precio = prompt("Ingrese el precio de la muestra " + tipoMuestra);
		precio = parseInt(precio);
		while (isNaN(precio) && (precio < 10000 || precio > 55000))
		{
			precio = prompt("ERROR! Ingrese el precio de la muestra " + tipoMuestra + " entre 10000 y 55000");
			precio = parseInt(precio);
		}
		//1) Del primer ingreso: tipo de muestra, precio y su procedencia
		if (contador == 0)
		{
			tipoMuestraPrimerIngreso = tipoMuestra;
			precioPrimerIngreso = precio;
			procedenciaPrimerIngreso = procedencia;
		}
		//2) Del quinto ingreso de muestra (si existe) solo el precio y la cantidad de tubos
		if (contador == 5)
		{
			precioQuintoIngreso = precio;
			cantidadTubosQuintoIngreso = cantidadTubos;
		}
		//4) Del mayor precio de prestación: la cantidad de tubos, su procedencia y el tipo de muestras
		if (flagPrestacion == 0 || precio > precioMayorPrestacion)
		{
			precioMayorPrestacion = precio;
			cantidadTubosMayorPrestacion = cantidadTubos;
			procedenciaMayorPrestacion = procedencia;
			tipoMuestraMayorPrestacion = tipoMuestra;
			flagPrestacion = 1;
		}


		acumuladorPrecio = acumuladorPrecio + precio;
		contador = contador + 1;

		respuesta = confirm("¿Desea ingresar mas muestras?")

	} while (respuesta == true);

	//3) El promedio de dinero ganado en total
	promedioPrecio = acumuladorPrecio / contador;

	//5) Si el total de dinero recaudado supera los 500.000 pesos AFIP hace de las suyas y toca pagar ingresos brutos del 25% y si supera los 750.000 es 40%
	if(acumuladorPrecio > 500000)
	{
		if (acumuladorPrecio > 750000)
		{
			porcentajeIngresosBrutos = 40;
		}
		else
		{
			porcentajeIngresosBrutos = 25;
		}
	}
	else
	{
		porcentajeIngresosBrutos = 0;
	}

	IngresosBrutos = acumuladorPrecio * porcentajeIngresosBrutos / 100;

	//MENSAJE
	mensaje = "PUNTO A \n";
	mensaje = mensaje + "- El primer ingreso ingrrso un tipo de muestra de " + tipoMuestraPrimerIngreso + " con un precio de $" + precioPrimerIngreso + " y proviene de " + procedenciaPrimerIngreso + "\n";
	mensaje = mensaje + "PUNTO B \n";
	if(contador > 5)
	{
		mensaje = mensaje + "- El quinto ingreso tubo un precio de " + precioQuintoIngreso + " y tiene una cantidad de " + cantidadTubosQuintoIngreso + " tubos. \n";
	}
	else
	{
		mensaje = mensaje + "- No hubo un quinto ingreso \n";
	}
	mensaje = mensaje + "PUNTO C \n";
	mensaje = mensaje + "- El precio promedio ganado en total es de $" + promedioPrecio + "\n";
	mensaje = mensaje + "PUNTO D \n";
	mensaje = mensaje + "El precio de mayor prestacion es de $" + precioMayorPrestacion + " con una cantidad de " + cantidadTubosMayorPrestacion + " tubos, proviene de " + procedenciaMayorPrestacion + " y es de tipo " + tipoMuestraMayorPrestacion + "\n";
	mensaje = mensaje + "PUNTO E \n";
	if (porcentajeIngresosBrutos != 0)
	{
		mensaje = mensaje + "Se paga un total de $" + IngresosBrutos + " en ingresos brutos \n";
	}
	else
	{
		mensaje = mensaje + "No se pagan ingresos brutos \n";
	}
	alert(mensaje);

}











/*
Ejercicio 2:

La cadena de super mercados Coto nos pide un programa para manejar el stock de mercadería para así poder decidir mejor sus ofertas, para eso debemos poder ingresar:
Tipo de producto: fideos, galletitas, harina, jugo, vino (validar)
Cantidad de unidades: Como mínimo puede ser 1, y como máximo 6 unidades
Precio por unidad de producto: 100 pesos es el precio mínimo y 450 es el máximo precio disponible POR UNIDAD.
El método de pago: Crédito, Débito, Efectivo o MercadoPago
Coto nos pidió que solamente realizáramos la carga de 10 productos para ser ofertados durante el fin de semana, informar:
1) El total que se recaudaría con la venta de todas las ofertas
2) El precio bruto de cada oferta
3) Del producto COMESTIBLE más barato: nombre y precio
4) De la BEBIDA más cara: nombre y cantidad de unidades
5) El precio final de cada oferta teniendo en cuenta los siguientes descuentos:
    A) Si paga con efectivo: 45% de descuento 
    B) Si paga con tarjeta de crédito: 15% de aumento
    C) Si paga con debito el precio se mantiene igual
    D) Si paga con MercadoPago: 5% de descuento

ACLARACION: MercadoPago déjenlo y úsenlo como una sola palabra para que eviten confusiones
*/
/*
function mostrar()
{
	var tipoProducto;
	var cantidadUnidades;
	var precioPorUnidad;
	var metodoDePago;
	var contador;
	var mensaje;

	var acumuladorTotalMontoOfertas;

	var acumuladorMontoFideos;
	var acumuladorMontoGalletitas;
	var acumuladorMontoHarina;
	var acumuladorMontoJugo;
	var acumuladorMontoVino;
	
	var flagComestible;
	var precioPorUnidadMasBarato;
	var tipoProductoMasBarato;

	var	precioPorUnidadMasCaro;
	var tipoProductoMasCaro;
	var cantidadUnidadesMasCaro;

	contador = 0;
	acumuladorTotalMontoOfertas = 0;
	acumuladorMontoFideos = 0;
	acumuladorMontoGalletitas = 0;
	acumuladorMontoHarina = 0;
	acumuladorMontoJugo = 0;
	acumuladorMontoVino = 0;
	flagComestible = 0;
	flagBebida = 0;

	while (contador < 10)
	{
		tipoProducto = prompt("Ingrese el tipo de producto: FIDEOS - GALLETITAS - HARINA - JUGO - VINO");
		tipoProducto = tipoProducto.toUpperCase();
		while (tipoProducto == "" && tipoProducto != "FIDEOS" && tipoProducto != "GALLETITAS" && tipoProducto != "HARINA" && tipoProducto != "JUGO" && tipoProducto != "VINO")
		{
			tipoProducto = prompt("ERROR! Ingrese el tipo de producto: FIDEOS - GALLETITAS - HARINA - JUGO - VINO");
			tipoProducto = tipoProducto.toUpperCase();
		}

		cantidadUnidades = prompt ("Ingrese la cantidad de unidades de " + tipoProducto);
		cantidadUnidades = parseInt(cantidadUnidades);
		while (isNaN(cantidadUnidades) && (cantidadUnidades < 1 || cantidadUnidades > 6))
		{
			cantidadUnidades = prompt ("ERROR! Ingrese la cantidad de unidades de " + tipoProducto + " entre 1 y 6");
			cantidadUnidades = parseInt(cantidadUnidades);
		}
	
		precioPorUnidad = prompt ("Ingrese el precio por unidad de " + tipoProducto);
		precioPorUnidad = parseInt(precioPorUnidad);
		while (isNaN(precioPorUnidad) && (precioPorUnidad < 100 || precioPorUnidad > 450))
		{
			precioPorUnidad = prompt ("ERROR! Ingrese el precio por unidad de " + tipoProducto + " entre $100 y $450");
			precioPorUnidad = parseInt(precioPorUnidad);
		}

		//2) El precio bruto de cada oferta
		switch(tipoProducto)
		{
			case "FIDEOS":
				acumuladorMontoFideos = acumuladorMontoFideos + (precioPorUnidad * cantidadUnidades)
				break;
			case "GALLETITAS":
				acumuladorMontoGalletitas = acumuladorMontoGalletitas + (precioPorUnidad * cantidadUnidades)
				break;
			case "HARINA":
				acumuladorMontoHarina = acumuladorMontoHarina + (precioPorUnidad * cantidadUnidades)
				break;
			case "JUGO":
				acumuladorMontoJugo = acumuladorMontoJugo + (precioPorUnidad * cantidadUnidades)
				break;
			case "VINO":
				acumuladorMontoVino = acumuladorMontoVino + (precioPorUnidad * cantidadUnidades)
				break;
		}

		//3) Del producto COMESTIBLE más barato: nombre y precio
		if (flagComestible == 0 || (tipoProducto == "FIDEOS" || tipoProducto == "GALLETITAS" || tipoProducto == "HARINA") && precioPorUnidad < precioPorUnidadMasBarato)
		{
			precioPorUnidadMasBarato = precioPorUnidad;
			tipoProductoMasBarato = tipoProducto;
			flagComestible = 1;
		}

		//4) De la BEBIDA más cara: nombre y cantidad de unidades
		if (flagBebida == 0 || (tipoProducto == "JUGO" || tipoProducto == "VINO") && precioPorUnidad > precioPorUnidadMasCaro)
		{
			precioPorUnidadMasCaro = precioPorUnidad;
			tipoProductoMasCaro = tipoProducto;
			cantidadUnidadesMasCaro = cantidadUnidades;
			flagBebida = 1;
		}

		//1) El total que se recaudaría con la venta de todas las ofertas
		acumuladorTotalMontoOfertas = acumuladorTotalMontoOfertas + (precioPorUnidad * cantidadUnidades);

		contador = contador + 1;
	}
		
	metodoDePago = prompt("Ingrese el metodo de pago");
	metodoDePago = metodoDePago.toUpperCase();
	while (metodoDePago == "" && metodoDePago != "CREDITO"  && metodoDePago != "DEBITO" && metodoDePago != "EFECTIVO" && metodoDePago != "MERCADOPAGO")
	{
		metodoDePago = prompt("ERROR! Ingrese el metodo de pago valido: CREDITO - DEBITO - EFECTIVO - MERCADOPAGO");
		metodoDePago = metodoDePago.toUpperCase();
	}

	//5) El precio final de cada oferta teniendo en cuenta los siguientes descuentos:
   // A) Si paga con efectivo: 45% de descuento 
   // B) Si paga con tarjeta de crédito: 15% de aumento
  //  C) Si paga con debito el precio se mantiene igual
  //  D) Si paga con MercadoPago: 5% de descuento
	switch(metodoDePago)
	{
		case "EFECTIVO":
			porcentaje = 45;
			break;
		
		case "CREDITO":
			porcentaje = 15;
			break;
		
		case "DEBITO":
			porcentaje = 0;
			break;
		
		case "MERCADOPAGO":
			porcentaje = 5;
			break;
	}

	if (metodoDePago == "EFECTIVO" || metodoDePago == "DEBITO" ||metodoDePago == "MERCADOPAGO")
	{
		descuento = porcentaje / 100;
		precioFinalFideos = acumuladorMontoFideos - descuento;
		precioFinalGalletitas = acumuladorMontoGalletitas - descuento;
		precioFinalHarina = acumuladorMontoHarina - descuento;
		preioFinalJugo = acumuladorMontoJugo - descuento;
		preFinalVino = acumuladorMontoVino - descuento;
	}
	else
	{
		aumento = porcentaje / 100;
	}

	//MENSAJE
	mensaje = "PUNTO A \n";
	mensaje = mensaje + "- Se recaudo un total de $" + acumuladorTotalMontoOfertas + "\n";
	mensaje = "PUNTO B \n";
	mensaje = mensaje + "- El precio bruto de cada oferta es de: \n";
	mensaje = mensaje + "- FIDEOS - $" + acumuladorMontoFideos + "\n";
	mensaje = mensaje + "- GALLETITAS - $" + acumuladorMontoGalletitas + "\n";
	mensaje = mensaje + "- HARINA - $" + acumuladorMontoHarina + "\n";
	mensaje = mensaje + "- JUGO - $" + acumuladorMontoJugo + "\n";
	mensaje = mensaje + "- VINO - $" + acumuladorMontoVino + "\n";
	mensaje = "PUNTO C \n";
	mensaje = mensaje + "- El producto comestible mas barato es: " + tipoProductoMasBarato + " con un precio de $" + precioPorUnidadMasBarato + " por unidad \n"
	mensaje = "PUNTO D \n";
	mensaje = mensaje + "- El producto bebible mas caro es: " + tipoProductoMasCaro + " con un precio de $" + precioPorUnidadMasCaro + " por unidad y lleva " + cantidadUnidadesMasCaro + " de unidades \n";
	alert(mensaje);
}
*/






































/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
/*function mostrar()
{
	//Declaro la VARIABLE
	var nombreIngresado;

	//Guardo la informarcion pedida por PROMP en la variable
	nombreIngresado = prompt("Bienvenido,¿Como te llamas?","Inserte su nombre");

	//Muestro por ALERT el mensaje entre " " y la informacion guardada en la VARIABLE
	alert("Su nombre es: " + nombreIngresado);
}*/

//https://onlinegdb.com/_qPYoArc4




/*EJERCICIO ROMPECOCOS
Juegueteria EL MUNDO DE OCTAVIO, nos encarga un programa para conocer qué cantidad de materiales que se necesita para la fabricación de distintos juguetes.
Todos los datos se ingresan por prompt.
Pueden usar el mismo html del ejercicio 01 de E/S

Debemos tener en cuenta que la estructura del cometa estará dada por un perímetro de varillas de plástico y 
los correspondientes entrecruces (DC y AB) del mismo material para mantener la forma del cometa.

AB = Diámetro mayor
DC = diámetro menor
BD y BC = lados menores
AD y AC = lados mayores

El cometa estará construido con papel de alta resistencia. 
La cola del mismo se construirá con el mismo papel que el cuerpo y representará un 10% adicional del necesario para el cuerpo.

Necesitamos saber cuántos Mts de varillas de plástico y cuántos de papel son necesarios para la construcción en masa de 10 cometas. 
Tener en cuenta que los valores de entrada están expresados en Cms.

Ahora necesitamos saber cuánto papel de cada color necesitamos. Las entradas son las mismas.*/

/*
function mostrar()
{
	//Declaro las VARIABLES para los valores pedids al usuario
	var varillaAlturaAB;
	var varillaAnchoDC;
	var varillasMenoresBCBD;
	var varillasMayoresACAD;

	//Declaro las VARIABLES para las operaciones a realizar
	var varillasTotalCentimetros;
	var centimetrosAMetros;
	var varillasTotalMetros;
	var papelCuerpoTotalCentimetros;
	var centimetrosCuadradosAMetrosCuadrados;
	var papelCuerpoTotalMetros;
	var papelColaMetros;
	var porcentajePapelCola;
	var papelColaMetrosTotales;
	var cantidadDeCometas;
	var papelTotalSegunCantidad;
	var varillasTotalesSegunCantidad;

	//Declaro la VARIABLE para el mensaje final
	var mensaje;

	//Pongo valores a las VARIABLES necesarias
	centimetrosAMetros = 100;
	centimetrosCuadradosAMetrosCuadrados = 10000;
	porcentajePapelCola = 10;
	cantidadDeCometas = 10;

	//Obtengo los valores ingresados por el usuario por PROMPT y los guardo en las VARIABLES
	varillaAlturaAB = prompt("Ingrese la altura del cometa", "Medida en centimetros");
	varillaAnchoDC = prompt("Ingrese el ancho del cometa","Medida en centimetros");
	varillasMenoresBCBD = prompt("Ingrese los lados superiores del cometa", "Medida en centimetros");
	varillasMayoresACAD = prompt("Ingrese los lados inferiores del cometa","Medida en centimetros");

	//Parseo las VARIABLES
	varillaAlturaAB = parseInt(varillaAlturaAB);
	varillaAnchoDC = parseInt(varillaAnchoDC);
	varillasMenoresBCBD = parseInt(varillasMenoresBCBD);
	varillasMayoresACAD = parseInt(varillasMayoresACAD);

	//Calculo el largo total de varillas a necesitar
	varillasTotalCentimetros = varillaAlturaAB + varillaAnchoDC + varillasMenoresBCBD + varillasMayoresACAD;
	
	//Pasamos centimetros a metros
	varillasTotalMetros = varillasTotalCentimetros / centimetrosAMetros;

	//Calculo el papel para el cuerpo en base a la forma del rombo (D*d)/2
	papelCuerpoTotalCentimetros = (varillaAlturaAB * varillaAnchoDC) / 2;

	//Pasamos centimetros a metros
	papelCuerpoTotalMetros = papelCuerpoTotalCentimetros / centimetrosCuadradosAMetrosCuadrados;
	
	//Calculamos el papel para la cola con un 10% mas
	papelColaMetros = papelCuerpoTotalMetros * porcentajePapelCola / 100;
	papelColaMetrosTotales = papelColaMetros + papelCuerpoTotalMetros;

	//Calculamos el total de materiales para los 10 cometas
	papelTotalSegunCantidad = (papelColaMetrosTotales + papelCuerpoTotalMetros) * cantidadDeCometas;
	varillasTotalesSegunCantidad = varillasTotalMetros * cantidadDeCometas;

	//Genero el mensaje completo con la VARIABLE mensaje
	mensaje = "El largo de varilla de cada cometa es de: " + varillasTotalMetros + " Mts.";
	mensaje = mensaje + " El total de metros de papel para el cuerpo de cada cometa es de: " + papelCuerpoTotalMetros + " Mts2.";
	mensaje = mensaje + " El total de metros para la cola de cada cometa es de: " + papelColaMetrosTotales + " Mts2.";
	mensaje = mensaje + " El total de material para los " + cantidadDeCometas + " es de: ";
	mensaje = mensaje + papelTotalSegunCantidad + " Mts2 de papel y ";
	mensaje = mensaje + varillasTotalesSegunCantidad + " Mts de largo para las varillas."
	

	//Muestro por ALERT el mensaje entre " " con los valores obtenido de las operaciones
	alert(mensaje);
}
*/


/*EJERCICIO N°1 - Div H - Facundo Heredia - SABADO 05/02/2022
Se piden tres nombre de producto, y los precios de cada producto ingresado, sacar el precio bruto(la suma de los tres sin impuestos), 
el promedio de los precios y el precio final total más iva(21%), pedir un porcentaje de descuento y aplicarlo al precio final , 
mostrar todos los datos calculados e ingresados ​​por alerta. (solo una alerta en el código).
Los datos se piden por prompt. */


/*function mostrar()
{
	//Declaro las VARIABLES para los valores pedids al usuario
	var primerProducto;
	var precioPrimerProducto;
	var segundoProducto;
	var precioSegundoProducto;
	var tercerProducto;
	var precioTercerProducto;
	var descuento;
	var mensaje;

	//Declaro las VARIABLES para las operaciones a realizar
	var precioBruto;
	var promedio;
	var precioConIva;
	var precioFinalConDescuento;
	var precioDescontado;
	var iva = 1.21;

	//Obtengo los valores ingresados por el usuario por PROMPT y los guardo en las VARIABLES
	primerProducto = prompt("Por favor ingrese el nombre del primer producto","Nombre primer producto");
	precioPrimerProducto = prompt("Por favor ingrese el precio de " + primerProducto,"Ingrese el precio");
	segundoProducto = prompt("Por favor ingrese el nombre del segundo producto","Nombre segundo producto");
	precioSegundoProducto = prompt("Por favor ingrese el precio de " + segundoProducto,"Ingrese el precio");
	tercerProducto = prompt("Por favor ingrese el nombre del primer producto","Nombre primer producto");
	precioTercerProducto = prompt("Por favor ingrese el precio de " + tercerProducto,"Ingrese el precio");
	descuento = prompt("Por favor ingrese un porcentaje de descuento", "Ingrese un numero de 0 a 100");

	//Parseo las VARIABLES de precios con PARSEFLOAT para obtener los numeros decimales
	precioPrimerProducto = parseFloat(precioPrimerProducto);
	precioSegundoProducto = parseFloat(precioSegundoProducto);
	precioTercerProducto = parseFloat(precioTercerProducto);
	descuento = parseFloat(descuento);

	//Calculo el precio bruto
	precioBruto = precioPrimerProducto + precioSegundoProducto + precioTercerProducto;

	//Calculo el promedio de los precios
	promedio = precioBruto / 3;

	//Calculo el precio final con IVA
	precioConIva = precioBruto * iva;

	//Calculo el precio con descuento
	precioDescontado = precioConIva * descuento / 100;

	//Resto el descuento al precio final
	precioFinalConDescuento = precioConIva - precioDescontado;

	//Hago TOFIXED para quedarme solo con dos decimales despues de la coma
	precioFinalConDescuento = precioFinalConDescuento.toFixed(2);

	//Muestro por ALERT el mensaje entre " " con los valores obtenido de las operaciones
	mensaje = "El producto " + primerProducto + " sale: $" + precioPrimerProducto;
	mensaje = mensaje + ", el producto " + segundoProducto + " sale: $" + precioSegundoProducto;
	mensaje = mensaje + " y el producto " + tercerProducto + " sale: $" + precioTercerProducto; 
	mensaje = mensaje + " .El precio bruto de sus productos es de: $" + precioBruto + ", el promedio de los mismos es de: $" + promedio + ", el precio final a pagar con IVA es de: $" + precioConIva;
	mensaje = mensaje + ", su descuento es de: " + descuento + "% y su precio final a pagar con descuento es de: $" + precioFinalConDescuento;

	alert(mensaje);
}*/

//https://onlinegdb.com/InCZtg6rK



/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
/*function mostrar()
{
	//Me muestra con un popUp el mensaje entre " "
	alert("Esto funciona de maravilla");
}*/

// https://www.onlinegdb.com/aFeAlg1IU



/*
function mostrar() {

	let nombreUno;
	let nombreDos;
	let nombreTres;
	let precioUno;
	let precioDos;
	let precioTres;
	let precioBruto;
	let promedioDePrecios;
	let precioFinalIva;
	let iva;
	let ivaCalculado;
	let porcentajeDeDescuento;
	let descuentoCalculado;
	let precioFinalIvaConDescuento;
	let mensaje;

	iva = 21;
	nombreUno = prompt("Ingrese el nombre del Primer Producto");
	precioUno = prompt("Ingrese el Precio de "+nombreUno);
	precioUno = parseInt(precioUno);
	
	nombreDos = prompt("Ingrese el nombre del Segundo Producto");
	precioDos = prompt("Ingrese el Precio de "+nombreDos);
	precioDos = parseInt(precioDos);

	nombreTres = prompt("Ingrese el nombre del Tercer Producto");
	precioTres = prompt("Ingrese el Precio de "+nombreTres);
	precioTres = parseInt(precioTres);

	porcentajeDeDescuento = prompt("Indique el % de Descuento que desea aplicar al precio");
	porcentajeDeDescuento = parseInt(porcentajeDeDescuento);//dato que ingresa el usuario y lo usamos para operar

	precioBruto = precioUno + precioDos + precioTres;

	promedioDePrecios = precioBruto / 3;

	ivaCalculado = (precioBruto/100)*iva;

	precioFinalIva = precioBruto + ivaCalculado;

	descuentoCalculado = (precioFinalIva/100)*porcentajeDeDescuento;

	precioFinalIvaConDescuento = precioFinalIva - descuentoCalculado;

	mensaje = "Los productos con su precio son: ";
	mensaje = mensaje + nombreUno+" $"+precioUno+" ,";
	mensaje = mensaje + nombreDos+" $"+precioDos+" ,";
	mensaje = mensaje + nombreTres+" $"+precioTres+" ,";
	mensaje = mensaje + "Precio Bruto: $"+precioBruto+" ,";
	mensaje = mensaje + "Promedio: $"+promedioDePrecios+" ,";
	mensaje = mensaje + "El Precio Más IVA: $"+precioFinalIva+" ,";
	mensaje = mensaje + "El Precio Final con el"+porcentajeDeDescuento+"% de Descuento: "+precioFinalIvaConDescuento;

	alert(mensaje);


}
*/


/*
1)De 5  personas que ingresan al hospital se deben tomar y validar los siguientes datos.
nombre ,sexo, latidos por minuto, peso y si está vacunado o no contra el sarampión:


a)informar la cantidad de personas vacunadas y no vacunadas.
b)el peso promedio en total
c)el hombre con menos latidos por minuto y la mujer con más latidos por minuto
*/

/*
function mostrar() {
	var nombre;
	var sexo;
	var latidosPorMinuto;
	var peso;
	var vacunaSarampion;
	var contador;
	var mensaje;
	var contadorVacunados;
	var contadorNoVacunados;
	var acumuladorPeso;
	var promedioPeso;
	var mayorLatidosPorMinuto;
	var menorLatidosPorMinuto;
	var hombreMenorLatidosPorMinuto;
	var mujerMayorLatidosPorMinuto;
	var flagMayorLatidosPorMinuto;
	var flagMenorLatidosPorMinuto;

	contador = 0;
	acumuladorPeso = 0;
	contadorVacunados = 0;
	contadorNoVacunados = 0;
	flagMayorLatidosPorMinuto = 0;
	flagMenorLatidosPorMinuto = 0;

	while (contador < 5)
	{
		nombre = prompt("Ingrese el nombre");
		nombre = nombre.toUpperCase();
		while(nombre == "")
		{
			nombre = prompt("ERROR! Por favor, Ingrese el nombre");
			nombre = nombre.toUpperCase();
		}

		sexo = prompt("Ingrese el sexo (F o M) de " + nombre);
		sexo = sexo.toUpperCase();
		while (sexo == "" && sexo != "F" && sexo != "M")
		{
			sexo = prompt("ERORR! Ingrese el sexo de " + nombre + ". Ingrese F o M");
			sexo = sexo.toUpperCase();
		}

		latidosPorMinuto = prompt("Ingrese los latidos por minuto de " + nombre);
		latidosPorMinuto = parseInt(latidosPorMinuto);

		peso = prompt("Ingrese el peso de " + nombre);
		peso = parseInt(peso);
		while (isNaN(peso) && peso < 0)
		{
			peso = prompt("ERROR! Ingrese el peso de " + nombre);
			peso = parseInt(peso);
		}
		
		vacunaSarampion = prompt ("Ingrese SI o No, si esta vacuntado contra el sarampion");
		vacunaSarampion = vacunaSarampion.toUpperCase();
		while(vacunaSarampion == "" && vacunaSarampion != "SI" && vacunaSarampion != "NO")
		{
			vacunaSarampion = prompt ("ERROR! Ingrese SI o No, si esta vacuntado contra el sarampion");
			vacunaSarampion = vacunaSarampion.toUpperCase();
		}

		//a)informar la cantidad de personas vacunadas y no vacunadas.
		switch (vacunaSarampion) 
		{
			case "SI":
				contadorVacunados = contadorVacunados + 1;
				break;

			case "NO":
				contadorNoVacunados = contadorNoVacunados + 1;
				break;
		}

		//b)el peso promedio en total
		acumuladorPeso = acumuladorPeso + peso;

		//c)el hombre con menos latidos por minuto y la mujer con más latidos por minuto
		switch (sexo)
		{
			case "M":
				if(flagMenorLatidosPorMinuto == 0 || latidosPorMinuto < menorLatidosPorMinuto)
				{
					menorLatidosPorMinuto = latidosPorMinuto;
					hombreMenorLatidosPorMinuto = nombre;
					flagMenorLatidosPorMinuto = 1;
				}
				break;
			
			case "F":
				if(flagMayorLatidosPorMinuto == 0 || latidosPorMinuto < mayorLatidosPorMinuto)
				{
					mayorLatidosPorMinuto = latidosPorMinuto;
					mujerMayorLatidosPorMinuto = nombre;
					flagMayorLatidosPorMinuto = 1;
				}
				break;				
		}

		contador = contador + 1;
	}

	//Promedio
	promedioPeso = acumuladorPeso / contador;

	//MENSAJE
	mensaje = "PUNTO A \n";
	if (contadorVacunados == 0)
	{
		mensaje = mensaje + "- No se ingresaron vacunados\n";
	}
	else
	{
		mensaje = mensaje + "- Vacunados: " + contadorVacunados + "\n";
	}
	if (contadorNoVacunados == 0)
	{
		mensaje = mensaje + "- No se ingresaron no vacunados\n";
	}
	else
	{
		mensaje = mensaje + "- No vacunados: " + contadorNoVacunados + "\n";
	}
	mensaje = mensaje + "PUNTO B \n";
	mensaje = mensaje + "- El promedio de peso es de " + promedioPeso + "Kg \n"
	mensaje = mensaje + "PUNTO C \n";
	if (flagMenorLatidosPorMinuto == 0)
	{
		mensaje = mensaje + "- No se ingresaron Hombres \n";
	}
	else
	{
		mensaje = mensaje + "- El hombre con menos latidos por minuto es: " + hombreMenorLatidosPorMinuto + "\n";
	}
	if (flagMayorLatidosPorMinuto == 0)
	{
		mensaje = mensaje + "- No se ingresaron Mujeres \n";
	}
	else
	{
		mensaje = mensaje + "- La mujer con mas latitos por minuto es:" + mujerMayorLatidosPorMinuto + "\n";
	}

	alert(mensaje);

}
*/






/*
2)De una compra debes ingresar una cantidad indeterminada de cortes de carne vacuna,
 validando los siguientes datos:

nombre del corte, precio, peso en kilogramos, tipo(con hueso o sin hueso)
a)informar el peso total de la compra.
b)el nombre del corte más caro de los sin hueso.
c)el nombre del corte más liviano de los con hueso.
*/
/*
function mostrar() {
	var nombreCorte;
	var precio;
	var peso;
	var tipoCorte;
	var respuesta;
	var mensaje;
	var acumuladorPeso;
	var flagSinHueso;
	var precioSinHuesoMasCaro;
	var nombreCorteSinHuesoMasCaro;
	var flagConHueso;
	var pesoConHuesoMenor;
	var nombreCorteConHuesoMenor;

	acumuladorPeso = 0;
	flagSinHueso = 0;
	flagConHueso = 0;

	do
	{
		nombreCorte = prompt("Ingrese el nombre del corte");
		nombreCorte = nombreCorte.toUpperCase();
		while (nombreCorte == "")
		{
			nombreCorte = prompt("ERROR! Ingrese el nombre del corte");
			nombreCorte = nombreCorte.toUpperCase();
		}

		precio = prompt("Ingrese el precio de " + nombreCorte);
		precio = parseInt(precio);
		while (isNaN(precio) && precio < 1)
		{
			precio = prompt("ERROR! Ingrese el precio de " + nombreCorte);
			precio = parseInt(precio);
		}

		peso = prompt("Ingrese el peso de " + nombreCorte);
		peso = parseInt(peso);
		while (isNaN(peso) && peso < 0)
		{
			peso = prompt("ERROR! Ingrese el peso de " + nombreCorte);
			peso = parseInt(peso);
		}

		tipoCorte = prompt("Ingrese el tipo de corte de " + nombreCorte + ": SIN HUESO - CON HUESO");
		tipoCorte = tipoCorte.toUpperCase();
		while (tipoCorte == "" && tipoCorte != "CON HUESO" && tipoCorte != "SIN HUESO")
		{
			tipoCorte = prompt("ERROR! Ingrese el tipo de corte de " + nombreCorte + ": SIN HUESO - CON HUESO");
			tipoCorte = tipoCorte.toUpperCase();
		}
		
		switch(tipoCorte)
		{
			case "SIN HUESO":
				//b)el nombre del corte más caro de los sin hueso.
				if(flagSinHueso == 0 || precio > precioSinHuesoMasCaro)
				{
					precioSinHuesoMasCaro = precio;
					nombreCorteSinHuesoMasCaro = nombreCorte;
					flagSinHueso = 1;
				}
				break;
			
			case "CON HUESO":
				//c)el nombre del corte más liviano de los con hueso.
				if (flagConHueso == 0 || peso < pesoConHuesoMenor)
				{
					pesoConHuesoMenor = peso;
					nombreCorteConHuesoMenor = nombreCorte;
					flagConHueso = 1;
				}
				break;
		}

		//a)informar el peso total de la compra.
		acumuladorPeso = acumuladorPeso + peso;

		respuesta = confirm("¿Desea ingresar mas cortes?");
	} while (respuesta == true);



	//MENSAJE
	mensaje = "PUNTO A \n";
	mensaje = mensaje + "- El peso de compra es de " + acumuladorPeso + "KG \n";
	mensaje = mensaje + "PUNTO B \n";
	if (flagSinHueso == 0)
	{
		mensaje = mensaje + "- No se ingreso corte sin hueso \n";
	}
	else
	{
		mensaje = mensaje + "- El corte sin hueso mas caro es " + nombreCorteSinHuesoMasCaro + " y sale $" + precioSinHuesoMasCaro + "\n";
	}
	mensaje = mensaje + "PUNTO C \n";
	if (flagConHueso == 0)
	{
		mensaje = mensaje + "- No se ingreso corte con hueso \n";
	}
	else
	{
		mensaje = mensaje + "- El corte mas liviano es " + nombreCorteConHuesoMenor + " y pesa " + pesoConHuesoMenor + "KG \n";
	}


	alert(mensaje);
}
*/

/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados:

nombre del titular ,lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),temporada(“otoño”,“invierno”, “verano”,“primavera”),cantidad de días que durará el viaje.
informar:
a)el lugar más elegido 
b)el nombre del titular que más días viaje.
c)el promedio de días por viaje, de la temporada verano.
*/

function mostrar() {
	var nombre;
	var lugar;
	var temporada;
	var cantidadDias;
	var respuesta;
	var mensaje;
	var contadorCordoba;
	var contadorVillGessel;
	var contadorPuertoMadryn;
	var lugarMasElegido;
	var flagCantidadDias;
	var nombreMayorCantidadDias;
	var mayorCantidadDias;
	var contadorViajes;
	var acumuladorCantidadDias;

	contadorPuertoMadryn = 0;
	contadorVillGessel = 0;
	contadorCordoba = 0;
	flagCantidadDias = 0;
	contadorViajes = 0;
	acumuladorCantidadDias = 0;

	do
	{
		nombre = prompt("Ingrese el nombre");
		nombre = nombre.toUpperCase();
		while (nombre == "")
		{
			nombre = prompt("ERROR! Ingrese un nombre");
			nombre = nombre.toUpperCase();
		}

		lugar = prompt ("Ingrese el lugar para " + nombre + ": PUESTO MADRYN - VILLA GESSEL - CORDOBA");
		lugar = lugar.toUpperCase();
		while (lugar == "" && lugar != "PUERTO MADRYN" && lugar != "VILLA GESSEL" && lugar != "CORDOBA")
		{
			lugar = prompt ("ERROR! Ingrese el lugar para " + nombre + ": PUESTO MADRYN - VILLA GESSEL - CORDOBA");
			lugar = lugar.toUpperCase();
		}

		temporada = prompt ("Ingrese la temporada: OTOÑO - INVIERNO - VERANO - PRIMAVERA");
		temporada = temporada.toUpperCase();
		while (temporada != "OTOÑO" && temporada != "INVIERNO" && temporada != "VERANO" && temporada != "PRIMAVERA")
		{
			temporada = prompt ("ERROR! Ingrese la temporada: OTOÑO - INVIERNO - VERANO - PRIMAVERA");
			temporada = temporada.toUpperCase();
		}
		cantidadDias = prompt("Ingrese la cantidad de dias");
		cantidadDias = parseInt(cantidadDias);
		while (isNaN(cantidadDias) && cantidadDias < 1)
		{
			cantidadDias = prompt("ERROR! Ingrese la cantidad de dias");
			cantidadDias = parseInt(cantidadDias);
		}

		//a)el lugar más elegido
		switch (lugar)
		{
			case "PUERTO MADRYN":
				contadorPuertoMadryn = contadorPuertoMadryn + 1;
				break;
			
			case "VILLA GESSEL":
				contadorVillGessel = contadorVillGessel + 1;
				break;
			
			case "CORDOBA":
				contadorCordoba = contadorCordoba + 1;
				break;
		}

		//c)el promedio de días por viaje, de la temporada verano.
		if (temporada == "VERANO")
		{
			contadorViajes = contadorViajes + 1;
			acumuladorCantidadDias = acumuladorCantidadDias + cantidadDias;
		}

		//b)el nombre del titular que más días viaje.
		if (flagCantidadDias == 0 || cantidadDias > mayorCantidadDias)
		{
			mayorCantidadDias = cantidadDias;
			nombreMayorCantidadDias = nombre;
			flagCantidadDias = 1;
		}

		respuesta = confirm("¿Desea agregar mas estadias?");

	} while (respuesta == true);

	//a)el lugar más elegido
	if (contadorPuertoMadryn > contadorVillGessel)
	{
		if (contadorPuertoMadryn > contadorCordoba)
		{
			lugarMasElegido = "PUERTO MADRYN";
		}
		else
		{
			lugarMasElegido = "CORDOBA";
		}
	}
	else
	{
		if (contadorVillGessel > contadorCordoba)
		{
			lugarMasElegido = "VILLA GESSEL";
		}
		else
		{
			lugarMasElegido = "CORDOBA";
		}
	}

	//Promedio dias
	promedioDiasVerano = acumuladorCantidadDias / contadorViajes;

	//MENSAJE
	mensaje = "PUNTO A \n";
	mensaje = mensaje + "-El lugar mas elegido es " + lugarMasElegido + "\n";
	mensaje = mensaje + "PUNTO B \n";
	mensaje = mensaje + "- El titular con mas cantidad de dias es " + nombreMayorCantidadDias + " con " + mayorCantidadDias + " de dias \n";
	mensaje = mensaje + "PUTNO C \n";
	if (contadorViajes == 0)
	{
		mensaje = mensaje + "- No se cargo ningun viaje para la temporada de verano";
	}
	else
	{
		mensaje = mensaje + "- El promedio de dias en la temporada de veraano es de " + promedioDiasVerano;
	}

	alert(mensaje);
}


/*
DIV H - HEREDIA FACUNDO					04-03-2022

 1- Una casa de computación que se especializa en venta de insumos importados desea calcular ciertas métricas en base a las ventas de sus productos.

Se ingresa de cada venta: (Ingresa mínimo 5 ventas)
- Nombre del producto.
- Género: (Memorias – Discos – Motherboards)
- Tipo de Venta: (Online – Local)
- Importe: (No pueden ser números negativos ni mayor a los 30000)


Se pide:
A- El más barato de “Discos” con su importe .
B- De la venta más cara, el nombre del producto y tipo.
C- La cantidad de ventas que sean de “Memorias” y cuesten menos de $850.
*/
/*
function mostrar() 
{
	//VARIABLES
	var nombreProducto;
	var genero;
	var tipoVenta;
	var importe;
	var contador;
	var mensaje;
	var flagDiscos;
	var importeDiscoMasBarato;
	var nombreProductoDiscoMasBarato;
	var contadorMemoriasMenoresA850;
	var flagVentaMasCara;
	var nombreVentaMasCara;
	var tipoVentaMasCara;
	var importeVentaMasCara;
	
	//CONTADORES Y FLAGS
	contador = 0;
	flagDiscos = 0;
	contadorMemoriasMenoresA850 = 0;
	flagVentaMasCara = 0;

	while (contador < 5)
	{
		nombreProducto = prompt("Ingrese el nombre del producto");
		nombreProducto = nombreProducto.toUpperCase();
		while(nombreProducto == "")
		{
			nombreProducto = prompt("ERROR! Ingrese un nombre para el producto");
			nombreProducto = nombreProducto.toUpperCase();
		}

		genero = prompt("Ingrese el genero del " + nombreProducto + ": MEMORIAS - DISCOS - MOTHERBOARDS");
		genero = genero.toUpperCase();
		while (genero != "MEMORIAS" && genero != "DISCOS" && genero != "MOTHERBOARDS")
		{
			genero = prompt("ERROR! Ingrese el genero del " + nombreProducto + ": MEMORIAS - DISCOS - MOTHERBOARDS");
			genero = genero.toUpperCase();
		}

		tipoVenta = prompt("Ingrese el tipo de venta: ONLINE - LOCAL");
		tipoVenta = tipoVenta.toUpperCase();
		while (tipoVenta != "ONLINE" && tipoVenta != "LOCAL")
		{
			tipoVenta = prompt("ERROR! Ingrese el tipo de venta: ONLINE - LOCAL");
			tipoVenta = tipoVenta.toUpperCase();
		}

		importe = prompt("Ingrese el importe de " + nombreProducto);
		importe = parseInt(importe);
		while (isNaN(importe) || importe < 1 || importe > 30000)
		{
			importe = prompt("ERROR! Ingrese el importe de " + nombreProducto + ": entre $1 y $30000");
			importe = parseInt(importe);
		}

			
		switch(genero)
		{
			//A- El más barato de “Discos” con su importe.
			case "DISCOS":
				if(flagDiscos == 0 || importe < importeDiscoMasBarato)
				{
					importeDiscoMasBarato = importe;
					nombreProductoDiscoMasBarato = nombreProducto;
					flagDiscos = 1;
				}
				break;
			//C- La cantidad de ventas que sean de “Memorias” y cuesten menos de $850.
			case "MEMORIAS":
				if (importe < 850)
				{
					contadorMemoriasMenoresA850 = contadorMemoriasMenoresA850 + 1;
				}
				break;
		}

		//B- De la venta más cara, el nombre del producto y tipo.
		if(flagVentaMasCara == 0 || importe > importeVentaMasCara)
		{
			importeVentaMasCara = importe;
			nombreVentaMasCara = nombreProducto;
			tipoVentaMasCara = tipoVenta;
			flagVentaMasCara = 1;
		}

		contador = contador + 1;
	}


	//MENSAJE
	//PUNTO A
	mensaje = "PUNTO A \n";
	if (flagDiscos == 0)
	{
		mensaje = mensaje + "- No se ingreso ningun DISCO. \n";
	}
	else
	{
		mensaje = mensaje + "- El disco mas barato es " + nombreProductoDiscoMasBarato + " y sale $" + importeDiscoMasBarato + "\n";
	}
	//PUNTO B
	mensaje = mensaje + "PUNTO B \n";
	mensaje = mensaje + "- La venta mas cara fue por $" + importeVentaMasCara + " y es del producto " + nombreVentaMasCara + ", se realizo con el tipo de venta " + tipoVenta + "\n";
	//PUNTO C
	mensaje = mensaje + "PUNTO C \n";
	if (contadorMemoriasMenoresA850 == 0)
	{
		mensaje = mensaje + "- No se ingresaron MEMORIAS menores a $850"
	}
	else
	{
		mensaje = mensaje + "- La cantidad de MEMORIAS menores a $850 es de " + contadorMemoriasMenoresA850;
	}

	//MENSAJE FINAL
	alert(mensaje);
}
*/


/*
DIV H - HEREDIA FACUNDO					04-03-2022

2-Nos ingresan una cantidad indeterminada de alumnos inscriptos en programación 1,
validando los datos ingresados:

División [A,B, C] ,nombre del alumno ,legajo [del 1 al 10000] , si es recursante o no y nota.
informar:
a)La división con más aspirantes.
b)el nombre recursante con mayor nota
c)el nombre del que No es recursante y tiene  la menor nota.
Pedir datos por prompt y mostrar por document.write o console.log
*/
/*
function mostrar() 
{
	//VARIABLES
	var division;
	var nombre;
	var legajo;
	var recursante;
	var nota;
	var respuesta;
	var mensaje;
	var contadorDivisionA;
	var contadorDivisionB;
	var contadorDivisionC;
	var divisionConMasAlumnnos;
	var flagNotaNorecursante;
	var notaMenorNoRecursante;
	var nombreNotaMenorNoRecursante;
	var flagNotaRecursante;
	var notaMayorRecursante;
	var nombreNotaMayorRecursante;

	contadorDivisionA = 0;
	contadorDivisionB = 0;
	contadorDivisionC = 0;
	flagNotaNorecursante = 0;
	flagNotaRecursante = 0;

	do
	{
		nombre = prompt("Ingrese el nombre del alumno");
		nombre = nombre.toUpperCase();
		while(nombre == "")
		{
			nombre = prompt("ERROR! Ingrese un nombre para el alumno");
			nombre = nombre.toUpperCase();
		}

		legajo = prompt("Ingrese el numero de legajo de " + nombre + " entre: 1 al 10000");
		legajo = parseInt(legajo);
		while(isNaN(legajo) && (legajo < 1 || legajo > 10000))
		{
			legajo = prompt("ERROR! Ingrese el numero de legajo de " + nombre + " entre: 1 al 10000");
			legajo = parseInt(legajo);
		}

		division = prompt("Ingrese la division a la que pertenece el alumno " + nombre);
		division = division.toUpperCase();
		while (division != "A" && division != "B" && division != "C")
		{
			division = prompt("ERROR! Ingrese la division a la que pertenece el alumno " + nombre + ": A - B -C");
			division = division.toUpperCase();
		}

		nota = prompt("Ingrese la nota de " + nombre);
		nota = parseInt(nota);
		while (isNaN(nota) && (nota < 1 || nota > 10))
		{
			nota = prompt("ERROR! Ingrese una nota valida de " + nombre + " entre 1 y 10");
			nota = parseInt(nota);
		}

		recursante = prompt("¿El alumno " + nombre + " es recursante? SI - NO");
		recursante = recursante.toUpperCase();
		while (recursante != "SI" && recursante != "NO")
		{
			recursante = prompt("ERROR! Responda SI o NO");
			recursante = recursante.toUpperCase();
		}

		//a)La división con más aspirantes.
		switch(division)
		{
			case "A":
				contadorDivisionA = contadorDivisionA + 1;
				break;
				
			case "B":
				contadorDivisionB = contadorDivisionB + 1;
				break;
			
			case "C":
				contadorDivisionC = contadorDivisionC + 1;
				break;
		}

	
		switch(recursante)
		{
			//c)el nombre del que No es recursante y tiene  la menor nota.
			case "NO":
				if(flagNotaNorecursante == 0 || nota < notaMenorNoRecursante)
				{
					notaMenorNoRecursante = nota;
					nombreNotaMenorNoRecursante = nombre;
					flagNotaNorecursante = 1;
				}
				break;
			//b)el nombre recursante con mayor nota
			case "SI":
				if(flagNotaRecursante == 0 || nota > notaMayorRecursante)
				{
					notaMayorRecursante = nota;
					nombreNotaMayorRecursante = nombre;
					flagNotaRecursante = 1;
				}
				break;
		}


		respuesta = confirm("¿Desea ingresar mas alumnos?");
	} while (respuesta == true);


	//MAYOR DIVISION
	if (contadorDivisionA > contadorDivisionB)
	{
		if (contadorDivisionA > contadorDivisionC)
		{
			divisionConMasAlumnnos = "DIVISION A";
		}
		else
		{
			divisionConMasAlumnnos = "DIVISION C";
		}
	}
	else
	{
		
		if (contadorDivisionB > contadorDivisionC)
		{
			divisionConMasAlumnnos = "DIVISION B";
		}
		else
		{
			divisionConMasAlumnnos = "DIVISION C";
		}
	}
	
	//MENSAJE
	//PUNTO A
	mensaje = "PUNTO A <br>";
	mensaje = mensaje + "- La division con mas aspirtantes es " + divisionConMasAlumnnos + "<br>";
	//PUNTO B
	mensaje = mensaje + "PUNTO B <br>";
	if (flagNotaRecursante == 0)
	{
		mensaje = mensaje + "- No se ingresaron RECURSANTES <br>";
	}
	else
	{
		mensaje = mensaje + "- La mayor nota de los RECURSANTES es " + notaMayorRecursante + " y pertenece a " + nombreNotaMayorRecursante + "<br>";
	}
	//PUNTO C
	mensaje = mensaje + "PUNTO C <br>";
	if(flagNotaNorecursante == 0)
	{
		mensaje = mensaje + "- No se ingresaron NO RECURSANTES";
	}
	else
	{
		mensaje = mensaje + "- La menor nota de los NO RECURSANTES es " + notaMenorNoRecursante + " y pertenece a " + nombreNotaMenorNoRecursante;
	}

	document.write(mensaje);
}
*/

/*
DIV H - HEREDIA FACUNDO					04-03-2022

3- De 5  personas que suben a un avión necesitamos tomar y validar los siguientes datos:

nombre , asiento [1 al 100],importe del pasaje de 0 a 300000, sexo [m,f o nb] y edad [1 a 100].
a)Informar el último asiento ingresado con el nombre  y su importe.
b)La edad promedio de las mujeres.
c)el maximo importe ingresado por un pasaje de un pasajero sexo nb.
d)el minimo importe ingresado por un pasaje de un pasajero sexo f.
Pedir datos por prompt y mostrar por document.write o console.log
*/
/*
function mostrar() 
{
	//VARIABLES
	var nombre;
	var asiento;
	var importePasaje;
	var sexo;
	var edad;
	var contador;
	var ultimoAsientoIngresado;
	var nombreUltimoAsientoIngresado;
	var importeUltimoAsientoIngresado;
	var flagMaximoImporte;
	var importePasajeMaximo;
	var nombreImportePasajeMaximo;
	var importePasajeMinimo;
	var nombreImportePasajeMinimo;
	var flagImporteMinimo;
	var mensaje;
	var contadorMujeres;
	var acumuladorEdadMujeres;

	contador = 0;
	flagMaximoImporte = 0;
	flagImporteMinimo = 0;
	contadorMujeres = 0;
	acumuladorEdadMujeres = 0;

	while(contador < 5)
	{
		nombre = prompt("Ingrese el nombre del pasajero");
		nombre = nombre.toUpperCase();
		while (nombre == "")
		{
			nombre = prompt("ERROR! Ingrese un nombre para el pasajero");
			nombre = nombre.toUpperCase();
		}

		asiento = prompt("Ingrese el numero de asiento de " + nombre + " entre 1 a 100");
		asiento = parseInt(asiento);
		while (isNaN(asiento) || asiento < 1 || asiento > 100)
		{
			asiento = prompt("Ingrese el numero de asiento de " + nombre + " entre 1 a 100");
			asiento = parseInt(asiento);
		}

		importePasaje = prompt("Ingrese el importe del pasaje de " + nombre + " entre 0 a 300000");
		importePasaje = parseInt(importePasaje);
		while (isNaN(importePasaje) || importePasaje < 0 || importePasaje > 300000)
		{
			importePasaje = prompt("ERROR! Ingrese el importe del pasaje de " + nombre + " entre 0 a 300000");
			importePasaje = parseInt(importePasaje);
		}

		sexo = prompt("Ingrese el sexo (F - M - NB) del pasajero " + nombre);
		sexo = sexo.toUpperCase();
		while (sexo != "F" && sexo != "M" && sexo != "NB")
		{
			sexo = prompt("ERROR! Ingrese el sexo (F - M - NB) del pasajero " + nombre);
			sexo = sexo.toUpperCase();
		}

		edad = prompt("Ingrese la edad del pasajero " + nombre);
		edad = parseInt(edad);
		while (isNaN(edad) || edad < 1 || edad > 100)
		{
			edad = prompt("ERROR! Ingrese la edad (entre 1 y 100) del pasajero " + nombre);
			edad = parseInt(edad);
		}


		
		switch (sexo)
		{
			//c)el maximo importe ingresado por un pasaje de un pasajero sexo nb.
			case "NB":
				if (flagMaximoImporte == 0 || importePasaje > importePasajeMaximo)
				{
					importePasajeMaximo = importePasaje;
					nombreImportePasajeMaximo = nombre;
					flagMaximoImporte = 1;
				}
				break;
				//b)La edad promedio de las mujeres.	
				//d)el minimo importe ingresado por un pasaje de un pasajero sexo f.
				case "F":
					contadorMujeres = contadorMujeres + 1;
					acumuladorEdadMujeres = acumuladorEdadMujeres + edad;
					
				if (flagImporteMinimo == 0 || importePasaje < importePasajeMinimo)
				{
					importePasajeMinimo = importePasaje;
					nombreImportePasajeMinimo = nombre;
					flagImporteMinimo = 1;
				}
				break;
			}
			
			contador = contador + 1;

			//a)Informar el último asiento ingresado con el nombre  y su importe.
			if(contador == 5)
			{
				ultimoAsientoIngresado = asiento;
				nombreUltimoAsientoIngresado = nombre;
				importeUltimoAsientoIngresado = importePasaje;
			}
		}

	//PROMEDIO EDAD MUJERES
	edadPromedioMujeres = acumuladorEdadMujeres / contadorMujeres;

	//MENSAJE
	//PUNTO A
	mensaje = "PUNTO A <br>";
	mensaje = mensaje + "- El ultimo asiento ingresado es el N° " + ultimoAsientoIngresado + " a nombre de " + nombreUltimoAsientoIngresado + " con un importe de $" + importeUltimoAsientoIngresado + "<br>";
	//PUNTO B
	mensaje = mensaje + "PUNTO B <br>";
	if (contadorMujeres == 0)
	{
		mensaje = mensaje + "- No se ingresaron mujeres <br>";
	}
	else
	{
		mensaje = mensaje + "- El promedio de edad de las mujeres es de " + edadPromedioMujeres + "<br>";
	}
	//PUNTO C
	mensaje = mensaje + "PUNTO C <br>";
	if (flagMaximoImporte == 0)
	{
		mensaje = mensaje + "-No se ingresaron pasajeros del sexo NB <br>";
	}
	else
	{
		mensaje = mensaje + "- El importe Maximo de un pasajero de sexo NB es de $" + importePasajeMaximo + " y es de " + nombreImportePasajeMaximo + "<br>";
	}
	//PUNTO D
	mensaje = mensaje + "PUNTO D <br>";
	if (flagImporteMinimo == 0)
	{
		mensaje = mensaje + "- No se ingresaron pasajeros del sexo F";
	}
	else
	{
		mensaje = mensaje + "- El importe Minimo de un pasajero de sexo F es de $" + importePasajeMinimo + " y es de " + nombreImportePasajeMinimo;
	}
	

	//MENSAJE FINAL
	document.write(mensaje);
}
*/
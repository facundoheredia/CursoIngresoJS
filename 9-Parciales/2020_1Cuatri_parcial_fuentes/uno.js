/*
DIV H - Clase 12 - Heredia Facundo                    25-02-2022
Parcial 2020 - Ejercicio N°1
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
A) El tipo (validar "barbijo" , "jabón" o "alcohol") ,
B) El precio (validar entre 100 y 300),
C.1) La cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
C.2) la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
D) Del más barato de los alcohol, la cantidad de unidades y el fabricante
E.1) Del tipo con mas unidades, E.2) el promedio por compra
F) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	//variables
	var cantidadProductos;
	var producto;
	var tipoProducto;
	var precioProducto;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var mensaje;
	var acumuladorJabon;
	var acumuladorBarbijo;
	var acumuladorAlcohol;
	var tipoConMasUnidades;
	var precioAlcoholMasBarato;
	var cantidadUnidadesAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	var flagAlcoholMasBarato;
	var promedioPorCompra;

	cantidadProductos = 5;
	producto = 0;
	acumuladorJabon = 0;
	acumuladorBarbijo = 0;
	acumuladorAlcohol = 0;
	flagAlcoholMasBarato = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;

	while (producto < cantidadProductos)
	{
		tipoProducto = prompt("Ingrese el tipo de producto: BARBIJO - JABON - ALCOHOL");
		tipoProducto = tipoProducto.toUpperCase();
		while (tipoProducto != "BARBIJO" && tipoProducto != "JABON" && tipoProducto != "ALCOHOL")
		{
			tipoProducto = prompt("Ingrese el tipo de producto: BARBIJO - JABON - ALCOHOL");
			tipoProducto = tipoProducto.toUpperCase();
		}

		precioProducto = prompt("Ingrese el precio del " + tipoProducto);
		precioProducto = parseInt(precioProducto);
		while (isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300)
		{
			precioProducto = prompt("ERROR! Ingrese el precio del " + tipoProducto);
			precioProducto = parseInt(precioProducto);
		}

		cantidadUnidades = prompt("Ingrese la cantidad de unidades de " + tipoProducto);
		cantidadUnidades = parseInt(cantidadUnidades);
		while (isNaN(cantidadUnidades) || cantidadUnidades < 0 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt("Ingrese la cantidad de unidades de " + tipoProducto);
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marca = prompt("Ingrese la marca de " + tipoProducto);
		marca = marca.toUpperCase();
		
		fabricante = prompt("Ingrese el fabricante de " + tipoProducto);
		fabricante = fabricante.toUpperCase();

		switch(tipoProducto)
		{
			case "ALCOHOL":
				acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;
				contadorAlcohol = contadorAlcohol + 1;
				if (flagAlcoholMasBarato == 0 || precioProducto < precioAlcoholMasBarato)
				{
					precioAlcoholMasBarato = precioProducto;
					cantidadUnidadesAlcoholMasBarato = cantidadUnidades;
					fabricanteAlcoholMasBarato = fabricante;
					flagAlcoholMasBarato = 1;
				}
				break;

			case "BARBIJO":
				acumuladorBarbijo = acumuladorBarbijo + cantidadUnidades;
				contadorBarbijo = contadorBarbijo + 1;
				break;

			case "JABON":
				acumuladorJabon = acumuladorJabon + cantidadUnidades;
				contadorJabon = contadorJabon + 1;
				break;
		}

		producto++;
	}

	//E.2) el promedio por compra
	if (acumuladorAlcohol > acumuladorBarbijo)
	{
		if (acumuladorAlcohol > acumuladorJabon)
		{
			tipoConMasUnidades = "ALCOHOL";
			promedioPorCompra = acumuladorAlcohol / contadorAlcohol;
		}
		else
		{
			tipoConMasUnidades = "JABON";
			promedioPorCompra = acumuladorJabon / contadorJabon;
		}
	}
	else
	{
		if (acumuladorBarbijo > acumuladorJabon)
		{
			tipoConMasUnidades = "BARBIJO";
			promedioPorCompra = acumuladorBarbijo / contadorBarbijo;
		}
		else
		{
			tipoConMasUnidades = "JABON";
			promedioPorCompra = acumuladorJabon / contadorJabon;
		}
	}

	//MENSAJE

	mensaje = "D) El fabricante del alcohol mas barato es " + fabricanteAlcoholMasBarato + " y llevas " + cantidadUnidadesAlcoholMasBarato + "\n"; 
	mensaje = mensaje + "E) El producto con mas unidades es " + tipoConMasUnidades + "\n";
	mensaje = mensaje + " - El promedio por compra es " + promedioPorCompra + "\n";
	mensaje = mensaje + "F) La cantidad de jabones es de " + acumuladorJabon;
	
	alert(mensaje);
}
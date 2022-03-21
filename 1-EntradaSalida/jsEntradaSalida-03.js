/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//Declaro la VARIABLE
	var nombreIngresado;

	//Guardo en la VARIABLE la informacion escrita en la caja de texto de ID " "
	nombreIngresado = document.getElementById("txtIdNombre").value;

	//Muestro por ALERT el mensaje y la informacion guardada en la VARIABLE
	alert("Su nombre es: " + nombreIngresado);
}

//https://onlinegdb.com/qvRe9m5xN




/*
1. Se ingresan 5 importes, marca del producto y pías de origen (China, Uruguay o Paraguay).
Calcular y mostrar:
a. Mínimo importe con su pías
b. Máximo importe con su marca
c. Promedio importe
d. Cantidad de productos de China
e. Sobre el máximo encontrado aplicar un descuento del 10% a dicho importe.
*/

//15 min 27 seg con testeo

/*function mostrar()
{
	//variables
	var importe;
	var marca;
	var pais;
	var contador;
	var flag;
	var importeMaximo;
	var importeMinimo;
	var paisMinimo;
	var marcaMaximo;
	var acumuladorImporte;
	var promedioImporte;
	var contadorProductosDeChina;
	var descuento;
	var importeMaximoDescuento;
	var importeMaximoFinal;

	contador = 0;
	flag = 0;

	while (contador < 5)
	{	
		importe = prompt("ingrese el importe del producto");
		importe = parseInt(importe);

		while (isNaN(importe) || importe < 1)
		{
			importe = prompt("ERROR! ingrese el importe del producto");
			importe = parseInt(importe);
		}

		marca = prompt("ingrese la marca del producto");
		
		pais = prompt("ingrese el pais de origen: china - uruguay - paraguay");
		pais = pais.toLowerCase();
		while (pais != "china" && pais != "uruguay" && pais != "paraguay")
		{
			pais = prompt("ingrese el pais de origen: china - uruguay - paraguay");
			pais = pais.toLowerCase();
		}

		if(flag == 0)
		{
			importeMinimo = importe;
			paisMinimo = pais;
			importeMaximo = importe;
			marcaMaximo = marca;
			acumuladorImporte = 0;
			contadorProductosDeChina = 0;
			descuento = 10;
			flag = 1;
		}

		if (importe < importeMinimo)
		{
			importeMinimo = importe;
			paisMinimo = pais;
		}
		else
		{
			if (importe > importeMaximo)
			{
				importeMaximo = importe;
				marcaMaximo = marca;
			}
		}

		if (pais == "china")
		{
			contadorProductosDeChina = contadorProductosDeChina + 1;
		}


		acumuladorImporte = acumuladorImporte + importe;
		contador = contador + 1;
	}

	//promedio importe
	promedioImporte = acumuladorImporte / contador;

	//Descuento importe maximo
	importeMaximoDescuento = importeMaximo * descuento / 100;
	importeMaximoFinal = importeMaximo - importeMaximoDescuento;


	//Mensaje
	mensaje = "A) El importe minimo es de $" + importeMinimo + " y es del pais " + paisMinimo + "\n";
	mensaje = mensaje + "B) El importe maximo es de $" + importeMaximo + " y es de la marca " + marcaMaximo + "\n";
	mensaje = mensaje + "C) El promedio del importe total es de $" + promedioImporte + "\n";
	mensaje = mensaje + "D) La cantidad de productos procedentes de china son " + contadorProductosDeChina + "\n";
	mensaje = mensaje + "E) Del valor maximo se hizo un descuento del " + descuento + "%, dando un total de $" + importeMaximoFinal + " a pagar";

	alert(mensaje);

}
*/

/*
2. La empresa SILKEY necesita liquidar las comisiones de sus 3 vendedores para la zona sur de GBA.
Se cargan las planillas de ventas que poseen los siguientes datos (No sabemos cuantas planillas hay):
*Nombre de vendedor (Juan, Pedro o María)
*Importe de la venta (numero positivo NO mayor que 10000)
Al terminar de cargar las planillas se debe calcular el total de la comisión por vendedor:
Si el vendedor logro recaudar en sus ventas un importe mayor o igual a $500000 obtendrá una
comisión del 10% sobre ese total.
De no alcanzar esta cifra, su comisión será del 5%.
Mostrar:
a. Importe total de ventas, cantidad de ventas y comisión. (Por cada vendedor)
b. El nombre del vendedor que mas dinero recaudo en comisiones

//15 min 21 seg con testeo
*/

/*
function mostrar()
{
	var nombreVendedor;
	var importe;
	var respuesta;
	var acumuladorImporteJuan;
	var acumuladorImporteMaria;
	var acumuladorImportePedro;
	var flag;
	var comisionJuan;
	var comisionMaria;
	var comisionPedro;
	var importeComsionJuan;
	var importeComsionMaria;
	var importeComsionPedro;
	var contadorVentasJuan;
	var contadorVentasMaria;
	var contadorVentasPedro;
	var mensaje;

	respuesta = true;
	flag = 0;

	while (respuesta == true)
	{
		nombreVendedor = prompt("Ingrese el nombre del vendedor");
		nombreVendedor = nombreVendedor.toLocaleLowerCase();
		while (nombreVendedor != "juan" && nombreVendedor != "pedro" && nombreVendedor != "maria")
		{
			nombreVendedor = prompt("ERROR! Ingrese el nombre del vendedor: juan - maria - pedro");
			nombreVendedor = nombreVendedor.toLocaleLowerCase();
		}

		importe = prompt("Ingrese el importe de venta de " + nombreVendedor);
		importe = parseInt(importe);
		while (isNaN(importe) && importe < 1 || importe > 10000)
		{
			importe = prompt("Ingrese el importe de venta entre $0 a $10000 de " + nombreVendedor);
			importe = parseInt(importe);
		}

		if (flag ==0)
		{
			acumuladorImporteJuan = 0;
			acumuladorImporteMaria = 0;
			acumuladorImportePedro = 0;
			contadorVentasJuan = 0;
			contadorVentasMaria = 0;
			contadorVentasPedro = 0;
			flag = 1;
		}

		switch (nombreVendedor)
		{
			case "juan":
				acumuladorImporteJuan = acumuladorImporteJuan + importe;
				contadorVentasJuan = contadorVentasJuan + 1;
			break;

			case "maria":
				acumuladorImporteMaria = acumuladorImporteMaria + importe;
				contadorVentasMaria = contadorVentasMaria + 1;
			break;

			case "pedro":
				acumuladorImportePedro = acumuladorImportePedro + importe;
				contadorVentasPedro = contadorVentasPedro + 1;
			break;
		}

		respuesta = confirm("¿Desea ingresar mas planillas?");
	}

	if (acumuladorImporteJuan > 50000)
	{
		comisionJuan = 10;
	}
	else
	{
		comisionJuan = 5;
	}

	if (acumuladorImporteMaria > 50000)
	{
		comisionMaria = 10;
	}
	else
	{
		comisionMaria = 5;
	}

	if (acumuladorImportePedro > 50000)
	{
		comisionPedro = 10;
	}
	else
	{
		comisionPedro = 5;
	}

	importeComsionJuan = acumuladorImporteJuan * comisionJuan / 100;
	importeComsionMaria = acumuladorImporteMaria * comisionMaria / 100;
	importeComsionPedro = acumuladorImportePedro * comisionPedro / 100;

	if (importeComsionJuan > importeComsionMaria)
	{
		if (importeComsionJuan > importeComsionPedro)
		{
			mayorImporteComision = "Juan";
		}
		else
		{
			mayorImporteComision = "Pedro";
		}
	}
	else
	{
		if (importeComsionMaria > importeComsionPedro)
		{
			mayorImporteComision = "Maria";
		}
		else
		{
			mayorImporteComision = "Pedro";
		}
	}

	//MENSAJES
	mensaje = "A) El importe total de ventas por vendedor es: \n";
	mensaje = mensaje + "- Juan recaudo $" + acumuladorImporteJuan + " con la cantidad de ventas de " + contadorVentasJuan + "\n";
	mensaje = mensaje + "- Maria recaudo $" + acumuladorImporteMaria + " con la cantidad de ventas de " + contadorVentasMaria + "\n";
	mensaje = mensaje + "- Pedro recaudo $" + acumuladorImportePedro + " con la cantidad de ventas de " + contadorVentasPedro + "\n";
	mensaje = mensaje + "B) El vendedor que mas recuado en comisiones fue " + mayorImporteComision;

	alert(mensaje);
}
*/



/*3. De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)
El programa deberá mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.

Sabiendo que:
*Si no tiene hijos no le corresponde asignación familiar
*Si tiene un hijo le corresponde 5000
*Si tiene dos hijos le corresponde 8000 por sus dos hijos
*Y si tiene más de dos hijos le corresponde 10000

d. Mostrar el total de dinero que deberá pagar la PYME en concepto de asignaciones

//25 min 27 seg
*/
/*
function mostrar()
{
	//variables
	var nombreEmpleado;
	var apellidoEmpleado;
	var generoEmpleado;
	var cantidadHijosEmpleado;
	var contador;
	var contadorGeneroFemenino;
	var contadorGeneroMasculino;
	var contadorGeneroNoBinario;
	var porcentajeGeneroFemenino;
	var porcentajeGeneroMasculino;
	var porcentajeGeneroNoBinario;
	var empleadoSinHijosNombre;
	var empleadoSinHijosApellido;
	var mayorCantidadHijosNoBinario;
	var mayorCantidadHijosNoBinarionombre;
	var asignacionHijos;
	var acumuladorAsignacionesHijos;
	var flag;
	var flagSinHijos;
	var mensaje;

	contador = 0;
	flag = 0;
	contadorGeneroFemenino = 0;
	contadorGeneroMasculino = 0;
	contadorGeneroNoBinario = 0;
	acumuladorAsignacionesHijos = 0;

	while (contador < 10)
	{	
		nombreEmpleado = prompt("Ingrese el nombre del empleado");

		apellidoEmpleado = prompt("Ingrese el apellido de " + nombreEmpleado);

		generoEmpleado = prompt("Ingrese el genero (Femenino - Masculino - No Binario) de " + nombreEmpleado + " " + apellidoEmpleado);
		while (generoEmpleado != "Femenino" && generoEmpleado != "Masculino" && generoEmpleado != "No Binario")
		{
			generoEmpleado = prompt("ERROR! Ingrese un dato valido para el genero (Femenino - Masculino - No Binario) de " + nombreEmpleado + " " + apellidoEmpleado);
		}

		cantidadHijosEmpleado = prompt("Ingrese la cantidad de hijos que tiene " + nombreEmpleado + " " + apellidoEmpleado);
		cantidadHijosEmpleado = parseInt(cantidadHijosEmpleado);
		while(isNaN(cantidadHijosEmpleado) && cantidadHijosEmpleado < 0)
		{
			cantidadHijosEmpleado = prompt("ERROR! Ingrese un numero y mayor a 0 para la cantidad de hijos que tiene " + nombreEmpleado + " " + apellidoEmpleado);
			cantidadHijosEmpleado = parseInt(cantidadHijosEmpleado);
		}

		if (flag == 0)
		{
			empleadoSinHijosApellido = "";
			empleadoSinHijosNombre = "";
			mayorCantidadHijosNoBinario = "";
			mayorCantidadHijosNoBinarionombre = "";		
			flagSinHijos = 0;
			flag = 1;
		}

		if (flagSinHijos == 0 && cantidadHijosEmpleado == 0)
		{
			empleadoSinHijosNombre = nombreEmpleado;
			empleadoSinHijosApellido = apellidoEmpleado;
			flagSinHijos = 1;
		}

		switch(generoEmpleado)
		{
			case "Femenino":
				contadorGeneroFemenino = contadorGeneroFemenino + 1;
			break;

			case "Masculino":
				contadorGeneroMasculino = contadorGeneroMasculino + 1;
			break;

			case "No Binario":
				contadorGeneroNoBinario = contadorGeneroNoBinario + 1;
				
				if (cantidadHijosEmpleado > mayorCantidadHijosNoBinario)
				{
					mayorCantidadHijosNoBinario = cantidadHijosEmpleado;
					mayorCantidadHijosNoBinarionombre = nombreEmpleado;
				}
			break;
		} 

		if (cantidadHijosEmpleado > 2)
		{
			asignacionHijos = 10000;
		}
		else
		{
			if (cantidadHijosEmpleado == 2)
			{
				asignacionHijos = 8000;
			}
			else
			{
				if (cantidadHijosEmpleado == 1)
				{
					asignacionHijos = 5000;
				}
				else
				{
					asignacionHijos = 0;
				}
			}
		}
		//ASIGNACIONES A PAGAR
		acumuladorAsignacionesHijos = acumuladorAsignacionesHijos + asignacionHijos;

		contador = contador + 1;
	}

	//PORCENTAJES
	porcentajeGeneroFemenino = contadorGeneroFemenino * 100 / contador;
	porcentajeGeneroMasculino = contadorGeneroMasculino * 100 / contador;
	porcentajeGeneroNoBinario = contadorGeneroNoBinario * 100 / contador;

	//MENSAJE
	//PUNTO A
	mensaje = "A) El porcentaje de cada genero es: \n";
	mensaje = mensaje + "- Femenino es " + porcentajeGeneroFemenino + "% \n";
	mensaje = mensaje + "- Masculino " + porcentajeGeneroMasculino + "% \n";
	mensaje = mensaje + "- No Binario es " + porcentajeGeneroNoBinario + "% \n";
	//PUNTO B
	mensaje = mensaje + "B) El empleado No Binario con mayor cantidad de hijos es " + mayorCantidadHijosNoBinarionombre + " con " + mayorCantidadHijosNoBinario + ".\n";
	//PUNTO C
	mensaje = mensaje + "C) El primer empleado sin hijos ingresado es " + empleadoSinHijosNombre + " " + empleadoSinHijosApellido + "\n";
	//PUNTO D
	mensaje = mensaje + "D) El total de asignaciones a pagar es de $" + acumuladorAsignacionesHijos;

	alert(mensaje);
}*/

/*
function mostrar() {
	//VARIABLES
	let cantidadTotalDeEmpleados;
	let cantidadDeEmpleados;
 
	let nombreEmpleado;
	let apellidoEmpleado;
	let generoEmpleado;
	let cantidadDeHijosEmpleado;
 
	let contadorGenM;
	let contadorGenF;
	let contadorGenNB;
 
	let porcentajeM;
	let porcentajeF;
	let porcentajeNB;
 
	let entradaDelPrimerNB;
	let maximaCantidadDeHijosNB;
	let nombreCantidadDeHijosNB;
 
	let primerEmpleadoSinHijos;
	let nombreApellidoPrimerEmpleadoSinHijos;
 
	let acumuladorTotalDeAsignacion;
 
	//INICIALIZO
	cantidadTotalDeEmpleados = 5;
	cantidadDeEmpleados = 0;
	contadorGenM = 0;
	contadorGenF = 0;
	contadorGenNB = 0;
	acumuladorTotalDeAsignacion = 0;
 
	entradaDelPrimerNB = true;
	primerEmpleadoSinHijos = true;
 
 
	//LOGICA 
	while (cantidadDeEmpleados < cantidadTotalDeEmpleados) {
	   //Nombre
	   nombreEmpleado = prompt("INGRESE SU NOMBRE");
	   nombreEmpleado = nombreEmpleado.toUpperCase();
	   while (nombreEmpleado == "") {
		  nombreEmpleado = prompt("EROOR. INGRESE SU NOMBRE NUEVAMENTE");
		  nombreEmpleado = nombreEmpleado.toUpperCase();
	   }
 
	   //Apellido
	   apellidoEmpleado = prompt("INGRESE SU APELLIDO");
	   apellidoEmpleado = apellidoEmpleado.toUpperCase();
	   while (apellidoEmpleado == "") {
		  apellidoEmpleado = prompt("EROOR. INGRESE SU APELLIDO NUEVAMENTE");
		  apellidoEmpleado = apellidoEmpleado.toUpperCase();
	   }
 
	   //Genero
	   generoEmpleado = prompt("INGRESE EL GENERO");
	   generoEmpleado = generoEmpleado.toUpperCase();
	   while (generoEmpleado != "F" && generoEmpleado != "M" && generoEmpleado != "NB") {
		  generoEmpleado = prompt("EROOR. INGRESE EL GENERO NUEVAMENTE");
		  generoEmpleado = generoEmpleado.toUpperCase();
	   }
 
	   //Cantidad de Hijos 
	   cantidadDeHijosEmpleado = prompt("INGRESE CANTIDAD DE HIJOS");
	   cantidadDeHijosEmpleado = parseInt(cantidadDeHijosEmpleado);
	   while (isNaN(cantidadDeHijosEmpleado) || cantidadDeHijosEmpleado < 0) {
		  cantidadDeHijosEmpleado = prompt("ERROR. INGRESE CANTIDAD DE HIJOS NUEVAMENTE");
		  cantidadDeHijosEmpleado = parseInt(cantidadDeHijosEmpleado);
	   }
 
	   //TODOS MIS DATOS VALIDADOS
	   switch (generoEmpleado) {
		  case "M":
			 contadorGenM++;
			 break;
 
		  case "F":
			 contadorGenF++;
			 break;
 
		  case "NB":
			 contadorGenNB++;
			 if (entradaDelPrimerNB == true || cantidadDeHijosEmpleado > maximaCantidadDeHijosNB) {
				maximaCantidadDeHijosNB = cantidadDeHijosEmpleado;
				nombreCantidadDeHijosNB = nombreEmpleado;
				entradaDelPrimerNB = false;
			 }
			 break;
	   }
 
	   /*
	   if (primerEmpleadoSinHijos == true && cantidadDeHijosEmpleado == 0) {
		  nombreApellidoPrimerEmpleadoSinHijos = apellidoEmpleado + ", " + nombreEmpleado;
		  primerEmpleadoSinHijos = false;
	   }
	   */
 /*
	   switch (cantidadDeHijosEmpleado) {
		  case 0:
			 if (primerEmpleadoSinHijos == true) {
				nombreApellidoPrimerEmpleadoSinHijos = apellidoEmpleado + ", " + nombreEmpleado;
				primerEmpleadoSinHijos = false;
			 }
			 console.log(0);
			 break;
		  case 1:
			 acumuladorTotalDeAsignacion = acumuladorTotalDeAsignacion + 5000;
			 console.log(5000);
			 break;
		  case 2:
			 acumuladorTotalDeAsignacion += 8000;
			 console.log(8000);
			 break;
		  default:
			 acumuladorTotalDeAsignacion += 10000;
			 console.log(10000);
			 break;
	   }
 
	   cantidadDeEmpleados++;
	}
 
	//CALCULOS DE PROMEDIO / PORCENTAJE / ETC
	porcentajeM = (contadorGenM * 100) / cantidadTotalDeEmpleados;
	porcentajeF = (contadorGenF * 100) / cantidadTotalDeEmpleados;
	porcentajeNB = (contadorGenNB * 100) / cantidadTotalDeEmpleados;
 
	//INFORMAR
	let mensaje = "";
	
	porcentajeM = porcentajeM.toFixed(2) + "%";
	porcentajeF = porcentajeF.toFixed(2) + "%";
	porcentajeNB = porcentajeNB.toFixed(2) + "%";
 
	mensaje = "A)\n";
	mensaje += "M: " + porcentajeM + " F: " + porcentajeF + " NB: " + porcentajeNB + "\n";
	mensaje += "B)\n";
	
	if(entradaDelPrimerNB == true){
	   mensaje += "No hubo empleados de genero NB\n";
	}else{
	   mensaje += "El NB con mas hijos es: " + nombreCantidadDeHijosNB + " - Cant Hijos: " + maximaCantidadDeHijosNB + "\n";
	}
 
	mensaje += "C)\n";
	if(primerEmpleadoSinHijos == true){
	   mensaje += "No hubo empleados sin hijos\n";
	}else{
	   mensaje += "El primer empleado sin hijoos es: " + nombreApellidoPrimerEmpleadoSinHijos + "\n";
	}
 
	mensaje += "D)\n";
	mensaje += "Total de dinero que debera pagar la PYME: $ " + acumuladorTotalDeAsignacion;
 
	alert(mensaje);
 }
 

*/
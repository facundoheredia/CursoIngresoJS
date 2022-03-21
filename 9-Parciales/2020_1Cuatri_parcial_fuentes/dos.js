/*
DIV H - Clase 12 - Heredia Facundo                              25-02-2022                   
Parcial 2020 - Ejercicio N°2
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.

A) El importe total a pagar , bruto sin descuento y...
B) el importe total a pagar con descuento(solo si corresponde)
C) Informar el tipo con mas cantidad de bolsas.
D) El tipo mas caro
*/

function mostrar()
{
 
  var producto;
  var cantidadBolsas;
  var precioPorBolsas;
  var respuesta;
  var porcentaje;
  var acumuladorBolsasTotales;
  var mensaje;
  var acumuladorBolsasArena;
  var precioTotalBolsasArena;
  var acumuladorBolsasCal;
  var precioTotalBolsasCal;
  var acumuladorBolsasCemento;
  var precioTotalBolsasCemento;
  var importeBruto;
  var descuento;
  var importeBrutoConDescuento;
  var tipoConMasBolsas;
  var tipoMasCaro;

  respuesta = true;
  acumuladorBolsasTotales = 0;
  acumuladorBolsasArena = 0;
  acumuladorBolsasCal = 0;
  acumuladorBolsasCemento = 0;
  precioTotalBolsasArena = 0;
  precioTotalBolsasCal = 0;
  precioTotalBolsasCemento = 0;

  while (respuesta == true)
  {

    producto = prompt("Ingrese el tipo de producto: ARENA - CAL - CEMENTO");
    producto = producto.toUpperCase();
    while (producto != "ARENA" && producto != "CAL" && producto != "CEMENTO")
    {
      producto = prompt("ERROR! Ingrese el tipo de producto: ARENA - CAL - CEMENTO");
      producto = producto.toUpperCase();
    }

    cantidadBolsas = prompt("Ingrese la cantidad de boslas de " + producto);
    cantidadBolsas = parseInt(cantidadBolsas);
    while (isNaN(cantidadBolsas) || cantidadBolsas < 1)
    {
      cantidadBolsas = prompt("Ingrese la cantidad de boslas de " + producto);
      cantidadBolsas = parseInt(cantidadBolsas);
    }

    precioPorBolsas = prompt("Ingrese el precio por bolsas de " + producto);
    precioPorBolsas = parseInt(precioPorBolsas);
    while(isNaN(precioPorBolsas) || precioPorBolsas < 1)
    {
      precioPorBolsas = prompt("Ingrese el precio por bolsas de " + producto);
      precioPorBolsas = parseInt(precioPorBolsas);
    }

    switch(producto)
    {
      case "ARENA":
        acumuladorBolsasArena = acumuladorBolsasArena + cantidadBolsas;
        precioTotalBolsasArena = acumuladorBolsasArena * precioPorBolsas;
        break;

      case "CAL":
        acumuladorBolsasCal = acumuladorBolsasCal + cantidadBolsas;
        precioTotalBolsasCal = acumuladorBolsasCal * precioPorBolsas;
        break;
      
      case "CEMENTO":
        acumuladorBolsasCemento = acumuladorBolsasCemento + cantidadBolsas;
        precioTotalBolsasCemento = acumuladorBolsasCemento * precioPorBolsas;
        break;
    }

    acumuladorBolsasTotales = acumuladorBolsasTotales + cantidadBolsas;
    respuesta = confirm("¿Desea agregar mas productos?");
  }

  //Porcentaje
  if (acumuladorBolsasTotales > 10)
  {
    if (acumuladorBolsasTotales > 30)
    {
      porcentaje = 25;
    }
    else
    {
      porcentaje = 15;
    }
  }
  else
  {
    porcentaje = 0;
  }

  importeBruto = precioTotalBolsasArena + precioTotalBolsasCal + precioTotalBolsasCemento;
  descuento = importeBruto * porcentaje / 100;
  importeBrutoConDescuento = importeBruto - descuento;

  if(acumuladorBolsasCal > acumuladorBolsasCemento)
  {
    if (acumuladorBolsasCal > acumuladorBolsasArena)
    {
      tipoConMasBolsas = "CAL";
    }
    else
    {
      tipoConMasBolsas = "ARENA";
    }
  }
  else
  {
    if(acumuladorBolsasCemento > acumuladorBolsasArena)
    {
      tipoConMasBolsas = "CEMENTO";
    }
    else
    {
      tipoConMasBolsas = "ARENA";
    }
  }

  if(precioTotalBolsasCal > precioTotalBolsasCemento)
  {
    if (precioTotalBolsasCal > precioTotalBolsasArena)
    {
      tipoMasCaro = "CAL";
    }
    else
    {
      tipoMasCaro = "ARENA";
    }
  }
  else
  {
    if(precioTotalBolsasCemento > precioTotalBolsasArena)
    {
      tipoMasCaro = "CEMENTO";
    }
    else
    {
      tipoMasCaro = "ARENA";
    }
  }


  //Mensaje
  mensaje = "A) El importe bruto a pagar es de $" + importeBruto + "\n";
  mensaje = mensaje + "B) El importe bruto con descuento es de $" + importeBrutoConDescuento + "\n";
  mensaje = mensaje + "C) El tipo de producto con mas bolsas es " + tipoConMasBolsas + "\n";
  mensaje = mensaje + "D) El tipo de producto mas caro es " + tipoMasCaro;


  alert(mensaje);

}
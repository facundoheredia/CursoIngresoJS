/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
A) El importe total a pagar , bruto sin descuento y...
B) el importe total a pagar con descuento(solo si corresponde)
C) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
D) El tipo mas caro
*/

function mostrar()
{
  //Declaracion de variables
  //validaciones
  var producto;
  var cantidadBolsas;
  var cantidadBolsasParseadas;
  var precioPorBolsa;
  var precioPorBolsaParseada
  //Descuentos
  var contadorBolsasParseadasTotales;
  var porcentaje;
  var descuento;
  //acumuladores
  var acumuladorBolsasArena;
  var acumuladorBolsasCal;
  var acumuladorBolsasCemento;
  //iteraciones
  var respuesta;


  //inicio variables
  respuesta = "si";


  //iteracion while
  while (respuesta == "si")
  {
    //validaciones
    producto = prompt("Ingrese el producto que va a llevar: arena - cal - cemento");
    while (producto != "arena" && producto != "cal" && producto != "cemento")
    {
      producto = prompt("Ingrese un producto valido: arena - cal - cemento");
    }

    cantidadBolsas = prompt("¿Cuantas bolsas lleva de " + producto + "?");
    cantidadBolsasParseadas = parseInt(cantidadBolsas);
    while (isNaN(cantidadBolsasParseadas) && cantidadBolsasParseadas < 0)
    {
      cantidadBolsas = prompt("Ingrese un numero y mayor a 0");
      cantidadBolsasParseadas = parseInt(cantidadBolsas);
    }

    precioPorBolsa = prompt("¿Cual es el precio por bolsa de " + producto + "?");
    precioPorBolsaParseada = parseInt(precioPorBolsa);
    while(isNaN(precioPorBolsaParseada) && precioPorBolsaParseada < 0)
    {
      precioPorBolsa = prompt("Ingrese un numero y mayor a 0");
      precioPorBolsaParseada = parseInt(precioPorBolsa);
    }

    if(flag == 0)
    {
      acumuladorBolsasArena = 0;
      acumuladorBolsasCal = 0;
      acumuladorBolsasCemento = 0;
      contadorBolsasParseadasTotales = 0;
      flag = 1;
    }

    //Cantidades de bolsas de acda tipo
    switch (producto)
    {
      case "arena":
        acumuladorBolsasArena = acumuladorBolsasArena + cantidadBolsasParseadas;
      break;

      case "cal":
        acumuladorBolsasCal = acumuladorBolsasCal + cantidadBolsasParseadas;
      break;

      case "cemento":
        acumuladorBolsasCemento = acumuladorBolsasCemento + cantidadBolsasParseadas;
      break;
    }

    contadorBolsasParseadasTotales = contadorBolsasParseadasTotales + cantidadBolsasParseadas;
    precioBruto = precioPorBolsaParseada;

    //Repeticion o fin de iteracion
    respuesta = prompt("¿Quiere agregar mas productos?");
    while (respuesta != "si" && respuesta != "no")
    {
      respuesta = prompt("Responda si o no para seguir agregando otro producto");
    }
  }

  //Precio final
  precioBruto = contadorBolsasParseadasTotales;

  //Descuentos
  if (contadorBolsasParseadasTotales > 10)
  {
    if (contadorBolsasParseadasTotales > 30)
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

  if(porcentaje != 0)
  {
    descuento = "PONER EL VALOR TOTAL" * porcentaje / 100;
  }

  //Producto con mayor cantidad
  if (acumuladorBolsasArena > acumuladorBolsasCal)
  {
    if (acumuladorBolsasArena > acumuladorBolsasCemento)
    {
      productoMayorCantidadBolsas = producto;
    }
    else
    {
      productoMayorCantidadBolsas = producto;
    }
  }
  else
  {
    if (acumuladorBolsasCal > acumuladorBolsasCemento)
    {
      productoMayorCantidadBolsas = producto;
    }
    else
    {
      productoMayorCantidadBolsas = producto;
    }
  }




}

/*
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/

function CalcularPrecio () 
{
   //Declaro las variables
   var precioLamparitas;
   var cantidadLamparitas;
   var porcentaje;
   var marcaLamparitas;
   var importe;
   var descuento;
   var importeFinal;
   var ingresosBrutosPorcentaje;

   //Inicio las variables
   precioLamparitas = 35;

   //Obtengo los valores ingresados por el usuario
   marcaLamparitas = document.getElementById("Marca").value;
   cantidadLamparitas = document.getElementById("txtIdCantidad").value;
   cantidadLamparitasParseadas = parseInt(cantidadLamparitas);

   //Operacion switch - if

   switch (cantidadLamparitasParseadas)
   {
      case 1:
      case 2:
         //No importa la marca ninguna tiene descuento
         porcentaje = 0;
      break;
      
      case 3: // Punto D
         
         if (marcaLamparitas == "ArgentinaLuz") 
         {
            porcentaje = 15;
         }
         else
         {
            if (marcaLamparitas == "FelipeLamparas")
            {
               porcentaje = 10;
            }
            else
            {
               porcentaje = 5;
            }
         }
      break;

      case 4: // Punto C
         
         if (marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas")
         {
            porcentaje = 25;
         }
         else
         {
            porcentaje = 20;
         }      
      break;

      case 5: // Punto B
        
         if (marcaLamparitas == "ArgentinaLuz") //Si es ArgentinaLuz se hace un 40 y si es otra un 30
         {
            porcentaje = 40;
         }
         else
         {
            porcentaje = 30;
         }
      break;

      default: //Si 6 o mas // Punto A ?
         porcentaje = 50;
      break;
   }

   //Operaciones segun cantidad, descuento, ingresos brutos
   importe = precioLamparitas * cantidadLamparitasParseadas;
   descuento = importe * porcentaje / 100;
   importeFinal = importe - descuento;

   if (importeFinal > 120) //Deberia entrar solo en "7 lamparas o mas" Y en "5 lamparas de otra marca que no sea ARGENTINALUZ"
   {
      ingresosBrutosPorcentaje = 10;
      ingresosBrutos = importeFinal * ingresosBrutosPorcentaje / 100;
      //Mensaje a mostrar si supera los 120
      alert("Usted pago: $" + ingresosBrutos + " de IIBB");
   }

   //------------------ NO ESCRIBIR NADA DEBAJO DE ESTO ------------------
   document.getElementById("txtIdprecioDescuento").value = "El precio final a pagar es de: $" + importeFinal;
}
//https://onlinegdb.com/y8Ul1sbHz








/*
function CalcularPrecio () 
{
   //Declaro las variables
   var precioLamparitas;
   var cantidadLamparitas;
   var porcentaje;
   var marcaLamparitas;
   var importe;
   var descuento;
   var importeFinal;
   var ingresosBrutosPorcentaje;

   //Inicio las variables
   precioLamparitas = 35;

   //Obtengo los valores ingresados por el usuario
   marcaLamparitas = document.getElementById("Marca").value;
   cantidadLamparitas = document.getElementById("txtIdCantidad").value;
   cantidadLamparitasParseadas = parseInt(cantidadLamparitas);

   //Operacion switch
   switch (cantidadLamparitasParseadas)
   {
      case 1:
      case 2:
         //No importa la marca ninguna tiene descuento
         porcentaje = 0;
      break;
      
      case 3: // Punto D
         
         switch (marcaLamparitas) //Si es ArgentinaLuz es de 15, si es FelipeLamparas un 10 y si es otra un 5
         {
            case "ArgentinaLuz":
               porcentaje = 15;
            break;

            case "FelipeLamparas":
               porcentaje = 10;
            break;

            default:
               porcentaje = 5;
            break
         }
      break;

      case 4: // Punto C
         
         switch (marcaLamparitas) //Si es ArgentinaLuz o FelipeLamparas es un 25 y si es otra un 20
         {
            case "ArgentinaLuz":
            case "FelipeLamparas":
               porcentaje = 25;
            break;

            default:
               porcentaje = 20;
            break
         }      
      break;

      case 5: // Punto B
        
         switch (marcaLamparitas)  //Si es ArgentinaLuz se hace un 40 y si es otra un 30
         {
            case "ArgentinaLuz":
               porcentaje = 40;
            break;

            default:
               porcentaje = 30;
            break
         }
      break;

      default: //Si 6 o mas // Punto A ?
         porcentaje = 50;
      break;
   }

   //Operaciones segun cantidad, descuento, ingresos brutos
   importe = precioLamparitas * cantidadLamparitasParseadas;
   descuento = importe * porcentaje / 100;
   importeFinal = importe - descuento;

   if (importeFinal > 120) //Deberia entrar solo en "7 lamparas o mas" Y en "5 lamparas de otra marca que no sea ARGENTINALUZ"
   {
      ingresosBrutosPorcentaje = 10;
      ingresosBrutos = importeFinal * ingresosBrutosPorcentaje / 100;
      //Mensaje a mostrar si supera los 120
      alert("Usted pago: $" + ingresosBrutos + " de IIBB");
   }

   //------------------ NO ESCRIBIR NADA DEBAJO DE ESTO ------------------
   document.getElementById("txtIdprecioDescuento").value = "El precio final a pagar es de: $" + importeFinal;
}
//https://onlinegdb.com/ZeJV3KwNs
*/













/*
function CalcularPrecio () 
{
   //Declaro las VARIABLES
   var cantidadLamparitas;
   var cantidadLamparitasParseadas;
   var precioLamparitas;
   var marcaLamparitas;
   var descuento;
   var porcentaje;
   var importeFinal;
   var ingresosBrutosPorcentaje;
   var ingresosBrutos;

   //Doy valores a las VARIABLES necesarias
   precioLamparitas = 35;
   porcentaje = 0;

   //Obtengo la cantidad de lamparas
   cantidadLamparitas = document.getElementById("txtIdCantidad").value;
   cantidadLamparitasParseadas = parseInt(cantidadLamparitas);
   //Obtengo la marca de lamparas
   marcaLamparitas = document.getElementById("Marca").value;

   if (marcaLamparitas == "ArgentinaLuz") //Todo ArgentinaLuz
   {
      if (cantidadLamparitasParseadas >= 6)
      {
         porcentaje = 50;
      }
      else
      {
         if (cantidadLamparitasParseadas == 5)
         {
            porcentaje = 40;
         }
         else
         {
            if (cantidadLamparitasParseadas == 4)
            {
               porcentaje = 25;
            }
            else
            {
               if (cantidadLamparitasParseadas == 3)
               {
                  porcentaje = 15;
               }
            }
         }
      }
   }
   else
   {
      if (marcaLamparitas == "FelipeLamparas") //Todo FelipeLamparas
      {
         if (cantidadLamparitasParseadas >= 6)
         {
            porcentaje = 50;
         }
         else
         {
            if (cantidadLamparitasParseadas == 4)
            {
               porcentaje = 25;
            }
            else
            {
               if (cantidadLamparitasParseadas == 3)
               {
                  porcentaje = 10;
               }
            }
         }
      }
      else //Otras lamparas o mas cantidad
      {
         if (cantidadLamparitasParseadas >= 6)
         {
            porcentaje = 50;
         }
         else
         {
            if (cantidadLamparitasParseadas == 5)
            {
               porcentaje = 30;
            }
            else
            {
               if (cantidadLamparitasParseadas == 4)
               {
                  porcentaje = 20;
               }
               else
               {
                  if (cantidadLamparitasParseadas == 3)
                  {
                     porcentaje = 5;
                  }
               }
            }
         }
      }
   }

   //Operaciones segun cantidad, descuento, ingresos brutos
   importe = precioLamparitas * cantidadLamparitasParseadas;
   descuento = importe * porcentaje / 100;
   importeFinal = importe - descuento;

   if (importeFinal > 120) //Deberia entrar solo en "7 lamparas o mas" Y en "5 lamparas de otra marca que no sea ARGENTINALUZ"
   {
      ingresosBrutosPorcentaje = 10;
      ingresosBrutos = importeFinal * ingresosBrutosPorcentaje / 100;
      //Mensaje a mostrar si supera los 120
      alert("Usted pago: $" + ingresosBrutos + " de IIBB");
   }

   //------------------ NO ESCRIBIR NADA DEBAJO DE ESTO ------------------
   document.getElementById("txtIdprecioDescuento").value = "El precio final a pagar es de: $" + importeFinal;
}

*/
//https://onlinegdb.com/OEmCns4Xi


/*
function CalcularPrecio () 
{
   //Declaro las VARIABLES
   var cantidadLamparitas;
   var cantidadLamparitasParseadas;
   var precioLamparitas;
   var marcaLamparitas;
   var descuento;
   var porcentaje;
   var importeFinal;
   var ingresosBrutosPorcentaje;
   var ingresosBrutos;

   //Doy valores a las VARIABLES necesarias
   precioLamparitas = 35;
   porcentaje = 0;

   //Obtengo la cantidad de lamparas
   cantidadLamparitas = document.getElementById("txtIdCantidad").value;
   cantidadLamparitasParseadas = parseInt(cantidadLamparitas);
   //Obtengo la marca de lamparas
   marcaLamparitas = document.getElementById("Marca").value;

   if (marcaLamparitas == "ArgentinaLuz") //Todo ArgentinaLuz
   {
      if (cantidadLamparitasParseadas == 5)
      {
         porcentaje = 40;
      }
      else
      {
         if (cantidadLamparitasParseadas == 4)
         {
            porcentaje = 25;
         }
         else
         {
            if (cantidadLamparitasParseadas == 3)
            {
               porcentaje = 15;
            }
         }
      }
   }
   else
   {
      if (marcaLamparitas == "FelipeLamparas") //Todo FelipeLamparas
      {
         if (cantidadLamparitasParseadas == 4)
         {
            porcentaje = 25;
         }
         else
         {
            if (cantidadLamparitasParseadas == 3)
            {
               porcentaje = 10;
            }
         }
      }
      else //Otras marcas
      {
         if (cantidadLamparitasParseadas == 5)
         {
            porcentaje = 30;
         }
         else
         {
            if (cantidadLamparitasParseadas == 4)
            {
               porcentaje = 20;
            }
            else
            {
               if (cantidadLamparitasParseadas == 3)
               {
               porcentaje = 5;
               }
            }
         }
      }
   }

   if (cantidadLamparitasParseadas >= 6) //Para mas de 6 de cualquier marca
   {
      porcentaje = 50;
   }

   //Operaciones segun cantidad, descuento, ingresos brutos
   importe = precioLamparitas * cantidadLamparitasParseadas;
   descuento = importe * porcentaje / 100;
   importeFinal = importe - descuento;

   if (importeFinal > 120) //Deberia entrar solo en "7 lamparas o mas" Y en "5 lamparas de otra marca que no sea ARGENTINALUZ"
   {
      ingresosBrutosPorcentaje = 10;
      ingresosBrutos = importeFinal * ingresosBrutosPorcentaje / 100;
      //Mensaje a mostrar si supera los 120
      alert("Usted pago: $" + ingresosBrutos + " de IIBB");
   }

   //------------------ NO ESCRIBIR NADA DEBAJO DE ESTO ------------------
   document.getElementById("txtIdprecioDescuento").value = "El precio final a pagar es de: $" + importeFinal;
}
*/





















/*
function CalcularPrecio () 
{
   //Declaro las VARIABLES
   var cantidadLamparitas;
   var cantidadLamparitasParseadas;
   var precioLamparitas;
   var marcaLamparitas;
   var descuento;
   var porcentaje;
   var importeFinal;
   var ingresosBrutosPorcentaje;
   var ingresosBrutos;
   var mensaje;

   //Doy valores a las VARIABLES necesarias
   precioLamparitas = 35;
   porcentaje = 0;

   //Obtengo la cantidad de lamparas
   cantidadLamparitas = document.getElementById("txtIdCantidad").value;
   cantidadLamparitasParseadas = parseInt(cantidadLamparitas);
   //Obtengo la marca de lamparas
   marcaLamparitas = document.getElementById("Marca").value;

   if (cantidadLamparitasParseadas >= 6) //SI COMPRAN 6 O MAS
   {
      porcentaje = 50;
   }
   else
   {
      if (cantidadLamparitasParseadas == 5) //SI COMPRAN 5 LAMPARAS
      {
         if (marcaLamparitas == "ArgentinaLuz")
         {
            porcentaje = 40;
         }
         else
         {
            porcentaje = 30;
         }
      }
      else
      {
         if (cantidadLamparitasParseadas == 4) //SI COMPRAN 4 LAMPARAS
         {
            if(marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas") //Si COMPRAN 4 LAMPARAS DE ALGUNA DE ESTAS DOS MARCAS
            {
               porcentaje = 25;
            }
            else //SI ES DE OTRA MARCA
            {
               porcentaje = 20;
            }
         }
         else
         {
            if (cantidadLamparitasParseadas == 3)
            {
               if (marcaLamparitas == "ArgentinaLuz") //SI ES ARGENTINALUZ
               {
                  porcentaje = 15;
               }
               else //SI ES OTRA MARCA
               {
                  if (marcaLamparitas == "FelipeLamparas") //SI ES FELIPELAMPARAS
                  {
                     porcentaje = 10;
                  }
                  else //SI ES OTRA MARCA
                  {
                     porcentaje = 5;
                  }
               }
            }
         }
      } 
   }
   
   //Operaciones segun cantidad, descuento, ingresos brutos
   importe = precioLamparitas * cantidadLamparitas;
   descuento = importe * porcentaje / 100;
   importeFinal = importe - descuento;

   //Mensaje a mostrar si no supera los 120
   mensaje = "El precio Final a pagar es de: $" + importeFinal;

   if (importeFinal > 120) //Deberia entrar solo en "7 lamparas o mas" Y en "5 lamparas de otra marca que no sea ARGENTINALUZ"
   {
      ingresosBrutosPorcentaje = 10;
      ingresosBrutos = importeFinal * ingresosBrutosPorcentaje / 100;
      importeFinal = importeFinal + ingresosBrutos;
      //Mensaje a mostrar si supera los 120
      mensaje = "El precio Final es: $" + importeFinal + ". Y pago: $" + ingresosBrutos + " de IIBB.";
   }

   //------------------ NO ESCRIBIR NADA DEBAJO DE ESTO ------------------
   document.getElementById("txtIdprecioDescuento").value = mensaje;
}
*/


/*
function CalcularPrecio () 
{
   //Declaro las VARIABLES
   var cantidadLamparitas;
   var cantidadLamparitasParseadas;
   var precioLamparitas;
   var marcaLamparitas;
   var descuento;
   var porcentaje;
   var importeFinal;
   var ingresosBrutosPorcentaje;
   var ingresosBrutos;
   var mensaje;

   //Doy valores a las VARIABLES necesarias
   precioLamparitas = 35;
   porcentaje = 0;

   //Obtengo la cantidad de lamparas
   cantidadLamparitas = document.getElementById("txtIdCantidad").value;
   cantidadLamparitasParseadas = parseInt(cantidadLamparitas);
   //Obtengo la marca de lamparas
   marcaLamparitas = document.getElementById("Marca").value;

   if (cantidadLamparitasParseadas > 2) //SI COMPRAN 3 O MAS LAMPARAS
   {
      if (cantidadLamparitasParseadas > 3) //SI COMPRAN 4 O MAS
      {
         if (cantidadLamparitasParseadas > 4) //SI COMPRAN 5 O MAS
         {
            if (cantidadLamparitasParseadas > 5) //SI COMPRAN 6 O MAS
            {
               porcentaje = 50;
            }
            else
            {
               if (marcaLamparitas == "ArgentinaLuz")
               {
                  porcentaje = 40;
               }
               else
               {
                  porcentaje = 30;
               }
            }
         }
         else
         {
            if(marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas") //Si COMPRAN 4 LAMPARAS DE ALGUNA DE ESTAS DOS MARCAS
            {
               porcentaje = 25;
            }
            else //SI ES DE OTRA MARCA
            {
               porcentaje = 20;
            }
         }
      }
      else
      {
         if (marcaLamparitas == "ArgentinaLuz") //SI ES ARGENTINALUZ
         {
            porcentaje = 15;
         }
         else //SI ES OTRA MARCA
         {
            if (marcaLamparitas == "FelipeLamparas") //SI ES FELIPELAMPARAS
            {
               porcentaje = 10;
            }
            else //SI ES OTRA MARCA
            {
               porcentaje = 5;
            }
         }
      }
   }
   
   //Operaciones segun cantidad, descuento, ingresos brutos
   importe = precioLamparitas * cantidadLamparitas;
   descuento = importe * porcentaje / 100;
   importeFinal = importe - descuento;

   //Mensaje a mostrar si no supera los 120
   mensaje = "El precio Final a pagar es de: $" + importeFinal;

   if (importeFinal > 120) //Deberia entrar solo en "7 lamparas o mas" Y en "5 lamparas de otra marca que no sea ARGENTINALUZ"
   {
      ingresosBrutosPorcentaje = 10;
      ingresosBrutos = importeFinal * ingresosBrutosPorcentaje / 100;
      importeFinal = importeFinal + ingresosBrutos;
      //Mensaje a mostrar si supera los 120
      mensaje = "El precio Final es: $" + importeFinal + ". Y pago: $" + ingresosBrutos + " de IIBB.";
   }

   //------------------ NO ESCRIBIR NADA DEBAJO DE ESTO ------------------
   document.getElementById("txtIdprecioDescuento").value = mensaje;
}
*/




/*
function CalcularPrecio () 
{
   //Declaro las VARIABLES
   var cantidadLamparitas;
   var cantidadLamparitasParseadas;
   var precioLamparitas;
   var marcaLamparitas;
   var descuento;
   var porcentaje;
   var importeFinal;
   var ingresosBrutosPorcentaje;
   var ingresosBrutos;
   var mensaje;

   //Doy valores a las VARIABLES necesarias
   precioLamparitas = 35;
   porcentaje = 0;
   ingresosBrutos = 0;
   ingresosBrutosPorcentaje = 10;

   //Obtengo la cantidad de lamparas
   cantidadLamparitas = document.getElementById("txtIdCantidad").value;
   cantidadLamparitasParseadas = parseInt(cantidadLamparitas);
   //Obtengo la marca de lamparas
   marcaLamparitas = document.getElementById("Marca").value;

   if (cantidadLamparitasParseadas > 2) //SI COMPRAN 3 O MAS LAMPARAS
   {
      if (cantidadLamparitasParseadas > 3) //SI COMPRAN 4 O MAS
      {
         if (cantidadLamparitasParseadas > 4) //SI COMPRAN 5 O MAS
         {
            if (cantidadLamparitasParseadas > 5) //SI COMPRAN 6 O MAS
            {
               porcentaje = 50;
            }
            else
            {
               if (marcaLamparitas == "ArgentinaLuz")
               {
                  porcentaje = 40;
               }
               else
               {
                  porcentaje = 30;
               }
            }
         }
         else
         {
            if(marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas") //Si COMPRAN 4 LAMPARAS DE ALGUNA DE ESTAS DOS MARCAS
            {
               porcentaje = 25;
            }
            else //SI ES DE OTRA MARCA
            {
               porcentaje = 20;
            }
         }
      }
      else
      {
         if (marcaLamparitas == "ArgentinaLuz") //SI ES ARGENTINALUZ
         {
            porcentaje = 15;
         }
         else //SI ES OTRA MARCA
         {
            if (marcaLamparitas == "FelipeLamparas") //SI ES FELIPELAMPARAS
            {
               porcentaje = 10;
            }
            else //SI ES OTRA MARCA
            {
               porcentaje = 5;
            }
         }
      }
   }
   
   //Operaciones segun cantidad, descuento, ingresos brutos
   importe = precioLamparitas * cantidadLamparitas;
   descuento = importe * porcentaje / 100;
   importeFinal = importe - descuento;

   //Mensaje a mostrar si no supera los 120
   mensaje = "El precio Final a pagar es de: $" + importeFinal;

   //------------------ NO ESCRIBIR NADA DEBAJO DE ESTO ------------------
   document.getElementById("txtIdprecioDescuento").value = mensaje;
}
*/





/*

   if (cantidadLamparitasParseadas > 2) //SI COMPRAN 3 O MAS LAMPARAS
   {
      if (cantidadLamparitasParseadas > 3) //SI COMPRAN 4 O MAS
      {
         if (cantidadLamparitasParseadas > 4) //SI COMPRAN 5 O MAS
         {

         }
         else
         {
            if(marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas") //Si COMPRAN 4 LAMPARAS DE ALGUNA DE ESTAS DOS MARCAS
            {
               porcentaje = 25;
               importe = precioLamparitas * cantidadLamparitas;
               descuento = importe * porcentaje / 100;
               importeFinal = importe - descuento;
            }
            else //SI ES DE OTRA MARCA
            {
               porcentaje = 20;
               importe = precioLamparitas * cantidadLamparitas;
               descuento = importe * porcentaje / 100;
               importeFinal = importe - descuento;
            }
         }
      }
      else
      {
         if (marcaLamparitas == "ArgentinaLuz") //SI ES ARGENTINALUZ
         {
            porcentaje = 15;
            importe = precioLamparitas * cantidadLamparitas;
            descuento = importe * porcentaje / 100;
            importeFinal = importe - descuento;
         }
         else //SI ES OTRA MARCA
         {
            if (marcaLamparitas == "FelipeLamparas") //SI ES FELIPELAMPARAS
            {
               porcentaje = 10;
               importe = precioLamparitas * cantidadLamparitas;
               descuento = importe * porcentaje / 100;
               importeFinal = importe - descuento;
            }
            else //SI ES OTRA MARCA
            {
               porcentaje = 5;
               importe = precioLamparitas * cantidadLamparitas;
               descuento = importe * porcentaje / 100;
               importeFinal = importe - descuento;
            }
         }
      }
   }
   else
   {
      importeFinal = cantidadLamparitasParseadas * precioLamparitas;
   }

   //NO ESCRIBIR NADA DEBAJO DE ESTO
   document.getElementById("txtIdprecioDescuento").value = "El precio Final a pagar es de: $" + importeFinal;
}

*/















/*
function CalcularPrecio () 
{
   //Declaro las VARIABLES
   var cantidadLamparitas;
   var cantidadLamparitasParseadas;
   var importeFinal;
   var importeFinalConDescuento;
   var ingresosBrutos;
   var ingresosBrutosPorcentaje;
   var importeFinalConIngresosBrutos;
   var descuento;
   var precioLamparitas;
   var marcaLamparitas;

   //Doy valores a las VARIABLES necesarias
   precioLamparitas = 35;
   ingresosBrutosPorcentaje = 10;

   //Obtengo la cantidad de lamparas
   cantidadLamparitas = document.getElementById("txtIdCantidad").value;
   cantidadLamparitasParseadas = parseInt(cantidadLamparitas);
   //Obtengo la marca de lamparas
   marcaLamparitas = document.getElementById("Marca").value;

   //Uso IF para saber si compro mas de 2
   if (cantidadLamparitasParseadas > 2) //SI COMPRAN 3 O MAS LAMPARAS
   {
      if (cantidadLamparitasParseadas > 3) //SI COMPRAN 4 O MAS LAMPARAS
      {
         if (cantidadLamparitasParseadas > 4) //SI COMPRAN 5 O MAS LAMPARAS
         {
            if (cantidadLamparitasParseadas > 5) //SI COMPRAN 6 O MAS LAMPARAS
            {
               descuento = 50;
               importeFinal = cantidadLamparitasParseadas * precioLamparitas;
               importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;
               ingresosBrutos = importeFinalConDescuento * ingresosBrutosPorcentaje / 100;
               
               if (importeFinal > 119) //SI SUPERA LOS 120 SE SUMAN IIBB
               {
                  importeFinalConIngresosBrutos = importeFinalConDescuento + ingresosBrutos;
                  document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinalConIngresosBrutos + ". Usted pago $" + ingresosBrutos + " de IIBB.";
               }
               else //SI NO SUPERA LOS 120
               {
                  document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinal;
               }
            }
            else //SI COMPRAN 5 LAMPARAS
            {
               if (marcaLamparitas == "ArgentinaLuz") //SI ES ARGENTINALUZ
               {
                  descuento = 40;
                  importeFinal = cantidadLamparitasParseadas * precioLamparitas;
                  importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;
                  document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinalConDescuento;
               }
               else //SI ES OTRA MARCA
               {
                  descuento = 30;
                  importeFinal = cantidadLamparitasParseadas * precioLamparitas;
                  importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;
                  document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinalConDescuento;
               }
            }
         }
         else //SI COMPRAN 4 LAMPARAS
         {
            if (marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas")
            {
               descuento = 25;
               importeFinal = cantidadLamparitasParseadas * precioLamparitas;
               importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;

               document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinalConDescuento;
            }
            else
            {
               descuento = 20;
               importeFinal = cantidadLamparitasParseadas * precioLamparitas;
               importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;

               document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinalConDescuento;
            }
         }
      }
      else //SI COMPRAN 3 LAMPARAS
      {
         if (marcaLamparitas == "ArgentinaLuz") //SI ES ARGENTINALUZ
         {
            descuento = 15;
            importeFinal = cantidadLamparitasParseadas * precioLamparitas;
   
            importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;
   
            document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinalConDescuento;         
         }
         else //SI NO ES ARGENTINALUZ
         {
            if (marcaLamparitas == "FelipeLamparas") //SI ES FELIPELAMPARAS
            {
               descuento = 10;
               importeFinal = cantidadLamparitasParseadas * precioLamparitas;
      
               importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;
      
               document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinalConDescuento;
            }
            else //SI ES OTRA
            {
               descuento = 5;
               importeFinal = cantidadLamparitasParseadas * precioLamparitas;
   
               importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;
   
               document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinalConDescuento;
            }
         }
      }
   }
   else //SI COMPRAN 2 O MENOS LAMPARAS
   {
      importeFinal = cantidadLamparitasParseadas * precioLamparitas;
      document.getElementById("txtIdprecioDescuento").value = "El precio Final a pagar es de: $" + importeFinal;
   }
}
*/







//BORRADOR ESTRUCTURA PRINCIPAL -----------------------------------------------------------------------------


/*if (cantidadLamparitasParseadas > 3)
{
   if (cantidadLamparitasParseadas > 5)

      if (cantidadLamparitasParseadas > 4)
      {

      }
      else
      {

      }

   else (para 3)
   {

   }

else
{
      importeFinal = cantidadLamparitasParseadas * precioLamparitas;
      alert("El precio final es de: $" + importeFinal); 
}
}
*/

//----------------------------------------------------------------------------------------------------------


/*
function CalcularPrecio () 
{
   //Declaro las VARIABLES
   var cantidadLamparitas;
   var cantidadLamparitasParseadas;
   var importeFinal;
   var importeFinalConDescuento;
   var ingresosBrutos;
   var ingresosBrutosPorcentaje;
   var importeFinalConIngresosBrutos;
   var descuento;
   var precioLamparitas;
   var marcaLamparitas;

   //Doy valores a las VARIABLES necesarias
   precioLamparitas = 35;
   ingresosBrutosPorcentaje = 10;

   //Obtengo la cantidad de lamparas
   cantidadLamparitas = document.getElementById("txtIdCantidad").value;
   cantidadLamparitasParseadas = parseInt(cantidadLamparitas);
   //Obtengo la marca de lamparas
   marcaLamparitas = document.getElementById("Marca").value;

   //Uso IF para saber si compro mas de 2
   if (cantidadLamparitasParseadas > 2) //SI COMPRAN 3 O MAS LAMPARAS
   {
      if (cantidadLamparitasParseadas > 3) //SI COMPRAN 4 O MAS LAMPARAS
      {
         if (cantidadLamparitasParseadas > 4) //SI COMPRAN 5 O MAS LAMPARAS
         {
            if (cantidadLamparitasParseadas > 5) //SI COMPRAN 6 O MAS LAMPARAS
            {
               descuento = 50;
               importeFinal = cantidadLamparitasParseadas * precioLamparitas;
               importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;
               ingresosBrutos = importeFinalConDescuento * ingresosBrutosPorcentaje / 100;
               
               if (importeFinal > 119) //SI SUPERA LOS 120 SE SUMAN IIBB
               {
                  importeFinalConIngresosBrutos = importeFinalConDescuento + ingresosBrutos;
                  document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinalConIngresosBrutos + ". Usted pago $" + ingresosBrutos + " de IIBB.";
               }
               else //SI NO SUPERA LOS 120
               {
                  document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinal;
               }
            }
            else //SI COMPRAN 5 LAMPARAS
            {
               if (marcaLamparitas == "ArgentinaLuz") //SI ES ARGENTINALUZ
               {
                  descuento = 40;
                  importeFinal = cantidadLamparitasParseadas * precioLamparitas;
                  importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;
                  document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinalConDescuento;
               }

               else //SI ES OTRA MARCA
               {
                  descuento = 30;
                  importeFinal = cantidadLamparitasParseadas * precioLamparitas;
                  importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;
                  document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinalConDescuento;
               }
            }
         }
         else //SI COMPRAN 4 LAMPARAS
         {
            if (marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas")
            {
               descuento = 25;
               importeFinal = cantidadLamparitasParseadas * precioLamparitas;
               importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;

               document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinalConDescuento;
            }
            else
            {
               descuento = 20;
               importeFinal = cantidadLamparitasParseadas * precioLamparitas;
               importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;

               document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinalConDescuento;
            }
         }
      }
      else //SI COMPRAN 3 LAMPARAS
      {
         if (marcaLamparitas != "ArgentinaLuz" && marcaLamparitas != "FelipeLamparas") //SI NO ES NINGUNA DE ESTAS... || no agarra (Falso o Falso) deberia entrar?
         {
            descuento = 5;
            importeFinal = cantidadLamparitasParseadas * precioLamparitas;
   
            importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;
   
            document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinalConDescuento;
         }
         else //SI ES ALGUNA DE ESAS DOS
         {
            if (marcaLamparitas == "ArgentinaLuz") //SI ES ARGENTINALUZ
            {
            descuento = 15;
            importeFinal = cantidadLamparitasParseadas * precioLamparitas;
   
            importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;
   
            document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinalConDescuento;
            }
            else //SI ES FELIPELAMPARAS
            {
            descuento = 10;
            importeFinal = cantidadLamparitasParseadas * precioLamparitas;
   
            importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;
   
            document.getElementById("txtIdprecioDescuento").value = "El precio final es de: $" + importeFinalConDescuento;
            }
         }
      }
   }
   else //SI COMPRAN 2 O MENOS LAMPARAS
   {
      importeFinal = cantidadLamparitasParseadas * precioLamparitas;
      document.getElementById("txtIdprecioDescuento").value = "El precio Final a pagar es de: $" + importeFinal;
   }
}
*/

/*
function CalcularPrecio () 
{
 	//Declaro las VARIABLES
    var cantidadLamparitas;
    var cantidadLamparitasParseadas;
    var importeFinal;
    var importeFinalConDescuento;
    var ingresosBrutos;
    var ingresosBrutosPorcentaje;
    var importeFinalConIngresosBrutos;
    var descuento;
    var precioLamparitas;
    var marcaLamparitas;

   //Doy valores a las VARIABLES necesarias
    precioLamparitas = 35;
    ingresosBrutosPorcentaje = 10;

   //Obtengo la cantidad de lamparas
   cantidadLamparitas = document.getElementById("txtIdCantidad").value;
   cantidadLamparitasParseadas = parseInt(cantidadLamparitas);
   //Obtengo la marca de lamparas
   marcaLamparitas = document.getElementById("Marca").value;

   //Uso IF para saber si compro mas de 2
   if (cantidadLamparitasParseadas > 2)
   {
      if (marcaLamparitas == "ArgentinaLuz")
      {
         descuento = 15
         importeFinal = cantidadLamparitasParseadas * precioLamparitas;

         importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;

         alert("El precio final es de: $" + importeFinalConDescuento);
      }

      else
      {
         if (marcaLamparitas == "FelipeLamparas")
         {
            descuento = 10
            importeFinal = cantidadLamparitasParseadas * precioLamparitas;

            importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;

            ingresosBrutos = importeFinalConDescuento * ingresosBrutosPorcentaje / 100

            importeFinalConIngresosBrutos = importeFinalConDescuento + ingresosBrutos;

            alert("El precio final es de: $" + importeFinalConIngresosBrutos + ". Usted pago $" + ingresosBrutos + " de IIBB.");
         }

         else
         {
            descuento = 5
            importeFinal = cantidadLamparitasParseadas * precioLamparitas;

            importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;

            ingresosBrutos = importeFinalConDescuento * ingresosBrutosPorcentaje / 100

            importeFinalConIngresosBrutos = importeFinalConDescuento + ingresosBrutos;

            alert("El precio final es de: $" + importeFinalConIngresosBrutos + ". Usted pago $" + ingresosBrutos + " de IIBB.");
         }
      }
   }

   if (cantidadLamparitasParseadas > 3)
   {
      if(marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas")
      {
         descuento = 25
         importeFinal = cantidadLamparitasParseadas * precioLamparitas;

         importeFinalConDescuento = importeFinal - importeFinal * descuento / 100;

         ingresosBrutos = importeFinalConDescuento * ingresosBrutosPorcentaje / 100

         importeFinalConIngresosBrutos = importeFinalConDescuento + ingresosBrutos;

         alert("El precio final es de: $" + importeFinalConIngresosBrutos + ". Usted pago $" + ingresosBrutos + " de IIBB.");
      }
   }

   else
   {
      importeFinal = cantidadLamparitasParseadas * precioLamparitas;
      alert("El precio final es de: $" + importeFinal); 
   }
}
*/
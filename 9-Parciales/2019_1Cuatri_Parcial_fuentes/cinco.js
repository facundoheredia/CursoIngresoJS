/*
Bienvenidos (SOLO WITCH).
 5 - Una empresa de viajes le solicita ingresar que continente le gustaria visitar y la cantidad de días, 
la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras:
A) Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
B) Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
C) Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
D) Cualquier otro continente tiene un recargo del 20%
*/

function mostrar()
{
    //Declaro las variables
    var continente;
    var cantidadDias;
    var cantidadDiasParseados;
    var precioPorDia;
    var formaDePago;
    var porcentaje;
    var estadia;
    var descuento;
    var recargo;
    var flag;
    var importeFinal;
    var mensaje;

    //Inicio variables
    precioPorDia = 100;
    porcentaje = 0;
    flag = 0;

    //Pido los valores ingresados por el usuario
    cantidadDias = prompt("Ingrese la cantidad de dias","0");
    cantidadDiasParseados = parseInt(cantidadDias);
    formaDePago = prompt ("Ingrese su forma de pago","Débito, MercadoPago, efectivo");
    continente = document.getElementById("Marca").value;

    //Switch
    switch (continente)
    {
        case "América": // Punto A.1
            porcentaje = 50;
            switch (formaDePago)
            {
                case "Débito":  // Punto A.2
                    porcentaje = porcentaje + 10;
                break;

                default:
                    porcentaje = 50;
                break;
            }
        break;

        case "África": // Punto B.1
            porcentaje = 60;
            switch (formaDePago)
            {
                case "MercadoPago":
                case "Efectivo":
                    porcentaje = porcentaje + 15;
                break;

                default:
                    porcentaje = 60;
                break;
            }
        break;

        case "Europa": // Punto C
            porcentaje = 20;
            switch (formaDePago)
            {
                case "Débito": // Punto C.1
                    porcentaje = porcentaje + 15;
                break;

                case "MercadoPago": // Punto C.2
                    porcentaje = porcentaje + 10;
                break;

                default:
                    porcentaje = porcentaje + 5;
                break
            }
        break;

        default:
            porcentaje = 20;
            flag = 1;
        break;
    }

    estadia = precioPorDia * cantidadDiasParseados;

    switch (flag)
    {
        case 0:
            descuento = estadia * porcentaje / 100;
            importeFinal = estadia - descuento;
            mensaje = " descuento del " + descuento + "%";
        break;
        
        case 1:
            recargo = estadia * porcentaje / 100;
            importeFinal = estadia + recargo;
            mensaje = " recargo del " + recargo + "%";
        break;
    }

    alert("Usted va a viajar a " + continente + " por " + cantidadDiasParseados + " dias y tiene un" + mensaje + " y su precio final es de: $" + importeFinal);

}

//https://onlinegdb.com/pYcM3T4pV
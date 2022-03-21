/*
Se ingresa una hora.
A) Si está entre las 6 y las 11 mostrar:"es de mañana",
B) Si es desde las 12 a las 19: "es de tarde",
C) De lo contrario informar que es de noche.
D) Informar si la hora no es válida.
E) Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".
*/

function mostrar()
{
    //Declaro las variables
    var hora;
    var mensaje;
    
    //Obtengo los valores ingresados por el usuario
    hora = document.getElementById("laHora").value;
    hora = parseInt(hora);

    //Operacion switch para mostrar el mensaje segun la hora
    switch (hora)
    {
        case 6:     //punto A
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            mensaje = "Es de mañana";
        break;

        case 12:    //punto B
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            mensaje = "Es de tarde";
        break;

        default:    //punto C
            
            if (hora > 24 || hora < 0) //punto D
            {
                mensaje = "Por favor ingrese una hora valida";
            }
            else
            {
                if (hora > 19 && hora < 24) //punto E
                {
                    mensaje = "A dormir";
                }
                else
                {
                    mensaje = "Es de noche";
                }
            }
        break;
    }
    //Mostrar mensaje segun valor ingresado
    alert(mensaje);
}

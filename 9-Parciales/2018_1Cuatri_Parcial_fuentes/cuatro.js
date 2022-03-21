/*
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".
*/

function mostrar()
{   
    //Declaro las variables
    var primerNumero;
    var primerNumeroParseado;
    var segundoNumero;
    var segundoNumeroParseado;
    var resta;
    var suma;

    //Pido los valores
    primerNumero = prompt("Ingrese el primer numero","Primer numero");
    segundoNumero = prompt("Ingrese el segundo numero","Segundo numero");

    //Parseo los valores ingresados por el Usuario
    primerNumeroParseado = parseInt(primerNumero);
    segundoNumeroParseado = parseInt(segundoNumero);

    //IF

    if (primerNumeroParseado == segundoNumeroParseado)
    {
        alert("El " + primerNumeroParseado + " y el " + segundoNumeroParseado + " son iguales.");
    }
    else
    {
        if (primerNumeroParseado > segundoNumeroParseado)
        {
            resta = primerNumeroParseado - segundoNumeroParseado;
            alert("La resta es: " + resta);
        }
        else
        {
            suma = primerNumeroParseado + segundoNumeroParseado;

            if (suma > 10)
            {
                alert("La suma es " + suma + " y supero el 10")
            }
            else
            {
                alert("La suma es " + suma)
            }
        }
    }

}

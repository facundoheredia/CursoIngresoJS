/*
(IF)Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los divido,
de lo contrario los sumo.
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y es menor a 50".
*/

function mostrar()
{
    //Declaro las variables
    var primerNumero;
    var primerNumeroParseado;
    var segundoNumero;
    var segundoNumeroParseado;
    var division;
    var suma;

    //Pido los valores por promt
    primerNumero = prompt("Ingrese el primer numero","0");
    segundoNumero = prompt("Ingrese el segundo numero","0");

    //Parseo los valores ingresados
    primerNumeroParseado = parseInt(primerNumero);
    segundoNumeroParseado = parseInt(segundoNumero);

    //IF
    if (primerNumeroParseado == segundoNumeroParseado)
    {
        alert(primerNumeroParseado + " " + segundoNumeroParseado);
    }
    else
    {
        if (primerNumeroParseado > segundoNumeroParseado)
        {
            division = primerNumeroParseado / segundoNumeroParseado;
            alert("La division es: " + division);
        }
        else
        {
            suma = primerNumeroParseado + segundoNumeroParseado;
            
            if (suma < 50)
            {
                alert("La suma es " + suma + " y es menor a 50");
            }
            else
            {
                alert("La suma es " + suma);
            }
        }
    }
}

// 6 min 56 seg

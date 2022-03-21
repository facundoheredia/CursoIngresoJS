/* 
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto, de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10". 
*/

function mostrar()
{
    //Declaro las VARIABLES
    var primerNumero;
    var segundoNumero;
    var resta;
    var suma;

    //Pido los dos numeros por PROMPT
    primerNumero = prompt("Por favor ingrese el primer numero","Primer numero");
    segundoNumero = prompt("Por favor ingrese el segundo numero","Segundo numero");

    //Parseo los numero ingresados
    primerNumero = parseInt(primerNumero);
    segundoNumero = parseInt(segundoNumero);

    //Verifico con IF si son iguales
    if (primerNumero == segundoNumero)
    {
        alert("El numero " + primerNumero + " y el numero " + segundoNumero + " son iguales");
    }

    //Verifico con ELSE IF si el primero es mayor y los resto
    else 
    {
        if (primerNumero > segundoNumero)
        {  
            resta = primerNumero - segundoNumero; //Hago la resta
        
            if (resta > 10) //Si la resta es mayor a 10
            {
                alert("La resta es " + resta + " y supero el 10"); //Muestro por ALERT el mensaje " " con el resultado de la resta que supero el 10
            }
        
            else //Si la resta es menor a 10
            {           
                alert("La resta de los numeros es: " + resta); //Muestro por ALERT el mensaje " " con el resultado de la resta
            }
        }    
        else //Si no es mayor el primer numero los sumo
        {    
            suma = primerNumero + segundoNumero; //Hago la suma   
            alert("La suma de los numeros es: " + suma); //Muestro por ALERT el resultado de la suma
        }
    }
} // FIN DEL PROGRAMA

//https://onlinegdb.com/tfjEaOe_k
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //Declaro las VARIABLE
	var temperatura;
    var centigrados;
    
    //Guardo la informacion de las caja de texto segun su ID " " y lo guardo en la VARIABLE
    temperatura = document.getElementById("txtIdTemperatura").value;

    //Parseo con PASEFLOAT para que me tome los numeros decimales
    temperatura = parseFloat(temperatura);

    //Calculo el paso de centigrados a Fahrenheit (Busque la formula en google)
    centigrados = (temperatura * 9 / 5) + 32;

    //Hago TOFIXED para redondearlo con 2 decimales
    centigrados = centigrados.toFixed(1);

    //Muestro por ALERT el mensaje " " con la temperatura ingresada y su equivalente
    alert(temperatura + "° Fahrenheit son " + centigrados + "° centigrados");
}

function CentigradosFahrenheit () 
{
    //Declaro las VARIABLE
	var temperatura;
    var fahrenheit;

    //Guardo la informacion de las caja de texto segun su ID " " y lo guardo en la VARIABLE
    temperatura = document.getElementById("txtIdTemperatura").value;

    //Parseo con PASEFLOAT para que me tome los numeros decimales
    temperatura = parseFloat(temperatura);

    //Calculo el paso de centigrados a Fahrenheit (Busque la formula en google)
    fahrenheit = (temperatura - 32) * 5 / 9;

    //Hago TOFIXED para redondearlo con 2 decimales
    fahrenheit = fahrenheit.toFixed(1);

    //Muestro por ALERT el mensaje " " con la temperatura ingresada y su equivalente
    alert(temperatura + "° Fahrenheit son " + fahrenheit + "° fahrenheit");
}

//https://onlinegdb.com/rx7jn8Jaj
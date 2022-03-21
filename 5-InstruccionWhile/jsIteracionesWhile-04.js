/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
*/

function mostrar()
{
    //Declaro la variable
    var numero;

    //Pido los valores al usuario
    numero = prompt("Ingrese un numero");

    //Operacion while mientras que el numero sea menor a 0 y mayor a 9
    while (numero < 0 || numero > 9)
    {
        alert("Por favor ingrese un numero del 0 al 9 inclusive");

        numero = prompt("Ingrese un numero");
    }

    //Muestro por la caja de texto el numero ingresado correcto
	document.getElementById("txtIdNumero").value = "Su numero ingresado es: " + numero;
}//FIN DE LA FUNCIÓN

//https://onlinegdb.com/AgkITOreZa
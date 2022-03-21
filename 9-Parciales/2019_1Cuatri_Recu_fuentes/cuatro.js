/*Pedir dos números y mostrar el resultado:
Si son iguales los muestro el cuadrado del numero.
Si el primero divisible por el segundo, los resto,
de lo contrario muestro solo el resto.
si el resto es mayor a 3(tres ) informarlo por alert.*/

function mostrar()
{
    //Declaro las VARIABLES
    var primerNumero;
    var segundoNumero;
    var cuadradoPrimerNumero;
    var cuadradoSegundoNumero;
    var resto;
    var resta;

    //Pido los numeros por PROMPT y los guardo en las VARIABLES
    primerNumero = prompt("Ingrese el primer numero","Primer numero");
    segundoNumero = prompt("Ingrese el segundo numero","Segundo numero");

    //Paseo los numeros guardados en las VARIABLES
    primerNumero = parseInt(primerNumero);
    segundoNumero = parseInt(segundoNumero);

    if (primerNumero == segundoNumero)  //Uso el IF para verificar si son iguales y calculo los cuadrados
    {
        //Calculo el cuadrado de los numeros
        cuadradoPrimerNumero = primerNumero * primerNumero;
        cuadradoSegundoNumero = segundoNumero * segundoNumero;

        //Muestro por ALERT el mensaje " " con el resultado de los cuadrados
        alert("Los numeros son iguales y sus cuadrados son: " + cuadradoPrimerNumero + " y " + cuadradoSegundoNumero + " respectivamente");
    }

    else
    {
        if ((primerNumero/segundoNumero) == 1)  //Uso un IF para ver que el primer numero sea divisible por el segundo
        {   
            resta = primerNumero - segundoNumero;  //Calculo la resta
            alert("La resta de los numeros es de: " + resta); //Muestro por ALERT el mensaje " " con el resultado de la resta
        } 
        else  //Si no es divisible el primero por el segundo hago el resto
        {
            resto = primerNumero%segundoNumero //Calculo el resto

            if (resto > 3) //Si el resto es mayor a 3
            {
                alert("El resto es: " + resto + " y es mayor a 3"); //Muestro por ALERT el mensaje " " con el resultado del resto y digo que es mayor a 3
            }
            else
            {
                alert("El resto es: " + resto); //Muestro por ALERT el mensaje " " con el resultado del resto
            }
        }
    }      
}
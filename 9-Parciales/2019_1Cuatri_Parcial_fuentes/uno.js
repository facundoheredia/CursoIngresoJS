/*
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert
*/

function mostrar()
{
    //Declaro las VARIABLES
    var lado;
    var perimetro;
    var ladosTrianguloEquilatero;
    
    //Le doy valor a las variables necesarias
    ladosTrianguloEquilatero = 3;

    //Pido por PROMPT el largo del lado del triangulo
    lado = prompt("Por favor ingrese el largo del lado del triangulo","Ingrese el largo");

    //Calculo el perimetro con la VARIABLE ingresada y multiplicandolo por la CONSTANTE
    perimetro = lado * ladosTrianguloEquilatero;

    //Muestro por ALERT el perimetro del triangulo
    alert("El perimetro del triangulo es de: " + perimetro);
}

//https://onlinegdb.com/BLzA46gMJ
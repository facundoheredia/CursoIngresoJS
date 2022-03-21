/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

*/

function mostrar()
{
    //variables
    var letra;
    var numero;
    var respuesta;
    var flag;
    var contadorNumerosPares;
    var contadorNumeroImpares;
    var contadorNumeroCero;
    var contadorNumerosPositivos;
    var contadorNumeros;
    var promedioPositivos;
    var acumuladorNumerosNegativos;
    var letraMaximo;
    var letraMinimo;
    var numeroMaximo;
    var numeroMinimo;
    var mensaje;

    respuesta = true;
    flag = 0;

    while (respuesta == true)
    {
        letra = prompt("Ingrese una letra");

        numero = prompt("Ingrese un numero asociado a la letra " + letra);
        numero = parseInt(numero);
        while(isNaN(numero) && numero < -100 || numero > 100)
        {
            numero = prompt("ERROR! Ingrese un numero entre -100 y 100 asociado a la letra " + letra);
            numero = parseInt(numero);
        }

        if (flag == 0)
        {
            contadorNumerosPares = 0;
            contadorNumeroImpares = 0;
            contadorNumeroCero = 0;
            contadorNumerosPositivos = 0;
            acumuladorNumerosNegativos = 0;
            numeroMaximo = numero;
            letraMaximo = letra;
            numeroMinimo = numero;
            letraMinimo = numero;
            flag = 1;
        }

        if (numero % 2 == 0)
        {
            contadorNumerosPares = contadorNumerosPares + 1;
        }
        else
        {
            contadorNumeroImpares = contadorNumeroImpares + 1;
        }

        if (numero == 0)
        {
            contadorNumeroCero = contadorNumeroCero + 1;
        }

        if (numero > 0)
        {
            contadorNumerosPositivos = contadorNumerosPositivos + 1;
        }

        if(numero < 0)
        {
            acumuladorNumerosNegativos = acumuladorNumerosNegativos - numero;
        }

        if (numero > numeroMaximo)
        {
            numeroMaximo = numero;
            letraMaximo = letra;
        }
        else
        {
            if (numero < numeroMinimo)
            {
                numeroMinimo = numero;
                letraMinimo = letra;
            }
        }

        contadorNumeros = contadorNumeros + 1;
        respuesta = confirm("¿Desea ingresar otro numero?");
    }


    //Promedio numeros positivos
    promedioPositivos = contadorNumerosPositivos / contadorNumeros;

    //Mensaje
    mensaje = "A) La cantidad de numeros pares es de " + contadorNumerosPares;
    mensaje = mensaje + "B) La cantidad de numeros impares es de " + contadorNumeroImpares;
    mensaje = mensaje + "C) La cantidad de ceros es de " + contadorNumeroCero;
    mensaje = mensaje + "D) El promedio de todos los numeros positivos es de " + promedioPositivos;
    mensaje = mensaje + "E) La suma de todos los numeros negativos es de " + acumuladorNumerosNegativos;
    mensaje = mensaje + "F) El numero maximo es " + numeroMaximo + " y tiene la letra " + letraMaximo + " y el numero minimo es " + numeroMinimo + " con la letra " + letraMinimo;

}

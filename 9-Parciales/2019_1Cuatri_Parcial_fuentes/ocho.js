/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
A) La cantidad de números pares.
B) La cantidad de números impares.
C) La cantidad de ceros.
D) El promedio de todos los números positivos ingresados.
E) La suma de todos los números negativos.
F) El número y la letra del máximo y el mínimo.
*/

function mostrar()
{
    //Declaro las variables
    var continuar;
    var mensaje;
    var letra;
    var numero;
    var numeroParseado;
    var cantidadPares;
    var cantidadImpares;
    var cantidadCeros;
    var acumuladorPositivos;
    var cantidadPositivos;
    var promedioPositivos;
    var acumuladorNegativos;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaximo;
    var letraMinimo;
    var flag;

    //Inicio contador
    continuar = "si";
    flag = 0;
   

    //Bucle while para pedir numeros hasta que el usuario quiera
    while (continuar == "si")
    {
        letra = prompt("Por favor ingrese una letra","Ejemplo: a");
        numero = prompt("Por favor ingrese un numero","0");
        numeroParseado = parseInt(numero);

        while (isNaN(numeroParseado))      //  Valido si es un numero lo ingresado
        {
            numero = prompt("Por favor ingrese un numero","0");
            numeroParseado = parseInt(numero);
        }

        while (numeroParseado < -100 || numeroParseado > 100) // Valido si es un numero mayor o menor a esos numeros
        {
            numero = prompt("Por favor ingrese un numero entre -100 y 100","0");
            numeroParseado = parseInt(numero);
        }

        if (flag == 0)
        {
            cantidadPares = 0;
            cantidadImpares = 0;
            cantidadCeros = 0;
            acumuladorPositivos = 0;
            cantidadPositivos = 0;
            acumuladorNegativos = 0;
            numeroMaximo = 0;
            numeroMinimo = 0;
            flag =1;
        }
        
        if (numeroParseado % 2 == 0)       //  PUNTO A - cantidad de pares
        {
            cantidadPares = cantidadPares + 1;
        }
        else                               //  PUNTO B - cantidad de impares
        {
            cantidadImpares = cantidadImpares + 1;
        }

        if (numeroParseado == 0)           //  PUNTO C - cantidad de ceros
        {
            cantidadCeros = cantidadCeros + 1;
        }
        else
        {
            if (numeroParseado > 0)        //  PRE PUNTO D - cantidad de positivos para el promedio
            {
                acumuladorPositivos = acumuladorPositivos + numeroParseado;
                cantidadPositivos = cantidadPositivos + 1;
            }
            else
            {
                acumuladorNegativos = acumuladorNegativos + numeroParseado; //  PUNTO E - suma de negativos
            }
        }

        if (numeroParseado > numeroMaximo)                                  //  PUNTO F - letra del minimo y del maximo
        {
            numeroMaximo = numeroParseado;
            letraMaximo = letra;
        }
        else
        {
            if (numeroParseado < numeroMinimo)
            {
                numeroMinimo = numeroParseado;
                letraMinimo = letra;
            }
        }

        continuar = prompt("¿Desea ingresar otro numero?", "si o no");      //  Pregunto si desea ingresar mas numero para repetir el bucle

        while (continuar != "si" && continuar != "no")
        {
            continuar = prompt("Por favor responda por si o por no para ingresar otro pais", "si o no");
        }
    }

    //PUNTO D - Promedio positivos // con un IF por si el usuario no ingresa positivo y no haga 0/0
    if (cantidadPositivos != 0)
    {
        promedioPositivos = acumuladorPositivos / cantidadPositivos;
    }

    //Compilacion de mensajes
    //Punto A - cantidad de pares
    mensaje = "La cantidad de numeros pares es de: " + cantidadPares + ". <br>";
    //Punto B - cantidad de impares
    mensaje = mensaje + "La cantidad de impares es de: " + cantidadImpares + ". <br>";
    //PUNTO C - cantidad de ceros
    mensaje = mensaje + "La cantidad de ceros ingresados es de: " + cantidadCeros + ". <br>";
    //PUNTO D - promedio positivos
    mensaje = mensaje + "El promedio de los numeros positivos es de: " + promedioPositivos + ". <br>";
    //PUNTO E - suma de negativos
    mensaje = mensaje + "La suma de los negativos es de: " + acumuladorNegativos + ". <br>";
    //PUNTO F - la letra del minimo y del maximo
    mensaje = mensaje + "El numero " + numeroMinimo + " es el minimo, y su letra es: " + letraMinimo + ". <br>";
    mensaje = mensaje + "El numero " + numeroMaximo + " es el maxmimo, y su letra es:" + letraMaximo + ".";
    //MENSAJE FINAL
    document.write(mensaje);
}

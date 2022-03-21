/*
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250), 
el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet.
Informar por alert:
A) El promedio de las alturas totales.
B) La altura más baja y el sexo de esa persona.
C) La cantidad de mujeres que su altura supere los 190 centimetros.
*/

function mostrar()
{
    //Declaro las variables
    var altura;
    var sexo;
    var i;
    var promedio;
    var mensaje;
    var acumuladorAltura;
    var alturaMasBaja;
    var sexoAlturaMasBaja;
    var contadorMujeres;
    var flag;

    //Inicio la variable contador. Deberia ser 1 para que sean 5 datos? 0 1 2 3 4 5 // 1 2 3 4 5
    i = 0;
    flag = 0;

    //Un while mas grande para las 5 iteraciones que abarque los while de abajo?
    //Este while mas grande deberia contener el contador de las 5 iteraciones?
    while (i < 5)
    {
        if (flag == 0)
        {
            acumuladorAltura = 0;
            alturaMasBaja = 250;
            contadorMujeres = 0;
            flag = 1;
        }

        altura = prompt("Por favor ingrese la altura del jugador en centimetros","0");
        altura = parseInt(altura);
        //Valido los datos de altura en un bucle (entre 0 y 250)
        while (altura < 0 || altura > 250)
        {
            altura = prompt("Por favor ingrese una altura en centimetros entre 0 y 250");
        }


        //Una vez validado el valor de centimetros lo voy sumando en el acumulador
        acumuladorAltura = acumuladorAltura + altura;
        
        sexo = prompt("Por favor ingrese el sexo del jugador","m o f");
        //Valido los datos del sexo en un bucle (solo m o f)
        while (sexo != 'f' && sexo != 'm')
        {
            sexo = prompt ("Por favor ingrese un sexo correcto, use f o m");
        }

        //ACA PREGUNTO POR LA ALTURA MAS BAJA Y SEXO DE LA PERSONA? CON UN IF?
        //Punto B - La altura mas baja y el sexo de esa persona
        if (altura < alturaMasBaja)
        {
            alturaMasBaja = altura;
            sexoAlturaMasBaja = sexo;
        }

        //Esto dentro del while mas grande? //si, para que los vaya sumando a medida que ingresa mujeres mas de 190
        //Punto C - La cantidad de mujeres que su altura supere los 190
        if (sexo == 'f' && altura > 190)
        {
            contadorMujeres = contadorMujeres + 1;
        }
    
        //Una vez que se validan los 2 datos cuenta la vuelta, esto se debe repetir 5 veces? //Si
        i = i + 1;

        //Muestro por alert mensaje para un proximo jugador? Y que solo salga cuando haya menos de 5 para que al final no vuelva a aparecer 
        //No es necesario para el ejercicio, pero para que el usuario sepa que son datos de otro jugador los que va a ingresar nuevamente
        if (i<5)
        {
           alert("Por favor ingrese los datos del siguiente jugador");
        }
    }

    //Esto fuera del while?
    //Punto A - El promedio de las alturas
    promedio = acumuladorAltura / i;

    //Muestro por alert el mensaje final
    mensaje = "Se han ingresado " + i + " jugadores y ";
    mensaje = mensaje + "el promedio de los mismos es de: " + promedio + "cm";
    mensaje = mensaje + ", la altura mas baja es de: " + alturaMasBaja + "cm y es de sexo: " + sexoAlturaMasBaja;
    mensaje = mensaje + ". Y la cantidad de mujeres que superan los 190 cm es de: " + contadorMujeres; 
    alert(mensaje);
}

//https://onlinegdb.com/qpTuI719P
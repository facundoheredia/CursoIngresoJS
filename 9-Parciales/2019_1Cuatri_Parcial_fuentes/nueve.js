/*
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio (entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
A) La cantidad de temperaturas pares.
B) El nombre del pais con menos habitantes
C) la cantidad de paises que superan los 40 grados.
D) el promedio de habitantes entre los paises ingresados
F) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/

function mostrar()
{
    //Declaro las variables
    var pais;
    var habitantes;
    var habitantesParseados;
    var temperatura;
    var temperaturaParseada;
    var continuar;
    var mensaje;
    var temperaturasPares;
    var habitantesMinimos;
    var paisHabitantesMinimos;
    var paisesTemperaturaMayoraCuarenta;
    var contadorHabitantesParseados;
    var acumuladorHabitantesParseados;
    var promedioHabitantes;
    var temperaturaMinima;
    var temperaturaMinimaPais;
    var flag;
    var resto;

    //Inicio las variables necesarias
    continuar = "si";
    flag = 0;

    //Bucle while para ingresar
    while (continuar == "si")
    {
        pais = prompt("Ingrese un pais");
        habitantes = prompt("Ingrese la cantidad de habitantes de " + pais + " por millon");
        habitantesParseados = parseInt(habitantes);

        while (isNaN(habitantesParseados) || (habitantesParseados < 1 || habitantesParseados > 7000))
        {
            habitantes = prompt("Ingrese la cantidad de habitantes de " + pais + " por millon entre 1 y 7000");
            habitantesParseados = parseInt(habitantes);   
        }

        temperatura = prompt("Ingrese la temperatura de " + pais + " con " + habitantesParseados + " millones de habitantes.");
        temperaturaParseada = parseInt(temperatura);

        while (isNaN(temperaturaParseada) || (temperaturaParseada < -50 || temperaturaParseada > 50))
        {
            temperatura = prompt("Ingrese una temperatura correcta para " + pais + " entre -50 y 50");
            temperaturaParseada = parseInt(temperatura);
        }

        //FLAG
        if (flag == 0)
        {
            temperaturasPares = 0;
            habitantesMinimos = 7000;
            paisesTemperaturaMayoraCuarenta = 0;
            contadorHabitantesParseados = 0;
            acumuladorHabitantesParseados = 0;
            temperaturaMinima = 50; 
        }

        //PUNTO A - Temperaturas pares
        resto = temperaturaParseada % 2;

        if (resto == 0)
        {
            temperaturasPares = temperaturasPares + 1;
        }

        //PUNTO B - Pais con menos habitantes
        if (habitantesParseados < habitantesMinimos)
        {
            habitantesMinimos = habitantesParseados;
            paisHabitantesMinimos = pais;
        }

        //PUNTO C - Temperatura mayor a 40
        if (temperaturaParseada > 40)
        {
            paisesTemperaturaMayoraCuarenta = paisesTemperaturaMayoraCuarenta + 1;
        }

        //PUNTO E - Temperatura minima y pais
        if (temperaturaParseada < temperaturaMinima)
        {
            temperaturaMinima = temperaturaParseada;
            temperaturaMinimaPais = pais;
        }

        contadorHabitantesParseados = contadorHabitantesParseados + 1;
        acumuladorHabitantesParseados = acumuladorHabitantesParseados + habitantesParseados;

        continuar = prompt("¿Quiere seguir ingresando otros paises?");

        while (continuar != "si" && continuar != "no") //Valido para que la respuesta sea solo si o no
        {
            continuar = prompt("Por favor responda si o no para ingresar o no mas paises","si o no");
        }
    }

    //PUNTO D - Promedio habitanes
    promedioHabitantes = acumuladorHabitantesParseados / contadorHabitantesParseados;

    //ARMADO DE MENSAJES
    //PUNTO A - Temperaturas pares
    mensaje = "La cantidad de temperaturas pares es de: " + temperaturasPares + ". <br>";
    //PUNTO B - Pais con menos habitantes
    mensaje = mensaje + "El pais con menos habitantes es: " + paisHabitantesMinimos + " con " + habitantesMinimos + " millones. <br>";
    //PUNTO C - Temperatura mayor a 40
    mensaje = mensaje + "La cantidad de paises con temperatura mayor a 40° es de: " + paisesTemperaturaMayoraCuarenta + ". <br>";
    //PUNTO D - Promedio habitantes
    mensaje = mensaje + "El promedio de habitantes de los paises ingresados es de: " + promedioHabitantes + " millones. <br>";
    //PUNTO E - Temperatura minima y pais
    mensaje = mensaje + "Y el pais con menor temperatura es " + temperaturaMinimaPais + " con una temperatura de " + temperaturaMinima + "°C. <br>";

    //MENSAJE FINAL
    document.write(mensaje);
}

//https://onlinegdb.com/FXS_MXE2f
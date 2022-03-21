/*
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/

function mostrar()
{
    //variables
    var notas;
    var contador;
    var sexo;
    var mensaje;
    var acumuladorNotas;
    var promedioNotas;
    var notaMasBaja;
    var notaMasBajaSexo;
    var acumuladorNotasMayorSeisMasculino;
    var flag;

    contador = 0;
    flag = 0;

    while (contador < 5)
    {
        notas = prompt("Ingrese la nota del alumno");
        notas = parseInt(notas);
        while (isNaN(notas) && notas < 0 || notas > 10)
        {
            notas = prompt("ERROR! Ingrese la nota del alumno entre 0 y 10");
            notas = parseInt(notas);
        }

        sexo = prompt("Ingrese el sexo del alumno con la nota " + notas);
        while(sexo != "f" && sexo != "m")
        {
            sexo = prompt("ERROR! Ingrese el sexo (f o m) del alumno con la nota " + notas);
        }

        if (flag == 0)
        {
            acumuladorNotas = 0;
            notaMasBaja = notas;
            notaMasBajaSexo = sexo;
            acumuladorNotasMayorSeisMasculino = 0;
            flag = 1;
        }

        if (notas < notaMasBaja)
        {
            notaMasBaja = notas;
            notaMasBajaSexo = sexo;
        }

        if (sexo == "m" && notas >= 6)
        {
            acumuladorNotasMayorSeisMasculino = acumuladorNotasMayorSeisMasculino + 1;
        }

        acumuladorNotas = acumuladorNotas + notas;
        contador = contador + 1;
    }

    //PROMEDIO
    promedioNotas = acumuladorNotas / contador;

    //MENSAJE
    //PUNTO A
    mensaje = "A) El promedio de las notas totales es de " + promedioNotas + "\n";
    //PUNTO B
    mensaje = mensaje + "B) La nota mas baja es de " + notaMasBaja + " y pertenece al alumno de sexo " + sexo + "\n";
    //PUNTO C
    mensaje = mensaje + "C) La cantidad de varones con nota mayor a 6 es de " + acumuladorNotasMayorSeisMasculino;

    alert(mensaje);
}

//9 min 42 seg

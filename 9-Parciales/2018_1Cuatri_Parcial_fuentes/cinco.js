/*
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
*/

function mostrar()
{
    //Variables
    var planeta;

    planeta = prompt("ingrse un planeta");

    switch (planeta)
    {
        case "mercurio":
        case "venus":
            alert("aca hace mas calor");
        break;

        case "tierra":
            alert("aca vivimos");
        break;

        case "marte":
        case "jupiter":
        case "saturno":
        case "neptuno":
        case "urano":
            alert("aca hace mas frio");
        break;

        default:
            alert("No es un planeta valido");
        break;
    }

} // 2 min 34 seg

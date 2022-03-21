/*
Mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".
*/

function mostrar()
{
    //Declaro las VARIABLES
    var nombre;
    var localidad;

    //obtengo los datos ingresados por el Usuario
    nombre = document.getElementById("elNombre").value;
    localidad = document.getElementById("laLocalidad").value;

    //Muestro por alert el mensaje con los datos ingresados por el Usuario
    alert("Usted es " + nombre + " y vive en la localidad de " + localidad);
}

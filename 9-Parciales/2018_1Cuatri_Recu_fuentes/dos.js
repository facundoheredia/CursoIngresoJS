/*
Mostrar * en un solo alert * el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".
*/

function mostrar()
{
    //Declaro las variables
    var nombre;
    var localidad;

    //Obtengo los valores ingresados por el usuario
    nombre = document.getElementById("elNombre").value;
    localidad = document.getElementById("laLocalidad").value;

    //Muestro el mensaje con los datos ingresados
    alert("Usted es " + nombre + " y vive en la localidad de " + localidad);
}

// 2 min 44 seg
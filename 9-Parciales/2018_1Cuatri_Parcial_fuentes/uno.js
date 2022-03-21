
/*Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.*/

function mostrar()
{
    //Declaro las VARIABLES
    var ancho;
    var largo;
    var perimetro;

    //Obtengo los datos por PROMPT y los guardo en las VARIABLES
    ancho = prompt("Por favor ingrese el ancho del rectangulo", "Ancho");
    largo = prompt("Por favor ingrese el ancho del rectangulo", "Largo");

    //Parseo con PARSEFLOAT los valores obtenidos en las VARIABLES asi tengo los numeros decimales
    ancho = parseFloat(ancho);
    largo = parseFloat(largo);

    //Calculo el perimetro
    perimetro = ancho * largo;

    //Muestro el resultado obtenido por ALERT con el mensaje " "
    alert("El perimetro del rectangulo es: " + perimetro);
}

//Tiempo desde leer enunciado, terminar el algoritmo y probarlo 3 min 38 seg

/*
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.
*/

function mostrar()
{
    //Declaro las variables
    var ancho;
    var anchoParseado;
    var largo;
    var largoparseado;
    var perimetro;

    //Pido los valores al usuario
    ancho = prompt("Ingrese el ancho del rectangulo","Ancho");
    largo = prompt("Ingrese el largo del rectangulo","Largo");

    //Parseo los valores ingresados
    anchoParseado = parseInt(ancho);
    largoparseado = parseInt(largo);

    //Calculo el perimetro
    perimetro = anchoParseado * 2 + largoparseado * 2;

    //Muestro el perimetro por alert
    alert("El perimetro del rectangulo es de: " + perimetro);

}

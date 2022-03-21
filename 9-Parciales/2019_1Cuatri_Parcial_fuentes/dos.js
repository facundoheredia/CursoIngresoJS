/*
A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
*/

function mostrar()
{
  //Declaro las VARIABLES
  var primernombre;
  var segundonombre;
  var primerpeso;
  var segundopeso;
  var pesototal;
  var pesopromedio;
  var mensaje;

  //Obtengo los datos por PROMPT que son ingresados por el usuario
  primernombre = prompt("Por favor ingrese su nombre","Su nombre");
  primerpeso = prompt("Por favor " + primernombre + " ingrese su peso", "Su peso");
  segundonombre = prompt("Por favor ingrese su nombre", "Su nombre");
  segundopeso = prompt ("Por favor " + segundonombre + " ingrese su peso", "Su peso");

  //Parceo los valores de las VARIABLES de peso para que pasen a NUMBER y con PARSEFLOAT por si el usuario ingreso un numero decimal y no entero
  primerpeso = parseFloat(primerpeso);
  segundopeso = parseFloat(segundopeso);

  //Calculo los kilos totales
  pesototal = primerpeso + segundopeso;

  //Calculo el promedio de kilos totales
  pesopromedio = pesototal / 2;

  //Hago TOFIXED para solo quedarme con 2 decimales por si agregan 3 numeros mas atras de la coma... No se si es necesario el TOFIXED
  pesototal = pesototal.toFixed(2);
  pesopromedio = pesopromedio.toFixed(2);

  //Variable para mensaje
  mensaje = "Ustedes se llaman " + primernombre + " y " + segundonombre;
  mensaje = mensaje + ", pesan " + primerpeso + " Kg y " + segundopeso + " Kg respectivamente,";
  mensaje = mensaje + " que sumados son " + pesototal + " Kg";
  mensaje = mensaje + " y el promedio de peso es de: " + pesopromedio + " Kg" 
    
  //Muestro por ALERT el mensaje " " con los nombres, peso de cada uno, la suma de los pesos y el promedio de los mismos
  alert(mensaje);
}

//https://onlinegdb.com/iJjXt-6PCB
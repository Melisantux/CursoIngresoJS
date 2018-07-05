/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);
    var perimetro;
    perimetro= ((largo * 2) + (ancho * 2)) * 3;
    alert("Se necesitarán " + perimetro + " metros de alambre.");
}
function Circulo () 
{
	var pi;
    pi= Math.PI;
    var radio;
    radio= parseInt(document.getElementById("Radio").value);
    perimetro= 2 * pi * radio;
    alert("Se necesitarán " + perimetro + " metros de alambre");
}
function Materiales () 
{
    var largo;
    var ancho;
	var cemento;
    var cal;
    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);
    var metrocuadrado;
    metrocuadrado= largo * ancho;
    cal= metrocuadrado * 3;
    cemento= metrocuadrado * 2;
    alert("Se necesitarán " + cemento + " bolsas de cemento " + "y " + cal + " de cal.");
}
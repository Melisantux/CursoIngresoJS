/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
    importe= parseInt(document.getElementById("importe").value);
    var descuento;
    descuento= importe * 25 / 100;
    var resultado;
    resultado= importe - descuento;
    document.getElementById("resultado").value=resultado;
}

/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var producto1;
    var producto2;
    var producto3;
    producto1=parseInt(document.getElementById("PrecioUno").value);
    producto2=parseInt(document.getElementById("PrecioDos").value);
    producto3=parseInt(document.getElementById("PrecioTres").value);
    var suma;
    suma= producto1 + producto2 + producto3;
    alert("El total es " + suma);
}
function Promedio () 
{
	producto1=parseInt(document.getElementById("PrecioUno").value);
    producto2=parseInt(document.getElementById("PrecioDos").value);
    producto3=parseInt(document.getElementById("PrecioTres").value);
    var promedio;
    promedio= (producto1 + producto2 + producto3) / 3;
    alert("El precio promedio es " + promedio);
}
function PrecioFinal () 
{
	producto1=parseInt(document.getElementById("PrecioUno").value);
    producto2=parseInt(document.getElementById("PrecioDos").value);
    producto3=parseInt(document.getElementById("PrecioTres").value);
    var iva;
    iva= (producto1 + producto2 + producto3) *21 / 100;
    var precioFinal;
    precioFinal= (producto1 + producto2 + producto3) + iva;
    alert(precioFinal);
}
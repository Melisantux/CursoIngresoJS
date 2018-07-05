/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaF;
    var temperaturaC;
    temperaturaF=parseInt(document.getElementById("Temperatura").value);
    temperaturaC= (temperaturaF - 32) /1.8;
    alert(temperaturaF + " Fahrenheit son " + temperaturaC + " centígrados");
}

function CentigradosFahrenheit () 
{
    var temperaturaC;
    var temperaturaF;
	temperaturaC=parseInt(document.getElementById("Temperatura").value);
    temperaturaF= (temperaturaC * 1.8) + 32;
    alert(temperaturaC + " centígrados son " + temperaturaF + " Fahrenheit");
}

/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
    numeroUno=parseInt(document.getElementById("numeroUno").value);
    var numeroDos;
    numeroDos=parseInt(document.getElementById("numeroDos").value);
    var resultado;
    resultado= numeroUno + numeroDos;
    alert("La suma es " + resultado);
}

function restar()
{
	var numeroUno;
    numeroUno=parseInt(document.getElementById("numeroUno").value);
    var numeroDos;
    numeroDos=parseInt(document.getElementById("numeroDos").value);
    var resultado;
    resultado= numeroUno - numeroDos;
    alert("La resta es " + resultado);
}

function multiplicar()
{ 
	var numeroUno;
    numeroUno=parseInt(document.getElementById("numeroUno").value);
    var numeroDos;
    numeroDos=parseInt(document.getElementById("numeroDos").value);
    var resultado;
    resultado= numeroUno * numeroDos;
    alert("La multiplicación es " + resultado);
}

function dividir()
{
	var numeroUno;
    numeroUno=parseInt(document.getElementById("numeroUno").value);
    var numeroDos;
    numeroDos=parseInt(document.getElementById("numeroDos").value);
    var resultado;
    resultado= numeroUno / numeroDos;
    alert("La división es " + resultado);
}


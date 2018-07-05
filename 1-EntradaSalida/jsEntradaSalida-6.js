/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var primerNumero=parseInt(document.getElementById("numeroUno").value);
    var segundoNumero=parseInt(document.getElementById("numeroDos").value);
    var resultado;
    resultado = primerNumero + segundoNumero;
    alert("La suma es " + resultado);
}


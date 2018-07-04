/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    /* Nombre */
    var nombre=document.getElementById("elNombre").value;

    /* Edad */
    var edad=document.getElementById("laEdad").value;

    /* Datos concatenados */
    var resultado;
    resultado= "Usted se llama" + " " + nombre + " " + "y tiene" + " " + edad + " " + "años.";
    alert(resultado);
}


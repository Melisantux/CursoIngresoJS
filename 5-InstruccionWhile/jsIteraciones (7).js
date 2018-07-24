function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta="si";
	while (respuesta=="si") {
		contador++;
		numero=parseInt(prompt("Ingrese un número a sumar."));
		acumulador= acumulador + numero;
		respuesta=prompt("¿Quiere seguir sumando?");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
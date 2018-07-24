function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	while (contador <5) {
		contador++; 
		numero=parseInt(prompt("Ingrese un número a sumar"));
		acumulador= acumulador + numero;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
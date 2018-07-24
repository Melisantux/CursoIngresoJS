function mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	var bandera=true;
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=parseInt(prompt("Ingrese un número."));
		if (bandera) {
			bandera=false;
			maximo= numero;
			minimo= numero;
		} else {
			if(numero>maximo) {
				maximo=numero;
			} else {
				minimo=numero;
			}
		}
		respuesta=prompt("¿Quiere continuar?"); 
	
	}
	document.getElementById("maximo").value= maximo;
	document.getElementById("minimo").value=minimo;




}//FIN DE LA FUNCIÓN
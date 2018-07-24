function mostrar()
{

	var contador=0;
	var numero, diferencia, promedioN, promedioP, mensaje;
	var positivos=0;
	var negativos=0;
	var contadorP=0;
	var contadorN=0;
	var contador0=0;
	var contadorPar=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		contador++;
		numero=parseInt(prompt("Ingrese un número."));
		while (isNaN(numero)) {
			numero=parseInt(prompt("Ingrese un numero."));
		}
		if (numero==0) {
			contador0++;
		} else {
			if (numero >0) {
				contadorP++;
				positivos= positivos + numero;
			} else {
				contadorN++;
				negativos= negativos + numero;
			}
		}
		if (numero%2 == 0) {
			contadorPar++;
		}
	respuesta=prompt("¿Quiere ingresar otro número?");
	}
	promedioN= negativos / contadorN;
	promedioP= positivos / contadorP;
	diferencia= positivos - negativos;
	if (diferencia > 0) {
		mensaje= "Hay más números positivos " + diferencia;
	} else {
		if (diferencia = 0) {
			mensaje= "Hay la misma cantidad de números positivos y negativos.";
		} else {
			mensaje= "Hay más números negativos " + (diferencia * (-1));
		}
	}
	document.write("Suma de los negativos: " + negativos + "<br>" +  " Suma de los positivos: " + positivos +
	"<br>" + " Cantidad de positivos: "+ contadorP + "<br>" +  " Cantidad de negativos: " + contadorN + 
	"<br>" + "Cantidad de ceros: " + contador0 + "<br>" + " Cantidad de números pares: " + contadorPar+ 
	"<br>" + " Promedio de positivos: " + promedioP + "<br>" + " Promedios de negativos: " + promedioN + 
	"<br>" + " Diferencia entre positivos y negativos: " + mensaje);


}//FIN DE LA FUNCIÓN
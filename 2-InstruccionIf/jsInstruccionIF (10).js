function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota = parseInt(Math.random()*(11-1)+1);
	if (nota >= 9) {
		alert(nota + " EXCELENTE.");
	} else {
		if (nota < 4) {
			alert(nota + " Vamos, la proxima se puede.")
		} else {
			alert(nota + " APROBÓ");
		}
	}
	

}//FIN DE LA FUNCIÓN
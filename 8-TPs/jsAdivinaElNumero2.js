/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
contadorIntentos= 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto= Math.floor(Math.random () * (101 - 1) + 1);
	contadorIntentos=0;
	console.log(numeroSecreto);
	

}

function verificar()
{
	var numero;
	numero= parseInt(document.getElementById("numero").value);
	contadorIntentos= contadorIntentos + 1;
	if (numero == numeroSecreto && contadorIntentos == 1) {
		alert("Usted es un psíquico.");
	} else {
		if (numero == numeroSecreto && contadorIntentos == 2) {
			alert("Excelente percepción.");
		} else {
			if (numero == numeroSecreto && contadorIntentos == 3) {
				alert("Esto es suerte.");
			} else {
				if (numero == numeroSecreto && contadorIntentos == 4) {
					alert("Excelente técnica.");
				} else {
					if (numero == numeroSecreto && contadorIntentos == 5) {
						alert("Usted está en la media.");
					} else {
						if (numero == numeroSecreto && (contadorIntentos >= 6 && contadorIntentos <= 10)) {
							alert("Falta técnica.");
						} else {
							if (numero == numeroSecreto && contadorIntentos >10) {
								alert("Afortunado en el amor.");
							}
						
						}
							
						}
					}
				}
			}
		}
	}
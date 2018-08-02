function mostrar()
{
    var notas, sexo, alumnos, promedio, minimo, sexoMinimo;
    contador=0;
    acumulador=0;
    bandera=true;
    contadorM=0;
    while (contador < 5) {
        contador++;
        notas= prompt("Ingrese una nota.");
        notas= parseInt(notas);
        acumulador= acumulador + notas;
    while (notas < 0 || notas > 10 || isNaN(notas)) {
        notas = prompt("Error. Ingrese una nota entre 0 y 10.");
        notas= parseInt(notas);
        acumulador= acumulador + notas;
    }
        sexo = prompt("Ingrese el sexo");
        sexo= sexo.toLocaleLowerCase();
    while (sexo != "f" && sexo != "m") {
        sexo= prompt("Error, indique el sexo utilizando m para masculino y f para femenino.");
        sexo= sexo.toLocaleLowerCase();
    }
    if (sexo=="m" && notas >= 6) {
        contadorM++;
    }
    if (bandera) {
        bandera=false;
        minimo=notas;
    } else {
        if (notas < minimo) {
            minimo=notas;
            sexoMinimo= sexo;
        }
    }
     switch(sexo) {
        case "f":
            sexo= "femenino";
        break;
        default:
            sexo="masculino";
    }
    }

    promedio = acumulador/contador;
    promedio= parseInt(promedio);
    alert("El promedio de las notas es: " + promedio);
    alert("La nota más baja fue igual a " + minimo + " y fue de un alumno de sexo " + sexo);
    alert(contadorM + " varones obtuvieron una nota mayor o igual a 6.")
}
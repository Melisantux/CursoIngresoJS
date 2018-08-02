function mostrar()
{
    var nota, edad, sexo, promedio, minimo, sexoMinimo, edadMinima, sexoEdad, notaEdad;
    var contadorM=0;
    var acumulador=0;
    var contador=0;
    var bandera1= true;
    var bandera2=true;
    while(contador < 5) {
        contador++;
        nota= prompt("Ingrese una nota.");
        nota= parseInt(nota);
        while(nota < 0 || nota > 10 || isNaN(nota)) {
            nota= prompt("Error. Ingrese una nota entre 0 y 10");
            nota = parseInt(nota);
        }
        edad= prompt("Ingrese la edad.");
        edad=parseInt(edad);
        while (isNaN(edad)) {
            edad= prompt("Ingrese una edad válida");
            edad= parseInt(edad);
        }
        sexo= prompt("Ingrese el sexo.");
        sexo= sexo.toLocaleLowerCase();
        while(sexo != "f" && sexo != "m"){
            sexo= prompt("Error. Ingrese el sexo utilizando f para femeino y m para masculino.");
            sexo= sexo.toLocaleLowerCase();
        }
        acumulador= acumulador + nota;
        if (bandera1) {
            bandera1=false;
            minimo= nota;
        }
        if (nota < minimo) {
            minimo = nota;
            sexoMinimo= sexo;
        }
        if (sexo == "m" && edad > 18 && nota >=6) {
            contadorM++;
        }
        if (edad < edadMinima) {
            notaEdad=nota;
            sexoEdad=sexo;
        }

    }
    promedio= acumulador/contador;
    promedio= parseInt(promedio);
    alert("El promedio total de las notas es " + promedio);
    alert("La nota más baja fue " + minimo + " y fue de un alumno de sexo " + sexoMinimo);
    alert(contadorM + " varones mayores a 18 años, tuvieron una nota mayor o igual a 6.")
    alert("El alumno más joven tuvo una nota de " + notaEdad + " y es de sexo " + sexoEdad);
}

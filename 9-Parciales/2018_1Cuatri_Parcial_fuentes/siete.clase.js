function mostrar()
{
    var nombre, sexo, edad, contador, contadorM, contadorF,mayores, menores, mMayores, minimo, maximo, bandera, 
    promedio, nombreMayor, nombreMenor, sexoMayorM, nombreMayorF, acumuladorM, acumuladorF, promedioF, promedioM,
    nombreMaximo, nombreMinimo, sexoMaximo, nombreMaximoF;
    contador = 0;
    contadorF=0;
    contadorM=0;
    mayores=0;
    menores=0;
    mMayores=0;
    bandera=true;
    acumulador=0;
    acumuladorM=0;
    acumuladorF=0;
    while (contador < 4)
    {
        contador++;
        nombre= prompt("Ingrese su nombre.");
        sexo = prompt("Indique su sexo utilizando M para masculino ó F para femenino.");
        sexo= sexo.toLocaleUpperCase();
    while(sexo != "F" && sexo != "M")
    {
        sexo=prompt("Error, indique su sexo utlizando M para masculino ó F para femenino");
        sexo= sexo.toLocaleUpperCase();
    }
        edad= prompt("Ingrese su edad.")
        edad = parseInt(edad);
    while (edad > 100 || edad < 1 || isNaN(edad))
    {
        edad = prompt("Ingrese una edad válida");
        edad= parseInt(edad);
    }
    if (sexo=="M" && edad >=18) {
        contadorM++;
        mayores++;
        mMayores++;
        acumuladorM= acumuladorM + edad;
    } else {
        if (sexo== "M") {
            contadorM++;
            menores++;
            acumuladorM= acumuladorM + edad;
        } else {
            if (edad >=18) {
                contadorF++;
                mayores++;
                acumuladorF= acumuladorF + edad;
            } else {
                contadorF++;
                menores++;
                acumuladorF= acumuladorF + edad;
            }
        }
    }
    if (bandera) {
        bandera=false;
        maximo=edad;
        minimo=edad;
    } else {
        if(edad>maximo) {
            maximo=edad;
            nombreMaximo=nombre;
            sexoMaximo= sexo;
            console.log(sexoMaximo, nombreMaximo);
        } else {
            minimo=edad;
        }
    }
    promedioF= (acumuladorF/contadorF);
    promedioF= parseInt(promedioF);
    promedioM= (acumuladorM/contadorM);
    promedioM= parseInt(promedioM);
    promedio=(acumuladorM + acumuladorF ) / contador;
    promedio= parseInt(promedio);
    }
    document.write("Cantidad de mujeres= " + contadorF + "<br>" + "Cantidad de hombres= " + contadorM + "<br>" +
    "Cantidad de mayores de edad= " + mayores + "<br>" + "Cantidad de menores de edad=" + menores + "<br>" +
    "Cantidad de hombres mayores de edad= " + mMayores + "<br>" + "La edad más baja= " + minimo + "<br>" +
    "La edad más alta= " + maximo + "<br>");
    document.write("Promedio de edad de las mujeres= " + promedioF + "<br>" + "Promedio de edad de hombres= " + 
    promedioM + "<br>" + "Promedio de edad total= " + promedio);
}
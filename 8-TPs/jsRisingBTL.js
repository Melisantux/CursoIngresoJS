/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad, sexo, estadoCivil, sueldo, legajo, nacionalidad;
    edad = parseInt(prompt("Ingrese su edad."));
    while (edad < 18 || edad > 90) {
        edad=prompt("Error, ingrese edad entre 18 y 90 años");
    }
    document.getElementById("Edad").value= edad;
    sexo= prompt("Indique su sexo utilizando M para masculino y F para femenino.")
    while (sexo != "M" && sexo != "F")
        {
            sexo=prompt("Error, indique su sexo usando M ó F");
        }
    switch(sexo)
    {
        case "F":
            sexo="Femenino";
        break;
        case "M":
            sexo="Masculino";
        break;
    }
    document.getElementById("Sexo").value=sexo;
    estadoCivil=prompt("Ingrese su estado civil utilizando 1 para soltero, 2 para casado, 3 para divorciado y 4 para viudo.");
    while (estadoCivil < 1 || estadoCivil > 4)
    {
        estadoCivil=prompt("Error, por favor ingrese su estado civil utilizando 1 para soltero, 2 para casado, 3 para divorciado y 4 para viudo.");
    }
    switch(estadoCivil)
    {
        case "1":
            estadoCivil= "Soltero";
        break;
        case "2":
            estadoCivil= "Casado";
        break;
        case "3":
            estadoCivil= "Divorciado";
        break;
        case "4":
            estadoCivil= "Viudo";
        break;
    }
    document.getElementById("EstadoCivil").value=estadoCivil;
    sueldo=parseInt(prompt("Ingrese su sueldo bruto"));
    while (sueldo < 8000)
    {
        sueldo=parseInt(prompt("Por favor, ingrese un sueldo bruto mayor a $8000"));
    }
    document.getElementById("Sueldo").value="$" + sueldo;
    legajo=parseInt(prompt("Ingrese su número de legajo"));
    while(legajo < 1000 || legajo >9999)
    {
        legajo= parseInt(prompt("Ingrese su número de legajo de cuatro cifras y sin ceros a la izquierda"));
    }
    document.getElementById("Legajo").value="#" + legajo;
    nacionalidad=prompt("Ingrese su nacionalidad utilizando A para argentinos, E para extranjeros y N para nacionalizados");
    while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
    {
        nacionalidad=prompt("Error. Por favor, ingrese su nacionalidad utilizando A para argentinos, E para extranjeros y N para nacionalizados");
    }
    switch(nacionalidad)
    {
        case "A":
            nacionalidad= "Argentino";
        break;
        case "E":
            nacionalidad= "Extranjero";
        break;
        case "N":
            nacionalidad= "Nacionalizado";
        break;
    }
    document.getElementById("Nacionalidad").value=nacionalidad;

    }

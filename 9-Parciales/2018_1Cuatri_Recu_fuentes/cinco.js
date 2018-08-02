function mostrar()
{
    var dia;
    dia = prompt("Ingrese un día de la semana");
    dia = dia.toLocaleLowerCase();
    switch(dia)
    {
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            alert("A trabajar.");
        break;
        case "sabado":
        case "domingo":
            alert("Buen finde.");
        break;
        default:
            alert("Error. Ingrese un día válido.");
    }
}

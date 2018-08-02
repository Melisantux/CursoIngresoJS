function mostrar()
{
    var planeta;
    planeta=prompt("Ingrese el nombre de un planeta.");
    planeta= planeta.toLocaleLowerCase();
    switch(planeta)
    {
        case "tierra":
            alert("Acá vivimos.");
        break;
        case "mercurio":
        case "venus":
            alert("Acá hace más calor");
        break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            alert("Acá hace más frío.");
        break;
        default:
            alert("Ingrese un nombre de planeta válido");
    }
}

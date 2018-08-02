
function mostrar()
{

    var ancho, largo, perimetro;
    ancho= prompt("Ingrese el ancho del rectángulo (en metros).");
    ancho= parseInt(ancho);
    largo= prompt("Ingrese el largo del rectángulo (en metros).");
    largo= parseInt(largo);
    perimetro= (ancho * 2) + (largo * 2);
    alert("El perímetro del rectángulo es " + perimetro + " metros."); 

}

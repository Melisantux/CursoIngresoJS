function mostrar()
{
    var nombre, paginas, ventas, tema, respuesta;
    var contador=0;
    var contadorPares=0;
    var contadorImpares=0;
    while (contador >= 0) {
        nombre= prompt("Ingrese el nombre del libro");
        paginas= prompt("Ingrese la cantidad de páginas.");
        paginas=parseInt(paginas);
        while(isNaN(paginas)) {
            paginas = prompt("Error. Ingrese la cantidad de páginas.");
            paginas = parseInt(paginas);
        }
        ventas= prompt("Ingrese la cantidad de ventas.");
        ventas= parseInt(ventas);
        while(ventas < 0) {
            ventas= prompt("Error. Ingrese la cantidad de ventas.");
            ventas = parseInt(ventas);
        }
        tema= prompt("Ingrese el tema del libro.");
        tema=tema.toLocaleLowerCase();
        while(tema!= "programacion" && tema!= "robotica" && tema!= "patrones" && tema!= "base de datos") {
            tema=prompt("Error. Ingrese un tema válido.");
            tema=tema.toLocaleLowerCase();
        }
        respuesta= prompt("¿Quiere continuar agregando libros?");
        if (respuesta != "si") {
            break;
        }
        if (paginas%2==0) {
            contadorPares++;
        } else {
            contadorImpares++;
        }

    }
}

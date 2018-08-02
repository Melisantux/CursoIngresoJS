function mostrar()
{
    var precio, descuento, precioFinal;
    precio= prompt("Ingrese el precio del producto.");
    precio= parseInt(precio);
    descuento= prompt("Ingrese el porcentaje del descuento.");
    descuento= parseInt(descuento);
    precioFinal= precio - ((descuento * precio) / 100);
    document.getElementById("elPrecioFinal").value= precioFinal;
}

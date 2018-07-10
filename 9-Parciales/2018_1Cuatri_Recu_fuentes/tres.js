function mostrar()
{
    var precio;
    precio=prompt("Ingrese el precio");
    precio=parseInt(precio);
    var descuento;
    descuento=prompt("Ingrese el porcentaje del descuento");
    descuento=parseInt(descuento);
    var descuento$;
    descuento$= (precio * descuento)/ 100;
    var preciodescuento;
    preciodescuento= precio - descuento$;
    var iva;
    iva = (preciodescuento * 21) / 100;
    alert("El descuento es de $" + descuento$ + ", por lo que el precio con descuento sería $" + preciodescuento + ", más un IVA de $" + iva);
    var preciofinal;
    preciofinal= (precio - descuento$) + iva;
    document.getElementById("elPrecioFinal").value= "El precio final es $" + preciofinal;

}

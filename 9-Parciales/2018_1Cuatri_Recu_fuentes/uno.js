
function mostrar()
{
    var base;
    base=prompt("Ingrese la base");
    base = parseInt(base);
    var altura;
    altura=prompt("Ingrese la altura");
    altura=parseInt(altura);
    var perimetro;
    perimetro= base * 3;
    var area;
    area= (base * altura) / 2;
    alert("El perímetro del triángulo es " + perimetro + " y el área " + area);

}

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
var marca, descuento50, descuento40, descuento30, descuento25, descuento20,
    descuento15, descuento10, descuento5, precioIngresos, precioFinal, cantidad, precio, ingresosBrutos;
    marca = document.getElementById("Marca").value;
    cantidad= parseInt(document.getElementById("Cantidad").value);
    if (cantidad >=6) {
        precio= cantidad * 35;
        descuento50= (precio * 50) / 100;
        precioFinal= precio - descuento50;
        document.getElementById("precioDescuento").value= precioFinal;
    } else {
        if (cantidad == 5 && marca == "ArgentinaLuz") {
            precio = cantidad * 35;
            descuento40= (precio * 40) / 100;
            precioFinal= precio - descuento40;
            document.getElementById("precioDescuento").value= precioFinal;
        } else {
            if (cantidad == 5 && marca != "ArgentinaLuz") {
                precio= cantidad * 35;
                descuento30= (precio * 30) / 100;
                precioFinal= precio - descuento30;
                document.getElementById("precioDescuento").value= precioFinal;
            } else {
                if (cantidad == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")) {
                    precio= cantidad * 35;
                    descuento25= (precio * 25) / 100;
                    precioFinal= precio - descuento25;
                    document.getElementById("precioDescuento").value= precioFinal;
                } else {
                    if (cantidad == 4 && (marca != "ArgentinaLuz" && marca != "FelipeLamparas")) {
                        precio= cantidad * 35;
                        descuento20= (precio * 20) / 100;
                        precioFinal= precio - descuento20;
                        document.getElementById("precioDescuento").value= precioFinal;
                    } else {
                        if (cantidad == 3 && marca == "ArgentinaLuz") {
                            precio= cantidad * 35;
                            descuento15= (precio * 15) / 100;
                            precioFinal= precio - descuento15;
                            document.getElementById("precioDescuento").value= precioFinal;
                        } else {
                            if (cantidad == 3 && marca == "FelipeLamparas") {
                                precio= cantidad * 35;
                                descuento10= (precio * 10) / 100;
                                precioFinal= precio - descuento10;
                                document.getElementById("precioDescuento").value= precioFinal;
                            } else {
                                if (cantidad == 3 && (marca != "ArgentinaLuz" && marca != "FelipeLamparas" )) {
                                    precio= cantidad * 35;
                                    descuento5= (precio * 5) / 100;
                                    precioFinal= precio - descuento5;
                                    document.getElementById("precioDescuento").value= precioFinal;
                                }
                                }
                            }
                        }
                    }
                }
            }
        }
      if (precioFinal > 120) {
          ingresosBrutos= (precioFinal * 10) / 100;
          precioIngresos= precioFinal + ingresosBrutos;
          document.getElementById("precioDescuento").value= precioIngresos;
          alert("Ingresos brutos: usted pagó $" + ingresosBrutos + " de impuestos.")
        }  
    } 

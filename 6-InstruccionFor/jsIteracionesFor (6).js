function mostrar()
{
    var numero;
    var contadorPares=0;
    var numeroPar;
    numero=prompt("Ingrese un número");
    // validar
    numero=parseInt(numero);
    for (i=1; i <= numero; i++) {
        if (i%2 == 0) {
            numeroPar=i;
            console.log(numeroPar);
            contadorPares++;
            //console.log(contadorPares);
        }
    }


}//FIN DE LA FUNCIÓN
function mostrar()
{
    var numero1, numero2, suma, resta;
    numero1= prompt("Ingrese un número.");
    numero1=parseInt(numero1);
    numero2= prompt("Ingrese un número.");
    numero2=parseInt(numero2);
    suma= numero1 + numero2;
    if (numero1 == numero2) {
        alert("Los números ingresados son: " + numero1 + " y " + numero2);
    } else {
        if (numero1 > numero2) {
            resta= numero1 - numero2;
            alert("La resta es " + resta);
        } else {
            if (numero1 < numero2 && suma > 10) {
                alert("La suma es " + suma + " y supero el 10.");
            } else {
                alert("La suma es " + suma);
            }
        }
    }
}

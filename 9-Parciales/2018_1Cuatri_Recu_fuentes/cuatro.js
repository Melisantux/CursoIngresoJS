function mostrar()
{
    var numero1, numero2, division, suma;
    numero1= prompt("Ingrese un número.");
    numero1= parseInt(numero1);
    numero2= prompt("Ingrese un número.");
    numero2= parseInt(numero2);
    suma= numero1 + numero2;
    if (numero1 == numero2) {
        alert("Los numeros ingresados son " + numero1 + " y " + numero2);
    } else {
        if (numero1 > numero2) {
            division= numero1 / numero2;
            division= parseInt(division);
            alert("La división es igual a " + division);
        } else {
            if (numero1 < numero2 && suma < 50) {
                alert("La suma es " + suma + " y es menor a 50.");
            } else {
                alert("La suma es " + suma);
            }
        }
    }

}
